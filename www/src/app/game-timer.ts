import './events';
import './mat-icon';

import {css, html, LitElement, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {GameState} from '../game/game-state';
import {getShowTimer, setShowTimer} from './prefs';

/**
 * Displays the timer on the game page, and/or an icon for turning on or off the
 * timer.
 */
@customElement('game-timer')
export class GameTimer extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    a {
      cursor: pointer;
    }
  `;

  override render() {
    const {gameState} = this;
    if (!gameState) return '';
    if (!getShowTimer()) {
      return html`
        <a @click=${this.showTimer} title="Show timer">
          <mat-icon name="visibility"></mat-icon>
        </a>
      `;
    }
    return html`
      ${this.remainingTime()}<br />
      <a @click=${this.hideTimer} title="Hide timer">
        <mat-icon name="visibility_off"></mat-icon>
      </a>
    `;
  }

  @property() gameState: GameState | null = null;
  private timerRunning = false;

  protected override updated(_changedProperties: PropertyValues): void {
    const msRemaining = this.gameState?.msRemaining ?? 0;
    if (msRemaining > 0) {
      window.setTimeout(
        () => this.requestUpdate(),
        ((msRemaining - 1) % 1000) + 1
      );
      this.timerRunning = true;
    } else if (this.timerRunning) {
      this.timerRunning = false;
      this.dispatchEvent(
        new CustomEvent('timer-expired', {
          detail: getShowTimer(),
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  private remainingTime(): string {
    const msRemaining = this.gameState?.msRemaining ?? 0;
    const secRemaining = Math.ceil(msRemaining / 1000);
    const min = Math.floor(secRemaining / 60);
    const sec = secRemaining % 60;
    return `${min}:${String(sec).padStart(2, '0')}`;
  }

  private showTimer() {
    setShowTimer(true);
    this.requestUpdate();
  }

  private hideTimer() {
    setShowTimer(false);
    this.requestUpdate();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'game-timer': GameTimer;
  }
}
