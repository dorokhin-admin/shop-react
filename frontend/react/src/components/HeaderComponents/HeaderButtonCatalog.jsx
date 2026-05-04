import React, {Component} from 'react';
import {Link} from "react-router-dom";

class HeaderButtonCatalog extends Component {
    render() {
        return (
            <button >
                <Link className='catalog' to='/catalog'>
                    <img src="/IMAGES/menu.png"/>
                    Каталог
                </Link>
            </button>
        );
    }
}

export default HeaderButtonCatalog;