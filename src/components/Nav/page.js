import React from 'react'
import "./Nav.css"
import logo from './logo.PNG'
import home from './home.PNG'
import add from './add.PNG'
import explore from './explore.PNG'
import messenger from './messenger.PNG'
import likes from './like.PNG'
import Image from 'next/image'
const Nav = () => {
  return (
    <div className='nav'>
    <div className="navWrapper">
        {/* <img className='navLogo' src="https://img.lovepik.com/photo/20230422/small/lovepik-moving-paint-visual-perfume-series-background-design-of-vibrant-flow-of-photo-image_352430503.jpg" alt="" /> */}
        {/* <h1 className='navLogo' >Mylogo </h1> */}
        <Image src={logo} className='navLogo' alt="logo" />
        <input type="text" className="inputnav" />
        <div className="navItems">
            <Image src={home} alt="d" />
            <Image src={messenger} alt="d" />
            <Image src={add} alt="d" />
            <Image src={likes} alt="d" />
            <Image src={explore} alt="d" />
        </div>
    </div>

    </div>
  )
}

export default Nav