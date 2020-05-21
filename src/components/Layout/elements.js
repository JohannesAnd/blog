import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
  padding: 20px;
`

export const Header1 = styled.h1`
  margin-top: 0;
  margin-bottom: 20px;
`

export const Header3 = styled.h3`
  margin-top: 0;
`

export const Link = styled(GatsbyLink)`
  box-shadow: none;
  color: inherit;
`
