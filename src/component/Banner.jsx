import banner from '../assets/banner.jpeg'
const Banner = () => {
    return (
        <div
            className="hero min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${banner})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Our blog</h1>
                    <p className="mb-5">
                        
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;