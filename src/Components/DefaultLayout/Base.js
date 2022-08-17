import React from 'react';

import Header from './Header';
import Footer from './Footer'

const Base = props => (
    <div className="">
        <Header />
        <section>
            {props.children}
        </section>
        <Footer />
    </div>
)

export default Base;
