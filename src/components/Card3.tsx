import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye,faShareAlt, faCalendarAlt, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import DropdownButton from './DropdownButton';  

const Card3: React.FC = () => {
    return (
        <div className="flex flex-row p-4 rounded-md mb-8 w-11/12 max-w-5xl bg-white">
            {/* Left section for Card content */}
            <div className="w-2/3 pr-4 border border-gray-300">
                <img src="https://dont-copy.netlify.app/assets/car-kZ9O3U5Q.jpg" className='card-image w-full object-cover h-48'/>
                <h3 className="text-lg font-bold mt-4">🗓️ Meetup</h3>
                <div className='flex flex-row justify-between items-center'>
                    <h2 className="text-2xl font-semibold">Finance & Investment Elite Social Mixer @Lujiazui</h2>
                    <DropdownButton />
                </div>              
                <div className="flex flex-row justify-between w-2/3">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2"/>
                        <label>Fri, 12 Oct, 2018</label>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2"/>
                        <label>Ahmedabad, India</label>
                    </div>
                </div>

                <div className="flex justify-center mt-4">
                    <button className="px-4 py-2 bg-gray-200 text-red border border-white rounded-lg w-full transition duration-300 ease-in-out hover:bg-transparent hover:border-transparent">
                        Visit Website
                    </button>
                </div>
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
        </div>
    );
}

export default Card3;
