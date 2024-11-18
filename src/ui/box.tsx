import styled, { css } from 'styled-components'
import { getDimension } from '../utils/get-dimension'

type StrNum = string | number

interface ComponentProps {
  $display?: string

  $width?: StrNum
  $height?: StrNum
  $mih?: StrNum // min-height
  $mah?: StrNum // max-height

  $mTop?: StrNum // margin-top
  $mBottom?: StrNum // margin-bottom
  $mLeft?: StrNum // margin-left
  $mRight?: StrNum // margin-right
  $margin?: string

  $pTop?: StrNum // padding-top
  $pBottom?: StrNum // padding-bottom
  $pLeft?: StrNum // padding-left
  $pRight?: StrNum // padding-right
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
`
