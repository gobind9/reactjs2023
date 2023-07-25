import React from 'react';
import ReactDOM  from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

/*
header
    logo
    nav links
Body
    searchBar
    product
Footer
    CopyRight
    footer links
*/


const AppLayout = () => {
return (<div className='app'>

    <Header/>
    <Body/>
    <Footer/>
</div>);
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);
