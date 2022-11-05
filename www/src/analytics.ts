/**
 * All the kinds of events we log to Google Analytics.
 */
export enum EventType {
  // The person did something.
  ACTION = 'wg_action',

  // The computer did something.
  SYSTEM = 'wg_system',
}

/**
 * Extra information we might include with an event.
 */
export declare interface EventParams {
  category?: string,
  detail?: string,
  elapsedMs?: number,
}

/**
 * Logs something that happened to Google Analytics.
 * @param event What happened.
 */
export function logEvent(event: EventType, params: EventParams = {}) {
  gtag('event', event, params);
}
