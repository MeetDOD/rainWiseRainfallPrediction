import React from 'react';
import MP from '../assets/allStates/MADHYA PRADESH.png'
import TN from '../assets/allStates/TAMIL NADU.png'
import RJ from '../assets/allStates/RAJASTHAN.png'
import TL from '../assets/allStates/TELANGANA.png'
import AP from '../assets/allStates/ANDHRAPRADESH.png'
import CG from '../assets/allStates/CHATTISSGARH.png'
import VD from '../assets/allStates/VIRDHABA.png'
import MH from '../assets/allStates/MAHARASHTRA.png'
import GOA from '../assets/allStates/GOA.png'
import SUR from '../assets/allStates/KUTCH.png'
import GUJ from '../assets/allStates/GUJRAT.png'
import KL from '../assets/allStates/KERALA.png'
import JK from '../assets/allStates/J & K.png'
import HP from '../assets/allStates/HIMACHAL PRADESH.png'
import PB from '../assets/allStates/PUNJAB.png'
import DL from '../assets/allStates/DELHI.png'
import UR from '../assets/allStates/UTTARAKHAND.png'
import BI from '../assets/allStates/BIHAR.png'
import JR from '../assets/allStates/JHARKHAND.png'
import OR from '../assets/allStates/ODISSA.png'
import WB from '../assets/allStates/WEST BENGAL.png'
import ASS from '../assets/allStates/ASSAM.png'
import LD from '../assets/allStates/LAKSHADWEEP.png'
import ANNI from '../assets/allStates/ANDAMAN AND NICOBAR.png'
import ARP from '../assets/allStates/ARUNACHAL PRADESH.png'
import '../styles/states.css'
import { Link } from 'react-router-dom';

const States = () => {
    return (
        <div className="container">
            <div className="row mt-5 pt-5 d-flex justify-content-center">
                <Link to='/mp' className="col-lg-3 col-md-6 ">
                    <img src={MP} className="img-fluid borderCard" alt="Image 1" />
                </Link>
                <Link to='/tn' className="col-lg-3 col-md-6">
                    <img src={TN} className="img-fluid borderCard" alt="Image 2" />
                </Link>
                <Link to='/rj' className="col-lg-3 col-md-6">
                    <img src={RJ} className="img-fluid borderCard" alt="Image 3" />
                </Link>

            </div>
            <div className="row d-flex justify-content-center">
                <Link to='/ap' className="col-lg-3 col-md-6 ">
                    <img src={AP} className="img-fluid borderCard" alt="Image 1" />
                </Link>
                <Link to='/guj' className="col-lg-3 col-md-6">
                    <img src={GUJ} className="img-fluid borderCard" alt="Image 2" />
                </Link>
                <Link to='/sur' className="col-lg-3 col-md-6">
                    <img src={SUR} className="img-fluid borderCard" alt="Image 3" />
                </Link>

            </div>
            <div className="row d-flex justify-content-center">
                <Link to='/tl' className="col-lg-3 col-md-6 ">
                    <img src={TL} className="img-fluid borderCard" alt="Image 1" />
                </Link>
                <Link to="/cg" className="col-lg-3 col-md-6 ">
                    <img src={CG} className="img-fluid borderCard" alt="Image 2" />
                </Link>
                <Link to='/mh' className="col-lg-3 col-md-6 ">
                    <img src={MH} className="img-fluid borderCard" alt="Image 3" />
                </Link>
            </div>
            <div className="row d-flex justify-content-center">
                <Link to='/goa' className="col-lg-3 col-md-6 ">
                    <img src={GOA} className="img-fluid borderCard" alt="Image 4" />
                </Link>
                <Link to='/kl' className="col-lg-3 col-md-6 ">
                    <img src={KL} className="img-fluid borderCard" alt="Image 4" />
                </Link>
                <Link to='/jk' className="col-lg-3 col-md-6 ">
                    <img src={JK} className="img-fluid borderCard" alt="Image 4" />
                </Link>
            </div>
            <div className="row d-flex justify-content-center">
                <Link to='/hp' className="col-lg-3 col-md-6 ">
                    <img src={HP} className="img-fluid borderCard" alt="Image 4" />
                </Link>
                <Link to='/pb' className="col-lg-3 col-md-6 ">
                    <img src={PB} className="img-fluid borderCard" alt="Image 4" />
                </Link>
                <Link to='/dl' className="col-lg-3 col-md-6 ">
                    <img src={DL} className="img-fluid borderCard" alt="Image 4" />
                </Link>
            </div>
            <div className="row d-flex justify-content-center">
                <Link to='/ur' className="col-lg-3 col-md-6 ">
                    <img src={UR} className="img-fluid borderCard" alt="Image 4" />
                </Link>
                <Link to='/bi' className="col-lg-3 col-md-6 ">
                    <img src={BI} className="img-fluid borderCard" alt="Image 4" />
                </Link>
                <Link to='/jr' className="col-lg-3 col-md-6 ">
                    <img src={JR} className="img-fluid borderCard" alt="Image 4" />
                </Link>
            </div>
            <div className="row d-flex justify-content-center">
                <Link to='/or' className="col-lg-3 col-md-6 ">
                    <img src={OR} className="img-fluid borderCard" alt="Image 4" />
                </Link>
                <Link to='/wb' className="col-lg-3 col-md-6 ">
                    <img src={WB} className="img-fluid borderCard" alt="Image 4" />
                </Link>
                <Link to='/ass' className="col-lg-3 col-md-6 ">
                    <img src={ASS} className="img-fluid borderCard" alt="Image 4" />
                </Link>
            </div>
            <div className="row d-flex justify-content-center">
                <Link to='/ld' className="col-lg-3 col-md-6 ">
                    <img src={LD} className="img-fluid borderCard" alt="Image 4" />
                </Link>
                <Link to='/anni' className="col-lg-3 col-md-6 ">
                    <img src={ANNI} className="img-fluid borderCard" alt="Image 4" />
                </Link>
                <Link to='/arp' className="col-lg-3 col-md-6 ">
                    <img src={ARP} className="img-fluid borderCard" alt="Image 4" />
                </Link>
            </div>
            <div className="row d-flex justify-content-center">
                <Link to='/vd' className="col-lg-3 col-md-6 ">
                    <img src={VD} className="img-fluid borderCard" alt="Image 4" />
                </Link>
            </div>
        </div>
    );
}

export default States;
