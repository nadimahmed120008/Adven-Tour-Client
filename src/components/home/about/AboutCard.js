import React from "react";

const AboutCard = (props) => {
  return (
    <div className='col-md-3 '>
      <div className='card bg-light about__card'>
        <div className='card-body text-center'>
          {props.children}
          <p className='lead'>{props.item.title}</p>
          <small>They can be useful if you are active. The array of sensors and capabilities varies from device to device, so your mileage may vary.</small>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
