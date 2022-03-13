import React from 'react';

const Context = React.createContext();
function Provider({ children }) {
    const [token, setToken] = React.useState(window.localStorage.getItem('token') || null);
    React.useEffect(() => {
        window.localStorage.setItem('token', token);
    }, [token]);
    return <Context.Provider value={{ token, setToken }}>{children}</Context.Provider>
}

export { Context, Provider };