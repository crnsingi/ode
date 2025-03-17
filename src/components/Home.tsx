import  { useState, useEffect } from "react";
import "./Home.css"; 

const services = [
  "fuel delivery",
  "car wash",
  "tyre change",
  "emergency rescue",
  "oil change",
  "car battery",
];

const Home = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  // Cycle through services every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 text-center">
      <h1 className="display-1 custom-heading col-md-8">
        The all-in-one app for{" "}
        <span className="animated-text">
          {services[currentServiceIndex]}
        </span>
      </h1>
    </div>
  );
};

export default Home;