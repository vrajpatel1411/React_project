import '../Styles/body.css'
const Body=()=>{
    return(
        <div id="body">
            <div id="brand_details">
                <div id="brand_info">
                    <h1 id="brand_name"> YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                </div>
                <div id="brand_btn">
                    <button id="shop_now">Shop Now</button>
                    <button id="category">Category</button>
                </div>
                <div id="ecommerce_logo">
                    <p>Also Available On</p>
                    <div id="brand_logo">
                        <img src="/Images/flipkart.png" alt="Not found"/>
                        <img src="/Images/amazon.png" alt="not Found"/>
                    </div>
                </div>
            </div>
            <div id="brand_image">
                <img src="Images/shoe_image.png" />
            </div>
        </div>
    );
}
export default Body;