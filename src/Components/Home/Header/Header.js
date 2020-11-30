import React from 'react';
import './Header.scss';
import Menubar from '../MenuBar/MenuBar';

const Header = () => {
    return (
        <div className="header__bg">
            <Menubar />
            <div className="header__content">
                <h1>All your solutions in one place</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellat nobis amet, obcaecati architecto <br/> itaque maiores eligendi nemo nam iure hic, et aliquam  deserunt ducimus <br/>dolores voluptas error facilis vero.</p>
            </div>
        </div>
    );
};

export default Header;