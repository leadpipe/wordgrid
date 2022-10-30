import './events';
import {PrefsEventTarget} from './events';
import {Theme, ThemeOrAuto} from './types';

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

let preferredTheme: ThemeOrAuto = 'auto';
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
  return preferredTheme === 'auto' ? systemTheme : preferredTheme;
}

export function getPreferredTheme(): ThemeOrAuto {
  return preferredTheme;
}

export function setPreferredTheme(theme: ThemeOrAuto) {
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

let monikers: string[] = [];
{
  const stored = window.localStorage.getItem('monikers');
  if (stored) {
    try {
      const obj = JSON.parse(stored);
      if (obj instanceof Array) {
        monikers = obj;
      }
    } catch (e: unknown) {
      console.log('Bad data in local storage', stored, e);
    }
  }
}

export function getMonikers(): string[] {
  return monikers.slice();
}

export function useMoniker(moniker: string) {
  const mru = new Set([moniker]);
  for (const m of monikers) {
    mru.add(m);
    if (mru.size >= 10) break;
  }
  monikers = [...mru];
  window.localStorage.setItem('monikers', JSON.stringify(monikers));
}
