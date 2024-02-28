import React from 'react'
import { navItems } from '../utils/constants'
import NavItem from './NavItem'

interface Props {
    changePage: (itemTitle: string) => void
}

const Navigation = ({changePage}:Props) => {
    return (
        <nav className="fixed-top">
            <ul className="nav mt-1 ms-5">
                {navItems.map(item => <NavItem changePage={changePage} key={item} itemTitle={item} />)}
            </ul>
        </nav>
    )
}

export default Navigation