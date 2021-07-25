import React, { useState } from 'react'
import ModalCart from '../../Containers/ModalCartContainer'
import Logo from '../../img/logo.png'
import './style.css'
const Nav = props => {    

    const [modal, setModal] = useState('hidden');
    const imgCart = 'https://cdn.iconscout.com/icon/free/png-512/shopping-cart-442-1151214.png',
        imgClose = 'https://img.icons8.com/ios-glyphs/30/fa314a/xbox-x.png'

    return (
        <nav>
            <a href="https://www.radarfit.com.br/"><img src={Logo} alt="Radar Fit" /></a>
            <div className="nav-imgWrapper">
                <span className={`navTotal ${modal}`}>{props.data.length}</span>
                <img
                    src={modal === 'show' ? imgClose : imgCart}
                    onClick={() => {
                        if (modal === 'show') {
                            setModal('hidden')                           
                        } else {
                            setModal('show')                           
                        }
                    }}
                    alt="cart" />
            </div>
            <ModalCart class={modal} />


        </nav>



    )

}
export default Nav