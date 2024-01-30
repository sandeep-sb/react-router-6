import React, { useContext, useId} from "react";
import ContactContext from "../../context/ContactContext";

const ShowContacts = () => {
    // fetch data from context api
    const {contact} = useContext(ContactContext);
    console.log(contact);
    
    return (
        <>
            <table className="w-full bg-blue-200">
                <thead className="bg-blue-300">
                    <tr>
                        <th className="w-1/3 p-5">First Name</th>
                        <th className="w-1/3 p-5">Last Name</th>
                        <th className="w-1/3 p-5">Age</th>
                    </tr>
                </thead>
                {contact && contact.map(c => (
                    <tbody key={useId()}>
                        <tr>
                            <td className="w-1/3 p-4">{c.firstName}</td>
                            <td className="w-1/3 p-4">{c.lastName}</td>
                            <td className="w-1/3 p-4">{c.age}</td>
                            
                        </tr>
                    </tbody>
                ))}
            </table>
        </>
    );
}

export default ShowContacts;