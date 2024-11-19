import styled, { css } from 'styled-components'
import { getDimension } from '../utils/get-dimension'
import { generateMediaProps, MediaSizes, sizes } from '../utils/media'

interface Props {
  $fz?: number | string // font-size
  $lh?: number | string // line-height
  $color?: string // color
  $fw?: number // font-weight
  $width?: number | string // width
  $ta?: 'left' | 'center' | 'right' | 'justify' // text-align
  $whs?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' // white-space
  $tt?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' // text-transform
}

interface ComponentProps extends Props, MediaSizes<Props> {}

/**
 * Generates dynamic styles based on all provided props.
 */
const getStyles = ({ $fz, $lh, $color, $fw, $width, $ta, $whs, $tt }: ComponentProps) => css`
  font-size: ${$fz ? getDimension($fz) : 'inherit'};
  line-height: ${$lh ? getDimension($lh) : 'normal'};
  color: ${$color};
  font-weight: ${$fw};
  width: ${$width ? getDimension($width) : 'auto'};
  text-align: ${$ta};
  white-space: ${$whs};
  text-transform: ${$tt};
`

/**
 * Styled `Text` component with dynamic styles.
 */

export const Text = styled.p.withConfig({
  shouldForwardProp: (prop) => !Object.keys(sizes).includes(prop),
})<ComponentProps>`
  ${(props) => getStyles(props)};
  ${(props) => generateMediaProps(props, getStyles)}
`
