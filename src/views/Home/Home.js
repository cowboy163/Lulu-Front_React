import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div style={{
            fontSize:"64px",
            margin:"20%",
        }}>
            this is home page
            <br/>
            <button>
                <Link to="/whats-new/all"
                      style={{
                          fontSize:"64px",
                      }}
                >Jump to what's new!</Link>
            </button>
        </div>
    )
}

export default Home