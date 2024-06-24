import React from "react";
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import {Link} from 'react-router-dom'


const Signin = () => {
    return (
        <>
            <p className='text-green-500 whitespace-nowrap'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            <hr className="my-4"/>
            <div className="flex flex-row">
                <div className="w-full md:w-1/2 p-4">
                    <h1 className="text-2xl font-bold mb-4">Create Account</h1>
                    <div className="mb-4 flex space-x-4">
                        <input type="text" placeholder="First Name" className="w-1/2 p-2 border rounded-md"/>
                        <input type="text" placeholder="Last Name" className="w-1/2 p-2 border rounded-md"/>
                    </div>
                    <div className="mb-4">
                        <input type="email" placeholder="Email" className="w-full p-2 border rounded-md"/>
                    </div>
                    <div className="mb-4">
                        <input type="password" placeholder="Password" className="w-full p-2 border rounded-md"/>
                    </div>
                    <div className="mb-4">
                        <input type="password" placeholder="Confirm password" className="w-full p-2 border rounded-md"/>
                    </div>
                    <button className="w-full py-2 mb-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">Create Account</button>
                    <button className="w-full py-2 mb-4 flex items-center justify-center border border-blue-500 rounded-md text-blue-500 hover:bg-blue-100">
                        <FaFacebookF className="mr-2"/> Sign Up with Facebook
                    </button>
                    <button className="w-full py-2 flex items-center justify-center border border-gray-500 rounded-md text-gray-500 hover:bg-gray-100">
                        <FcGoogle className="mr-2"/> Sign Up with Google
                    </button>
                </div>
                <div className="w-full md:w-1/2 p-4 text-center">
                    <p className="mb-4">Already have an account? <a href="#" className="text-blue-500">Sign In</a></p>
                    <img src="https://dont-copy.netlify.app/assets/signup-OCG-APNN.svg" alt="Sign Up Illustration" className="w-full"/>
                    <p className="mt-4 text-sm">By signing up, you agree to our <a href="#" className="text-blue-500">Terms & conditions</a>, <a href="#" className="text-blue-500">Privacy policy</a></p>
                </div>
            </div>
        </>
    )
}

export default Signin;
