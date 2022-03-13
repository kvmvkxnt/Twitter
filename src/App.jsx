import './Scss/App.scss';
import React from 'react';
import Main from './Components/Main/Main';
import { Provider as LangProvider } from './Context/Language/Language';
import { Provider as ThemeProvider } from './Context/Theme/Theme';

function App() {
    return (
        <>
            <ThemeProvider>
                <LangProvider>
                    <Main />
                </LangProvider>
            </ThemeProvider>
        </>
    );
}

export default App;