import { memo } from 'react';
import { useAccount, useBalance } from 'wagmi';

const decimalPlaces = 4;

const Balance = (): JSX.Element => {
    const { address } = useAccount();

    const {
        data,
        isError,
        isLoading: balanceLoading,
    } = useBalance({
        address: address,
    });

    if (balanceLoading) return <div>Fetching balance…</div>;
    if (isError) return <div>Error fetching balance</div>;
    const formattedBalance = data?.formatted
        ? Number.parseFloat(data?.formatted).toFixed(decimalPlaces)
        : '';
    return (
        <div className="py-5 px-5 pt-0 pl-20 text-lg font-semibold tracking-wide text-blue-600">
            <p>
                Balance: {formattedBalance} {data?.symbol}
            </p>
        </div>
    );
};

export default memo(Balance);
