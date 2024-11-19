/**
 * Retrieves the user's preferred locale from the browser.
 *
 * @returns The user's locale as a string (e.g., "en-US"). Defaults to "en-US" if no locale is available.
 *
 * @example
 * ```typescript
 * const userLocale = getUserLocale();
 * console.log(userLocale); // e.g., "ru-RU"
 * ```
 */
export const getUserLocale = (): string => {
  return navigator.language || 'en-US'
}
