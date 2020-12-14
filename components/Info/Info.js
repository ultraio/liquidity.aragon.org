import React from 'react'

const MODES = new Map([
  ['info', { background: '', color: 'rgba(255, 255, 255, 0.7)' }],
  ['warning', { background: 'rgba(179, 173, 255, 0.1)', color: '#C5ABFF'}],
  ['success', { background: 'rgba(144, 242, 154, 0.1)', color: '#8CE895'}],
])

export default function Info({
  children,
  mode = 'warning',
  padding = '8',
  isCompact,
}) {
  const modeColor = MODES.get(mode.toLowerCase())

  return (
    <div
      css={`
        display: flex;
        align-items: center;
        width: 100%;
        border-radius: 6px;
        background: ${modeColor.background};
        color: ${modeColor.color};
        font-size: 16px;
        margin-top: 40px;
        padding: ${padding}px;
        height: 100%;
        font-weight: 300;
        ${isCompact && `font-size: 14px;`}
      `}
    >
      {children}
    </div>
  )
}
