import React, {useState} from "react";
import ContactContext from "./ContactContext";

const ContactContextProvider = ({children})=>{
    const [contact, setContact] = useState([]);
    
    return (
        <ContactContext.Provider value={{contact, setContact}} >
            {children}
        </ContactContext.Provider>
    );
}

export default ContactContextProvider;