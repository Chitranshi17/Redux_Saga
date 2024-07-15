import React from 'react'
import ListItems from './ListItems'

const ListGroup = () => {
  return (
    <div className='w-100 d-flex align-items-center justify-content-center ListSec'>
       <ul className='w-50 d-flex align-items-center justify-content-around flex-column list-group ListUl overflow-y-scroll'>
        <ListItems/>
       </ul>
    </div>
  )
}

export default ListGroup
