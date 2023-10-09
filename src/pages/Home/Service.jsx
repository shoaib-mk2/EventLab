import { Link } from "react-router-dom";


const Service = ({ conference }) => {
    const { id, name, image, description, price } = conference;

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure className="max-h-64 relative">
                <img src={image} alt="" />
                <p className="absolute bottom-0 left-0 text-white bg-slate-900 px-6 py-3">${price}</p>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description.slice(0, 120)} <span className="text-[#007aff] font-extrabold">...</span></p>
                <div className="card-actions justify-end">
                    <Link to={`/conferenceDetails/${id}`}><button className="btn btn-primary bg-[#007aff] text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;