import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../images/OgLogoTrans.png'

const HeaderWrapper = styled.div`
  background: rebeccapurple;
  marginBottom: 1.45rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
          <img src={logo} alt="Clark Newell Logo" />
        </Link>
      </h1>
      </div>
    <nav>
      <ul>
        <li>
          <Link to ='/'>Home</Link>
        </li>
        <li>
          <Link to ='/about'>About</Link>
        </li>
      </ul>
    </nav>
  </HeaderWrapper>
)

export default Header
