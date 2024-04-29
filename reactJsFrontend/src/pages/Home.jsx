import React from 'react'
import '../styles/home.css'
import hero from '../assets/Umbrella.gif'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <section className='banner_wrapper'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-5 header-img-section'>
                            <img src={hero} alt='Hello Carwale' className='img-fluid' />
                        </div>
                        <div className="col-md-6 my-5 my-md-0 text-center text-md-start">
                            <p className="banner-subtitle">Plan Ahead with Accurate Predictions</p>
                            <h1 className="banner-title">Predict Rainfall with <span>RainWise😎</span></h1>
                            <p className="banner-title-text " style={{ textAlign: 'justify' }}>Explore accurate rainfall predictions like never before. Our website offers precise forecasts, comprehensive data analysis, expert insights, and a hassle-free experience in planning your activities. Discover, analyze, and plan with confidence.</p>
                            <div className="learn-more-btn-section">
                                <Link to='/states' className="nav-link learn-more-btn btn-header" href="#car">Predict Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
