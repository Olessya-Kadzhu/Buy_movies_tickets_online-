import './Adv.css';
import React from 'react';
export const Adv =({dataadv})=>{
   return( 
   <div className='Adv' style={{ backgroundColor: dataadv.style }}>
    <div className='Adv_texts'>
    <div className='Adv_img'>
        <img src={dataadv.img} alt="" className='Adv_image' />
        </div>
        <div className='Adv_text'>
        <h1 className='adv-text1'>{dataadv.advtext1}</h1>
        <h2 className='adv-text2'>{dataadv.advtext2}</h2>
        <h4 className='adv-text3'>{dataadv.advtext3}</h4>
        <h3 className='adv-text4'>{dataadv.advtext4}<span>{dataadv.days}</span></h3>
        <button className='adv_button'>Кликните сюда</button>
        </div>
       
        </div>
   
    </div>);
};


