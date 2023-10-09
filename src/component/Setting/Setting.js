import { Link } from 'react-router-dom';

import React, { useContext, useState, useEffect } from "react";
import AppContext from "../context/AppContext";
import "./setting.css"

function Setting() {
  const {
    settos,
    todos,
    updateOneSetting,
    valuesFive,
    setValuesFive,
    getAllSettings
  } = useContext(AppContext);

  const [gosterAyar, setGosterAyar] = useState()
  const [settingOneEdit, setSettingOneEdit] = useState(false)

  const viewSettingOne = () => {
    setSettingOneEdit(true)
  }





  const todouzunluk = todos.length;


  return (
    <div className='setting-component'>
      <div className="setting-and-controlpanel">
        <div className="setting-control-div">
          <div className="setting-control-panel">
            <div className="setting-functional-menu">

              <div className="setting-empty-menu-div">
                <div className="setting-office-content">
                  <div className="setting-office-logo"></div>
                  <div className="setting-office-name">Starch</div>
                </div>
              </div>

              <div className="setting-menu-button"><a href="/chart">
                <div className="setting-ticket-dashicon"></div>
                <div className="setting-ticket-text">Dashboard</div>
              </a></div>

              <div className="setting-menu-button"><a href="/mypage">
                <div className="setting-ticket-stockicon"></div>
                <div className="setting-ticket-tex-first">Stock</div>
                <div className="setting-ticket-number-co">
                  <div className="setting-ticket-lenght-circle">{todouzunluk}</div>
                </div>
              </a></div>

              <div className="setting-menu-button"><a href="/chart">
                <div className="setting-ticket-charticon"></div>
                <div className="setting-ticket-text">Charts</div>
              </a></div>

              <div className="setting-menu-button"><a href="/customers">
                <div className="setting-ticket-customericon"></div>
                <div className="setting-ticket-text">Customers</div>
              </a></div>


              <div className="setting-menu-button"><a href="/support">
                <div className="setting-ticket-supporticon"></div>
                <div className="setting-ticket-text">Support</div>
              </a></div>
            </div>



            <div className="setting-user-account">

              <div className="setting-menu-button"><a className="setting-active-button" href="/setting">
                <div className="setting-ticket-settingicon"></div>
                <div className="setting-ticket-text">Settings</div>
              </a></div>

            </div>
          </div>


















          {/* <div className="control-center">
        <div className="control-profile-pic"></div>
        <div className="dash-button-active">
          <Link to="/mypage"> 
          <button>merhaba</button>
          </Link>
        </div>
        <div className="chart-button">
          <Link to="/mypage/chart"> <button></button></Link>
        </div>
        <div className="setting-button">
          <Link to="/mypage/setting"><button></button></Link>
        </div>
        <div className="signoutbutton">
          <Link to="/"> <button></button></Link>
        </div>
        </div> */}
        </div>

        <div className='settings-flex-button'>
          <div className='setting-flex-text'><div className='setting-flex-optext'>Settings</div></div>

          <div className='setting-flex-but'>
            <button className='active-button'>
              <div className='ico-flex1'></div>
              <div className='text-flex'>Hesap</div>
            </button>
          </div>
          <div className='setting-flex-but'>
            <button>
              <div className='ico-flex2'></div>
              <div className='text-flex'>Stok</div>
            </button>
          </div>

          <div className='setting-flex-but'>
            <button>
              <div className='ico-flex3'></div>
              <div className='text-flex'>Takvim</div>
            </button>
          </div>

          <div className='setting-flex-but'>
            <button>
              <div className='ico-flex4'></div>
              <div className='text-flex'>Gizlilik</div>
            </button>
          </div>

          <div className='setting-flex-but'>
            <button>
              <div className='ico-flex5'></div>
              <div className='text-flex'>Güvenlik</div>
            </button>
          </div>

          <div className='setting-flex-but'>
            <button>
              <div className='ico-flex6'></div>
              <div className='text-flex'>Yedekle ve Geri Yükle</div>
            </button>
          </div>

          <div className='setting-flex-but'>
            <button>
              <div className='ico-flex7'></div>
              <div className='text-flex'>Yardım Merkezi</div>
            </button>
          </div>



        </div>


      </div>

      <div className='setting-comp-div'>






        <div className="setting-ic-div">
          <div className='setting-info'>Hesap</div>

          <div className='setting-one'>
            <div className="setting-one-dis">
              <div className="setting-ico-di"></div>

              <div className='setting-one-info'>{settos.map((set) => (
                <div key={set.id}>
                  Stok Takibi Uyarısı<br></br> <span>Stok takibinizi kolaylaştırmak için uyarı bildirimi, stoğunuz <br></br> belirlediğiniz değerin altına düştüğünde kırmızı yanmaya başlar.</span></div>
              ))}</div>
              <div className='setting-one-button'>

                <Link to="/setting/1">
                  <button>
                    Değiştir
                  </button>
                </Link>

              </div>
              <div className="setting-one-text">
                <div className="setting-one-divtext">
                  {settos.map((set) => (
                    <div className='set-div' key={set.id}>{set.settingDanger}</div>
                  ))}
                </div>
              </div>
            </div>

          </div>



        </div>
      </div>




    </div>
  )
}

export default Setting