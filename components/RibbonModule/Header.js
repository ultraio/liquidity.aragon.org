import React from 'react'
import styled from 'styled-components'
import ultraBrandTextSvg from './assets/ultra-brand-text.svg'
import ultraWhiteLogoSvg from './assets/ultra-white-logo.svg'
import backgroundImg from './assets/default-background.jpg'
import './style.css'

function Header({}) {
  return (
    <div>
      <div className="page-header">
        <PageBackdrop />
        <div className="container">
          <nav className="navigation-bar">
            <div className="main-navigation-wrapper">
              <div className="main-navigation">
                <section
                  className="logotype-component logotype"
                  css={`align-self: center;`}
                >
                  <a href={`${process.env.WEBSITE_FRONTEND_URL}`}
                     aria-label="Ultra Logotype"
                     css={`
                      display: flex;
                      flex-direction: row;
                      align-content: center;
                      align-items: center;
                      justify-content: center;
                      margin: 0.75rem 1.2rem;
                      @media (max-width: 920px) {
                        margin: 1.4rem 1rem;
                      }
                     `}
                  >
                    <img src={ultraWhiteLogoSvg} alt="Ultra Logotype Icon" width={32} css={`height: 2rem;`} />
                    <img src={ultraBrandTextSvg} alt="Ultra Brand Text" width={96} css={`margin-left: 1rem;`} />
                  </a>
                </section>
                <nav data-v-72ea3a74="" className="nav-list navigation-menu nav-primary">
                  <a data-v-72ea3a74="" className="nav-item" href={`${process.env.WEBSITE_FRONTEND_URL}`}>
                    Home
                  </a>
                  <a data-v-72ea3a74="" className="nav-item" href={`${process.env.WEBSITE_FRONTEND_URL}/developers`}>
                    Developers
                  </a>
                  <a data-v-72ea3a74="" className="nav-item" href={`${process.env.WEBSITE_FRONTEND_URL}/technology`}>
                    Technology
                  </a>
                  <a data-v-72ea3a74="" className="nav-item" href={`${process.env.WEBSITE_FRONTEND_URL}/articles`}>
                    Articles
                  </a>
                  <a data-v-72ea3a74="" className="nav-item" href={`${process.env.WEBSITE_FRONTEND_URL}/company`}>
                    Company
                  </a>
                  <a data-v-72ea3a74="" className="nav-item" href={`${process.env.WEBSITE_FRONTEND_URL}/career`}>
                    Join Us
                  </a>
                  <a data-v-72ea3a74="" className="nav-item active-link">
                    Staking Program
                  </a>
                </nav>
                <div className="social-links header-nav-socials">
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="l-12">
            <div className="page-introduction page-intro-block">
              <h1 className="intro-title" css={`font-weight: bold;`}>
                Uniswap Staking Program
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const PageBackdrop = styled.div`
  background:  url(${backgroundImg}) center 0 no-repeat #28262C;
  background-size: cover;
  position: absolute;
  z-index: 0;
  height: 980px;

  &:after {
    display: block;
    content: '';
    height: 100%;
    background: 
      linear-gradient(359.66deg, #28262C 0%, rgba(40, 38, 44, 0) 100%), 
      radial-gradient(100% 145.81% at 100% 0%, rgba(49, 45, 54, 0.1) 0%, #312D36 100%), 
      linear-gradient(60.3deg, #312D36 0%, rgba(49, 45, 54, 0.39) 100%);
  }

  &,
  &:after {
    width: 100%;
  }
`

export default Header
