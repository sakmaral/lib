import { convertPxToUnit } from './px-to-unit'

/**
 * Converts a unit to a string representation.
 * If the input is a number, it will be converted to rem using pxRem.
 * If the input is a string, it will be returned as-is.
 *
 * @param unit - The unit to convert (number or string).
 * @returns The string representation of the unit.
 */
export const getDimension = (unit: number | string): string =>
  typeof unit === 'number' ? convertPxToUnit(unit) : unit
