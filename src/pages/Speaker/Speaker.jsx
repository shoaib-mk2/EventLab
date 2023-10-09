

const Speaker = ({ conference }) => {
    const { speaker1_name, speaker1_title, speaker1_bio, speaker1_image, speaker2_name, speaker2_title, speaker2_bio, speaker2_image } = conference;
    return (
        <div className='w-4/5 mx-auto my-14'>
            <div className="hero max-h-max max-w-max mx-auto mb-8 bg-base-200 shadow-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={speaker1_image} className="md:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl md:text-5xl font-extrabold">{speaker1_name}</h1>
                        <p className="py-6 text-xl md:text-2xl font-bold">{speaker1_title}</p>
                        <p className="py-6 md:text-xl">{speaker1_bio}</p>
                    </div>
                </div>
            </div>
            <div className="hero max-h-max max-w-max mx-auto mb-8 bg-base-200 shadow-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={speaker2_image} className="md:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl md:text-5xl font-extrabold">{speaker2_name}</h1>
                        <p className="py-6 text-xl md:text-2xl font-bold">{speaker2_title}</p>
                        <p className="py-6 md:text-xl">{speaker2_bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speaker;