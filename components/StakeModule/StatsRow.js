import React from 'react'
import TokenAmount from 'token-amount'
import { useWalletAugmented } from 'lib/wallet'

export default function StatsRow({ balanceUni, decimalsUni, isCompact, isStake }) {
  const { connected } = useWalletAugmented()

  return (
    <div
      css={`
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        ${isStake ? '' : 'padding-top: 16px;'}
        ${isCompact &&
          `
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          `}
      `}
    >
      <div
        css={`
          margin-top: 42px;
          color: #7893ae;
          ${isCompact &&
            `
              margin-top: 24px;
            `}
        `}
      >
        <span
          css={`
            font-weight: 500;
            font-size: 10px;
            line-height: 16px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.25);
          `}
        >
          {isStake ? 'Amount of UNI to Stake:' : ''}
        </span>
      </div>
      <div
        css={`
          color: rgba(255, 255, 255, 0.7);
          font-size: 12px;
          line-height: 20px;
          ${isCompact &&
            `
              margin-top: 8px;
            `}
        `}
      >
        Your account’s balance: {' '}
        <span
          css={`
            font-family: 'Roboto Mono';
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 20px;
            color: #C5ABFF;
            padding-left: 12px;
          `}
        >
          {' '}
          {connected
            ? `${TokenAmount.format(balanceUni.toString(), decimalsUni, {
                symbol: 'UNI',
                digits: 9,
              })}`
            : '0 (Not connected)'}
        </span>
      </div>
    </div>
  )
}
