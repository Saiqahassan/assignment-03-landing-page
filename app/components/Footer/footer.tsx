import React from "react";

const Footer = () => {
    return (
        <div className="bg-teal-300 text-white font-bold absolute inset-x-0 margin-bottom-0 pb-1.5">
            <ul className="text-violet-600 text-bold flex gap-x-12 justify-center">
                <li>Support</li>
                <li>Location</li>
            
            </ul>
            
            <p className="text-violet-600 text-center">&copy;2024 Traveler Life. All rights reserved</p>
        </div>
    )
}

export default Footer;