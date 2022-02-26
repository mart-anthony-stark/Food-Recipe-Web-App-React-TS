import './banner.css'

const Banner = () =>{
    return <div className="banner center-items">
        <div className="search-box">
            <input type="text" placeholder="Search Recipe"/>
            <button className="center-items">Search</button>
        </div>
    </div>
}
export default Banner