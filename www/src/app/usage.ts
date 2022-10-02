let lastUsedTimestamp = Date.now();

export function noteUsage() {
  lastUsedTimestamp = Date.now();
}

/**
 * Returns the last time the app was used, plus the given number of milliseconds.
 * @param offsetMs The number of milliseconds to add to the last used timestamp.
 * @returns The last time the app was used, plus the given offset.
 */
export function lastUsedPlus(offsetMs: number): number {
  return lastUsedTimestamp + offsetMs ;
}
