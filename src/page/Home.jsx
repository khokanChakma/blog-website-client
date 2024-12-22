import Banner from "../component/Banner";
import Newsletter from "../component/Newsletter";
import RecentBlog from "../component/RecentBlog";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="flex flex-col md:flex-row">
                <div className="w-9/12"><RecentBlog></RecentBlog></div>
                <div className="w-3/12"><Newsletter></Newsletter></div>
            </div>
            
        </div>
    );
};

export default Home;