import React, { useEffect, useState } from "react";
import ComplainCard from "./ComplainCard";

const Complains = () => {
  const [complains, setComplains] = useState([]);
  const base_url = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
  useEffect(() => {
    fetch(`${base_url}/complains`)
      .then((res) => res.json())
      .then((data) => setComplains(data.data))
      .catch((error) => console.error(error.message));
  }, [base_url]);
  return (
    <div className="container py-24 grid grid-cols-1 lg:grid-cols-4 gap-3 border-b">
      {complains.map((complain) => (
        <ComplainCard key={complain._id} data={complain} />
      ))}
    </div>
  );
};

export default Complains;
