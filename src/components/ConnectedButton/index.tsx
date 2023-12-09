import { FC } from 'react';
import { useRouter } from 'next/router';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import Avatar from '../Avatar';
import Button from "../Button";

const ConnectedButton: FC = () => {
  const { push } = useRouter();

  const go = (url: string) => {
    return async () => await push(url);


  };


  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }): JSX.Element => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
            className="flex items-center flex-row mx-5"
          >
            {((): JSX.Element => {
              if (!connected) {
                return (
                  <Button className="bg-main-color" onClick={openConnectModal}>
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button" className="...">
                    Wrong network
                  </button>
                );
              }

              return (
                <Button
                  variant="outline"
                  className="border-main-card-color"
                  onClick={go('/profile')}
                >
                  <div className="flex items-center flex-row mr-2.5 bg-white rounded-lg p-1.5 border-3 border-purple-600">
                    <Avatar profileImage={account.address} />
                    <span className="flex-1 text-main-text-color">
                      {account.displayName}
                    </span>
                  </div>
                </Button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ConnectedButton;
