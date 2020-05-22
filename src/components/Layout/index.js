import React from "react"
import CookieConsent from "react-cookie-consent"
import ReactGA from "react-ga"

import { Wrapper, Header1, Header3, Link } from "./elements"

const Layout = ({ location, title, children }) => {
  const Header = location.pathname === `${__PATH_PREFIX__}/` ? Header1 : Header3

  return (
    <Wrapper>
      <CookieConsent
        location={"bottom"}
        buttonText={"Accept"}
        declineButtonText={"Decline"}
        cookieName={"gatsby-gdpr-google-analytics"}
        enableDeclineButton
        onAccept={() => {
          ReactGA.initialize('UA-167416432-1')
        }}
      >
        {"This site uses cookies to track anonymous user data"}
      </CookieConsent>
      <header>
        <Header>
          <Link to={`/`}>{title}</Link>
        </Header>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href={"https://www.gatsbyjs.org"}>Gatsby</a>
      </footer>
    </Wrapper>
  )
}

export default Layout
