import Logo from "../../assets/img/logo.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav>
      {/* <div className="left">
            <a href="#">Recipes</a>
            <a href="#">Ingredients</a>
            <a href="#">Meal Planning</a>
        </div> */}
      <div className="left">
        <div className="menu">
          <div className="bar"></div>
        </div>
      </div>
      <div className="mid">
        <div className="logo">
          <img src={Logo} alt="Kitcheen" />
        </div>
      </div>
      <div className="right">
        <a href="#">About</a>
        <a href="#">Service</a>
        <a href="#">Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
