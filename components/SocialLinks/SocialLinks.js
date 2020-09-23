import React, { useCallback } from 'react'
import styled from 'styled-components'
import DropdownComponent from 'components/DropdownComponent/DropdownComponent'

function SocialLinks({ socialTypes, additionalStyles, socialDropdownPlacement }) {
  const handleSocialLinkClick = useCallback(data => {
    window.open(data.url)
  }, [])

  return (
    <LinksWrapper css={additionalStyles}>
      {socialTypes.map((type, index) => {
        return <div
          className="social-link-wrapper"
          key={index}
        >
          {type.socials.length === 1 &&  (
            <div className="social-link-item">
              <a href={type.socials[0].url} target="_blank">
                <img src={`${process.env.WEBSITE_BACKEND_URL}${type.icon.url}`} alt={type.socials[0].title} />
              </a>
            </div>
          )}
          {type.socials.length > 1 &&  (
            <div>
              {type.socials.map((social, socialIndex) => {
                return <div key={socialIndex} className="social-links-dropdown">
                  {
                    socialIndex === 0 && (
                      <a>
                        <img src={`${process.env.WEBSITE_BACKEND_URL}${type.icon.url}`} alt={social.title} />
                        <DropdownComponent
                          options={type.socials}
                          dropdownPlacement={socialDropdownPlacement}
                          onOptionClick={handleSocialLinkClick}
                        />
                      </a>
                    )
                  }
                </div>
              })}
            </div>
          )}
        </div>
      })}
  </LinksWrapper>
  )
}

const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  padding: 1.5rem 0 0.5rem;

  .social-link-wrapper {
    margin-top: 1.25rem;

    .social-links-dropdown {
      position: relative;
      z-index: 1;

      a {
        position: relative;
        cursor: pointer;
      }
    }
  }

  a {
    display: flex;
    text-decoration: none;
    width: 18px;
    max-height: 18px;
    margin: 0 0.45rem;

    img {
      opacity: 0.7;
      max-width: 18px;
    }
  }
`

export default SocialLinks
