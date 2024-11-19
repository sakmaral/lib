export type DateInput = Date | string | number

export type DateFormatOptions = Intl.DateTimeFormatOptions

/**
 * Formats a date into a localized string based on the provided locale and options.
 *
 * @param date - The input date, which can be a `Date` object, a string, or a number.
 * @param locale - The locale to format the date for (defaults to `en-US`).
 * @param options - Formatting options for the date (e.g., year, month, day styles).
 * @returns A formatted date string.
 *
 * @example
 * ```typescript
 * const formattedDate = formatDate(new Date(), 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
 * // "November 19, 2024"
 * ```
 */
export const formatDate = (
  date: DateInput,
  locale: string = 'en-US',
  options?: DateFormatOptions
): string => {
  const parsedDate = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date
  return new Intl.DateTimeFormat(locale, options).format(parsedDate)
}
