import { css } from 'styled-components'

type SizeNames = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type MediaSizes<T> = {
  [key in SizeNames]?: Partial<T>
}

/**
 * Creates a media query string.
 * @param direction - Direction of the media query (e.g., 'min-width', 'max-width').
 * @param width - The width value, either a number (in px) or a string.
 * @returns A formatted media query string.
 */
const createBreakpoint = (direction: 'min-width' | 'max-width', width: number | string): string => {
  const formattedWidth = typeof width === 'number' ? `${width}px` : width
  return `@media (${direction}: ${formattedWidth})`
}

/**
 * Predefined screen sizes for breakpoints.
 */
export const sizes = {
  xs: 375,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
} as const

/**
 * Media query helpers for easy usage.
 */
export const media = {
  xs: createBreakpoint('max-width', sizes.sm),
  sm: createBreakpoint('min-width', sizes.sm),
  md: createBreakpoint('min-width', sizes.md),
  lg: createBreakpoint('min-width', sizes.lg),
  xl: createBreakpoint('min-width', sizes.xl),
  xxl: createBreakpoint('min-width', sizes.xxl),
}

/**
 * Generates media-specific styles based on props and a callback function.
 * @param props - Object containing breakpoint-specific values.
 * @param getPropsFunc - Function to generate styles for each breakpoint.
 * @returns A `css` block with generated media-specific styles.
 */
export const generateMediaProps = <T>(
  props: Partial<Record<keyof typeof sizes, Partial<T>>>,
  getPropsFunc: (value: Partial<T>) => ReturnType<typeof css>
) => {
  return (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
    (acc, key) => {
      const value = props[key]
      if (!value) return acc
      const mediaQuery = media[key]
      return css`
        ${acc}
        ${mediaQuery} {
          ${getPropsFunc(value)}
        }
      `
    },
    css``
  )
}
