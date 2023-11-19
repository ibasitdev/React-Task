import React from 'react';
import profileImage from "../assets/profile.jpg";


function Hero(props) {
  return (
    <>
      <div className="hero px-[80px] py-[40px] flex-col gap-5">
        <div className="hero-heading">
          <h1 className='font-semibold text-3xl mb-4'>Top Stories</h1>
        </div>
        <div className="hero-banner bg-[url('./assets/hero-bg.jpg')] w-full h-[400px] bg-cover p-5 flex justify-start items-end">
          <div className="banner-text w-[60%]  h-auto gap-11 pb-5 justify-end">
            <div className="badge bg-blue-600 text-white w-28 py-1 rounded-md text-center mb-5">{props.badge}</div>
            <h2 className='text-white font-bold text-3xl leading-[45px] mb-5'>{props.thumbnail}</h2>
            <div className="banner-author flex gap-5">
              <img src={props.authorimg} className='w-7 h-7 rounded-full' alt="" />
              <h2 className='text-white font-semibold text-md'>{props.author}</h2>
              <p className='text-white text-md'>{props.postedOn}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero