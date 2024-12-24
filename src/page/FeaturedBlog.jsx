import axios from "axios";
import { useEffect, useState } from "react";
import FeatureTable from "../component/FeatureTable";

const FeaturedBlog = () => {
    const [blogs, setBlogs] = useState([])
    
    const sortedData = [...blogs].sort((a, b) => b.long_description.length - a.long_description.length).slice(0,10);
    console.log(sortedData)

    useEffect(() => {
        const featureAllJobs = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/add-feature`)
            setBlogs(data);
        }
        featureAllJobs();
    }, [])
    return (
        <div className="mt-6">
            <FeatureTable sortedData={sortedData}></FeatureTable>
        </div>
    );
};

export default FeaturedBlog;