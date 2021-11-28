import React from 'react';
import logo from '../assets/img/logo.png';
import './navbar.css';


class Navbar extends React.Component{

    constructor(props){
        super(props);

this.navSlide  = this.navSlide.bind(this);


    }


navSlide = () => {

        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.menu_links');
        const navLinks = document.querySelectorAll('.menu_links li');
    
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
    
            navLinks.forEach((link, index) => {
                if (link.getElementsByClassName.animation) {
                    link.getElementsByClassName.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards 
                ${index / 7 + 1}s`;
                }
    
            });
    
    
            // burger animation
            burger.classList.toggle('toggle_line');
        });
        }
    
        // navSlide();


  
render(){
    return(

        <header className="header">
        <nav>
            <div className="logo">
                <a href="/">
                    <img src={logo} alt="Logo" /></a>
            </div>
    
            <ul className="menu_links">
                <li><a href="/">Ideja</a></li>
                <li><a href="/">Piesaki Sapni</a></li>
                <li><a href="/">Uzņēmējiem</a></li>
                <li><a href="/">Sapņu banka</a></li>
                <li><a href="/">Sapņus atbalsta</a></li>
                <li><a href="/">99 Iedvesmas stāsti</a></li>
                <li>
                    <div className="lang_menu">
                        <div className="selected_lang">
                            LV
                        </div>
                        <ul>
                            <li>
                                <a href="/" class="lv">LV</a>
                            </li>
                            <li>
                                <a href="/" class="en">EN</a>
                            </li>
                            <li>
                                <a href="/" class="ru">RU</a>
                            </li>
    
                        </ul>
                    </div>
                </li>
            </ul>
            <div className="burger" onClick={this.navSlide}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    </header>



    )


    }

}


export default Navbar;