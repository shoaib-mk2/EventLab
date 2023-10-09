
import { useContext } from "react";
import Banner from "./Banner";
import { AuthContext } from "../../provider/AuthProvider";
import Services from "./Services";
import TicketPlan from "./TicketPlan";


const Home = () => {
    const { conferences } = useContext(AuthContext);
    console.log(conferences);

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <TicketPlan></TicketPlan>
        </div>
    );
};

export default Home;