import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Service from "./Service";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";


const Services = () => {
    const { conferences } = useContext(AuthContext);
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className="mb-20" data-aos="slide-up">
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