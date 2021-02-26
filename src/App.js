
import './App.css';

import data from "./components/Data.js"

import Header from './components/Header';

import Footer from './components/Footer';

import Body from './components/Body';


function App() {
    return ( 
        <div className="App">
        <Header logo ={data.logo} name={data.name} />
            <Body 
            cover = {data.cover}
            title = {data.title}
            description = {data.description}
            products = {data.products}
            />
        <Footer company= {data.company} />
        </div>
    );
}

export default App;