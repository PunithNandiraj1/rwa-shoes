import { FC } from 'react';

const Footer: FC = () => {
    return (
        <div className="mx-auto my-8 flex justify-center items-center text-sm font-normal z-10 max-w-[var(--max-width)] text-gray-600">
            {`EthIndia`} &#xa9; {`${new Date().getFullYear()} LuxRWA`}
        </div>
    );
};

export default Footer;
