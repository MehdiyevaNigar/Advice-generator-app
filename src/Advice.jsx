import pauseMobile from "../src/images/pattern-divider-mobile.svg";
import pauseDesktop from "../src/images/pattern-divider-desktop.svg";
import dice from "../src/images/icon-dice.svg";
import { useEffect, useState } from "react";
import axios from "axios";
const Advice = () => {
  const [advice, setAdvice] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Advice #{advice?.slip?.id}</h1>
      <p>{advice?.slip?.advice}</p>
      <picture>
        <source media="(min-width: 768px)" srcSet={pauseDesktop} />
        <img src={pauseMobile} alt="#" />
      </picture>

      <div>
        <button onClick={fetchData}>
          <img src={dice} alt="#" />
        </button>
      </div>
    </div>
  );
};

export default Advice;
