import React, { Component } from 'react'
import loading from "./loading.gif"

const Spinner = ()=> {

    return (
      <div className='text-center'>
        <img src={loading} height={80} alt='img'/>
      </div>
    )
  
}

export default Spinner
