export type RelativeTimeUnit = Intl.RelativeTimeFormatUnit

export type RelativeTimeFormatOptions = Intl.RelativeTimeFormatOptions

/**
 * Formats a relative time value into a localized string.
 *
 * @param value - The numeric value representing the amount of time (e.g., -3 for "3 days ago").
 * @param unit - The unit of time (e.g., 'second', 'minute', 'hour', 'day', 'week', 'month', 'year').
 * @param locale - The locale to format the relative time for (defaults to `en-US`).
 * @returns A formatted relative time string.
 *
 * @example
 * ```typescript
 * const relativeTime = formatRelativeTime(-3, 'day', 'en-US');
 * console.log(relativeTime); // "3 days ago"
 * ```
 *
 * @example
 * ```typescript
 * const relativeTime = formatRelativeTime(5, 'minute', 'ru-RU');
 * console.log(relativeTime); // "через 5 минут"
 * ```
 */
export const formatRelativeTime = (
  value: number,
  unit: RelativeTimeUnit,
  locale: string = 'en-US'
): string => {
  return new Intl.RelativeTimeFormat(locale, { numeric: 'auto' }).format(value, unit)
}
