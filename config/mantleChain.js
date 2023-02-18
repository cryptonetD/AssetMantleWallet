import { assetmantleTestChainChainHost, defaultChainHost } from "./defaults";

export const mantleAssetConfig = [
  {
    $schema: "../../assetlist.schema.json",
    chain_name: "assetmantle",
    assets: [
      {
        description: "The native token of Asset Mantle",
        denom_units: [
          { denom: "umntl", exponent: 0 },
          { denom: "mntl", exponent: 6 },
        ],
        base: "umntl",
        name: "AssetMantle",
        display: "mntl",
        symbol: "MNTL",
        logo_URIs: {
          png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png",
        },
        coingecko_id: "assetmantle",
      },
    ],
  },
];

export const mantleTestnetAssetConfig = [
  {
    $schema: "../../assetlist.schema.json",
    chain_name: "assetmantletestnet",
    assets: [
      {
        description: "The native token of Asset Mantle",
        denom_units: [
          { denom: "umntl", exponent: 0 },
          { denom: "mntl", exponent: 6 },
        ],
        base: "umntl",
        name: "AssetMantle",
        display: "mntl",
        symbol: "MNTL",
        logo_URIs: {
          png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png",
        },
        coingecko_id: "assetmantle",
      },
    ],
  },
];

export const mantleChainConfig = [
  {
    $schema: "../../chain.schema.json",
    chain_name: "assetmantle",
    status: "live",
    network_type: "mainnet",
    website: "https://assetmantle.one/",
    pretty_name: "AssetMantle",
    chain_id: "mantle-1",
    bech32_prefix: "mantle",
    daemon_name: "mantleNode",
    node_home: "$HOME/.mantleNode",
    staking: {
      staking_tokens: [
        {
          denom: "umntl",
        },
      ],
    },
    walletUrlForStaking: `${defaultChainHost}/stake`,
    fees: {
      fee_tokens: [
        {
          denom: "umntl",
          // low_gas_price: 0.002,
          // average_gas_price: 0.0025,
          // high_gas_price: 0.003,
        },
        {
          denom: "umntl",
          // low_gas_price: 0.002,
          // average_gas_price: 0.0025,
          // high_gas_price: 0.003,
        },
      ],
    },
    codebase: {
      git_repo: "https://github.com/AssetMantle/node.git",
      recommended_version: "v0.3.0",
      compatible_versions: ["v0.3.0"],
      genesis: {
        genesis_url:
          "https://raw.githubusercontent.com/AssetMantle/genesisTransactions/main/mantle-1/final_genesis.json",
      },
    },
    peers: {
      seeds: [
        {
          id: "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0",
          address: "seeds.polkachu.com:14656",
          provider: "Polkachu",
        },
        {
          id: "990557213003ab234cc03307d02688c30357fed6",
          address: "seeds.whispernode.com:14656",
          provider: "WhisperNode🤐",
        },
        {
          id: "e1b058e5cfa2b836ddaa496b10911da62dcf182e",
          address: "assetmantle-seed-1.allnodes.me:26656",
          provider: "Allnodes.com ⚡️ Nodes & Staking",
        },
        {
          id: "e726816f42831689eab9378d5d577f1d06d25716",
          address: "assetmantle-seed-2.allnodes.me:26656",
          provider: "Allnodes.com ⚡️ Nodes & Staking",
        },
      ],
      persistent_peers: [
        {
          id: "95a7b7eed1f5cd2894574bf0da4b884243e7d0f3",
          address: "43.204.38.118:26656",
        },
        {
          id: "0a58c9bbb5d7551eebb8e4ac79bd97f580aaf269",
          address: "65.0.131.189:26656",
        },
        {
          id: "800a9f991c0bf2dba8ec9370f41951dab5927b32",
          address: "3.110.89.133:26656",
        },
        {
          id: "5f72cdfd9adbb20cd880fd0d93943d40c426b5c2",
          address: "35.154.27.208:26656",
        },
        {
          id: "1048f75cdd92eedbe3935d07ccf662b45aa6c5f7",
          address: "15.206.189.215:26656",
        },
        {
          id: "a2289be9268ad08db32a59ef8dc243476d5c6f6a",
          address: "3.108.2.18:26656",
        },
        {
          id: "4923caf1572e8925519fcd9eca27cc70c803d7d6",
          address: "3.108.218.178:26656",
        },
        {
          id: "4c39bda705c8c8993f8a989e1375720352d9573f",
          address: "65.0.45.61:26656",
        },
        {
          id: "8392653526200f757190c1f88ffd69726a20055b",
          address: "3.110.74.167:26656",
        },
        {
          id: "7da33184073d211e625848ce4ef2ba50cf5eeb36",
          address: "13.234.225.229:26656",
        },
        {
          id: "880a8fc1a21d2908bd109dab1a2a074ebddec18a",
          address: "65.108.192.170:26656",
        },
        {
          id: "88873cf28bc552d39d4cb10523167aa24c3a4e85",
          address: "95.217.118.96:26876",
        },
        {
          id: "f96b29b7df3fe6a59fc11bde6936d7109e66515b",
          address: "65.21.237.29:26656",
        },
        {
          id: "b5c9a4607fc0494b25b703d08c4601ce44027215",
          address: "162.55.246.236:26656",
        },
        {
          id: "5d3d2807baa4cd191205749a63cc30aab6a3caa1",
          address: "65.108.7.28:26656",
        },
        {
          id: "615e815366defb4c194233ea03c9879f183d49b9",
          address: "65.108.199.26:26656",
        },
        {
          id: "4654c8bed4349e4800238cff1f88e97c1f880080",
          address: "207.244.245.125:26656",
        },
        {
          id: "5622cc659818baa12ae9fa7f58bb8c0be23366fe",
          address: "52.8.59.124:26656",
        },
        {
          id: "c27d512e10d48e921e4fe88f0221a4e2c80567f1",
          address: "13.56.34.84:26656",
        },
        {
          id: "a7aafd3330e57d3104be5b2820b6ad2d52ac19ec",
          address: "3.39.94.36:26656",
        },
        {
          id: "9c97f6143d3fae032af5f155d472bbc52f4d90b3",
          address: "194.34.232.225:26656",
        },
        {
          id: "f61e5c1d7897dd445508a873248e57ae553ac258",
          address: "91.230.111.86:26656",
        },
        {
          id: "f073d57107004268a7c0f1e24433401f892eff94",
          address: "sentry-1.asset-mantle.ezstaking.xyz:26229",
          provider: "EZStaking.io",
        },
        {
          id: "68692140af51d0c41163340f6f1222eec914c18f",
          address: "sentry-2.asset-mantle.ezstaking.xyz:26746",
          provider: "EZStaking.io",
        },
        {
          id: "01e2e8547bd17890a7af54d236ae19d16cb1b224",
          address: "65.108.201.154:2050",
        },
        {
          id: "ac4512cf8969a9602b6c046be6fd24b9b3ecc2d7",
          address: "142.132.202.10:26656",
        },
        {
          id: "fd096224f9c918089410ac7ab6d42d21ec87db60",
          address: "65.21.230.230:26656",
        },
        {
          id: "cc938d4354c61e4f59b9626737c2aa1e448f4d57",
          address: "5.161.80.214:26656",
        },
        {
          id: "cbb1bb6b073e65bb5a9a349e8ac2bb86348b5da1",
          address: "142.132.210.135:26656",
        },
        {
          id: "ab19fe08d8587df7a0aaec966198425a91de6278",
          address: "159.89.162.214:26656",
        },
        {
          id: "efcdd119e9a0f1ac5718c225e425aa1c0121b020",
          address: "65.20.97.129:26656",
        },
        {
          id: "f33b2125c3b3a7c4838e22a060e38d2cefd66e78",
          address: "65.108.140.109:26656",
        },
        {
          id: "202c1e6de51f0d89872e62c8b8f998f479f17f12",
          address: "51.195.233.194:26656",
        },
        {
          id: "f3210561bcfb3252343192c14f8364c14084749a",
          address: "135.125.5.48:26656",
        },
        {
          id: "60a13d44a8ae4165e83e4c3564b0bf36f5ae2615",
          address: "43.254.41.55:26656",
        },
        {
          id: "c64d745a479936d0b482c28239effd2e9fe24bf5",
          address: "45.77.144.250:26656",
        },
        {
          id: "6261de9dac635a8fd8d19a70afc41f845c59db96",
          address: "116.203.35.46:26656",
        },
        {
          id: "af80c95f95301fab1778a722a0d8596ca10006cc",
          address: "136.243.105.182:26656",
        },
        {
          id: "df406a21ac70fbcd7ae06448fe0e7b428385ec6f",
          address: "65.21.195.98:26656",
        },
        {
          id: "e401ef970f15ed0da7321eb9401ada0729b12c8d",
          address: "157.90.248.195:26656",
        },
        {
          id: "e0deea2d5c15e77c9d5934305bb23148ce836709",
          address: "185.252.232.79:26656",
        },
        {
          id: "bbf9c162fbcfbf3dc2c07a7a4ad19d84570ee290",
          address: "161.97.140.10:26656",
        },
        {
          id: "f2b185dbf88277878b4989db31ac40a606829429",
          address: "65.108.41.72:26656",
        },
        {
          id: "8034d1f19724d11be0ad108ac54c63ead4705237",
          address: "3.110.47.238:26656",
        },
        {
          id: "1f28c7cd884a76a022038f22923eea8101d3538f",
          address: "168.119.89.31:26656",
        },
        {
          id: "d0dc9234db7b9e5bb853afbd96055c46990aa55f",
          address: "65.21.131.144:29656",
        },
        {
          id: "7eeb595f1205c2c7230b3812badb1844185b3727",
          address: "65.108.99.224:46656",
        },
        {
          id: "553d4a0727b3ee95208d3553e8e82175302ebeb9",
          address: "95.217.109.143:56656",
        },
        {
          id: "606b884008171f6fa8a475d4e63a79fb8dd77c38",
          address: "51.250.107.51:26656",
        },
        {
          id: "d2515865c79d286da7abe1007959af1b238278bf",
          address: "212.109.220.122:26656",
        },
        {
          id: "4fc4fa6ec44f6da10830ffcb6344a8635156e11e",
          address: "141.95.65.26:26656",
        },
        {
          id: "2968bf003604fc82ead6a0aea7b718d97a307892",
          address: "54.205.3.65:26656",
        },
        {
          id: "306f47eba6711ec325ddb692c988cadadb83b4b7",
          address: "144.126.136.22:26656",
        },
        {
          id: "adfcaf7a4d5b388aff901136a9d64423ef2215f9",
          address: "88.99.216.14:26456",
        },
        {
          id: "77d64fd4c97a849d781913c8fe1b737cfb31957a",
          address: "134.209.139.2:15656",
        },
        {
          id: "7362b3c4d082680aeffe137d18cea0e37cab5037",
          address: "146.19.24.101:26656",
        },
        {
          id: "5e8e8e7071259beb3b32e39cb3d2bb059cff4d66",
          address: "65.108.137.22:26656",
        },
        {
          id: "eef583258a773765e556fa723bae76d572933eaa",
          address: "23.88.37.143:21356",
        },
        {
          id: "37648e05b086bb98432a1115fdacd9ce36c70a4d",
          address: "142.4.216.69:26656",
        },
        {
          id: "ae4f04cea40f6d6047ed2baf3483b5ca6fce3482",
          address: "154.12.242.63:26656",
        },
        {
          id: "8f47445897afc72dec187d65f8cbf14f5ed5c86f",
          address: "88.99.166.120:26656",
        },
        {
          id: "201aa01ed819a3544c77b8e12343c832a20f8136",
          address: "49.12.189.127:26656",
        },
        {
          id: "8a152dd74a1f1f43895d3065686bdec7fb4510e7",
          address: "65.21.89.42:29656",
        },
        {
          id: "169a3e12d45903d961ace560a384d3bcb55092e2",
          address: "3.137.211.131:26656",
        },
        {
          id: "38f4504f74a9fd70f158270751c31a4d146f987c",
          address: "65.21.226.249:26616",
        },
        {
          id: "aa4cbf8284512c7d10dbc0542604f1fb89e1646b",
          address: "95.165.150.165:26956",
        },
        {
          id: "20dbc8f0c0fe5aeadde86976149b70e20fb2e87d",
          address: "95.217.73.93:24656",
        },
        {
          id: "7170a9a965b53966b5232fb64f02fbd260e26b82",
          address: "116.203.47.250:26656",
        },
        {
          id: "5b3c90e6c07e03ffddc5dc3aae786a2990bc5bd3",
          address: "148.251.81.179:26656",
        },
        {
          id: "7ae8a8e62efcccf15198525868b0873b3c9bd698",
          address: "65.108.121.37:36656",
        },
        {
          id: "681ffbadff88c900660d2bc6bce0920929b529f7",
          address: "62.171.153.122:26656",
        },
        {
          id: "13e82c193914d0db037566ff0e59dfd38ccf5193",
          address: "35.154.66.182:26656",
        },
      ],
    },
    apis: {
      rpc: [
        { address: "https://rpc.assetmantle.one/", provider: "AssetMantle" },
        {
          address: "https://rpc-assetmantle.blockpower.capital",
          provider: "Blockpower",
        },
        {
          address: "https://rpc-assetmantle.ecostake.com",
          provider: "ecostake",
        },
        {
          address: "https://assetmantle-rpc.polkachu.com",
          provider: "Polkachu",
        },
        {
          address: "https://rpc.assetmantle.nodestake.top",
          provider: "NodeStake",
        },
        {
          address: "https://rpc-assetmantle-ia.cosmosia.notional.ventures/",
          provider: "Notional",
        },
        { address: "https://rpc-assetmanle.d-stake.xyz", provider: "D-stake" },
        {
          address: "https://rpc-assetmantle.whispernode.com",
          provider: "WhisperNode🤐",
        },
      ],
      rest: [
        { address: "https://rest.assetmantle.one/", provider: "AssetMantle" },
        {
          address: "https://rest-assetmantle.ecostake.com",
          provider: "ecostake",
        },
        {
          address: "https://api.assetmantle.nodestake.top",
          provider: "NodeStake",
        },
        {
          address: "https://api-assetmantle-ia.cosmosia.notional.ventures/",
          provider: "Notional",
        },
        {
          address: "https://assetmantle-api.polkachu.com",
          provider: "Polkachu",
        },
        { address: "https://api-assetmanle.d-stake.xyz", provider: "D-stake" },
        {
          address: "https://lcd-assetmantle.whispernode.com",
          provider: "WhisperNode🤐",
        },
      ],
      grpc: [
        {
          address: "https://grpc.assetmantle.nodestake.top",
          provider: "NodeStake",
        },
        {
          address: "grpc-assetmantle-ia.cosmosia.notional.ventures:443",
          provider: "Notional",
        },
        {
          address: "assetmantle-grpc.polkachu.com:14690",
          provider: "Polkachu",
        },
        { address: "https://grpc-assetmanle.d-stake.xyz", provider: "D-stake" },
      ],
    },
    explorers: [
      {
        kind: "EZStaking Tools",
        url: "https://ezstaking.tools/assetmantle",
        tx_page: "https://ezstaking.tools/assetmantle/txs/${txHash}",
        account_page:
          "https://ezstaking.tools/assetmantle/account/${accountAddress}",
      },
      {
        kind: "mintscan",
        url: "https://www.mintscan.io/asset-mantle",
        tx_page: "https://www.mintscan.io/asset-mantle/txs/${txHash}",
        account_page:
          "https://www.mintscan.io/asset-mantle/account/${accountAddress}",
      },
      {
        kind: "ping.pub",
        url: "https://explorer.postcapitalist.io/AssetMantle",
        tx_page: "https://explorer.postcapitalist.io/AssetMantle/tx/${txHash}",
      },
      {
        kind: "other",
        url: "https://explorer.assetmantle.one",
        tx_page: "https://explorer.assetmantle.one/transactions/${txHash}",
      },
      {
        kind: "explorers.guru",
        url: "https://assetmantle.explorers.guru",
        tx_page: "https://assetmantle.explorers.guru/transaction/${txHash}",
      },
      {
        kind: "atomscan",
        url: "https://atomscan.com/assetmantle",
        tx_page: "https://atomscan.com/assetmantle/transactions/${txHash}",
      },
    ],
    slip44: 118,
    beta: true,
  },
];

export const mantleTestChainConfig = [
  {
    $schema: "../../chain.schema.json",
    chain_name: "assetmantletestnet",
    status: "live",
    network_type: "testnet",
    website: "https://assetmantle.one/",
    pretty_name: "AssetMantle Testnet",
    chain_id: "test-mantle-2",
    bech32_prefix: "mantle",
    daemon_name: "mantleNode",
    node_home: "$HOME/.mantleNode",
    staking: {
      staking_tokens: [
        {
          denom: "umntl",
        },
      ],
    },
    walletUrlForStaking: `${assetmantleTestChainChainHost}/stake`,
    fees: {
      fee_tokens: [
        {
          denom: "umntl",
          // low_gas_price: 0.002,
          // average_gas_price: 0.0025,
          // high_gas_price: 0.003,
        },
        {
          denom: "umntl",
          // low_gas_price: 0.002,
          // average_gas_price: 0.0025,
          // high_gas_price: 0.003,
        },
      ],
    },
    codebase: {
      git_repo: "https://github.com/AssetMantle/node.git",
      recommended_version: "v0.3.0",
      compatible_versions: ["v0.3.0"],
      genesis: {
        genesis_url:
          "https://raw.githubusercontent.com/AssetMantle/genesisTransactions/main/mantle-1/final_genesis.json",
      },
    },
    apis: {
      rpc: [
        {
          address: "http://rpc.testnet.assetmantle.one/",
          provider: "AssetMantle",
        },
      ],
      rest: [
        {
          address: "http://rest.testnet.assetmantle.one/",
          provider: "AssetMantle",
        },
      ],
      grpc: [],
    },
    explorers: [
      {
        kind: "other",
        url: "https://testnet.explorer.assetmantle.one/",
        tx_page:
          "https://testnet.explorer.assetmantle.one/transactions/${txHash}",
      },
    ],
    slip44: 118,
  },
];
