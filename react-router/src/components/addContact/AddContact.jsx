import React, {useContext, useState} from "react";
import ContactContext from "../../context/ContactContext";

const AddContact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(0);
    const [added, setAdded] = useState(false);

    // access global context
    const {contact, setContact} = useContext(ContactContext);

    // store values in global context
    const handleSubmit = (e) => {
        e.preventDefault();
        setContact([{firstName, lastName, age}, ...contact]);
        setFirstName("");
        setLastName("");
        setAge("");

        setAdded(true);
        setTimeout(()=>{
            setAdded(false);
        }, 2000);
    }

    return(
        <>
            <div className="bg-blue-200 ">
                <p className="text-3xl ">Add Contact</p>
                <form className="w-96 mx-auto mt-6 flex flex-col">
                    <div className="p-6 flex flex-col">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            id="firstname"
                            type="text"
                            value={firstName}
                            placeholder="First Name"
                            className="rounded-md p-2"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="p-6 flex flex-col">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            id="lastname"
                            type="text"
                            value={lastName}
                            placeholder="Last Name"
                            className="rounded-md p-2"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="p-6 flex flex-col">
                        <label htmlFor="age">Age</label>
                        <input
                            id="age"
                            type="number"
                            value={age}
                            placeholder="Age"
                            className="rounded-md p-2"
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <button 
                        className="bg-blue-950 w-32 mb-6 mx-auto text-white p-3 rounded-md"
                        onClick={handleSubmit}
                    >Submit</button>
                </form>
            </div>
            {added && <p className="w-56 mx-auto mt-12 p-4 bg-green-200 rounded">Contact added</p>}
        </>
    );
}

export default AddContact;