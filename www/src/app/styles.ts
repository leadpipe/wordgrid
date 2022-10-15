import {css} from 'lit';

export const LIGHT_THEME_TEXT = css`#444`;
export const DARK_THEME_TEXT = css`#ccc`;
export const LIGHT_THEME_BACKGROUND = css`white`;
export const DARK_THEME_BACKGROUND = css`darkslategray`;

export const LIGHT_BLUE = css`#aecbfa`;
export const LIGHT_BLUE_TRANSPARENT = css`
  ${LIGHT_BLUE}cc
`;
export const DARK_BLUE = css`#337`;
export const DARK_BLUE_TRANSPARENT = css`
  ${DARK_BLUE}c
`;

export const BOTH_THEMES_BORDER = css`#808080`;

export const HISTORY_PADDING_PX = 8;

/**
 * Include this in a component's styles, then attach class="icon-button" to
 * buttons to get the right styling for buttons containing <mat-icon>s.
 */
export const ICON_BUTTON_CLASS = css`
  .icon-button {
    color: inherit;
    background: inherit;
    border: inherit;
    padding: 0;
    cursor: pointer;
  }
`;

/**
 * Include this in a component's styles, then attach class="may-scroll" to get
 * the right styling for scrollbars.
 */
export const MAY_SCROLL_CLASS = css`
  :host(.may-scroll),
  .may-scroll {
    overflow: auto;
    /* for Firefox: */
    scrollbar-width: thin;
    scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color);
  }

  :host(.may-scroll)::-webkit-scrollbar,
  .may-scroll::-webkit-scrollbar {
    height: 4px;
    width: 8px;
  }

  :host(.may-scroll)::-webkit-scrollbar-thumb,
  .may-scroll::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-thumb-color);
    border-radius: 2px;
  }

  :host(.may-scroll)::-webkit-scrollbar-corner,
  .may-scroll::-webkit-scrollbar-corner {
    background-color: var(--scrollbar-track-color);
  }

  :host(.may-scroll)::-webkit-scrollbar-track,
  .may-scroll::-webkit-scrollbar-track {
    background-color: var(--scrollbar-track-color);
  }
`;
