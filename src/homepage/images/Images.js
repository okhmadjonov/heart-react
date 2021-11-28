import React from 'react';
import './images.css';
import top from '../../assets/img/top.png';
import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/img3.jpg';
import img4 from '../../assets/img/img4.jpg';
import img5 from '../../assets/img/img5.jpg';
import bottom from '../../assets/img/bottom.png';


const myStyle = {
    display: "grid",
    gridTemplateRows: "1fr 1fr"
};

function Images(){
    return(
        <div className="images">
            <div className="images_top">
                <img src={top} alt="Top" />
            </div>
            <div className="image_items">

                <div className="item">
                    <img src={img1} alt="Woman"/>
                </div>
                <div className="item">
                    <img src={img2} alt="Woman"/>
                </div>
                <div className="item" style={myStyle}>
                    <img src={img3}  style={{height:"100%"}} alt="Woman" />
                    <img src={img4} style={{height:"100%"}} alt="Woman" />
                </div>
                <div className="item">
                    <img src={img5} alt="Woman" />
                </div>
            </div>
            <div className="images_bottom">
                <img src={bottom} alt="Bottom" />
            </div>
        </div>
    )
}

export default Images;