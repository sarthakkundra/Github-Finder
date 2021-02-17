import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type NavbarProps = {
    title: string,
    icon: string
}

class Navbar extends Component<NavbarProps> {
    static defaultProps = {
        title: ' Github finder',
        icon: 'fab fa-github'
    };

    render() {
        return (
            <nav className='navbar bg-primary'>
                <a href="/">
                    <h1>
                        <i className={this.props.icon} />{this.props.title}
                    </h1>
                </a>
                <ul>
                    <li>
                    <Link to = '/'>Home</Link>
                    </li>
                    <li>
                        <Link to = '/about'> About</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar