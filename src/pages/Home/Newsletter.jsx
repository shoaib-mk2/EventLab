

const Newsletter = () => {
    return (
        <div className='w-4/5 mx-auto mb-12'>
            <div className="text-center py-24 rounded-3xl" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/newslater-bg.png)` }}>
                <h2 className='text-2xl md:text-4xl font-bold text-white mb-2'>Subscribe Our Newsletter</h2>
                <p className='text-base md:text-2xl font-bold text-[#007aff] mb-6'>Do not Miss Our Feature Update</p>
                <div className="relative mx-2 md:max-w-xl md:mx-auto">
                    <input type="text" placeholder="your email" className="input input-bordered w-full pr-16" />
                    <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;