import './VoucherCard.css';
import React from 'react';
export const VoucherCard = ({ datavou }) => {
    return (
      <div className='voucher_card' style={{ backgroundColor: datavou.style }}>
        <img src={datavou.img} alt="Voucher" />
        <div className="vouright">
        <h2 className='vou-text1'>{datavou.voutext1}</h2>
        <h2 className='vou-text2'>{datavou.voutext2}</h2>
        <h4 className='vou-text3'>{datavou.voutext3}<span>{datavou.discount}</span></h4>
        <button className='vou_button'><h3>Кликните сюда</h3></button>
        </div>
       
      </div>
    );
  };


