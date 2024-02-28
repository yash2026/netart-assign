import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import "./hero.css";
const Hero = () => {
  return (
    <div className="container award grid">
      <div className="image-award">
        <img src={image1} alt="" className="image" />
      </div>
      <div className="flex description">
        <h4 className="achievement">
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h4>
        <ul className="listing">
          <li className="list">
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.{" "}
          </li>
        </ul>
        <div className="award-image">
          <img src={image2} alt="" className="image2" />
        </div>
        <div className="govt">
          Government of India has awarded the{" "}
          <strong>"National Energy Conservation Award 2018"</strong>. Mr. G.
          Selvaraj, Joint Managing Director of C.R.I. Group received the award
          from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
          Singh, Honorable Minister of State.
        </div>
      </div>
    </div>
  );
};

export default Hero;
