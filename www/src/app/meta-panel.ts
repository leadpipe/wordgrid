import './events';
import './mat-icon';

import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * Displays "meta" controls: icons for getting help, filing a bug, or opening
 * the settings dialog.
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
      <a
        href="https://github.com/leadpipe/wordgrid/issues/new"
        target="_blank"
        title="File a bug report"
        ><mat-icon name="bug_report"></mat-icon></a
      ><a
        href="https://github.com/leadpipe/wordgrid/#readme"
        target="_blank"
        title="Help"
        ><mat-icon name="help"></mat-icon></a
      ><a @click=${this.openSettings} title="Settings"
        ><mat-icon name="settings"></mat-icon
      ></a>
    `;
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
