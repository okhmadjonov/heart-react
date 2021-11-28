import React from 'react';
import Banner from './banner/Banner';
import Description from './description/Description';
import Images from './images/Images';
import Apply from './apply/Apply';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import './homepage.css';
import Customer from './customers/Customer';



class Homepage  extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

render(){

    return(

        <>
            <Banner />
            <Description/>
            <Images />
            <Apply />
            <Contact />
            <Customer />
            <Footer />
        </>

    )


    }
}

export default Homepage;