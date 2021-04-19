// Core
import React from 'react';
// Components
import Header from '../components/header';
import Layout from '../components/layout';

export default function Home() {
    return (
        <Layout>
            <Header headerText="About Gatsby" />
            <h1>
                Hi! I&apos;m building a fake Gatsby site as part of a tutorial!
            </h1>
            <p>
                What do I like to do? Lots of course but definitely enjoy
                building websites.
            </p>
            <p>Such wow. Very React.</p>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
        </Layout>
    );
}
