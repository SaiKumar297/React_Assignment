import JoinGroupButton from './JoinGroupButton';

const Body = () => {
    return (
        <>
            <div className="body1 flex flex-col md:flex-row items-center justify-between">
                <div className="main1 flex flex-wrap md:flex-nowrap gap-2 md:gap-4 mb-4 md:mb-0">
                    <a href='' className='a1 text-black text-lg md:text-xl font-bold'>
                        All Posts (32)
                    </a>
                    <a href='' className='a text-gray-600 hover:text-blue-500 hover:underline transition duration-300 ease-in-out'>
                        Article
                    </a>
                    <a href="" className='a text-gray-600 hover:text-blue-500 hover:underline transition duration-300 ease-in-out'>
                        Event
                    </a>
                    <a href="" className='a text-gray-600 hover:text-blue-500 hover:underline transition duration-300 ease-in-out'>
                        Education
                    </a>
                    <a href="" className='a text-gray-600 hover:text-blue-500 hover:underline transition duration-300 ease-in-out'>
                        Job
                    </a>
                </div>

                <div className='part2 flex flex-wrap md:flex-nowrap items-center justify-around gap-2 md:gap-4 mt-2 md:mt-0'>
                    <button className="custom-button bg-grey-800 text-black border border-black px-4 py-2 rounded-full flex items-center">
                        Write a Post <span className="down-arrow">▼</span>
                    </button>

                    <JoinGroupButton />
                </div>
            </div>
            <hr className="my-4" />
        </>
    )
}

export default Body;
