import {html} from 'lit';
import * as wasm from '../../../crate/pkg/leadpipe_wordgrid';
import {Counts} from '../game/types';

export function renderCategory(category: wasm.WordCategory) {
  let result = wasm.WordCategory[category];
  if (result.startsWith('Level')) {
    result = 'Level ' + result.substring(5);
  }
  return result;
}

export function pluralize(noun: string, number: number) {
  return number === 1 ? noun : `${noun}s`;
}

export function renderCount(count: number, countingWhat: string) {
  return html`${count} ${pluralize(countingWhat, count)}`;
}

export function renderCounts(counts: Counts | undefined, countingWhat: string) {
  if (!counts) return '';
  return html`${counts.found} / ${counts.total}
  ${pluralize(countingWhat, counts.total)} —
  ${Math.round((counts.found / counts.total) * 100)}%`;
}

export function renderShortCounts(counts: Counts) {
  return `${counts.found}/${counts.total}`;
}

export function sleepMs(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
