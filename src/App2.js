import logo from './logo.svg';
import './App.css';

import consola from 'consola';


function App() {
    const today = new Date();
    const date = today.getFullYear();

    const renderButton = function() {
        consola.success('Ok, hai cliccato qui')
    };

    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        button onClick = { renderButton } > Clicca qui < /button> <
        /header> <
        main >
        <
        h1 > My First React < /h1> <
        /main> <
        footer > Copyright by Me { date } < /footer> <
        /div>
    );
}

export default App;