import './Scss/App.scss';
import React from 'react';
import Main from './Components/Main/Main';
import { Provider as LangProvider } from './Context/Language/Language';
import { Provider as ThemeProvider } from './Context/Theme/Theme';
import { Provider as TokenProvider } from './Context/Token/Token';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <TokenProvider>
                    <ThemeProvider>
                        <LangProvider>
                            <Main />
                        </LangProvider>
                    </ThemeProvider>
                </TokenProvider>
            </BrowserRouter>
        </>
    );
}

export default App;