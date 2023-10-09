import React from 'react'
import "./operation.css"

function Operation({operation, key}) {
  return (
    <div key={operation.id} className='operation-div'>
      <div className='oper-date'>{operation.operationDate}</div>
      <div className='oper-company'>{operation.operationCompany}</div>
      <div className='oper-product'>{operation.operationProduct}</div>
      <div className='oper-piece'>{operation.operationPiece}</div>
      <div className='oper-total'>{operation.operationTotalfee}$</div>
      
      </div>
  )
}

export default Operation