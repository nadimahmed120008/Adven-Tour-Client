import React from "react";
import greenImg from "../../../img/header-bg.PNG";
import "./Features.css";

const Features = () => {
  return (
    <div className='py-5'>
      <h2 className='text-center display-6'>EXCITING PRODUCTS FOR SMART PEOPLE.</h2>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-6'>
            <h6 className='mb-2'>YOU'RE GOING TO FALL IN LOVE WITH US</h6>
            <small>A smartwatch is a digital watch that provides many other features besides timekeeping. Examples include monitoring your heart rate, tracking your activity, and providing reminders throughout the day</small>
            <h6 className='mb-2 mt-3'>LIVE LIVES LIKE YOU NEVER HAVE BEFORE</h6>
            <small>1.Never miss anything urgent with notifications <br />
                  2. Enjoy excellent functions for health management<br />
                  3.Check the weather easily<br />
                  4.Use it as a mobile wallet<br />
                  5.Listen to music<br />
                  6.Set your wristwatch alarm from your smartphone easily.</small>
          </div>

          <div className='col-md-6 text-center'>
            <img className='img-fluid features__img' src={greenImg} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
