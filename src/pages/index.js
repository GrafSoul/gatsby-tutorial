// Core
import React from 'react';
// Components
import Header from '../components/header';
// Router
import { Link } from 'gatsby';

export default function Home() {
    return (
        <div style={{ color: 'teal' }}>
            <Link to="/contact/">Contact</Link>
            <Header headerText="About Gatsby" />
            <p>Such wow. Very React.</p>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
        </div>
    );
}
