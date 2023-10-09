import { useLoaderData } from "react-router-dom";
import Speaker from "../Speaker/Speaker";


const Speakers = () => {
    const conferences = useLoaderData();

    return (
        <div>
            {
                conferences.map(conference => <Speaker key={conference.id} conference={conference}></Speaker>)
            }
        </div>
    );
};

export default Speakers;