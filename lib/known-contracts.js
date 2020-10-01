import env from './environment'

import tokenAbi from './abi/token.json'
import unipoolAbi from './abi/unipool.json'

const KNOWN_CONTRACTS_BY_ENV = new Map([
  [
    '1',
    {
      TOKEN_UOS: '0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c',
      TOKEN_UNI: '0x072644A36f9fd668DC6Cc68fCAf26Edd399A19fD',
      UNIPOOL: '0x9F7134099734D19fE9846b5a4F79d390b9E01847',
    },
  ],
  [
    '4',
    {
      TOKEN_UNI: '0x79A69991018DB1D09c4DcBADa1102003582dB6e7',
      TOKEN_UOS: '0xe6F0622c24617D8cd0874a2F5355d706D513562B',
      UNIPOOL: '0x63e8eF0a387E00F88ED3070fF71752f3049E7316',
    },
  ],
])

const ABIS = new Map([
  ['TOKEN_UOS', tokenAbi],
  ['TOKEN_UNI', tokenAbi],
  ['UNIPOOL', unipoolAbi],
])

export function getKnownAbi(name) {
  return ABIS.get(name)
}

export function getKnownContract(name) {
  const knownContracts = KNOWN_CONTRACTS_BY_ENV.get(env('CHAIN_ID')) || {}
  return [knownContracts[name] || null, getKnownAbi(name) || []]
}

export default KNOWN_CONTRACTS_BY_ENV
