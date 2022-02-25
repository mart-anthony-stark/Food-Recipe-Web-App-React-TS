import Logo from '../../assets/img/logo.png'
const Navbar = () =>{
    return (<nav>
        <div className="left">
            <a href="#">Recipes</a>
            <a href="#">Ingredients</a>
            <a href="#">Meal Planning</a>
        </div>
        <div className="logo">
            <img src={Logo} alt="Kitcheen" />
        </div>
        <div className="right">
            <a href="#">About</a>
            <a href="#">Service</a>
            <a href="#">Blog</a>
        </div>
    </nav>)
}

export default Navbar