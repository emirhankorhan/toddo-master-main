import React from 'react'
import "./dashtodo.css"

function Dashtodo({key, todo, settos}) {

  let icon;
    switch (todo.inputCategory) {
        case 'Cep Telefonları':
            icon = <i class="fa-solid fa-mobile-screen-button"></i>;
            break;

        case 'Dizüstü Bilgisayarlar':
            icon = <i class="fa-solid fa-laptop"></i>;
            break;

        case 'Masaüstü Bilgisayarlar':
            icon = <i class="fa-solid fa-desktop"></i>;
            break;

        case 'Giyilebilir Teknoloji':
            icon = <i class="fa-solid fa-hand-sparkles"></i>;
            break;

        case 'Şarj Aletleri':
            icon = <i class="fa-solid fa-bolt"></i>;
            break;

        case 'Hoparlörler':
            icon = <i class="fa-solid fa-volume-low"></i>;
            break;

        case 'Depolama Cihazları':
            icon = <i class="fa-solid fa-sim-card"></i>;
            break;

        case 'Ekran Koruyucular':
            icon = <i class="fa-regular fa-note-sticky"></i>;
            break;

        case 'Tabletler':
            icon = <i class="fa-solid fa-tablet-screen-button"></i>;
            break;

        case 'Yazıcılar':
            icon = <i class="fa-solid fa-print"></i>;
            break;

        case 'Projeksiyonlar':
            icon = <i class="fa-solid fa-mobile-screen-button"></i>;
            break;

        case 'Yataklar':
            icon = <i class="fa-solid fa-bed"></i>;
            break;

        case 'Mutfak Gereçleri':
            icon = <i class="fa-solid fa-kitchen-set"></i>;
            break;

        case 'Halı ve Kilim':
            icon = <i class="fa-solid fa-rug"></i>;
            break;

        case 'Küçük Ev Aletleri':
            icon = <i class="fa-solid fa-blender"></i>;
            break;

        case 'Mobilyalar':
            icon = <i class="fa-solid fa-couch"></i>;
            break;

        case 'Bahçe Dekorasyonu':
            icon = <i class="fa-solid fa-tree"></i>;
            break;

        case 'Tarım Aletleri':
            icon = <i class="fa-solid fa-tractor"></i>;
            break;

        case 'Beyaz Eşyalar':
            icon = <i class="fa-solid fa-toilet-portable"></i>;
            break;

        case 'Televizyonlar':
            icon = <i class="fa-solid fa-tv"></i>;
            break;

        case 'İlaç ve Vitamin':
            icon = <i class="fa-solid fa-capsules"></i>;
            break;

        case 'Kamp Malzemeleri':
            icon = <i class="fa-solid fa-tent"></i>;
            break;

        case 'Bisikletler':
            icon = <i class="fa-solid fa-bicycle"></i>;
            break;

        case 'Scooterlar':
            icon = <i class="fa-solid fa-person-biking"></i>;
            break;

        case 'Spor Aletleri':
            icon = <i class="fa-solid fa-dumbbell"></i>;
            break;

        case 'Motosikletler':
            icon = <i class="fa-solid fa-motorcycle"></i>;
            break;

        case 'Makyaj Malzemeleri':
            icon = <i class="fa-solid fa-eye-dropper"></i>;
            break;

        case 'Takılar':
            icon = <i class="fa-regular fa-gem"></i>;
            break;

        case 'Kişisel Bakım Ürünleri':
            icon = <i class="fa-solid fa-hand-holding-heart"></i>;
            break;

        case 'Kadın Bakım Ürünleri':
            icon = <i class="fa-solid fa-person-dress"></i>;
            break;

        case 'Erkek Aksesuarları':
            icon = <i class="fa-solid fa-person"></i>;
            break;

        case 'Kulaklıklar':
            icon = <i class="fa-solid fa-headphones"></i>;
            break;

        case 'Arabalar':
            icon = <i class="fa-solid fa-car-rear"></i>;
            break;

        default:
            icon = <i class="fa-solid fa-globe"></i>;
    }
    const firstSettrosItem = settos[0]; // İlk öğeyi al
    const dangerValue = firstSettrosItem?.settingDanger; // danger özelliğini al
    const dangerpiecex = todo.inputPiece <= dangerValue ? 'redDiv' : 'greenDiv';
    
  return (
    <div className='dashtodo-container'>
      <div className='dashtodo-icon'>{icon}</div>
      <div className='dashtodo-product'>
        <div className='dashtodo-prottext'>{todo.inputText}</div>
        <div className='dashtodo-cate'>{todo.inputCategory}</div>
      </div>
      <div className='dashtodo-date'>{todo.inputDate}</div>
      <div className='dashtodo-id'>{todo.inputCode}</div>
      <div className='dashtodo-piece'>
      <div className={dangerpiecex}>{todo.inputPiece} &nbsp; <i class="fa-solid fa-arrow-trend-up"></i> <i class="fa-solid fa-arrow-trend-down"></i></div>
      </div>
      <div className='dashtodo-price'>${todo.inputPrice}</div>
    </div>
  )
}

export default Dashtodo