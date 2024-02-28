import logo from "../../assets/logo.png";
import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header-div">
        <img src={logo} alt="" className="logo" />
      </div>
    </header>
  );
};

export default Header;
