import React from 'react'
import {BsFillCartPlusFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='container border'>
        <header className='header d-flex align-items-center justify-content-between'>
            <Link to="/" className='header__left'>
                <p>Sahand Shop</p>
            </Link>
            <div className='header__right'>
                <Link to="/" className='header__right-boxItem'>
                    <BsFillCartPlusFill className="shop-icon"/>
                    <span>2</span>
                </Link>
              
            </div>
        </header>
    </div>
  )
}

export default Header