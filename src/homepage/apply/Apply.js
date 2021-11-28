import React from 'react';
import './apply.css';


function Apply(){

    return(
        <div className="apply">
        <div className="apply_item_left">
            <h2 className="apply_title_left">
                VĒLIES PIEPILDĪT SAVU SAPNI?
            </h2>
            <button className="apply_btn_left">
                <a href="/"> Sapņotājiem</a>
            </button>
        </div>
        <div className="apply_item_right">
            <h2 className="apply_title_right">
                VĒLIES PALĪDZĒT KĀDĀM PIEPILDĪT SAPNI?
            </h2>
            <button className="apply_btn_right">
                <a href="/"> Uzņēmējiem</a>
            </button>
        </div>
    </div>
    )
}

export default Apply;