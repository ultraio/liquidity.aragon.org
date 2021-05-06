import React, { useEffect, useState } from 'react'
import { request } from 'graphql-request'
import { useViewport } from 'use-viewport'
import StakeModule from 'components/StakeModule/StakeModule'
import Header from 'components/RibbonModule/Header'
import Footer from 'components/RibbonModule/Footer'
import Info from 'components/Info/Info'

const SMALL_BREAKPOINT = 415

const GQL_ENDPOINT = `${process.env.WEBSITE_BACKEND_URL}/graphql`

export default () => {
  const { below } = useViewport()
  const [socials, setSocials] = useState([])
  const [isCompact, setIsCompact] = useState(false)
  const smallLayout = below(SMALL_BREAKPOINT)
  useEffect(() => {
    setTimeout(() => {
      setIsCompact(smallLayout)
    }, 0)
  }, [smallLayout])

  useEffect(() => {

    async function fetchSocials() {
      let response
      try {
        response = await request(
          GQL_ENDPOINT,
          `
              query SocialTypes {
                socialTypes {
                   name
                   icon {
                     url
                   }
                   socials {
                     title
                     url
                   }
                }
              }
          `
        )

        if (!response.socialTypes) {
          throw new Error('Wrong response')
        }

        setSocials(response.socialTypes.filter((item) => item.socials.length))
      } catch (err) {
        console.error('An error has occurred')
      }
    }

    fetchSocials()
  }, [])

  return (
    <div>
      <Header socials={socials} />
      <div
        css={`
          position: relative;
          min-height: 800px;
          padding: 3em 0 6rem;
          background: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        `}
      >
        <Banner />
        <StakeModule />
      </div>
      <Footer socials={socials} />
    </div>
  )
}

function Banner() {
  const { below } = useViewport()
  const [isCompact, setIsCompact] = useState(false)
  const smallLayout = below(SMALL_BREAKPOINT)
  useEffect(() => {
    setTimeout(() => {
      setIsCompact(smallLayout)
    }, 0)
  }, [smallLayout])

  return (
    <div
      className="l-12"
      css={`
        width: 100%;
        max-width: 940px;
        padding: 0 32px;
        margin-bottom: 50px;
      `}>
      <Info
        mode="mandatory-warning"
        padding="16"
        isCompact={isCompact}
      >
        {isCompact
          ? 'The UOS liquidity program has ended.'
          : 'The UOS Liquidity Rewards program has ended.'}
      </Info>
    </div>
  )
}
