import React from 'react'

const Form = () => {
  return (
    <div className='w-100 d-flex align-items-center justify-content-center formSec'>
      <form action="" className='w-50 d-flex align-items-center justify-content-around flex-column form'>
        <input type="text" class="form-control py-3"  placeholder='Enter Title Here'/>
        <textarea rows={"4"} cols={"10"} placeholder='Enter Description Here' className='form-control'></textarea>
        <button className='bg-dark text-light fw-semibold form-control py-3'>Save</button>
      </form>
    </div>
  )
}

export default Form
