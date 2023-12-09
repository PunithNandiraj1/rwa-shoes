import { memo } from 'react';

import { useKycManager } from '@/hooks/blockchain/use-kyc-manager';

import Button from '../Button';

const KYCContainer = (): JSX.Element => {
    const { isKycPassed, isLoading, updateKyc } = useKycManager();

    const textColor = isKycPassed ? 'text-black' : 'text-red-600'; // Adjust the color as needed

    return (
        <div className="py-0 px-5 pl-20 text-lg font-semibold tracking-wide">
            {isLoading ? (
                <p className="mb-5">Loading</p>
            ) : (
                <p className={`${textColor} mb-5`}>
                    {isKycPassed ? 'KYC passed' : 'KYC not passed'}
                </p>
            )}
            {!isKycPassed && (
                <Button className="bg-main-color" onClick={updateKyc}> {/* Tailwind doesn't support CSS variables in class names */}
                    Pass KYC
                </Button>
            )}
        </div>
    );
};

export default memo(KYCContainer);
