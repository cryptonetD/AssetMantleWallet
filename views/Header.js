import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { RiKey2Fill } from "react-icons/ri";
import { TbUnlink } from "react-icons/tb";
import {
  BsWallet2,
  BsLink45Deg,
  BsCheckCircle,
  BsChevronDown,
} from "react-icons/bs";
import { BasicData } from "../data";
import ModalContainer from "../components/ModalContainer";
import ConnectModal from "./ConnectModal";

export default function Header({ Connected, setConnected }) {
  const [ConnectFlow, setConnectFlow] = useState();
  const [ConnectOption, setConnectOption] = useState("keplr");
  const ConnectOptionObject = {
    cosmostation: {
      icon: "/WalletIcons/cosmostation.png",
      name: "Cosmostation",
    },
    keplr: {
      icon: "/WalletIcons/keplr.png",
      name: "Keplr",
    },
    keystore: {
      icon: "/WalletIcons/keystore.png",
      name: "Keystore",
    },
    leap: {
      icon: "/WalletIcons/leap.png",
      name: "Leap",
    },
    ledger: {
      icon: "/WalletIcons/ledger.png",
      name: "Ledger",
    },
  };

  const profileRef = useRef();

  const dataSet = {
    profileImage: "/profile.avif",
    name: "User1234",
    balance: "0.34847",
    qrCode: "/qr-code.svg",
    address: "thequickbrownfoxjumpsoverthelazydogfIfthedogr",
  };

  const [Location, setLocation] = useState();
  const path = Location && Location.pathname;
  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocation(window.location);
    }
  }, [Location]);

  return (
    <>
      <header
        className="nav-bg position-sticky top-0 start-0 end-0"
        style={{ zIndex: "1000" }}
      >
        <div className="container-xxl d-flex align-items-center gap-3 p-3 px-4">
          <div
            className="d-flex position-relative"
            style={{ width: "min(196px,30%)", aspectRatio: "196/34" }}
          >
            <Image layout="fill" src={BasicData.logo} alt={BasicData.title} />
          </div>
          <nav className="navbar-nav d-flex align-items-center gap-3 flex-row gap-3 flex-grow-1 justify-content-between">
            <div className="d-flex gap-3 flex-row align-items-center">
              {React.Children.toArray(
                BasicData.navs.map((navItem) => (
                  <Link href={navItem.href}>
                    <a
                      className={`d-flex gap-1 align-items-center ${
                        navItem.variant
                      } text-white ${
                        path && path === navItem.href ? "active" : ""
                      } am-nav-item`}
                      target={navItem.target ? navItem.target : "_self"}
                    >
                      {navItem.icon && (
                        <span className="caption">{navItem.icon}</span>
                      )}
                      {navItem.title}
                      {navItem.endIcon && (
                        <span className="caption">{navItem.endIcon}</span>
                      )}
                    </a>
                  </Link>
                ))
              )}
            </div>
            <div className="d-flex gap-3 flex-row align-items-center">
              {React.Children.toArray(
                BasicData.rightNav.map((navItem) => (
                  <Link href={navItem.href}>
                    <a
                      className={`d-flex gap-1 align-items-center ${
                        navItem.variant
                      } text-white ${
                        path && path === navItem.href ? "active" : ""
                      } am-nav-item`}
                      target={navItem.target ? navItem.target : "_self"}
                    >
                      {navItem.icon && (
                        <span className="caption">{navItem.icon}</span>
                      )}
                      {navItem.title}
                      {navItem.endIcon && (
                        <span className="caption">{navItem.endIcon}</span>
                      )}
                    </a>
                  </Link>
                ))
              )}
              {Connected ? (
                <div className="nav-item dropdown">
                  <button
                    className="button-secondary nav-link d-flex gap-2 align-items-center dropdown-toggle am-nav-item py-1 px-3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ref={profileRef}
                  >
                    <div
                      className="position-relative rounded-circle"
                      style={{ width: "23px", aspectRatio: "1/1" }}
                    >
                      <Image
                        layout="fill"
                        className="rounded-circle"
                        src={
                          ConnectOptionObject[ConnectOption.toLowerCase()].icon
                        }
                        alt={
                          ConnectOptionObject[ConnectOption.toLowerCase()].name
                        }
                      />
                    </div>
                    {dataSet.address &&
                      `${dataSet.address.substring(
                        0,
                        5
                      )}...${dataSet.address.substring(
                        dataSet.address.length - 5,
                        dataSet.address.length
                      )}`}
                    <span className="rotatableIcon">
                      <BsChevronDown />
                    </span>
                  </button>
                  <div className="dropdown-menu nav-bg p-3 rounded-4 text-white">
                    <>
                      <div className="d-flex gap-3 py-3">
                        <div
                          className="rounded-circle position-relative"
                          style={{
                            width: "45px",
                            height: "45px",
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            src={dataSet.profileImage}
                            alt={dataSet.name}
                            layout="fill"
                          />
                        </div>
                        <div className="d-flex flex-column gap-0">
                          <h4 className="body2">{dataSet.name}</h4>
                          <p className="caption">{dataSet.balance} $MNTL</p>
                        </div>
                      </div>
                      <hr className="my-3" />
                      <div className="d-flex flex-column">
                        <div
                          className="position-relative mx-auto"
                          style={{
                            width: "min(140px, 100%)",
                            aspectRatio: "1/1",
                          }}
                        >
                          <Image
                            layout="fill"
                            src={dataSet.qrCode}
                            alt="QR code"
                          />
                        </div>
                        <button
                          className="d-flex align-items-center justify-content-center gap-2 text-center body2"
                          onClick={() =>
                            navigator.clipboard.writeText(dataSet.address)
                          }
                        >
                          {dataSet.address.substring(0, 9)}...
                          {dataSet.address.substring(
                            dataSet.address.length - 9,
                            dataSet.address.length
                          )}
                          <span className="text-primary">
                            <MdOutlineContentCopy />
                          </span>
                        </button>
                      </div>
                      <hr className="my-3" />
                      <div className="d-flex align-items-center justify-content-between gap-2 text-center caption">
                        <div className="d-flex align-items-center gap-1">
                          <div
                            className="position-relative"
                            style={{ width: "25px", aspectRatio: "1/1" }}
                          >
                            <Image
                              layout="fill"
                              src={
                                ConnectOptionObject[ConnectOption.toLowerCase()]
                                  .icon
                              }
                              alt={
                                ConnectOptionObject[ConnectOption.toLowerCase()]
                                  .name
                              }
                            />
                          </div>
                          {
                            ConnectOptionObject[ConnectOption.toLowerCase()]
                              .name
                          }
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <span className="text-success">
                            <BsCheckCircle />
                          </span>
                          Connected
                        </div>
                      </div>
                      <hr className="my-3" />
                      <button
                        className="d-flex align-items-center justify-content-center gap-2 text-center body2"
                        onClick={() => setConnected(false)}
                      >
                        <span className="text-primary">
                          <TbUnlink />
                        </span>
                        Disconnect
                      </button>
                    </>
                  </div>
                </div>
              ) : (
                <button
                  className="button-secondary d-flex gap-1 align-items-center am-nav-item py-1 px-3"
                  onClick={() => setConnectFlow(1)}
                >
                  <span className="text-primary">
                    <BsWallet2 />
                  </span>
                  Connect
                </button>
              )}
            </div>
          </nav>
        </div>
      </header>
      <ModalContainer active={ConnectFlow && true}>
        <ConnectModal
          isConnected={setConnected}
          step={ConnectFlow}
          setStep={setConnectFlow}
          byWallet={ConnectOption}
          setByWallet={setConnectOption}
          close={setConnectFlow}
        />
      </ModalContainer>
    </>
  );
}
