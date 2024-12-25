import Swal from "sweetalert2";
import Banner from "../component/Banner";
import Newsletter from "../component/Newsletter";
import RecentBlog from "../component/RecentBlog";

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
            <Newsletter handleSubmit={handleSubmit}></Newsletter>
            
        </div>
    );
};

export default Home;