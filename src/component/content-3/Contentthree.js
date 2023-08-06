import React from 'react'
import "./contentthree.css"

function Contentthree() {
    return (
        <div className='content3'>
            <div className='three-content'>
                <div className='text1'>
                    <div className='number1'>10+</div>
                    <div className='baslik1'>Çok Özellikli Şablon</div>
                    <div className='yazi1'>Şablonları kullanarak zamandan tasarruf <br/> et ve kendine kullanım kolaylığı sağla. <br/> Ayrıca hepsi ücretsiz!</div>
                </div>
                <div className='text2'>
                    <div className='number2'>5+</div>
                    <div className='baslik2'>Kullanışlı Ek İşlev</div>
                    <div className='yazi2'>Toddo.co çok kullanışlı ek işlevler ile <br/> donatılmıştır. Bunları kullanmak için önünde<br></br> hiçbir engel yok. Hemen başla!</div>
                </div>
                <div className='text3'>
                <div className='number3'>35+</div>
                    <div className='baslik3'>İşletme Çözümleri</div>
                    <div className='yazi3'>İşletmenizi önemsiyoruz. Sizin için <br/> hazırladığımız küçük yönetici ipuçlarına <br/> göz atmayı unutmayın!</div>
                </div>
            </div>
            <div className='button-content'>
                <a href='morebilgi' className='buttonccc'><i class="fa-solid fa-bolt fa-beat"></i> &nbsp;  Daha Fazla Bilgi</a>
            </div>
        </div>
    )
}

export default Contentthree