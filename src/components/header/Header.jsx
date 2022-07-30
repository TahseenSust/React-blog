import React from 'react'
import './header.css'

function header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='haederImg' src="https://images.all-free-download.com/images/graphiclarge/iphone_6_sample_photo_566464.jpg" alt="" />
    </div>
  )
}

export default header