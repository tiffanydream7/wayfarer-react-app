import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <header>
                <h1>Wayfarer</h1>
                {/* <nav>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/signup'}>Signup</Link>
                </nav> */}
            </header>
        )
    }
}

export default Header