import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    // loading data from json file
    const [conferences, setConferences] = useState([]);
    useEffect(() => {
        fetch('conferences.json')
            .then(res => res.json())
            .then(data => setConferences(data))
    }, [])

    const formatDate = (inputDate) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(inputDate).toLocaleDateString(undefined, options);
        return formattedDate;
    };

    const authInfo = {
        conferences,
        formatDate
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;