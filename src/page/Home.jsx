import Swal from "sweetalert2";
import Banner from "../component/Banner";
import Newsletter from "../component/Newsletter";
import RecentBlog from "../component/RecentBlog";
import Ingredients from "../component/Ingredients";
import FaqQuestion from "../component/FaqQuestion";
import Contact from "../component/Contact";

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
            <div>
                <FaqQuestion></FaqQuestion>
            </div>
            <div>
                <Ingredients></Ingredients>
            </div>
            <div>
                <Contact></Contact>
            </div>
            <div>
                <Newsletter handleSubmit={handleSubmit}></Newsletter>
            </div>

        </div>
    );
};

export default Home;