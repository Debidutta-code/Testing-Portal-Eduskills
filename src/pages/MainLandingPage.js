import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainLandingPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate('/login');
    }, [navigate])

    return(
        <div className="main-landing-page-container">

        </div>
    )
}

export default MainLandingPage;