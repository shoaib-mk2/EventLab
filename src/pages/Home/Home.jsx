
import { useContext } from "react";
import Banner from "./Banner";
import { AuthContext } from "../../provider/AuthProvider";


const Home = () => {
    const { conferences } = useContext(AuthContext);
    console.log(conferences);

    return (
        <div>
            <Banner></Banner>
            <h1 className='text-3xl'>yoooooooooooooo</h1>
        </div>
    );
};

export default Home;