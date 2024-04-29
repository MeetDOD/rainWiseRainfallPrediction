import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/form.css';
import hp from '../assets/allStates/HIMACHAL PRADESH.png';
import toast from 'react-hot-toast';
import Loader from "react-js-loader";
import DW from '../assets/allStatesInfo/HP/download.png'
import DW1 from '../assets/allStatesInfo/HP/download (1).png'
import DW2 from '../assets/allStatesInfo/HP/download (2).png'

const HP = () => {
    const [Year, setYear] = useState("");
    const [Month, setMonth] = useState("");
    const [predictedRainfall, setPredictedRainfall] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await axios.post('https://rainy-ykxp.onrender.com/predict_hp', {
                "Year": Year,
                "Month": parseInt(Month)
            });
            if (res.data) {
                setPredictedRainfall(res.data["Predicted Rainfall for himachal pradesh is "]);
                toast.success("Predicted Successfully")
                setError(null);
            }
        } catch (error) {
            setError("Failed to get predicted rainfall. Please try again.");
            setPredictedRainfall(null);
            toast.error("Error from Render Server")
        }
        setIsLoading(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='marginStyle'>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row border rounded-5 p-3 bg-white shadow box-area reverseCol">
                    <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                        <div className="featured-image mb-3">
                            <img src={hp} className="img-fluid rounded-3 borderState" width={500} alt="MH Rainfall" />
                        </div>
                    </div>
                    <form className="col-md-6 right-box" onSubmit={handleSubmit}>
                        <div className="row align-items-center">
                            <div className="header-text mb-4">
                                <h2 style={{ color: '#4799c0' }} >Rainfall Prediction</h2>
                                <h6>Predict Rainfall for Himachal Pradesh State :) </h6>
                            </div>
                            <div className="input-group d-flex align-items-center mb-3">
                                <div className="form-outline flex-fill mb-0">
                                    <input value={Year} onChange={(e) => setYear(e.target.value)} type='number' required placeholder='Enter the year' className="form-control" />
                                </div>
                            </div>
                            <div className="input-group d-flex align-items-center mb-3">
                                <div className="form-outline flex-fill mb-0">
                                    <select value={Month} onChange={(e) => setMonth(e.target.value)} className="form-select">
                                        <option value="">Select Month</option>
                                        {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                                            <option key={month} value={month}>{new Date(2000, month - 1).toLocaleString('default', { month: 'long' })}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mt-4">
                                <div className="form-outline flex-fill mb-0">
                                    <button className="btn btn-lg text-white" type="submit" style={{ backgroundColor: '#4799c0', width: '100%' }}>Predict</button>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center my-3">
                                <div className="form-outline flex-fill mb-0">
                                    <Link to='/states' className="btn btn-outline-dark btn-lg btn-block" style={{ width: '100%' }} type="button">Select another state</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                    {isLoading && (
                        <div className="col-md-12 text-center">
                            <Loader type="spinner-cub" bgColor='#4799c0' size={69} />
                        </div>
                    )}
                    {!isLoading && (
                        <center>
                            {predictedRainfall !== null &&
                                <div className="mb-4 rounded-2" style={{ backgroundColor: '#4799c0' }}>
                                    <h3 className='text-white p-3'>Predicted Rainfall for Himachal Pradesh is  : {predictedRainfall} mm</h3>
                                </div>
                            }
                            {error &&
                                <div className="mb-4 rounded-2 alert alert-danger" role="alert">
                                    <h4>Server Error : {error}</h4>
                                </div>
                            }
                        </center>
                    )}
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 col-md-6">
                                <img src={DW1} className="img-fluid borderCard" style={{ height: '323px' }} alt="Image 2" />
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <img src={DW2} className="img-fluid borderCard" alt="Image 3" />
                            </div>
                        </div>
                        <center>
                            <div className="col-lg-12 col-md-6 ">
                                <img src={DW} className="img-fluid borderCard" alt="Image 1" />
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HP;
