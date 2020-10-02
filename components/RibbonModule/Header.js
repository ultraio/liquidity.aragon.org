import React, { useEffect, useState, useCallback }  from 'react'
import { useViewport } from 'use-viewport'
import styled from 'styled-components'
import ultraBrandTextSvg from './assets/ultra-brand-text.svg'
import ultraWhiteLogoSvg from './assets/ultra-white-logo.svg'
import backgroundImg from './assets/default-background.jpg'
import DropdownComponent from 'components/DropdownComponent/DropdownComponent'
import SocialLinks from 'components/SocialLinks/SocialLinks'
import './style.css'

function Header({ socials }) {
  const { below } = useViewport()
  const [socialsInNav, setSocialsInNav] = useState(false)
  const [isSmallLayout, setIsSmallLayout] = useState(false)
  const [isGtNormalDesktop, setIsGtNormalDesktop] = useState(false)
  const smallLayout = below(920)
  const normalDesktopLayout = !below(1352)

  const signUpVariants = [
    {
      title: 'Developer Beta',
      url: '/sign-up-for-closed-beta',
    },
    {
      title: 'Player Beta',
      url: '/sign-up-as-a-player',
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      setIsSmallLayout(smallLayout)
    }, 0)
  }, [smallLayout])

  useEffect(() => {
    setTimeout(() => {
      setIsGtNormalDesktop(normalDesktopLayout)
    }, 0)
  }, [normalDesktopLayout])

  useEffect(() => {
    setSocialsInNav(
      socials.filter((item) => item.socials.length).length <=
      3 && !!isGtNormalDesktop)
  }, [isGtNormalDesktop, socials])

  const handleSignUpClick = useCallback(data => {
    window.open(`${process.env.WEBSITE_FRONTEND_URL}${data.url}`, "_self")
  }, [])

  return (
    <div>
      <div className="page-header">
        <PageBackdrop />
        <div className="container">
          {!socialsInNav && !isSmallLayout && (
            <SocialLinks
              socialTypes={socials}
              socialDropdownPlacement="bottom-end"
              socialDropdownPopoverStyles={`
                top: 3px !important;
              `}
              socialLinksWrapperStyles={`
                 min-width: max-content;
                 @media (max-width: 920px) {
                  display: none;
                 }
              `}
            />
          )}
          <nav css={`
            ${socialsInNav &&
              `
                @media (min-width: 1352px) {
                  padding-top: 70px;
                }
              `}
           `}
          >
            <div className="main-navigation-wrapper">
              <div className="main-navigation"
                   css={`
                      display: flex;
                      flex-direction: row;
                   `}
              >
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
                {socialsInNav && (
                  <SocialLinks
                    socialTypes={socials}
                    socialDropdownPlacement="bottom-start"
                    socialDropdownPopoverStyles={`
                      left: 16px !important;
                      top: 3px !important;

                      @media (min-width: 1700px) {
                        min-width: 16rem !important;
                      }
                    `}
                    socialLinksWrapperStyles={`
                      max-width: 7.5rem;
                      align-items: center;
                      padding: 0 0.75rem 0 0;
                      margin: -1.25rem 0 0 !important;
                    `}
                  />
                )}
                <ButtonBase>
                  Sign Up
                  <DropdownComponent
                    options={signUpVariants}
                    dropdownPlacement="bottom-end"
                    dropdownPopoverStyles={`
                       top: 3px !important;
                    `}
                    onOptionClick={handleSignUpClick}
                  />
                </ButtonBase>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div css={`
            width: 100%;
            padding: 0 2rem;
          `}
          >
            <div css={`
                padding-top: 7rem;
                @media (max-width: 640px) {
                  padding: 2.5rem 0;
                }
             `}
            >
              <h1 css={`
                    font-weight: bold;
                    @media (min-width: 640px) {
                      min-height: 7.5rem;
                    }
                 `}
              >
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
  
  @media (max-width: 920px) {
    display: none;
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

const ButtonBase = styled.button`
  position: relative;
  max-width: 11.25rem;
  align-self: center;
  margin-right: 0.4rem;
  margin-left: auto;
  background: #A481F0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-size: 12px;
  font-weight: 700;
  line-height: 1rem;
  padding: 0.5rem 1rem;
  max-height: 32px;
  
  &:focus,
  &:hover {
    outline: none;
    background: #946aed;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.2);
  }   
  
  @media (max-width: 640px) {
    font-size: 10px;
    line-height: 12px;
    padding: 0.375rem 1rem;
  }
  
  @media (min-width: 640px) {
    min-width: 7.5rem;
  }             
`

export default Header
