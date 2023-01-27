import React, { Suspense } from "react";
import { useChain } from "@cosmos-kit/react";
import {
  defaultChainSymbol,
  placeholderAvailableBalance,
  placeholderMntlUsdValue,
  defaultChainName,
} from "../../config";
import { fromDenom, useAvailableBalance, useMntlUsd } from "../../data";

const denomDisplay = defaultChainSymbol;

export const AvailableBalance = () => {
  console.log("inside AvailableBalance");
  const walletManager = useChain(defaultChainName);
  const { getSigningStargateClient, address, status } = walletManager;

  const { availableBalance, errorAvailableBalance, isLoadingAvailableBalance } =
    useAvailableBalance();
  const balanceDisplay =
    errorAvailableBalance || isNaN(fromDenom(availableBalance))
      ? placeholderAvailableBalance
      : fromDenom(availableBalance);

  return (
    <>
      {isLoadingAvailableBalance ? (
        <p>Loading...</p>
      ) : (
        <p className={status === "Connected" ? "caption" : "caption text-gray"}>
          {balanceDisplay}&nbsp;{denomDisplay}
        </p>
      )}
    </>
  );
};

export const AvailableBalanceUsd = () => {
  console.log("inside AvailableBalanceUsd");
  const walletManager = useChain(defaultChainName);
  const { getSigningStargateClient, address, status } = walletManager;

  const { availableBalance, errorAvailableBalance } = useAvailableBalance();

  const { mntlUsdValue, errorMntlUsdValue } = useMntlUsd();

  const balanceInUSDDisplay =
    errorMntlUsdValue ||
    errorAvailableBalance ||
    isNaN(fromDenom(availableBalance)) ||
    isNaN(parseFloat(mntlUsdValue))
      ? placeholderMntlUsdValue
      : (fromDenom(availableBalance) * parseFloat(mntlUsdValue))
          .toFixed(6)
          .toString();

  return (
    <Suspense fallback={<span className="placeholder col-7"></span>}>
      {" "}
      <p className="caption2 text-gray">${balanceInUSDDisplay}&nbsp;$USD</p>
    </Suspense>
  );
};
