import { FC, useEffect, useState } from 'react';

import ProfileInfo from '@/components/ProfileInfo';
import ProfileCards from '@/components/PropertyCards';

const Profile: FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="flex flex-col justify-start gap-20 min-h-[calc(100vh-241px)]">
            <div className="p-5 bg-gray-200 rounded-lg shadow-lg">
                {isClient && <ProfileInfo />}
            </div>
            {isClient && <ProfileCards />}
        </div>
    );
};

export default Profile;
