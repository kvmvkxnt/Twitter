import React from 'react';

const Context = React.createContext();

function Provider({ children }) {
    const [theme, setTheme] = React.useState(window.localStorage.getItem('theme') || 'light');
    React.useEffect(() => {
        window.localStorage.setItem('theme', theme);
        window.document.body.className = `body ${theme === 'dark' ? 'body--dark' : ''}`
    }, [theme]);

    return <Context.Provider value={{theme, setTheme}}>{children}</Context.Provider>
}

export { Context, Provider };