"use client";

import { Button, Icon, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { WalletStatus } from "@cosmos-kit/core";
import React from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { IoWallet } from "react-icons/io5";

export const ConnectWalletButton = ({
  buttonText,
  isLoading,
  isDisabled,
  icon,
  onClickConnectBtn,
}) => {
  return (
    <Button
      w="full"
      minW="fit-content"
      size="lg"
      isLoading={isLoading}
      isDisabled={isDisabled}
      bgImage="linear-gradient(109.6deg, rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1%)"
      color="white"
      opacity={1}
      transition="all .5s ease-in-out"
      _hover={{
        bgImage:
          "linear-gradient(109.6deg, rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1%)",
        opacity: 0.75,
      }}
      _active={{
        bgImage:
          "linear-gradient(109.6deg, rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1%)",
        opacity: 0.9,
      }}
      onClick={onClickConnectBtn}
    >
      <Icon as={icon ? icon : IoWallet} mr={2} />
      {buttonText ? buttonText : "Connect Wallet"}
    </Button>
  );
};

export const Disconnected = ({ buttonText, onClick }) => {
  return (
    <ConnectWalletButton buttonText={buttonText} onClickConnectBtn={onClick} />
  );
};

export const Connected = ({ buttonText, onClick }) => {
  return (
    <ConnectWalletButton buttonText={buttonText} onClickConnectBtn={onClick} />
  );
};

export const Connecting = () => {
  return <ConnectWalletButton isLoading={true} />;
};

export const Rejected = ({ buttonText, wordOfWarning, onClick }) => {
  const bg = useColorModeValue("orange.200", "orange.300");

  return (
    <Stack>
      <ConnectWalletButton
        buttonText={buttonText}
        isDisabled={false}
        onClickConnectBtn={onClick}
      />
      {wordOfWarning && (
        <Stack
          isInline={true}
          borderRadius="md"
          bg={bg}
          color="blackAlpha.900"
          p={4}
          spacing={1}
        >
          <Icon as={FiAlertTriangle} mt={1} />
          <Text>
            <Text fontWeight="semibold" as="span">
              Warning:&ensp;
            </Text>
            {wordOfWarning}
          </Text>
        </Stack>
      )}
    </Stack>
  );
};

export const Error = ({ buttonText, wordOfWarning, onClick }) => {
  const bg = useColorModeValue("orange.200", "orange.300");

  return (
    <Stack>
      <ConnectWalletButton
        buttonText={buttonText}
        isDisabled={false}
        onClickConnectBtn={onClick}
      />
      {wordOfWarning && (
        <Stack
          isInline={true}
          borderRadius="md"
          bg={bg}
          color="blackAlpha.900"
          p={4}
          spacing={1}
        >
          <Icon as={FiAlertTriangle} mt={1} />
          <Text>
            <Text fontWeight="semibold" as="span">
              Warning:&ensp;
            </Text>
            {wordOfWarning}
          </Text>
        </Stack>
      )}
    </Stack>
  );
};

export const NotExist = ({ buttonText, onClick }) => {
  return (
    <ConnectWalletButton
      buttonText={buttonText}
      isDisabled={false}
      onClickConnectBtn={onClick}
    />
  );
};

export const WalletConnectComponent = ({
  walletStatus,
  disconnect,
  connecting,
  connected,
  rejected,
  error,
  notExist,
}) => {
  switch (walletStatus) {
    case WalletStatus.Disconnected:
      return <>{disconnect}</>;
    case WalletStatus.Connecting:
      return <>{connecting}</>;
    case WalletStatus.Connected:
      return <>{connected}</>;
    case WalletStatus.Rejected:
      return <>{rejected}</>;
    case WalletStatus.Error:
      return <>{error}</>;
    case WalletStatus.NotExist:
      return <>{notExist}</>;
    default:
      return <>{disconnect}</>;
  }
};
