import React from 'react'
import "./notification.css"
function Notification({ noti, key }) {
 
  let icondiv;

  if (noti.notificationText.includes('alımı yaptınız')) {
    icondiv = <div className='noti-ico-product-add-div'></div>;
  }else if(noti.notificationText.includes('adlı ürünü stoğunuza eklediniz')){
    icondiv = <div className='noti-ico-stock-add-div'></div>;
  }else if(noti.notificationText.includes('satışı yaptınız')){
    icondiv = <div className='noti-ico-stock-add-div'></div>;
  }else if(noti.notificationText.includes('Tüm ürünlerinizi sildiniz!')){
    icondiv = <div className='noti-ico-delete-all-div'></div>;
  }else if(noti.notificationText.includes('adlı ürünü stoğunuzdan sildiniz')){
    icondiv = <div className='noti-ico-delete-div'></div>;
  }
  // switch (noti.notificationText.includes()) {
  //   case :
     
  //     break;

  //   case :
      
  //     break;

  //     case :
        
  //       break;

  //   case :
      
  //     break;

  //   default:
  //     icondiv = <div className='noti-ico-div'></div>;
  // }
  return (
    <div className='notification-container'>
      {icondiv}
      <div key={noti.id} className='noti-text-div'>{noti.notificationText}</div>
      <div className='noti-btn-div'>
        <a className='noti-a-tag' href="/setting"><button className="noti-detail-btn"></button></a>
      </div>
    </div>
  )
}

export default Notification