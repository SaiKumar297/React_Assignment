import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const LocationCard: React.FC = () => {
    return (
        <div className="p-4 w-80">
            <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500 mr-2" />
                <input
                    type="text"
                    placeholder="Enter Your Location"
                    className="flex-grow border-b-2 border-gray-300 p-2 focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faInfoCircle} className="text-gray-500 mr-2" />
                <p className="text-gray-600 text-sm">
                    Your location will help us serve better and extend a personalised experience.
                </p>
            </div>
            <div className="flex items-center mb-4">
                <p className="text-gray-700 font-semibold">RECOMMENDED GROUPS</p>
            </div>
            <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                    <img src="https://dont-copy.netlify.app/assets/recGroup1-JHI-0zi5.jpg" alt="Leisure Icon" className="w-8 h-8 rounded-full mr-2" />
                    <span className="text-gray-700">Leisure</span>
                    <button className="bg-gray-200 text-black px-3 py-1 rounded">Follow</button>
                </div>
                <div className="flex justify-between items-center">
                    <img src="https://dont-copy.netlify.app/assets/recGroup2-A2R6AKaI.jpg" alt="Activism Icon" className="w-8 h-8 rounded-full mr-2" />
                    <span className="text-gray-700">Activism</span>
                    <button className="bg-gray-200 text-black px-3 py-1 rounded">Follow</button>
                </div>
                <div className="flex justify-between items-center">
                    <img src="https://dont-copy.netlify.app/assets/recGroup3-AxHGDmNo.jpg" alt="MBA Icon" className="w-8 h-8 rounded-full mr-2" />
                    <span className="text-gray-700">MBA</span>
                    <button className="bg-gray-200 text-black px-3 py-1 rounded">Follow</button>
                </div>
                <div className="flex justify-between items-center">
                    <img src="https://dont-copy.netlify.app/assets/recGroup4-cA6Wedko.jpg" alt="Philosophy Icon" className="w-8 h-8 rounded-full mr-2" />
                    <span className="text-gray-700">Philosophy</span>
                    <button className="bg-gray-200 text-black px-3 py-1 rounded">Follow</button>
                </div>
            </div>
        </div>
    );
};

export default LocationCard;
