import React from "react";

const Header = () => {
    return (
        <div className="bg-teal-300">
            <h1 className="text-cyan-950 text-4xl font-serif italic font-bold antialiased pl-5">Traveler Life</h1>
            <ul className="text-violet-600 font-semibold flex justify-self-end mr-20 space-x-7 > * + *">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Destination</a></li>
                <li><a href="#">Packages</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header;