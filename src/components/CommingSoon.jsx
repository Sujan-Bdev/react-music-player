import React from 'react';
import broken from "assets/img/commingsoon/CommingSoon.svg";

const CommingSoon = () => {
    return (
        <div className = "comming-soon">
        <img src = {broken} alt = "comming-soon" className = "comming-soon__img"/>
        <h2 className = "comming-soon__text">comming soon</h2>
            
        </div>
    )
}

export default CommingSoon
