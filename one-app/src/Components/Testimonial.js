import React from 'react';
import ProfilePic from"../Assets/john-doe-image.png";
import { AiFillStar} from "react-icons/ai";

const Testimonial = () => {
  return <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Testimonials</p>
                <h1 className="primary-heading">What They are Saying</h1>
                <p className="primary-text">This dish tastes amazing · Your food is exceptional · Please do surprise me again next time · Splendid! Simply, splendid! · My compliments to the chef · *Chef's kiss ...</p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="" />
                <p>
                This dish tastes amazing · Your food is exceptional · Please do surprise me again next time
                </p>
                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>John Henry</h2>
            </div>
    
        </div>
};

export default Testimonial;