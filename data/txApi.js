import { assets } from "chain-registry";
import { defaultChainDenom, defaultChainName } from "../config";
import { cosmos } from "../modules";
import { toChainDenom } from "./swrStore";

// get the wallet properties and functions for that specific chain
export const sendTokensTxn = async (
  fromAddress,
  toAddress,
  amount,
  memo = "",
  {
    getSigningStargateClient,
    chainName = defaultChainName,
    chainDenom = defaultChainDenom,
  }
) => {
  try {
    // get the chain assets for the specified chain
    const chainassets = assets.find((chain) => chain.chain_name === chainName);
    // get the coin data from the chain assets data
    const coin = chainassets.assets.find((asset) => asset.base === chainDenom);
    // get the amount in denom terms
    const amountInDenom = toChainDenom(amount, chainName, chainDenom);
    // populate the optional argument fromAddress
    fromAddress = fromAddress || address;
    // initialize stargate client and create txn
    const stargateClient = await getSigningStargateClient();
    if (!stargateClient || !fromAddress) {
      throw new error("stargateClient or from address undefined");
    }
    // create a message template from the composer
    const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;
    // populate the message with transaction arguments
    const msg = send({
      amount: [
        {
          denom: coin.base,
          amount: amountInDenom,
        },
      ],
      toAddress,
      fromAddress,
    });
    // populate the fee data
    const fee = {
      amount: [
        {
          denom: coin.base,
          amount: "2000",
        },
      ],
      gas: "86364",
    };
    // use the stargate client to dispatch the transaction
    const response = await stargateClient.signAndBroadcast(
      fromAddress,
      [msg],
      fee,
      memo
    );
    console.log("msg: ", msg, " amount: ", amountInDenom);
    return { response, error: null };
  } catch (error) {
    console.error("Error during transaction: ", error?.message);
    return { response: null, error };
  }
};

export const sendRedelegation = async (
  delegatorAddress,
  validatorSrcAddress,
  validatorDstAddress,
  amount,
  memo = "",
  {
    getSigningStargateClient,
    chainName = defaultChainName,
    chainDenom = defaultChainDenom,
  }
) => {
  try {
    // get the chain assets for the specified chain
    const chainassets = assets.find((chain) => chain.chain_name === chainName);
    // get the coin data from the chain assets data
    const coin = chainassets.assets.find((asset) => asset.base === chainDenom);
    // get the amount in denom terms
    const amountInDenom = toChainDenom(amount, chainName, chainDenom);
    // populate the optional argument fromAddress
    fromAddress = fromAddress || address;
    // initialize stargate client and create txn
    const stargateClient = await getSigningStargateClient();
    if (!stargateClient || !fromAddress) {
      throw new error("stargateClient or from address undefined");
    }
    // create a message template from the composer
    const { beginRedelegate } =
      cosmos.staking.v1beta1.MessageComposer.withTypeUrl;
    const msg = beginRedelegate({
      delegatorAddress,
      validatorSrcAddress,
      validatorDstAddress,
      amount: [
        {
          denom: coin.base,
          amount: amountInDenom,
        },
      ],
    });
    // populate the fee data
    const fee = {
      amount: [
        {
          denom: coin.base,
          amount: "2000",
        },
      ],
      gas: "86364",
    };
    // use the stargate client to dispatch the transaction
    const response = await stargateClient.signAndBroadcast(
      fromAddress,
      [msg],
      fee,
      memo
    );
    console.log("msg: ", msg, " amount: ", amountInDenom);
    return { response, error: null };
  } catch (error) {
    console.error("Error during transaction: ", error?.message);
    return { response: null, error };
  }
};
