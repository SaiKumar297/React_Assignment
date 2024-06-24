import React from "react";

const Header = () => {
    return (
        <>
            <div className="bg-cover bg-center h-96 relative" style={{ backgroundImage: 'url("https://i.pcmag.com/imagery/reviews/01DwPnq2ew5930qO5p4LXWH-1..v1677608790.jpg")' }}>
                <h1 className="absolute bottom-1/4 left-5 md:left-14 text-2xl md:text-4xl font-bold text-white">Computer Engineering</h1>
                <p className="absolute top-3/4 left-5 md:left-14 text-white">142,765 Computer Engineers follow this</p>
            </div>
        </>
    );
}

export default Header;
