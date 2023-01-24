import React, { useState } from "react";
import AllValidators from "../components/AllValidators";
import DelegatedValidators from "../components/DelegatedValidators";
import Tooltip from "../components/Tooltip";
import { useAllValidators, useDelegatedValidators } from "../data";
import useStakeReducer from "../data/useStakeReducer";
import StakedToken from "../views/StakedToken";
import ScrollableSectionContainer from "../components/ScrollableSectionContainer";
import Head from "next/head";

export default function Stake() {
  const [searchValue, setSearchValue] = useState("");
  const { stakeDispatch, stakeState } = useStakeReducer();
  const [showClaimError, setShowClaimError] = useState(false);
  const [activeValidators, setActiveValidators] = useState(true);
  const [delegated, setDelegated] = useState(false);
  const { allValidators, isLoadingValidators, errorValidators } =
    useAllValidators();
  const {
    delegatedValidators,
    totalDelegatedAmount,
    isLoadingDelegatedAmount,
    errorDelegatedAmount,
  } = useDelegatedValidators();
  let validatorsArray = allValidators.sort((a, b) => b.tokens - a.tokens);
  console.log(allValidators, delegatedValidators);

  //Put all foundation nodes at the end of the array
  validatorsArray.forEach((item, index) => {
    if (item?.description?.moniker?.includes("Foundation Node")) {
      validatorsArray.push(validatorsArray.splice(index, 1)[0]);
    }
  });

  //Calculate total tokens to calculate voting power
  const totalTokens = validatorsArray.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue.tokens),
    0
  );

  // transaction manifest modal states and functions
  const GasOptions = [
    {
      name: "Zero",
      usd: "0.0000",
      mntl: "0.0000",
    },
    {
      name: "Low",
      usd: "0.0000",
      mntl: "0.0000",
    },
    {
      name: "High",
      usd: "0.0000",
      mntl: "0.0000",
    },
  ];
  const [SelectedGasFee, setSelectedGasFee] = useState(GasOptions[0].name);
  const [ManifestShowAdvanced, setManifestShowAdvanced] = useState(false);
  const [ManifestKeystorePassword, setManifestKeystorePassword] = useState();
  const [ManifestCustomGas, setManifestCustomGas] = useState();
  const handleManifestConfirm = () => {
    console.log("Confirming transaction manifest");
  };

  return (
    <>
      <Head>
        <title>Stake | MantleWallet</title>
      </Head>
      <section className="row h-100">
        <div className="col-12 col-lg-8 h-100">
          <div
            className="bg-gray-800 p-3 rounded-4 d-flex flex-column gap-2"
            style={{ height: "90%" }}
          >
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="card-title body1 text-primary my-auto">
                Validators
              </div>
              <div className="btn-group">
                <button
                  className={`${
                    activeValidators ? "btn btn-primary" : "btn btn-inactive"
                  } caption`}
                  onClick={() => setActiveValidators(true)}
                >
                  Active
                </button>
                <button
                  className={`${
                    !activeValidators ? "btn btn-primary" : "btn btn-inactive"
                  } caption`}
                  onClick={() => setActiveValidators(false)}
                >
                  Inactive
                </button>
              </div>
            </div>
            <div
              className="d-flex flex-column w-100 nav-bg p-2 rounded-4 flex-grow-1"
              style={{ height: "88%" }}
            >
              <div className="d-flex align-items-center gap-3 w-100">
                <div
                  className="d-flex gap-2 am-input border-color-white rounded-3 py-1 px-3 align-items-center"
                  style={{ flex: "1" }}
                >
                  <span
                    className="input-group-text bg-t p-0 h-100"
                    id="basic-addon1"
                    style={{ border: "none" }}
                  >
                    <i className="bi bi-search text-white"></i>
                  </span>
                  <input
                    type="text"
                    className="am-input bg-t p-1 w-100 h-100"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    style={{ border: "none" }}
                  />
                </div>
                <div
                  className="d-flex gap-2 align-items-center"
                  onClick={() => {
                    setDelegated((prev) => !prev);
                    stakeDispatch({ type: "EMPTY_SELECTED_VALIDATORS" });
                  }}
                >
                  Delegated
                  <Tooltip description="Showcase a list of all validators that you have ever delegated tokens with." />
                  <button
                    className={`d-flex rounded-4 align-items-center transitionAll ${
                      delegated
                        ? "bg-yellow-100 justify-content-end"
                        : "bg-theme-white justify-content-start"
                    }`}
                    style={{ width: "40px", padding: "2px" }}
                  >
                    <div className="p-2 rounded-4 bg-dark-200"></div>
                  </button>
                </div>
              </div>
              <div className="w-100 mt-3 h-100" style={{ overflow: "auto" }}>
                <table
                  className="table"
                  style={{ width: "max-content", minWidth: "100%" }}
                >
                  <thead
                    className="position-sticky top-0 nav-bg"
                    style={{
                      zIndex: "200",
                    }}
                  >
                    <tr className="caption2 text-white">
                      <th></th>
                      {activeValidators ? (
                        <th scope="col" style={{ whiteSpace: "nowrap" }}>
                          Rank
                        </th>
                      ) : null}
                      <th
                        colSpan="2"
                        scope="col"
                        style={{ whiteSpace: "nowrap", marginRight: "20px" }}
                      >
                        Validator Name
                      </th>
                      <th scope="col" style={{ whiteSpace: "nowrap" }}>
                        Voting Power
                      </th>
                      <th scope="col" style={{ whiteSpace: "nowrap" }}>
                        Commission
                      </th>
                      {delegated ? null : (
                        <th scope="col" style={{ whiteSpace: "nowrap" }}>
                          Delegations
                        </th>
                      )}
                      <th scope="col" style={{ whiteSpace: "nowrap" }}>
                        Delegated Amount
                      </th>
                      {activeValidators ? null : (
                        <th scope="col" style={{ whiteSpace: "nowrap" }}>
                          Jailed
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {delegated ? (
                      <DelegatedValidators
                        delegatedValidators={delegatedValidators}
                        searchValue={searchValue}
                        setShowClaimError={setShowClaimError}
                        stakeDispatch={stakeDispatch}
                        stakeState={stakeState}
                        activeValidators={activeValidators}
                        totalTokens={totalTokens}
                      />
                    ) : (
                      allValidators.length !== 1 &&
                      allValidators && (
                        <AllValidators
                          delegatedValidators={delegatedValidators}
                          setShowClaimError={setShowClaimError}
                          searchValue={searchValue}
                          stakeDispatch={stakeDispatch}
                          stakeState={stakeState}
                          validatorsArray={validatorsArray}
                          activeValidators={activeValidators}
                          totalTokens={totalTokens}
                        />
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <ScrollableSectionContainer className="col-12 col-lg-4">
          <StakedToken
            stakeState={stakeState}
            stakeDispatch={stakeDispatch}
            showClaimError={showClaimError}
            setShowClaimError={setShowClaimError}
            totalTokens={totalTokens}
            selectedValidators={stakeState?.selectedValidators}
          />
        </ScrollableSectionContainer>
      </section>
    </>
  );
}
