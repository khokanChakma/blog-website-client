import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
    const {title,short_description,imgURL,category,_id} = blog;
    return (
        <div>
            <div
                className='w-full px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'
            >
                <div className="card card-compact bg-base-100 w-full p-4 border shadow-xl">
                    <figure>
                        <img
                            className='h-[300px]'
                            src={imgURL}
                            alt="photo" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{title}</h2>
                        <p className="text-xl"><span className="text-xl font-bold">Category : </span>{category}</p>
                        <p className="text-xl"><span className="text-xl font-bold">Short Description:</span>{short_description}</p>
                        <div className="card-actions">
                            <Link to={`/blogdetails/${_id}`} className="btn btn-primary">Details</Link>
                            <button className="btn">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;