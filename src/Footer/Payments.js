import React from 'react';
import ae from '../IMG/american-express.webp'
import city from '../IMG/city.webp'
import IB from '../IMG/Islami-bank.webp'
import master from '../IMG/master-card.webp'
import paypal from '../IMG/paypal.webp'
import pb from '../IMG/pubali-bank.webp'
import rocket from '../IMG/rocket.webp'
import visa from '../IMG/visa.webp'
import wn from '../IMG/western-union.webp'
import bkash from '../IMG/bkash.webp'
import app from '../IMG/app-store.png'
import android from '../IMG/google-play.png'
import { Link } from 'react-router-dom';

const Payments = () => {
    return (
        <div className="bank_and_apps_store">
            <div className="col-6" style={{ marginRight: '2rem' }}>
                <h4 className="s-title">You are all trusted in unite as one with us:</h4>
                <Link to="/">
                    <img src={ae} alt="" className="links" />
                </Link>
                <Link to="/">
                    <img src={city} alt="" className="links" />
                </Link>
                <Link to="/">
                    <img src={IB} alt="" className="links" />
                </Link>
                <Link to="/">
                    <img src={wn} alt="" className="links" />
                </Link>
                <Link to="/">
                    <img src={ae} alt="" className="links" />
                </Link>
                <Link to="/">
                    <img src={bkash} alt="" className="links" />
                </Link>
                <Link to="/">
                    <img src={rocket} alt="" className="links" />
                </Link>
                <Link to="/">
                    <img src={master} alt="" className="links" />
                </Link>
                <Link to="/">
                    <img src={visa} alt="" className="links" />
                </Link>
                <Link to="/">
                    <img src={pb} alt="" className="links" />
                </Link>
                <Link to="/">
                    <img src={paypal} alt="" className="links" />
                </Link>
            </div>

            <div className="col-6">
              <h4 className="s-title">App Available On Google Play Store</h4>
              <Link to="/">
                    <img src={app} alt="" className="links" />
                </Link>
        
                <Link to="/">
                    <img src={android} alt="" className="links" />
                </Link>
                <div className="address">
                    <p style={{ width: '95%', fontSize:"13px" }}>Address:Twin Brooks-House,No-08,Road- 2B,Block,J , level -2 Flat B2 Baridhara ,vatara Gulshan -2 Dhaka 1212</p>
                </div>
            </div>
        </div>
    )
}

export default Payments
