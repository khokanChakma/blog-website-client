import Swal from "sweetalert2";
import Banner from "../component/Banner";
import Newsletter from "../component/Newsletter";
import RecentBlog from "../component/RecentBlog";
import Ingredients from "../component/Ingredients";
import FaqQuestion from "../component/FaqQuestion";

const Home = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        Swal.fire({
            title: "Thank you for subscribing to our newsletter",
            icon: "success",
            draggable: true,
            showConfirmButton: false,
            timer: 1500
        });
        form.reset();
    }
    return (
        <div>
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <div className="py-8 bg-[#eaeaea] ">
                <h2 className="text-2xl text-[#f97c0f] font-bold text-center py-4 mb-4">FAQ Questions</h2>
                <FaqQuestion></FaqQuestion>
            </div>
            <div className="bg-[#f1f1f1] py-8">
                <Ingredients></Ingredients>
            </div>
            <div className="bg-[#008aca] py-8">
                <Newsletter handleSubmit={handleSubmit}></Newsletter>
            </div>

        </div>
    );
};

export default Home;