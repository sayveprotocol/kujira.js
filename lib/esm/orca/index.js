import { Chain, Protocol } from "./types";
// import * as Acala from "@acala-network/contracts/utils/AcalaAddress";
// import * as Karura from "@acala-network/contracts/utils/KaruraAddress";
import { BigNumber } from "@ethersproject/bignumber";
import { DEMO, Denom, USK } from "../denom";
import { TESTNET } from "../network";
export * from "./types";
export const marketConfigs = {
    // Mandala Testnet
    "0xA60A74ee93C50088614a18860C7a34beb9AAd713": {
        bidThreshold: BigNumber.from(10000000000),
        maxSlot: 10,
        premiumRatePerSlot: 0.005,
        waitingPeriod: 30,
        market: "",
    },
    // Karura KSM
    "0xf11dD615fA938F7b43209DA472F80d62ac1c7900": {
        bidThreshold: BigNumber.from(10).pow(12 + 6),
        maxSlot: 10,
        premiumRatePerSlot: 0.005,
        waitingPeriod: 30,
        market: "",
    },
    kujira1exd7mzv8azf7tpqukm6fzxnvdt7a8kddyz2puwzk9lm7qmlx3vxq0thezm: {
        bidThreshold: BigNumber.from(10).pow(6 + 6),
        maxSlot: 30,
        premiumRatePerSlot: 0.01,
        waitingPeriod: 600,
        market: "kujira1atk8uwy6zf7u4r4qzg52ucgz6f74cuclthzsrc049vynjsr62lns2du3ey",
    },
    kujira10m49vm0fevhqh56szka8hv7j6lumns8ly3h950hf5s8putn6k0usz7m2qh: {
        bidThreshold: BigNumber.from(10).pow(6 + 6),
        maxSlot: 30,
        premiumRatePerSlot: 0.01,
        waitingPeriod: 600,
        market: "kujira186hf4u6wq2yxjhrddgsu60jual4mkpqyfjy7l60qqp2302tw5vpqy6l58s",
    },
    kujira1q8y46xg993cqg3xjycyw2334tepey7dmnh5jk2psutrz3fc69teskctgfc: {
        bidThreshold: BigNumber.from(10).pow(6 + 6),
        maxSlot: 30,
        premiumRatePerSlot: 0.01,
        waitingPeriod: 600,
        market: "kujira1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2smfdslf",
    },
    kujira1p748kkq6qmhcml0ycm0g8n4vns7rnch2jtw7mzsrcyudjmpqzzvsy4clw6: {
        bidThreshold: BigNumber.from(10).pow(6 + 6),
        maxSlot: 30,
        premiumRatePerSlot: 0.01,
        waitingPeriod: 600,
        market: "kujira1eydneup86kyhew5zqt5r7tkxefr3w5qcsn3ssrpcw9hm4npt3wmqa7as3u",
    },
    kujira1xc4mksfgs9cww7mlth3gqp6dfx9wh8znvdps5xt4yasxnkhd7kcq2nvxl4: {
        bidThreshold: BigNumber.from(10).pow(6 + 6),
        maxSlot: 30,
        premiumRatePerSlot: 0.01,
        waitingPeriod: 600,
        market: "kujira1fjews4jcm2yx7una77ds7jjjzlx5vgsessguve8jd8v5rc4cgw9s8rlff8",
    },
    kujira12n6yghp8l2gwz9zxnle6e7gm9d0hz4uvnlyaadw5y05ch50c6qrqg4k7r3: {
        bidThreshold: BigNumber.from(10).pow(6 + 6),
        maxSlot: 30,
        premiumRatePerSlot: 0.01,
        waitingPeriod: 600,
        market: "kujira1f2jt3f9gzajp5uupeq6xm20h90uzy6l8klvrx52ujaznc8xu8d7s6av27t",
    },
    kujira1sdlp8eqp4md6waqv2x9vlvt9dtzyx9ztt0zvkfxaw9kxh3t5gdvqypxlwz: {
        bidThreshold: BigNumber.from("10000000000"),
        maxSlot: 30,
        premiumRatePerSlot: 0.01,
        waitingPeriod: 600,
        market: "kujira1r80rh4t7zrlt8d6da4k8xptwywuv39esnt4ax7p7ca7ga7646xssrcu5uf",
    },
};
export const getMarkets = (network) => {
    return network === TESTNET
        ? [
            {
                label: "DEMO",
                chain: Chain.Kujira,
                protocol: Protocol.USK,
                address: "kujira1exd7mzv8azf7tpqukm6fzxnvdt7a8kddyz2puwzk9lm7qmlx3vxq0thezm",
                collateralDenom: DEMO,
                bidDenom: Denom.from("factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"),
                repayDenom: Denom.from("factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"),
            },
            {
                label: "NBTC",
                chain: Chain.Kujira,
                protocol: Protocol.USK,
                address: "kujira10m49vm0fevhqh56szka8hv7j6lumns8ly3h950hf5s8putn6k0usz7m2qh",
                collateralDenom: Denom.from("ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E"),
                bidDenom: Denom.from("factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"),
                repayDenom: Denom.from("factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk"),
            },
            // {
            //   label: "LDOT",
            //   chain: Chain.Polkadot,
            //   protocol: Protocol.Mandala,
            //   address: "0xA60A74ee93C50088614a18860C7a34beb9AAd713",
            //   // address: "0xF19F13399d89Dd5aF4856b5b7b8Bc7316E9767CE",
            //   // address: "0x8E9a8bC9Aa27dfb699Ce6997BEcC254748DB6F9F",
            //   collateralDenom: new Denom("acala", Acala.LDOT),
            //   bidDenom: new Denom("acala", Acala.AUSD),
            //   repayDenom: new Denom("acala", Acala.AUSD),
            // },
        ]
        : [
            {
                label: "ATOM",
                chain: Chain.Kujira,
                protocol: Protocol.USK,
                address: "kujira1q8y46xg993cqg3xjycyw2334tepey7dmnh5jk2psutrz3fc69teskctgfc",
                collateralDenom: Denom.from("ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"),
                bidDenom: USK,
                repayDenom: USK,
                activators: ["kujira16a03hk5ev6963a4yj3kcrvmh4hej3w3j70kv2n"],
            },
            {
                label: "DOT",
                chain: Chain.Kujira,
                protocol: Protocol.USK,
                address: "kujira1p748kkq6qmhcml0ycm0g8n4vns7rnch2jtw7mzsrcyudjmpqzzvsy4clw6",
                bidDenom: USK,
                collateralDenom: Denom.from("ibc/B37E4D9FB5B30F3E1E20A4B2DE2A005E584C5C822C44527546556AE2470B4539"),
                repayDenom: USK,
            },
            {
                label: "wBNB",
                chain: Chain.Kujira,
                protocol: Protocol.USK,
                address: "kujira12n6yghp8l2gwz9zxnle6e7gm9d0hz4uvnlyaadw5y05ch50c6qrqg4k7r3",
                bidDenom: USK,
                collateralDenom: Denom.from("ibc/DADB399E742FCEE71853E98225D13E44E90292852CD0033DF5CABAB96F80B833"),
                repayDenom: USK,
            },
            {
                label: "wETH",
                chain: Chain.Kujira,
                protocol: Protocol.USK,
                address: "kujira1xc4mksfgs9cww7mlth3gqp6dfx9wh8znvdps5xt4yasxnkhd7kcq2nvxl4",
                bidDenom: USK,
                collateralDenom: Denom.from("ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7"),
                repayDenom: USK,
            },
            {
                label: "LUNA",
                chain: Chain.Kujira,
                protocol: Protocol.USK,
                address: "kujira1sdlp8eqp4md6waqv2x9vlvt9dtzyx9ztt0zvkfxaw9kxh3t5gdvqypxlwz",
                bidDenom: USK,
                collateralDenom: Denom.from("ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986"),
                repayDenom: USK,
            },
            {
                label: "NBTC",
                chain: Chain.Kujira,
                protocol: Protocol.USK,
                collateralDenom: Denom.from("ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E"),
                bidDenom: USK,
                repayDenom: USK,
            },
            // {
            //   label: "ATOM",
            //   chain: Chain.Kujira,
            //   protocol: Protocol.FIN,
            //   collateralDenom: Denom.from(
            //     "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
            //   ),
            //   bidDenom: USK,
            //   repayDenom: USK,
            // },
            // {
            //   label: "NBTC",
            //   chain: Chain.Kujira,
            //   protocol: Protocol.FIN,
            //   collateralDenom: Denom.from(
            //     "ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E"
            //   ),
            //   bidDenom: USK,
            //   repayDenom: USK,
            // },
            {
                label: "ATOM Long",
                chain: Chain.Kujira,
                protocol: Protocol.BOW,
                collateralDenom: Denom.from("ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"),
                bidDenom: USK,
                repayDenom: USK,
            },
            {
                label: "NBTC Long",
                chain: Chain.Kujira,
                protocol: Protocol.BOW,
                collateralDenom: Denom.from("ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E"),
                bidDenom: USK,
                repayDenom: USK,
            },
            {
                label: "ATOM Short",
                chain: Chain.Kujira,
                protocol: Protocol.BOW,
                collateralDenom: USK,
                bidDenom: Denom.from("ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"),
                repayDenom: Denom.from("ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"),
            },
            {
                label: "NBTC Short",
                chain: Chain.Kujira,
                protocol: Protocol.BOW,
                collateralDenom: USK,
                bidDenom: Denom.from("ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E"),
                repayDenom: Denom.from("ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E"),
            },
            // {
            //   label: "KSM",
            //   chain: Chain.Polkadot,
            //   protocol: Protocol.Karura,
            //   // address: "0xf11dD615fA938F7b43209DA472F80d62ac1c7900",
            //   address: "",
            //   collateralDenom: new Denom("acala", Karura.KSM),
            //   bidDenom: new Denom("acala", Karura.KUSD),
            //   repayDenom: new Denom("acala", Karura.KUSD),
            // },
            // {
            //   label: "LKSM",
            //   chain: Chain.Polkadot,
            //   protocol: Protocol.Karura,
            //   // address: "0xA60A74ee93C50088614a18860C7a34beb9AAd713",
            //   collateralDenom: new Denom("acala", Karura.LKSM),
            //   bidDenom: new Denom("acala", Karura.KUSD),
            //   repayDenom: new Denom("acala", Karura.KUSD),
            // },
            // {
            //   label: "KAR",
            //   chain: Chain.Polkadot,
            //   protocol: Protocol.Karura,
            //   // address: "0xA60A74ee93C50088614a18860C7a34beb9AAd713",
            //   collateralDenom: new Denom("acala", Karura.KAR),
            //   bidDenom: new Denom("acala", Karura.KUSD),
            //   repayDenom: new Denom("acala", Karura.KUSD),
            // },
        ];
};