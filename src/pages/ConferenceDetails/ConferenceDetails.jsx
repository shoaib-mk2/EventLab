import { useContext, useEffect, useState } from "react";
import { BsCalendar3 } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const ConferenceDetails = () => {
    const { formatDate } = useContext(AuthContext);
    const conferences = useLoaderData();
    const [conference, setConference] = useState([]);
    const params = useParams();
    useEffect(() => {
        const findConference = conferences.find(conference => conference.id == params.id);
        setConference(findConference);
    }, [conferences, params.id])

    const { name, image, date, description, speaker1_image, speaker1_name, speaker1_title, speaker2_image, speaker2_name, speaker2_title } = conference;
    return (
        <div className="w-4/5 mx-auto grid grid-cols-3">
            <div className="col-span-2">
                <img className="rounded-xl" src={image} alt="" />
                <div className="flex justify-between">
                    <div className='text-xl flex items-center gap-3'>
                        <BsCalendar3></BsCalendar3>
                        <p>{formatDate(date)}</p>
                    </div>
                    <div className="text-xl flex items-center gap-3">
                        <MdLocationPin></MdLocationPin>
                        <p>{conference.location}</p>
                    </div>
                </div>
                <p className="text-5xl">{name}</p>
                <p>{description}</p>
                <h2 className="text-4xl">Over View</h2>
                <ol className="list-disc text-xl">
                    <li>You Got Full Free Certificate.</li>
                    <li>Unlimited Coffe & Tea When U Boring.</li>
                    <li>Etiam dictum, dui sit amet venenatis.</li>
                    <li>Class aptent taciti sociosqu ad litora.</li>
                    <li>Lunch Suspendisse in commodo feli.</li>
                </ol>
                <h2 className="text-4xl">Main Speaker</h2>
                <div className="flex justify-between">
                    <div className="flex gap-5 items-center">
                        <div>
                            <img className="w-32 rounded-3xl border-2 border-[#007aff]" src={speaker1_image} alt="" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">{speaker1_name}</p>
                            <p className="font-semibold text-slate-500">{speaker1_title}</p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center">
                        <div>
                            <img className="w-32 rounded-3xl border-2 border-[#007aff]" src={speaker2_image} alt="" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">{speaker2_name}</p>
                            <p className="font-semibold text-slate-500">{speaker2_title}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-2xl">form</p>
            </div>
        </div>
    );
};

export default ConferenceDetails;