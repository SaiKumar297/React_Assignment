import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserFriends, faMinus } from '@fortawesome/free-solid-svg-icons';

const JoinGroupButton = () => {
    const [joined, setJoined] = useState(false);

    const handleClick = () => {
        setJoined(!joined);
    };

    return (
        <button 
            className={`custom-button2 ${joined ? 'joined text-gray-600' : 'bg-blue-500 text-white'} px-4 py-2 rounded-full flex items-center`}
            onClick={handleClick}
        >
            <FontAwesomeIcon icon={joined ? faMinus : faPlus} className="icon mr-2" />
            <FontAwesomeIcon icon={faUserFriends} className="icon mr-2" />
            <span>{joined ? 'Leave group' : 'Join group'}</span>
        </button>
    );
};

export default JoinGroupButton;
