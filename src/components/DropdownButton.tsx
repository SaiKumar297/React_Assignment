import React, { useState } from 'react';

const DropdownButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block">
            <button className="text-2xl bg-none border-none cursor-pointer p-0 m-0 leading-none" onClick={handleToggle}>...</button>
            {isOpen && (
                <div className="absolute top-full right-0 bg-white border border-gray-200 shadow-lg rounded mt-1 min-w-max z-10">
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">Edit</button>
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">Report</button>
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">Option 3</button>
                </div>
            )}
        </div>
    );
};

export default DropdownButton;
