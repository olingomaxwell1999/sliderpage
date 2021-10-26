import React from 'react';
import Banner from '../../components/banner/Banner';
import Navbar from '../../components/navbar/Navbar';
import './hompage.scss';
import List from '../../components/list/List';
import Footer from '../../components/footer/Footer';

const Hompage = () => {
    return (
        <div className="home">
           <Navbar/>
           <Banner/>
           <List/>
           <List/>
           <List/>
           <List/>
           <Footer/> 
        </div>
    )
}

export default Hompage;
