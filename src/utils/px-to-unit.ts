/**
 * Converts a pixel value to a specified CSS unit.
 *
 * This function takes a numeric pixel value and converts it into a specified CSS unit.
 * By default, the conversion is to `rem`. The `px` value is divided by 16 for the `rem` or `em` unit,
 * while for other units it is returned as-is.
 *
 * @param px - The pixel value to convert (must be a number).
 * @param unit - The CSS unit to convert to. Defaults to 'rem'.
 *               Supported units: 'rem', 'em', 'px', '%', 'vw', 'vh', 'vmin', 'vmax'.
 * @returns The converted value as a string, including the unit (e.g., "1.5rem").
 *
 * @throws {Error} If `px` is not a number.
 *
 * @example
 * // Convert 16px to rem (default unit)
 * convertPxToUnit(16); // "1rem"
 *
 * @example
 * // Convert 16px to em
 * convertPxToUnit(16, 'em'); // "1em"
 *
 * @example
 * // Convert 50px to vw
 * convertPxToUnit(50, 'vw'); // "50vw"
 */

export const convertPxToUnit = (
  px: number,
  unit: 'rem' | 'em' | 'px' | '%' | 'vw' | 'vh' | 'vmin' | 'vmax' = 'rem'
): string => {
  if (isNaN(px)) {
    throw new Error('Invalid input: px must be a number')
  }

  return `${px / 16}${unit}`
}
