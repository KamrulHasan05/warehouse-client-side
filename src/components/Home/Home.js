import React from 'react';
import './Home.css';
import Inventory from './../Inventory/Inventory';

const Home = () => {
    return (
        <main>
            {/* Banner section */}
            <section className='banner-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="banner-info mt-5">
                                <h1>It's Your World, Ride It!!!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inventory */}
            <Inventory />
        </main>
    );
};

export default Home;