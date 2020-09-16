import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'

const WITHDRAW_KEY = 1

export default function ButtonGroup({
  activeKey,
  disabled,
  elements,
  isCompact,
  onSetActiveKey,
}) {
  return (
    <div
      css={`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        ${isCompact &&
          `
          button {
            width: 112px;
          }
          `}
      `}
    >
      {elements.map((el, idx) => (
        <Button
          disabled={idx !== WITHDRAW_KEY}
          activeKey={activeKey}
          key={el.id}
          lastChild={elements.length - 1 === idx}
          index={idx}
          onSetActiveKey={disabled ? () => {} : onSetActiveKey}
        >
          {!isCompact ? el.copy : el.copyCompact}
        </Button>
      ))}
    </div>
  )
}

function Button({
  activeKey,
  children,
  disabled,
  lastChild,
  index,
  onSetActiveKey,
}) {
  const selected = useMemo(() => activeKey === index, [activeKey, index])
  const setSelected = useCallback(() => onSetActiveKey(index), [
    index,
    onSetActiveKey,
  ])

  return (
    <ButtonBase
      disabled={disabled}
      onClick={setSelected}
      css={`
        ${disabled ? 'color: rgba(255,255,255,0.4);' : ''}
        ${selected ? 'border-bottom: 2px solid #A481F0; opacity: 1;' : 'border: 0;'}
        ${lastChild ? 'margin-right: 0px;' : ''}
      `}
    >
      {children}
    </ButtonBase>
  )
}

const ButtonBase = styled.button`
  position: relative;
  background: transparent;
  color: #ffffff;
  opacity: 0.7;
  font-weight: bold;
  box-shadow: none;
  border: 0;
  padding: 24px 40px;
  margin-right: 6px;
  height: 72px;
  cursor: pointer;
  transition: all 0.1s ease-out;
  &:disabled {
    border: 0px;
    cursor: 'normal';
    pointer-events: none;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #7A52D1;
  }
  &:active {
    top: 1px;
    border-bottom: 2px solid #A481F0;
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
`
