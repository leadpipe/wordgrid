import {css, html, LitElement, PropertyValues} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import * as wasm from 'wordgrid-rust';
import {GameState} from '../game/game-state';
import {Theme} from './types';
import {renderCategory} from './utils';

@customElement('solution-word')
export class SolutionWord extends LitElement {
  static override styles = css`
    :host {
      display: inline;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
    }

    :host([theme='dark']) a[href] {
      color: lightblue;
    }

    .more {
      font-size: 80%;
    }
  `;

  override render() {
    const {category} = this;
    const points = GameState.scoreWord(this.word);
    return html`
      <a @click=${this.toggle}>${this.word}</a>
      ${this.open
        ? html`
            <span class="more">
              [${category ? `${renderCategory(category)} —` : ''}${points}
              point${points > 1 ? 's' : ''} —
              <a
                href="https://www.google.com/search?q=define+%22${this.word.toLowerCase()}%22"
                target="_blank"
                >look up</a
              >]
            </span>
          `
        : ''}
    `;
  }

  @property() word = '';
  @property({type: Number}) category: wasm.WordCategory | null = null;
  @property() theme: Theme = 'light';

  /** Set this true to force the element to toggle open. */
  @property({type: Boolean}) expand: boolean = false;

  @state() open = false;
  private timeoutId = 0;

  override shouldUpdate(changedProperties: PropertyValues<this>): boolean {
    if (changedProperties.has('expand') && this.expand !== this.open) {
      this.open = this.expand;
    }
    return true;
  }

  private toggle(_event?: Event) {
    this.open = !this.open;
    this.dispatchEvent(
      new CustomEvent('word-expanded', {
        detail: this.open ? this.word : '',
        bubbles: true,
        composed: true,
      })
    );
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
      this.timeoutId = 0;
    }
    if (this.open) {
      this.timeoutId = window.setTimeout(() => {
        if (this.open) {
          this.toggle();
        }
        this.timeoutId = 0;
      }, 2500);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'solution-word': SolutionWord;
  }
}
