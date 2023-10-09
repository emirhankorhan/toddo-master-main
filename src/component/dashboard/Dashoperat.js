import React from 'react'
import "./dashoperat.css"

function Dashoperat({operatx, key, operat}) {

    const numberOp = operat.filter(emp => emp.operationCompany === operatx.operationCompany).length

    const firstTwoChars = operatx.operationCompany.substring(0, 2).toUpperCase();

  return (
    <div className='dashoperat-container'>
        <div className='dashoperat-circle'>
            <div className="circle-color-dash">{firstTwoChars}</div>
        </div>
        <div className='dashoperat-customer'>
            <div className='dash-custo'>{operatx.operationCompany}</div>
            <div className='dash-dateco'>{operatx.operationDate}</div>
        </div>
        <div className='dashoperat-info'>
        <div className='dash-operat-totalfee'>${operatx.operationTotalfee}</div>
            <div className='dash-operat-number'>{numberOp} process</div>
           
        </div>
    </div>
  )
}

export default Dashoperat