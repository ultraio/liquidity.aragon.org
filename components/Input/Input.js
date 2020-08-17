import React, { useState, useEffect, useCallback, useRef } from 'react'
import uniswapSvg from './assets/uniswap.svg'

const noop = () => {}

function Input({
  disabled = true,
  inputValue,
  onBlur = noop,
  onChange = noop,
  onFocus = noop,
  onMax = noop,
  placeholder = 'Enter UNI Amount',
}) {
  const [opened, setOpened] = useState(false)
  const buttonRef = useRef()
  const menuRef = useRef()
  const inputRef = useRef()

  useEffect(() => {
    if (opened && menuRef.current) {
      menuRef.current.focus()
    }
  }, [opened])

  const handleButtonClick = useCallback(() => {
    setOpened(isOpen => !isOpen)
  }, [])

  return (
    <div
      css={`
        width: 100%;
        display: flex;
        justify-content: flex-end;
      `}
    >
      <div
        css={`
          position: relative;
          z-index: 1;
          width: 100%;
          height: 64px;
          margin: 12px 0 20px 0;
          display: flex;
          padding: 0;
          opacity: ${disabled ? '0.5' : '1'};
        `}
      >
        <input
          disabled={disabled}
          ref={inputRef}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
          value={!disabled ? inputValue : ''}
          css={`
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 64px;
            background: rgba(0, 0, 0, 0.2);
            padding: 20px 12px 20px 16px;
            color: rgba(255, 255, 255, 0.2);
            box-sizing: border-box;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            appearance: none;
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            &::-webkit-inner-spin-button,
            &::-webkit-outer-spin-button {
              -webkit-appearance: none;
            }
            -moz-appearance: textfield;
            &:focus {
              outline: none;
              border-color: #08bee5;
            }
            &::placeholder {
              color: #8fa4b5;
              opacity: 1;
            }
            &:invalid {
              box-shadow: none;
            }
          `}
        />
        <DropdownButton
          disabled={disabled}
          ref={buttonRef}
          onClick={handleButtonClick}
          onMax={onMax}
          opened={opened}
        />
      </div>
    </div>
  )
}

const DropdownButton = React.forwardRef(function DropdownButton(
  { disabled, onMax, onClick },
  ref
) {
  return (
    <button
      ref={ref}
      onClick={onClick}
      type="button"
      css={`
        position: absolute;
        right: 0;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 69px;
        width: 150px;
        padding: 0 0 0 10px;
        color: #212b36;
        background: transparent;
        border-width: 0;
        outline: 0;
        transition: none;
        cursor: pointer;
        ${disabled &&
          `
          cursor: auto;
        `}
        &::-moz-focus-inner {
          border: 0;
        }
        &:focus {
          outline: 0;
        }
        &:focus:after {
          content: '';
        }
      `}
    >
      <div
        onClick={disabled ? undefined : onMax}
        css={`
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          &:active {
            ${disabled ? 'top: 0px' : 'top: 1px'};
          }
        `}
      >
        <Adornment />
      </div>
    </button>
  )
})

function Adornment() {
  return (
    <div>
      <img src={uniswapSvg} alt="Token Logo" width={36} />
      <span css={`
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
       color: rgba(255, 255, 255, 0.2);
       `}
      >Max</span>
    </div>
  )
}

export default Input
