import React from 'react';
import Logo from '../../assets/img/LOGOTIPO PASTEUR EVA - COLOR.svg'
import './style.css';

const Header = (props)=> {
    return(
        <header className="headerComponent" data-test="headerComponent">
            <div className="wrap">
                <div className="logoImg" data-test="logoImg">
                    <img src={Logo} alt="Logo"/>
                </div>
            </div>
        </header>
    );
}

export default Header;