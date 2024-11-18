import styled from 'styled-components'

export const Box = styled.div<{ backgroundColor?: string }>`
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor || 'lightgray'};
`
