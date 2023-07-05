import "./Card.css";
import Star from "../assets/images/icon-star.svg";
import Mobile from "../assets/images/illustration-thank-you.svg";
import { useState } from "react";

const Card = () => {
  const RATINGS = ["1", "2", "3", "4", "5"];
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleClick = (e, index) => {
    setSelectedIndex(index);
  };

  const handleSubmit = () => {
    setIsSubmit(true);
  };

  const content = isSubmit ? (
    <div className="submit-card">
      <picture className="submit-card-image">
        <img src={Mobile} alt="Mobile" />
      </picture>
      <p className="submit-card-result">
        You selected {RATINGS[selectedIndex]} out of 5
      </p>
      <h1 className="submit-card-title">Thank you!</h1>
      <p className="card-description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!{" "}
      </p>
    </div>
  ) : (
    <>
      <picture className="card-image">
        <img src={Star} alt="Star" />
      </picture>
      <h1 className="card-title">How did we do? </h1>
      <p className="card-description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!{" "}
      </p>
      <ul className="ratings">
        {RATINGS.map((ele, index) => (
          <li
            key={index}
            className={`rating-item ${index === selectedIndex && "active"}`}
            onClick={(e) => handleClick(e, index)}
          >
            {ele}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );

  return <div className="card">{content}</div>;
};

export default Card;

/* 
You selected out of 5 Thank you! 
We appreciate you taking the time to give a rating. 
If you ever need more support, don’t hesitate to get in touch!


update all files from frontend mentor repo
*/
