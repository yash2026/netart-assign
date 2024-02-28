import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="telephone">
        <div className="contact">
          <i className="fa fa-phone"></i>
          <span> Toll free </span>
          <a href="tel:18002001234" className="tele">
            1800 200 1234
          </a>
        </div>
        <div className="contact">
          <i className="fa fa-facebook-official"> </i>
          <a href="www.facebook.com.cripumps"> www.facebook.com.cripumps</a>
        </div>
        <div className="contact">
          <i className="fa fa-globe"> </i>
          <a href="www.cripumps.com"> www.cripumps.com</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
