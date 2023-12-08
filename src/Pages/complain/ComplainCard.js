import React from "react";

const ComplainCard = ({ data }) => {
  const { name, photo_url, contact_no, location, description } = data;
  return (
    <div className="card bg-base-100 shadow">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt={location}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title">{location}</h2>
        <h2 className="card-title">{contact_no}</h2>
        <p>
          {description.length > 150 ? description.slice(0, 150) : description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Action</button>
        </div>
      </div>
    </div>
  );
};

export default ComplainCard;
