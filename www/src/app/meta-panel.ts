import './events';
import './mat-icon';

import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * Displays "meta" controls: icons for getting help and opening the settings
 * dialog.
 */
@customElement('meta-panel')
export class MetaPanel extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    a {
      cursor: pointer;
    }

    :host a {
      color: var(--text-color);
    }
  `;

  override render() {
    return html`
      <a @click=${this.openHelp} title="Help"
        ><mat-icon name="help"></mat-icon></a
      ><a @click=${this.openSettings} title="Settings"
        ><mat-icon name="settings"></mat-icon
      ></a>
    `;
  }

  private openHelp(): void {
    this.dispatchEvent(
      new CustomEvent('show-help', {
        bubbles: true,
        composed: true,
      })
    );
  }

  private openSettings(): void {
    this.dispatchEvent(
      new CustomEvent('show-settings', {
        bubbles: true,
        composed: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'meta-panel': MetaPanel;
  }
}
