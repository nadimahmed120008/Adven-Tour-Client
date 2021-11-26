import React from "react";
import { Link } from "react-router-dom";

// "_id": "607d44990bcd9504c639213d",
// "name": "Samsung watch",
// "duration": "8 years",
// "location": "dhaka",
// "cost": "20000",
// "img": "https://media-eng.dhakatribune.com/uploads/2020/09/9-new-project-1599296482873.jpg",
// "availability": "Available",
// "included": "samsung watch are very useful in many ways."

const PackagesCard = ({ item }) => {
  return (
    <div className='col-md-4'>
      <div className='card h-100'>
        <img style={{ height: "200px" }} src={item.img} alt='' className='card-img-top' />
        <div className='card-body'>
          <p>{item.name}</p>
          <div className='d-flex justify-content-between align-items-end'>
            <h6 className='text-primary'>{item.cost} BDT</h6>
            <Link to={`/checkout/${item._id}`} className='btn btn-warning'>
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesCard;
