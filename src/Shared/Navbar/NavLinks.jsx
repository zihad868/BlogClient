import React from 'react';

const NavLinks = () => {
    const links = [
        {name: 'About'},
        {name: 'Books'},
        {name: "Category"}
    ]
    return (
        <>
           {
             links.map((link) => (
                <div>
                    <div>
                        {link.name}
                    </div>
                </div>
             ))
           } 
        </>
    );
};

export default NavLinks;