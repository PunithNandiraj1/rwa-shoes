import { FC } from 'react';

import MarketCards from '@/components/MarketCards';

const Market: FC = () => {
    return (
        <div className="flex flex-col justify-between gap-24">
            <div>
                <MarketCards />
            </div>
        </div>
    );
};

export default Market;
