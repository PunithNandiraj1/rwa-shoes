import { memo, useEffect, useState } from 'react';
import { Card, CardBody, CardFooter } from '@nextui-org/react';

import Carousel from '../Carousel';

const MarketCards = (): JSX.Element => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Create an array of objects with image groups and corresponding details
    const propertyDetails = [
        {
            images: ['/assets/Sneaker1.png', '/assets/Sneaker2.png'],
            title: 'Nike Air',
            location: 'Indonesia, Bali',
            objectPrice: '$20,000',
            tokenPrice: '$50'
        },
        {
            images: ['/assets/Sneaker3.png', '/assets/Sneaker4.png'],
            title: 'Nike Air Jordans',
            location: 'Beijing, China',
            objectPrice: '$40,000',
            tokenPrice: '$80'
        },
        {
            images: ['/assets/Sneaker5.png', '/assets/Sneaker6.png'],
            title: 'Adidas Rich ',
            location: 'Chennai , India',
            objectPrice: '$14,000',
            tokenPrice: '$30'
        },
        {
            images: ['/assets/Sneaker7.png', '/assets/Sneaker8.png'],
            title: 'Lavish Vuitton',
            location: 'Monaco, Monaco',
            objectPrice: '$140,000',
            tokenPrice: '$250'
        },
        {
            images: ['/assets/Sneaker9.png', '/assets/Sneaker10.png'],
            title: ' Gold Nike 2B',
            location: 'Maldives, Mald',
            objectPrice: '$100,000',
            tokenPrice: '$170'
        },
        {
            images: ['/assets/Sneaker11.png', '/assets/Sneaker12.png'],
            title: 'Nike Gold',
            location: 'Benaglurues, India',
            objectPrice: '$540,000',
            tokenPrice: '$700'
        },
        {
            images: ['/assets/Sneaker13.png', '/assets/Sneaker14.png'],
            title: 'Adidas Gold',
            location: 'Tokyo, Japan',
            objectPrice: '$400,000',
            tokenPrice: '$800'
        },
        {
            images: ['/assets/Sneaker15.png', '/assets/Sneaker16.png'],
            title: 'Heels Gold',
            location: 'Oslo , Norway ',
            objectPrice: '$640,000',
            tokenPrice: '$1700'
        },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-4 my-5">
            {isClient &&
                propertyDetails.map((property, index) => (
                    <Card shadow="sm" key={index} className="w-full sm:w-1/2 md:w-1/4 bg-gray-200 cursor-auto mb-4">
                        <CardBody className="w-full">
                            <Carousel images={property.images} />
                        </CardBody>
                        <CardFooter className="flex flex-col items-start gap-1 p-2">
                            <div>
                                <p className="text-gray-700 text-md">{property.title}</p>
                                <p className="text-gray-500 text-xs">{property.location}</p>
                            </div>
                            <div>
                                <p className="text-gray-700 text-sm">Object Price</p>
                                <p className="text-black text-md">{property.objectPrice}</p>
                            </div>
                            <div>
                                <p className="text-gray-700 text-sm">Token Price</p>
                                <p className="text-black text-md">{property.tokenPrice}</p>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
        </div>
    );
};

export default memo(MarketCards);
