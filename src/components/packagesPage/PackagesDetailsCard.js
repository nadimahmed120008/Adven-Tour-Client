import React from "react";
import { Link } from "react-router-dom";

// "_id": "607d44990bcd9504c639213d",
// "name": "Samsung",
// "duration": "8 days",
// "location": "dhaka",
// "cost": "20000",
// "img": "https://media-eng.dhakatribune.com/uploads/2020/09/9-new-project-1599296482873.jpg",
// "availability": "Available",
// "included": "it has many features............"

const PackagesDetailsCard = ({ item }) => {
  return (
    <div className='col-md-6 mb-4'>
      <div className='card h-100'>
        <img style={{ height: "300px" }} src={item.img} alt='' className='card-img-top' />
        <div className='card-body'>
          <h3>{item.name}</h3>
          <p>{item.duration}</p>
          <p className='text-success'>{item.location}</p>
          <p className='text-muted'>{item.included}</p>
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

export default PackagesDetailsCard;
