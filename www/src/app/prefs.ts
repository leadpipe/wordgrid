import './events';
import {PrefsEventTarget} from './events';
import {Theme, ThemeOrDefault} from './types';

/**
 * The event target for prefs events.
 */
export const prefsTarget = new PrefsEventTarget();

/** Tracks the color scheme/theme used by this device by default. */
let systemTheme: Theme = 'light';

/** Returns the color scheme/theme used on this device by default. */
export function getCurrentSystemTheme(): Theme {
  return systemTheme;
}

let preferredTheme: ThemeOrDefault = 'default';
{
  const stored = window.localStorage.getItem('preferredTheme');
  switch (stored) {
    case 'dark':
    case 'light':
      preferredTheme = stored;
      break;
  }
}

export function getCurrentTheme(): Theme {
  return preferredTheme === 'default' ? systemTheme : preferredTheme;
}

export function getPreferredTheme(): ThemeOrDefault {
  return preferredTheme;
}

export function setPreferredTheme(theme: ThemeOrDefault) {
  if (theme !== preferredTheme) {
    const prev = getCurrentTheme();
    preferredTheme = theme;
    window.localStorage.setItem('preferredTheme', theme);
    dispatchThemeChange(prev);
  }
}

/**
 * If the current theme differs from the given previous one, dispatches a
 * 'current-theme' event to let the app know about the change.
 */
function dispatchThemeChange(prev: Theme) {
  const next = getCurrentTheme();
  if (next !== prev) {
    prefsTarget.dispatchEvent(new CustomEvent('current-theme', {detail: next}));
  }
}

const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
function handleDarkModeChange(evt: {matches: boolean}) {
  const prev = getCurrentTheme();
  systemTheme = evt.matches ? 'dark' : 'light';
  dispatchThemeChange(prev);
}
handleDarkModeChange(darkModeQuery);
darkModeQuery.addEventListener('change', handleDarkModeChange);

let showTimer = true;
{
  const stored = window.localStorage.getItem('showTimer');
  if (stored === 'false') {
    showTimer = false;
  }
}

export function getShowTimer(): boolean {
  return showTimer;
}

export function setShowTimer(flag: boolean) {
  showTimer = flag;
  window.localStorage.setItem('showTimer', String(flag));
  prefsTarget.dispatchEvent(new CustomEvent('show-timer', {detail: flag}));
}
