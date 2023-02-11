import { useChain } from "@cosmos-kit/react";
import BigNumber from "bignumber.js";
import React from "react";
import {
  defaultChainDenomExponent,
  defaultChainName,
  usdSymbol,
} from "../../config";
import { fromChainDenom, useMntlUsd, useTotalBalance } from "../../data";

export const TotalBalance = () => {
  const {
    denomTotalBalance,
    totalBalance,
    isErrorTotalBalance,
    isLoadingTotalBalance,
  } = useTotalBalance();

  const chainContext = useChain(defaultChainName);
  const { status } = chainContext;

  const totalBalanceDisplay = fromChainDenom(totalBalance);

  const isConnected = !(
    isLoadingTotalBalance ||
    isErrorTotalBalance ||
    status != "Connected"
  );

  return (
    <>
      <p className={isConnected ? "caption" : "caption text-gray"}>
        {totalBalanceDisplay}&nbsp;{denomTotalBalance}
      </p>
    </>
  );
};

export const TotalBalanceInUSD = () => {
  const { totalBalance, isErrorTotalBalance, isLoadingTotalBalance } =
    useTotalBalance();

  const chainContext = useChain(defaultChainName);
  const { status } = chainContext;

  const { mntlUsdValue, errorMntlUsdValue } = useMntlUsd();

  const isConnected = !(
    isLoadingTotalBalance ||
    isErrorTotalBalance ||
    status != "Connected" ||
    errorMntlUsdValue
  );

  const totalBalanceDisplay = fromChainDenom(totalBalance);

  const totalBalanceInUSDDisplay = BigNumber(totalBalanceDisplay)
    .multipliedBy(BigNumber(mntlUsdValue))
    .toFixed(defaultChainDenomExponent)
    .toString();

  return (
    <p className="caption2 text-gray">
      ${totalBalanceInUSDDisplay}&nbsp;{usdSymbol}
    </p>
  );
};