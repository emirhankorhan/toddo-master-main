import React from 'react'
import "./footer.css"

function Footer() {
    return (
        <footer>
            
            <div className='conttt'>
                <div className='cont1'></div>
                <div className='cont2'>
                    <div className='cont2-2'>
                        <h1>SİTE</h1>
                        <p>Keşfet</p>
                        <p>Öğreticiler</p>
                        <p>Arşiv</p>
                    </div>

                </div>
                <div className='cont3'>
                    <div className='cont3-3'>
                        <h1>TOPLULUK</h1>
                        <p>Müşteriler</p>
                        <p>İş Verenler</p>
                        <p>Forum</p></div>
                </div>
                <div className='cont4'>
                    <div className='cont4-4'>
                        <h1>KAYNAK</h1>
                        <p>Kaynakları Gör</p>
                        <p>Yeni Varlıklar</p>
                        <p>Çerez Kullanımı</p>
                        </div>
                </div>
                <div className='cont5'>
                    <div className='cont5-5'>
                        <h1>ŞİRKET</h1>
                        <p>Hakkımızda</p>
                        <p>Şartlar ve Koşullar</p>
                        <p>Lisans Sözleşmesi</p>
                        <p>Gizlilik Politikası</p></div>
                </div>
                <div className='cont6'>
                    <div className='cont6-6'>
                        <div className='cont6yazi'>ABONE OL</div>
                        <input name='isim' type='text' placeholder='İsim'></input>
                        <input name='email' type='email' placeholder='E-Mail'></input>
                        <button>Gönder</button>
                    </div>

                </div>
            </div>

            <div className='altkisim'>
                <div className='altyazi'>Copyright © 2023, All Rights Reserved</div>
                <div className='altsimge'>
                    <div className='simg'><i class="fa-brands fa-instagram"></i></div>
                    <div className='simg'><i class="fa-brands fa-github"></i></div>
                    <div className='simg'><i class="fa-brands fa-linkedin"></i></div>
                    <div className='simg'><i class="fa-brands fa-twitter"></i></div>
                    <div className='simg'><i class="fa-brands fa-discord"></i></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer