import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <img src={logo} className="w-20 object-fit m-4" alt="header_logo" onClick={handleClick} />
    </div>
  );
};

export default Header;
