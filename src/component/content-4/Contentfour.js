import React, { useState } from 'react'
import "./contentfour.css"

function Contentfour() {

  const [karuselone, setKaruselone] = useState(true);
  const [karuseltwo, setKaruseltwo] = useState(false);
  const [karuselthree, setKaruselthree] = useState(false);

  const karuselForward = () => {
    if (karuselone == true) {
      setKaruselone(false)
      setKaruseltwo(true)
      
    }else if (karuseltwo == true) {
      setKaruseltwo(false)
      setKaruselthree(true)
    }
    else if (karuselthree == true) {
      setKaruselthree(false)
      setKaruselone(true)
    }
  };

  const karuselBack = () => {
    if (karuselone == true) {
      setKaruselone(false)
      setKaruselthree(true)
      
    }else if (karuseltwo == true) {
      setKaruseltwo(false)
      setKaruselone(true)
    }
    else if (karuselthree == true) {
      setKaruselthree(false)
      setKaruseltwo(true)
    }
  };




  return (
    <div className='content4'>
      <div className='card-text'>
        <div className='text-space'></div>
        <div className='text-text'>
          <div className='center-text'>NELER YAPABİLECEĞİNİZİ <br /> GÖRMEYE <span className='big-text-four'>HAZIRLANIN</span>! </div>
        </div>
      </div>


      <div className='card-content'>
        
        <div className='karusel-div'>
          <div className='karusel-icon'>
            <button onClick={karuselBack}>
            <i class="fa-solid fa-chevron-left"></i>
            </button>
            
          </div>

          {karuselone ? <div className='genel-div'>
            <div className='karusel-div-img-one'></div>
            <div className='karusel-div-two'>
              <div className='karusel-div-text'>Gizlilik konusunda şüphelerin mi var?
                Bizde bu konuda çok endişeliyiz, özellikle de şu günlerde her yer veri
                sızıntısı ve verileri çalmak isteyen bazı kişiler ile doluyken.
                Lakin <span className='karusel-span'>Toddo.co</span> bu konuda rakiplerine göre bir adım daha önde.
                Bu konuda çok bir bilgimiz yok ama ekstra para verip tuttuğumuz
                güvenlik sistemleri yazılımcımız size birkaç blog yazacak.
                Umarım bunun için de ücret istemez!</div>
            </div>
            </div> : ""}

            {karuseltwo ? <div className='genel-div'>
            
            <div className='karusel-div-two-two'>
              <div className='karusel-div-text'>Kullanım kolaylığı konusunda da iddialıyız. 
              Ne söylerseniz söyleyin, hiç telefon kullanmayan birinin bile <span className='karusel-span'>Toddo.co</span> ile kullanım zorluğu 
              yaşayacağını düşünmüyoruz. Eğer sen başka bir düşünceye sahipsen bunu kanıtlamak için önce denemelisin,
               üye ol ve tüm işlevleri test et! Eksiklerimiz varsa iletişim kısmından bizimle iletişim kurmayı unutma. 
               Ne de olsa siz olmadan biz bir hiçiz!</div>
            </div>
            <div className='karusel-div-img-two'></div>
            </div> : ""}

            {karuselthree ? <div className='genel-div'>
            <div className='karusel-div-img-three'></div>
            <div className='karusel-div-two'>
              <div className='karusel-div-text'>Kendine özel tanımladığın güvenlik önlemleriyle hesabına 
              başkalarının erişmesine olanak tanıma! Ekstra güvenlik için e-posta ve telefon numaranı 
              doğrula ve senin iznin olmadan hesabına başkalarının giriş yapmasını önle. Çok yakında 
              Google Authenticator kullanmaya da başlayacağız ama önce bunun maliyetini araştırmamız 
              gerek. Malum <span className='karusel-span'>Toddo.co</span> olarak henüz çok küçük bir şirketiz!</div>
            </div>
            
            </div> : ""}

          

          

          <div className='karusel-icon'>
            <button onClick={karuselForward}>
              <i class="fa-solid fa-chevron-right"></i>
            </button>

          </div>

        </div>
        <div className='karusel-dot'>
          
          {karuselone ? <div className='dot-content'>
            <div className='dot-active'></div>
          <div className='dot2'></div>
          <div className='dot3'></div>
          </div> : ""}

            {karuseltwo ? <div className='dot-content'>
            <div className='dot1'></div>
          <div className='dot-active'></div>
          <div className='dot3'></div>
          </div> : ""}

            {karuselthree ? <div className='dot-content'>
            <div className='dot1'></div>
          <div className='dot2'></div>
          <div className='dot-active'></div>
          </div> : ""}
          
          
        </div>
  
      </div>

    </div>
  )
}

export default Contentfour

// className={`todo ${todo.completed ? "completed" : "notcompleted"} `