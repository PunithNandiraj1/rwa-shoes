import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/assets/logo.png';
import ConnectButton from '../ConnectButton';




const Header: FC = () => {
    return (
        <div className="my-8 mx-auto flex justify-between items-center text-sm w-full z-10 max-w-6xl shadow-md">
            <div className="flex items-center justify-center gap-8">
                <Link href={'/'} className="cursor-pointer flex text-center items-center relative m-0 text-lg p-4">
                    <Image className="w-[60px] h-[60px]" src={logo} alt={'Luxu'} />
                </Link>
                <Link className="cursor-pointer flex text-center items-center relative m-0 text-lg p-4" href={'market'}>
                    Market
                </Link>
            </div>
            <div>
                <ConnectButton />
            </div>
        </div>
    );
};

export default Header;