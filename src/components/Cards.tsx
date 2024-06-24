import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import DropdownButton from './DropdownButton';
import LocationCard from './LocationCard';
import Card2 from './Card2';
import Card3 from "./Card3";
import Card4 from './Card4';


const Card = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-8">
            <div className="flex flex-col md:flex-row p-4 rounded-md mb-8 w-full md:w-11/12 max-w-5xl bg-white">
                <div className="w-full md:w-2/3 pr-0 md:pr-4 border border-gray-300 mb-4 md:mb-0">
                    <img src="https://dont-copy.netlify.app/assets/nature-rDsfVg8l.jpg" className='card-image w-full object-cover h-48'/>
                    <h3 className="text-lg font-bold mt-4">✍️ Article</h3>
                    <div className='flex flex-row justify-between items-center'>
                        <h2 className="text-2xl font-semibold">What if famous brands had regular fonts? Meet RegulaBrands!</h2>
                        <DropdownButton />
                    </div>
                    <p className="mt-4">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                    <div className="profile flex items-center mt-4">
                        <img src="https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg" alt="Profile" className="profile-img w-12 h-12 rounded-full mr-4" />
                        <div>
                            <p className="profile-name font-semibold">Siddharth Goyal</p>
                            <div className='flex flex-row items-center'>
                                <FontAwesomeIcon icon={faEye} className="text-gray-600 text-sm mr-1" />
                                <p className="views text-gray-600">1.4k views</p>
                                <FontAwesomeIcon icon={faShareAlt} className="text-gray-600 text-sm ml-2" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="w-full md:w-1/3 pl-0 md:pl-4">
                    <LocationCard/>
                </div>
            </div>
            <Card2/>
            <Card3/>
            <Card4/>
        </div>
    );
};

export default Card;
