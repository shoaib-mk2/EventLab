import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Service from "./Service";


const Services = () => {
    const { conferences } = useContext(AuthContext);
    return (
        <div>
            <h2 className="text-4xl text-center font-bold mb-10">Our <span className="text-[#007aff]">Services</span></h2>
            <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    conferences.map(conference => <Service key={conference.id} conference={conference}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;