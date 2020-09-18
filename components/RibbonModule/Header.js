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
                <NavigationMenu />
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

function NavigationMenu({}) {
  const navigationLinks = [
    { path: '/', title: 'Home' },
    { path: '/developers', title: 'Developers' },
    { path: '/technology', title: 'Technology' },
    { path: '/articles', title: 'Articles' },
    { path: '/company', title: 'Company' },
    { path: '/career', title: 'Join Us' },
    { path: '', title: ' Staking Program', isActive: true },
  ];

  return (
    <NavigationList>
      {navigationLinks.map((link, index) => {
        return <NavigationLink
          className={link.isActive ? 'active-link': ''}
          key={index}
          href={link.path ? `${process.env.WEBSITE_FRONTEND_URL}${link.path}` : ''}
        >
          {link.title}
        </NavigationLink>
      })}
    </NavigationList>
  )
}

const NavigationList = styled.nav`
  display: flex;
  flex: 1 2;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 120px;
  
  @media (max-width: 920px) {
    display: none;
  }
  
  @media (min-width: 1352px) {
    padding-right: 240px;
  }
`

const NavigationLink = styled.a`
  &,
  &:hover {
    color: #ffffff;
    font-size: 12px;
    padding: 22px 20px;
    font-weight: bold;
    white-space: nowrap;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    opacity: 0.7;
    cursor: pointer;
  }

  &.active-link {
    position: relative;
    opacity: 1;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 2px;
      display: block;
      background: #a481f0;
    }
  }

  &:last-child {
    margin-right: 1rem;
  }

  @media (max-width: 920px) {
    display: flex;
    align-items: center;
    min-height: 3.375rem;
    margin: 0 0.6rem;
    opacity: 1;
    font-weight: normal;
    &.active-link {
      font-weight: bold;
      &:after {
        background: #c5abff;
      }
     }
  }
  
  @media (min-width: 920px) and (max-width: 1080px) {
    padding: 20px 10px;
  }
`

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
