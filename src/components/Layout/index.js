import React from "react"

import { Wrapper, Header1, Header3, Link } from "./elements"

const Layout = ({ location, title, children }) => {
  const Header = location.pathname === `${__PATH_PREFIX__}/` ? Header1 : Header3

  return (
    <Wrapper>
      <header>
        <Header>
          <Link to={`/`}>{title}</Link>
        </Header>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Wrapper>
  )
}

export default Layout
