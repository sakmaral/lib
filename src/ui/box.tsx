import styled, { css } from 'styled-components'
import { getDimension } from '../utils/get-dimension'
import { generateMediaProps, MediaSizes } from '../utils/media'

interface Props {
  $display?: string

  $width?: string | number
  $height?: string | number
  $mih?: string | number // min-height
  $mah?: string | number // max-height

  $mTop?: string | number // margin-top
  $mBottom?: string | number // margin-bottom
  $mLeft?: string | number // margin-left
  $mRight?: string | number // margin-right
  $margin?: string

  $pTop?: string | number // padding-top
  $pBottom?: string | number // padding-bottom
  $pLeft?: string | number // padding-left
  $pRight?: string | number // padding-right
  $padding?: string

  $flex?: boolean
  $fx?: string // flex shorthand
  $jc?: 'flex-start' | 'center' | 'space-between' | 'flex-end' | 'stretch' | 'space-around'
  $ai?: 'flex-start' | 'center' | 'space-between' | 'flex-end' | 'stretch' | 'space-around'
  $fxw?: 'nowrap' | 'wrap' | 'wrap-reverse' // flex-wrap
  $fxd?: 'column' | 'column-reverse' | 'row' | 'row-reverse' // flex-direction

  $bg?: string // background
  $bdrs?: string // border-radius
  $bd?: string // border
}

interface ComponentProps extends Props, MediaSizes<Props> {}
/**
 * Generates margin and padding styles based on props.
 */
const getMarginAndPadding = ({
  $mTop,
  $mBottom,
  $mLeft,
  $mRight,
  $margin,
  $pTop,
  $pBottom,
  $pLeft,
  $pRight,
  $padding,
}: Partial<ComponentProps>) => css`
  margin-top: ${$mTop ? getDimension($mTop) : 'unset'};
  margin-bottom: ${$mBottom ? getDimension($mBottom) : 'unset'};
  margin-left: ${$mLeft ? getDimension($mLeft) : 'unset'};
  margin-right: ${$mRight ? getDimension($mRight) : 'unset'};
  margin: ${$margin || 'unset'};

  padding-top: ${$pTop ? getDimension($pTop) : 'unset'};
  padding-bottom: ${$pBottom ? getDimension($pBottom) : 'unset'};
  padding-left: ${$pLeft ? getDimension($pLeft) : 'unset'};
  padding-right: ${$pRight ? getDimension($pRight) : 'unset'};
  padding: ${$padding || 'unset'};
`

/**
 * Generates dynamic styles based on all provided props.
 */
const getStyles = ({
  $flex,
  $display,
  $width,
  $height,
  $mih,
  $mah,
  $bg,
  $bdrs,
  $bd,
  $fx,
  $jc,
  $ai,
  $fxw,
  $fxd,
  ...rest
}: ComponentProps) => css`
  position: relative;
  display: ${$flex ? 'flex' : $display || 'block'};
  justify-content: ${$jc || 'unset'};
  align-items: ${$ai || 'unset'};
  flex-wrap: ${$fxw || 'unset'};
  flex-direction: ${$fxd || 'unset'};
  flex: ${$fx || 'unset'};

  width: ${$width ? getDimension($width) : 'auto'};
  height: ${$height ? getDimension($height) : 'auto'};
  min-height: ${$mih ? getDimension($mih) : 'unset'};
  max-height: ${$mah ? getDimension($mah) : 'unset'};

  background: ${$bg || 'transparent'};
  border-radius: ${$bdrs || 'unset'};
  border: ${$bd || 'unset'};

  ${getMarginAndPadding(rest)}
`

/**
 * Styled `Box` component with dynamic styles.
 */
export const Box = styled.div<ComponentProps>`
  ${(props) => getStyles(props)}
  ${(props) => generateMediaProps(props, getStyles)}
`
