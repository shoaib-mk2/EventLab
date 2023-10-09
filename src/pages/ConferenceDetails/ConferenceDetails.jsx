import { useContext, useEffect, useState } from "react";
import { BsCalendar3, BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { BsFillBookmarkCheckFill } from "react-icons/bs"


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
        <div className="w-4/5 mt-10 md:mt-20 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2">
                <img className="rounded-xl mb-5" src={image} alt="" />
                <div className="flex justify-between mb-6 border-b-2 p-3">
                    <div className='text-base md:text-xl flex items-center gap-3'>
                        <BsCalendar3></BsCalendar3>
                        <p>{formatDate(date)}</p>
                    </div>
                    <div className="text-base md:text-xl flex items-center gap-3">
                        <MdLocationPin></MdLocationPin>
                        <p>{conference.location}</p>
                    </div>
                </div>
                <p className="text-3xl md:text-5xl font-extrabold mb-5">{name}</p>
                <p className="mb-6">{description}</p>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">Over View</h2>
                <ol className="list-disc text-lg md:text-xl mb-5">
                    <li>You Got Full Free Certificate.</li>
                    <li>Unlimited Coffe & Tea When U Boring.</li>
                    <li>Etiam dictum, dui sit amet venenatis.</li>
                    <li>Class aptent taciti sociosqu ad litora.</li>
                    <li>Lunch Suspendisse in commodo feli.</li>
                </ol>
                <h2 className="text-2xl md:text-4xl font-bold mb-5">Main <span className="text-[#007aff]">Speaker</span></h2>
                <div className="md:flex justify-between mb-5">
                    <div className="flex gap-5 items-center">
                        <div>
                            <img className="w-32 rounded-3xl border-2 border-[#007aff]" src={speaker1_image} alt="" />
                        </div>
                        <div>
                            <p className="text-xl md:text-2xl font-bold">{speaker1_name}</p>
                            <p className="text-sm md:text-base font-semibold text-slate-500 mb-5">{speaker1_title}</p>
                            <div className="flex gap-4 text-xl">
                                <BsFacebook></BsFacebook>
                                <BsInstagram></BsInstagram>
                                <BsLinkedin></BsLinkedin>
                                <BsTwitter></BsTwitter>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse md:flex-row gap-5 items-center">
                        <div>
                            <img className="w-32 rounded-3xl border-2 border-[#007aff]" src={speaker2_image} alt="" />
                        </div>
                        <div>
                            <p className="text-xl md:text-2xl font-bold">{speaker2_name}</p>
                            <p className="text-sm md:text-base font-semibold text-slate-500 mb-5">{speaker2_title}</p>
                            <div className="flex gap-4 text-xl">
                                <BsFacebook></BsFacebook>
                                <BsInstagram></BsInstagram>
                                <BsLinkedin></BsLinkedin>
                                <BsTwitter></BsTwitter>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="card w-full shadow-2xl bg-base-100 mb-10">
                    <p className="text-3xl bg-[#007aff] w-max text-white mt-5 p-3"><BsFillBookmarkCheckFill className="inline"></BsFillBookmarkCheckFill> Book This Event</p>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Full Name</span>
                            </label>
                            <input type="email" placeholder="your full name" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="password" placeholder="phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-[#007aff] text-white">Submit Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConferenceDetails;