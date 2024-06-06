import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faMagnifyingGlass, faHeart, faBagShopping,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaSearch  } from "react-icons/fa";
import { MdBluetoothSearching } from "react-icons/md";
import { RiSearchFill } from "react-icons/ri";



const Footer = () => {
    return (
        <>
           <section className='bg-dark py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <ul style={{ display:'flex', listStyleType:'none', padding:'0' }}>
                                <li className='text-light' style={{ marginRight:'10px', fontSize:'16px' }}><FaShoppingBag /></li>
                                <li className='text-light' style={{ marginRight:'10px', fontSize:'16px' }}><FaSearch /></li>
                                <li className='text-light' style={{ marginRight:'10px', fontSize:'16px' }}><MdBluetoothSearching /></li>
                                <li className='text-light' style={{ marginRight:'10px', fontSize:'16px' }}><RiSearchFill /></li>
                            </ul>
                        </div>
                        <div className="col-lg-6 text-lg-center">
                            <img src="public/images/home/foot-logo.png" alt="" />
                        </div>
                        <div className="col-lg-3 text-lg-end">
                            <img src="public/images/home/card.png" alt="" />
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-2  text-light">
                            <h4 style={{ marginBottom:'20px' }}>My Account</h4>
                            <ul style={{ listStyleType:'none', padding:'0' }}>
                                <li><Link className='text-light text-decoration-none'>{'>'} My Account</Link></li>
                                <li><Link className='text-light text-decoration-none'>{'>'} Wishlist</Link></li>
                                <li><Link className='text-light text-decoration-none'>{'>'} Compare</Link></li>
                                <li><Link className='text-light text-decoration-none'>{'>'} New Products</Link></li>
                            </ul>
                        </div>
                        
                        <div className="col-lg-2  text-light">
                            <h4 style={{ marginBottom:'20px' }}>My Account</h4>
                            <ul style={{ listStyleType:'none', padding:'0' }}>
                                <li><Link className='text-light text-decoration-none'>{'>'} My Account</Link></li>
                                <li><Link className='text-light text-decoration-none'>{'>'} Wishlist</Link></li>
                                <li><Link className='text-light text-decoration-none'>{'>'} Compare</Link></li>
                                <li><Link className='text-light text-decoration-none'>{'>'} New Products</Link></li>
                            </ul>
                        </div>
                        

                        <div className="col-lg-2 text-light">
                            <h4 style={{ marginBottom:'20px' }}>Opening Time</h4>
                            <table>
                                <tbody>
                                <tr>
                                    <td style={{ width:"50%", fontSize:'14px' }}>Mon - Tue: </td>
                                    <td style={{ width:"50%", fontSize:'14px' }}>8AM - 10PM</td>
                                </tr>
                                <tr>
                                    <td style={{ width:"50%", fontSize:'14px' }}>Mon: </td>
                                    <td style={{ width:"50%", fontSize:'14px' }}>8AM - 10PM</td>
                                </tr>
                                <tr>
                                    <td style={{ width:"50%", fontSize:'14px' }}>Mon: </td>
                                    <td style={{ width:"50%", fontSize:'14px' }}>8AM - 10PM</td>
                                </tr>
                                </tbody>
                                
                            </table>
                        </div>

                        <div className="col-lg-3 text-light">
                            <h4 style={{ marginBottom:'20px' }}>Opening Time</h4>
                            <table>
                               <tbody>
                               <tr>
                                    <td valign='top' style={{ width:"10%" }}><FontAwesomeIcon icon={faLocationDot} /></td>
                                    <td><span>830 Broad way, New York, NY 10003, United States</span></td>
                                </tr>
                                <tr>
                                    <td valign='top' style={{ width:"10%" }}><FontAwesomeIcon icon={faLocationDot} /></td>
                                    <td><span>+18008660286</span></td>
                                </tr>
                                <tr>
                                    <td valign='top' style={{ width:"10%", padding:'5px 0 0 0' }}><FontAwesomeIcon icon={faLocationDot} /></td>
                                    <td><p className='m-0 p-0'>aetor.info@gmail.com</p>
                                    <p className='m-0 p-0'>aetor.info@gmail.com</p>
                                    </td>
                                </tr>
                               </tbody>
                                
                            </table>
                        </div>

                        <div className="col-lg-3 text-light">
                            <h4 style={{ marginBottom:'20px' }}>News Letter</h4>
                            <p>Authoritatively morph 24/7 potentialities with error-free partnerships.</p>
                            <div className="btn-group">
                                <input type="text" className='form-control rounded-0' placeholder="Enter your email...." />
                                <button className='btn rounded-0' style={{ background:'#FF6F61' }}>Subscribe</button>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </section>

            <section>
               <div className="container-fluid text-center py-3" style={{ background:'#4F4F4F', color:'#fff' }}>
                <div className="col-12 ">
                        <p className='p-0 m-0'>© 2022 All Rights Reserved Aytor By Angfuzsoft.</p>
                    </div>
               </div>
            </section>
        </>
    );
};

export default Footer;