import React from 'react';

import tikum from '../../assets/img/customers/tikum.png';
import sem from '../../assets/img/customers/sem.png';
import citybee from '../../assets/img/customers/citybee.png';
import lo from '../../assets/img/customers/lo.png';
import top from '../../assets/img/top.png';
import './customer.css';



function Customer() {

return(
    <div className="customers">
    <div className="custom_top">
        <img src={top} alt="Customers" />
    </div>

    <div className="custom_title">
        <h2>ATBALSTĪTĀJI</h2>
    </div>
    <div className="custom_items">
        <div className="custom_item">
            <img src={tikum} alt="TIKUM" />
        </div>
        <div className="custom_item">
            <img src={sem} alt="SEM" />
        </div>
        <div className="custom_item">
            <img src={citybee} alt="CITYBEE" />
        </div>
        <div className="custom_item">
            <img src={lo} alt="LO" />
        </div>
    </div>
</div>

)

}


export default Customer;