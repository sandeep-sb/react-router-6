import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-full bg-sky-500 ">
            <nav>
                <ul className="flex justify-around">
                        <Link 
                            to={"/"}
                            className="hover:bg-sky-600 p-6"
                        >Home</Link>
                        <Link 
                            to={"/add-contact"}
                            className="hover:bg-sky-600 p-6"
                        >Add Contact</Link>
                        <Link 
                            className="hover:bg-sky-600 p-6" 
                            to={"/show-contacts"}
                        >Show Contacts</Link>
                </ul>
            </nav>
        </div>
    );
}

export default Header;