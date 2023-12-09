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
        <div className="flex flex-row justify-between">
            <Image className="rounded-lg" src={main} alt="main" />
            <div className="flex flex-col text-left items-center justify-center gap-5">
                <span className="text-lg">Start your journey now!</span>
                <Button className="bg-white" onClick={go('/create')}>
                    Tokenise your property
                </Button>
            </div>
        </div>
    );
};

export default Main;
