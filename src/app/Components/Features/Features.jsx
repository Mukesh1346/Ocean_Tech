   "use client"
import React, { useState } from "react";
import { FaBriefcase, FaHeadphones, FaCode, FaRocket } from "react-icons/fa";
import "./features.css";
import Pic from '@/app/Images/MidBanner.jpg';
import Image from "next/image";

export default function FeatureSection() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <section className="feature-section">
            <div className="container">
                <div className="row align-items-center">

                    {/* Left side */}
                    <div className="col-md-4 featureSec">
                        <div className="feature-box">
                            <div className="icon-circle green"><FaBriefcase /></div>
                            <h4>500+ SITES</h4>
                            <p>Bulk SMS has become an essential tool for businesses in Delhi, providing a strong and affordable method to connect with customers.</p>
                        </div>

                        <div className="feature-box mt-5">
                            <div className="icon-circle teal"><FaCode /></div>
                            <h4>INSTANT DELIVERY</h4>
                            <p>With instant delivery, your SMS messages are sent to recipients within seconds, ensuring real-time communication.</p>
                        </div>
                    </div>

                    {/* Center */}
                    <div className="col-md-4 ">
                        <div className="center-image">
                            <Image src={Pic} alt="Center" />
                        </div>
                     <div className="text-center">
                     <button className="QuaryForm" onClick={handleShow}>Any Query</button>
                     </div>

                        {/* Modal */}
                        {show && (
                            <div className="custom-modal-overlay" onClick={handleClose}>
                                <div
                                    className="modal-dialog modal-dialog-centered custom-modal"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="modal-content shadow-lg rounded-4 border-0">
                                        <div className="modal-header border-0 pb-0">
                                            <div className="text-center">
                                            <h5 className="modal-title fw-bold ">Contact Us</h5>
                                                </div>

                                            <button type="button" className="btn-close" onClick={handleClose}></button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="mb-3"> 
                                                    <p className=" text-right">Name</p>
                                                    <input
                                                        type="text"
                                                        className="form-control custom-input"
                                                        placeholder="Enter your name"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label fw-semibold">Email</label>
                                                    <input
                                                        type="email"
                                                        className="form-control custom-input"
                                                        placeholder="Enter your email"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label fw-semibold">Message</label>
                                                    <textarea
                                                        className="form-control custom-input"
                                                        rows="3"
                                                        placeholder="Your message"
                                                    ></textarea>
                                                </div>
                                                <button type="submit" className="btn w-100 custom-submit-btn">
                                                    Submit
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right side */}
                    <div className="col-md-4 featureSec">
                        <div className="feature-box">
                            <div className="icon-circle blue"><FaHeadphones /></div>
                            <h4>SUPPORT</h4>
                            <p>SMS has an excellent 98% open rate, higher than email or social media, leading to better campaign results.</p>
                        </div>

                        <div className="feature-box mt-5">
                            <div className="icon-circle orange"><FaRocket /></div>
                            <h4>COST-EFFECTIVE ALTERNATIVE</h4>
                            <p>SMS marketing is an affordable option compared to costly methods like direct mail or paid ads.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
