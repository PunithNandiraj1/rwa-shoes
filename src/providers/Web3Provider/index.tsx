import { FC, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import {
  connectorsForWallets,
  darkTheme,
  getDefaultWallets,
  Locale,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  ledgerWallet,
  trustWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  goerli,
  mantleTestnet,
  polygonZkEvmTestnet,
  scrollSepolia,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

import '@rainbow-me/rainbowkit/styles.css';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [goerli, mantleTestnet, polygonZkEvmTestnet, scrollSepolia],
  [publicProvider()],
);

const projectId = 'kK5_RI8P5pPP3gFkxRAMh3QhdDB6NgJS';

const { wallets } = getDefaultWallets({
  appName: 'luxu',
  projectId,
  chains,
});

const appInfo = {
  appName: 'luxu',
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const Web3Provider: FC<PropsWithChildren> = ({ children }) => {
  const { locale } = useRouter() as { locale: Locale };

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          appInfo={appInfo}
          chains={chains}
          locale={locale}
          theme={darkTheme({
            accentColor: '#4F6BFF',
          })}
        >
          {children}
        </RainbowKitProvider>
      </WagmiConfig>

    </>
  );
};

export default Web3Provider;