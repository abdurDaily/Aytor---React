
import React from 'react';
import Slider from './Slider';

const Hero = () => {
    return (
        <>


         {/* BANNER START */}
         <Slider />
         {/* BANNER END */}


          <section className='my-5 home-product'>
                <div className="container">
                    <div className="row ">

                        <div className="col-lg-5">
                            <div className="row g-4">
                                <div className="col-lg-12 home-card">
                                    <img className='img-fluid w-100 h-100' src="public/images/home/product-1.png" alt="" />
                                    <div className="overlay">
                                        <h4>Beauty Cream</h4>
                                        <p>Shop Now</p>
                                    </div>
                                </div>
                                
                                <div className="col-lg-12 home-card">
                                    <img className='img-fluid w-100 h-100' src="public/images/home/product-1.png" alt="" />
                                    <div className="overlay">
                                        <h4>Beauty Cream</h4>
                                        <p>Shop Now</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <img className='w-100 h-100' style={{ objectFit:'cover' }} src="public/images/home/product-2.png" alt="" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;