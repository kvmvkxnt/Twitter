import React from 'react';

const Context = React.createContext();

function Provider({children}) {
    const [lang, setLang] = React.useState(window.localStorage.getItem('lang') || 'eng')
    React.useEffect(()=>{
        window.localStorage.setItem('lang', lang);
    }, [lang]);
    return <Context.Provider value={{lang, setLang}}>{children}</Context.Provider>
}

export { Context, Provider };