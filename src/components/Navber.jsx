import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navber() {

    const location = useLocation();

    const currentPage = location.pathname === '/' ? 'Users List' : location.pathname > '/Card' ? 'Cards' : '';

    return (
        <div className="navbar bg-neutral dark:bg-slate-700 relative text-neutral-content shadow-lg">
             <button className="btn btn-ghost text-xl font-bold">{currentPage} </button>
        </div>
    )
}

export default Navber