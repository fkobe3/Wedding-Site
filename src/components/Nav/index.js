import React, { useState } from 'react';

const Nav = (props) => {
    
    // destructure props
    const {
        menuItems = [],
        currentPage,
        setCurrentPage
    } = props;
    
    return (
        <header>
            <div>
            <h1>
                Frank Kobe
            </h1>
            </div>
            <div>
            <nav>
                <ul className="nav-list">
                    
                    {menuItems.map((menu) => (
                       <li 
                       className={`${currentPage === menu && 'navActive'}`} onClick={() => setCurrentPage(menu)}>
                        {menu}
                    </li> 
                    ))}
                    
                </ul>
            </nav>
            </div>
        </header>
    )
};

export default Nav;