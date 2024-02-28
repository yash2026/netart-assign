import "./pumps.css";
import image from "../../assets/3.png";
const Pumps = () => {
  return (
    <>
      <div className="pumps">
        <p className="intro">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <div className="image-div">
          <img src={image} alt="" className="imagep" />
        </div>
        <p className="para">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
      <div>
        <h5 className="heading">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h5>
        <p className="para">
          CHEMICALS & PROCESS <span className="separator">|</span> POWER{" "}
          <span className="separator">|</span> WATER & WASTE WATER{" "}
          <span className="separator">|</span> OILS & GAS{" "}
          <span className="separator">|</span> PHARMA{" "}
          <span className="separator">|</span> SUGARS & DISTILLERIES{" "}
          <span className="separator">|</span> PAPER & PULP{" "}
          <span className="separator">|</span> MARINE & DEFENCE{" "}
          <span className="separator">|</span> METAL & MINING{" "}
          <span className="separator">|</span> FOOD & BEVERAGE{" "}
          <span className="separator">|</span> PETROCHEMICAL & REFINERIES{" "}
          <span className="separator">|</span> SOLAR{" "}
          <span className="separator">|</span> BUILDING{" "}
          <span className="separator">|</span> HVAC{" "}
          <span className="separator">|</span> FIRE FIGHTING{" "}
          <span className="separator">|</span> AGRICULTURE & RESIDENTIAL
        </p>
      </div>
    </>
  );
};

export default Pumps;
