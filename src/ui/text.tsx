import styled, { css } from 'styled-components'
import { getDimension } from '../utils/get-dimension'

interface TextProps {
  $fz?: number | string // font-size
  $lh?: number | string // line-height
  $color?: string // color
  $fw?: number // font-weight
  $width?: number | string // width
  $ta?: 'left' | 'center' | 'right' | 'justify' // text-align
  $whs?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' // white-space
  $tt?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' // text-transform
}

/**
 * Styled `Text` component with dynamic styles.
 */

export const Text = styled.p<TextProps>`
  ${({ $fz, $lh, $color, $fw, $width, $ta, $whs, $tt }) => css`
    font-size: ${$fz ? getDimension($fz) : 'inherit'};
    line-height: ${$lh ? getDimension($lh) : 'normal'};
    color: ${$color || 'inherit'};
    font-weight: ${$fw || 'normal'};
    width: ${$width ? getDimension($width) : 'auto'};
    text-align: ${$ta || 'left'};
    white-space: ${$whs || 'normal'};
    text-transform: ${$tt || 'none'};
  `}
`

Text.displayName = 'Text'
