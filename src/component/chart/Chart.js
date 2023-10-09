import React from 'react'

import { Link } from 'react-router-dom';
import "./chart.css"

function Chart(openViewFunc) {

  

  return (
    <div className='chart-app'>

      <div className="control-panel">
        <div className="control-profile-pic"></div>
        <div className="dash-button">
          <Link to="/mypage"> <button></button></Link>
        </div>
        <div className="chart-button-active">
          <Link to="/mypage/chart"> <button></button></Link>
        </div>
        <div className="setting-button">
          <Link to="/mypage/setting"><button></button></Link>
        </div>
        <div className="signoutbutton">
          <Link to="/"> <button></button></Link>
        </div>
      </div>

      <div className='chart-div'>
        
      </div>

    </div>
  )
}

export default Chart