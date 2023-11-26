import React from 'react';
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>
                Description
            </div>
            <div className='descriptionbox-nav-box fade'>
                Reviews (122)
            </div>
        </div>

        <div className='descriptionbox-description'>
            <p>Discover a seamless online shopping experience at our cutting-edge ecommerce website. Browse a vast array of products, from trendy fashion and tech gadgets to home essentials. Enjoy secure transactions, swift deliveries, and personalized recommendations. Elevate your shopping journey with user-friendly navigation and exclusive deals. Dive into a world of convenience and style with our innovative ecommerce platform.</p>
            <p>Indulge in hassle-free returns and responsive customer support, ensuring satisfaction at every step. Unleash the joy of online shopping with our reliable and dynamic ecommerce destination.</p>
        </div>  

    </div>
  )
}

export default DescriptionBox
