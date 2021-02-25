// import logo from './logo.svg';
import './App.css';
import data from "./components/data.js"

import Header from './components/Header';

import Footer from './components/Footer';

import Body from './components/Body';



function App() {
    return ( 
        <div className="App">
        <Header logo ={data.logo} webSiteName={data.name} />
            <Body 
            cover = {data.cover}
            title = {data.title}
            description = {data.description}
            />
        <Footer company= {data.company} />
        </div>
    );
}

export default App;