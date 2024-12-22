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
            <div className="flex flex-col md:flex-row my-10">
                <div className="w-full md:w-9/12"><RecentBlog></RecentBlog></div>
                <div className="w-full md:w-3/12 bg-green-200 p-4 rounded"><Newsletter handleSubmit={handleSubmit}></Newsletter></div>
            </div>
            
        </div>
    );
};

export default Home;