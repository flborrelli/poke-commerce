import React from "react";
import './PageLoader.css';
import Loader from 'react-loader-spinner'



const PageLoader = () => {

  return (
    <>
      <div className='loader'>
        <span>Poke-Commerce</span>
        <div>
        <Loader type="ThreeDots"
         color="#f8f9fa"
         height={100}
         width={100}
        />
        </div>
      </div>
    </>
  );
};


export default PageLoader;
