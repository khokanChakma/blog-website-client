
const FaqQuestion = () => {
    return (
        <div className="flex flex-col gap-4 md:w-8/12 mx-auto">
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">1. What is this blog website about?</div>
                <div className="collapse-content">
                    <p>This website is a platform for sharing informative, entertaining, and inspiring blog posts across a variety of topics, from technology to lifestyle.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">2. How can I find blogs on specific topics?</div>
                <div className="collapse-content">
                    <p>You can use the search bar or browse through the categories listed on our homepage to find blogs on specific topics.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">3. Do you have a category for trending or featured blogs?</div>
                <div className="collapse-content">
                    <p>Yes, we highlight trending and featured blogs on our Wishlist "Featured" section.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">4. How often is new content published?</div>
                <div className="collapse-content">
                    <p>New content is published weekly to ensure you always have fresh and engaging material to read.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">5. Can I subscribe to updates or newsletters?</div>
                <div className="collapse-content">
                    <p>Absolutely! You can subscribe to our newsletter to receive the latest blog updates directly in your inbox.</p>
                </div>
            </div>
        </div>
    );
};

export default FaqQuestion;