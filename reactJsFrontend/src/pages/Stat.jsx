import React from 'react';
import bar from '../assets/horiBar.png';
import bar2 from '../assets/horiBar2.png';
import heartBeat from '../assets/heartBeat.png';
import heatMap from '../assets/heatMap.png';
import wave from '../assets/wave.png';
import data from '../assets/dataset.png';

import '../styles/stat.css';

const Stat = () => {
    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-lg-9 col-md-8'>
                    <div className='text-center mb-3 mt-3 pt-5'>
                        <h1 className='heading mb-3' style={{ color: '#4799c0' }}>
                            📐 Dataset Information
                        </h1>
                        <img src={data} className='logo' alt="Logo" />
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-lg-9 col-md-8'>
                    <div className='text-center mb-5 pt-5'>
                        <h1 className='heading mb-3' style={{ color: '#4799c0' }}>
                            📅 All States VS Annual Rainfall 1
                        </h1>
                        <img src={bar} className='logo' alt="Logo" />
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-lg-9 col-md-8'>
                    <div className='text-center mb-5'>
                        <h1 className='heading mb-3' style={{ color: '#4799c0' }}>
                            📊 All States VS Annual Rainfall 2
                        </h1>
                        <img src={bar2} className='logo' alt="Logo" />
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-lg-9 col-md-8'>
                    <div className='text-center mb-5'>
                        <h1 className='heading mb-3' style={{ color: '#4799c0' }}>
                            📈 Rainfall Over Years
                        </h1>
                        <img src={heartBeat} className='logo' alt="Logo" />
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-lg-9 col-md-8'>
                    <div className='text-center mb-5'>
                        <h1 className='heading mb-3' style={{ color: '#4799c0' }}>
                            🌊 Rainfall in each month
                        </h1>
                        <img src={wave} className='logo' alt="Logo" />
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-lg-9 col-md-8'>
                    <div className='text-center mb-5'>
                        <h1 className='heading mb-3' style={{ color: '#4799c0' }}>
                            🤝 Correlation Heatmap
                        </h1>
                        <img src={heatMap} className='logo' alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stat;
