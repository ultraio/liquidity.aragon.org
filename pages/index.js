import React, { useEffect, useState } from 'react'
import { useViewport } from 'use-viewport'
import StakeModule from 'components/StakeModule/StakeModule'

export default () => {
  const { below } = useViewport()
  const [isCompact, setIsCompact] = useState(false)
  const smallLayout = below(415)
  useEffect(() => {
    setTimeout(() => {
      setIsCompact(smallLayout)
    }, 0)
  }, [smallLayout])

  return (
    <div
      css={`
        position: relative;
        min-height: 100vh;
        background: transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <StakeModule />
    </div>
  )
}
