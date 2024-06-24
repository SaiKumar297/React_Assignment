import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Signin from './Signin';

const NavBar = () => {
    const popupStyle = {
        width: '66%',
        margin: 'auto', 
        marginTop: '20%',
        marginRight:'20%', 
        left: '0',
        right: '0',
        borderRadius: '8px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4">
            <img src="https://atghelp.wordpress.com/wp-content/uploads/2017/02/logo-in.png?w=774&h=178&crop=1" alt="ATG Logo" className="w-1/2 md:w-1/6 mb-4 md:mb-0" />

            <div className="text-center mx-auto mb-4 md:mb-0">
                <div className="relative w-full max-w-xs">
                    <input type="text" placeholder="&#xf002; Search for your favourite groups in ATG" className="w-full bg-gray-200 text-gray-800 rounded-full py-2 px-4 focus:outline-none focus:bg-white focus:border-blue-500 border border-transparent"/>
                </div>
            </div>

            <div>
                <Popup
                    trigger={<button><h6 className="text-sm">Create Account. <span className="text-blue-500">It's Free!</span></h6></button>}
                    contentStyle={popupStyle}
                    position="center center" 
                >
                    <div>
                        <Signin />
                    </div>
                </Popup>
            </div>
        </div>
    );
};

export default NavBar;
