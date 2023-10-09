import { BsCheckLg, BsXLg } from "react-icons/bs";


const TicketPlan = () => {
    return (
        <div className="w-4/5 mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-10">Get Sponsor Ticket</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="shadow-2xl rounded-xl">
                    <div className="bg-[#007aff] text-white font-bold py-6 rounded-b-[50px] rounded-t-lg">
                        <p className="text-2xl">Silver</p>
                        <p className="text-3xl">$100</p>
                    </div>
                    <div className="p-5">
                        <div className="font-bold">
                            <p className="text-xl">Available Tickets</p>
                            <p className="text-2xl">270 / <span className="text-[#007aff] font-extrabold text-3xl">500</span></p>
                        </div>
                        <div className="flex justify-center my-8">
                            <div className="text-xl font-bold">
                                <div className="flex items-center gap-4">
                                    <BsCheckLg></BsCheckLg>
                                    <p>Conference Ticket</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <BsXLg></BsXLg>
                                    <p>Free Certificate</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <BsXLg></BsXLg>
                                    <p>Free Lunch & Coffee</p>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary w-full bg-[#007aff] text-white text-lg">Buy Ticket</button>
                    </div>
                </div>
                <div className="shadow-2xl rounded-xl">
                    <div className="bg-neutral text-white font-bold py-6 rounded-b-[50px] rounded-t-lg">
                        <p className="text-2xl">Gold</p>
                        <p className="text-3xl">$ 150</p>
                    </div>
                    <div className="p-5">
                        <div className="font-bold">
                            <p className="text-xl">Available Tickets</p>
                            <p className="text-2xl">470 / <span className="text-[#007aff] font-extrabold text-3xl">500</span></p>
                        </div>
                        <div className="flex justify-center my-8">
                            <div className="text-xl font-bold">
                                <div className="flex items-center gap-4">
                                    <BsCheckLg></BsCheckLg>
                                    <p>Conference Ticket</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <BsCheckLg></BsCheckLg>
                                    <p>Free Certificate</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <BsXLg></BsXLg>
                                    <p>Free Lunch & Coffee</p>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary w-full bg-neutral text-white text-lg">Buy Ticket</button>
                    </div>
                </div>
                <div className="shadow-2xl rounded-xl">
                    <div className="bg-[#007aff] text-white font-bold py-6 rounded-b-[50px] rounded-t-lg">
                        <p className="text-2xl">Platinum</p>
                        <p className="text-3xl">$ 180</p>
                    </div>
                    <div className="p-5">
                        <div className="font-bold">
                            <p className="text-xl">Available Tickets</p>
                            <p className="text-2xl">391 / <span className="text-[#007aff] font-extrabold text-3xl">500</span></p>
                        </div>
                        <div className="flex justify-center my-8">
                            <div className="text-xl font-bold">
                                <div className="flex items-center gap-4">
                                    <BsCheckLg></BsCheckLg>
                                    <p>Conference Ticket</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <BsCheckLg></BsCheckLg>
                                    <p>Free Certificate</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <BsCheckLg></BsCheckLg>
                                    <p>Free Lunch & Coffee</p>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary w-full bg-[#007aff] text-white text-lg">Buy Ticket</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketPlan;