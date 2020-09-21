import React, { useEffect, useState } from 'react'
import { useViewport } from 'use-viewport'
import StakeModule from 'components/StakeModule/StakeModule'
import Header from 'components/RibbonModule/Header'
import Footer from 'components/RibbonModule/Footer'
import Info from 'components/Info/Info'

const SMALL_BREAKPOINT = 415

export default () => {
  const { below } = useViewport()
  const [isCompact, setIsCompact] = useState(false)
  const smallLayout = below(SMALL_BREAKPOINT)
  useEffect(() => {
    setTimeout(() => {
      setIsCompact(smallLayout)
    }, 0)
  }, [smallLayout])

  return (
    <div>
      <Header />
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
      <Footer />
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
          ? 'The first UOS liquidity program has ended.'
          : 'The first UOS Liquidity Rewards program has ended.'}
      </Info>
    </div>
  )
}
