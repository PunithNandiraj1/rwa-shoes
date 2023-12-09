import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import main from '../../../public/assets/main.png';
import Button from '../Button';

const Main: React.FC = () => {
    const { push } = useRouter();

    const go = (url: string) => {
        return async () => await push(url);
    };

    return (
        <div className=" mx-10 flex flex-row max-w-full justify-between">
            <div className="flex flex-col text-center items-center justify-center gap-8">
                <span className="text-7xl">Transforming the Luxury Shoes Market with Web3 </span>
                <Button className="bg-black" onClick={go('/create')}>
                    Tokenise your property
                </Button>
            </div>
            <Image className="w-[820px]" src={main} alt="main" />

        </div>
    );
};

export default Main;
