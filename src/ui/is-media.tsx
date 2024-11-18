import styled from 'styled-components'
import { media } from '../utils/media'

interface IsDesktopProps {
  $display?: 'block' | 'inline' | 'flex' | 'grid'
}

export const IsMobile = styled.div`
  ${media.sm} {
    display: none;
  }
`

export const IsDesktop = styled.div<IsDesktopProps>`
  display: none;

  ${media.sm} {
    display: ${({ $display = 'block' }) => $display};
  }
`
