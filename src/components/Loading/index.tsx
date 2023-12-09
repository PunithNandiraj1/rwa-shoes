import { FC } from 'react';

const Loading: FC = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="border-4 border-transparent border-t-4 border-t-blue-600 rounded-full w-4 h-4 animate-spin"></div>
        </div>
    );
};

export default Loading;