import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar';

const theme = createTheme({
    palette: {
        primary: {
            main: '#EDD8BB',
        },
        secondary: {
            main: '#E2AA87',
        },
    },
});

function App() {
    return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <Navbar />
        </ThemeProvider>
    </div>
    );
}

export default App;
