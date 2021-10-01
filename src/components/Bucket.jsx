import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer'
import Navbar from './Navbar'
import BucketItemCard from './BucketItemCard'

class Bucket extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar />
                    <div className="container md:px-80 p-5 mt-10">
                        <div className="block md:flex space-btw">
                            <div>
                                <p className="text-2xl mt-2 font-bold "> Welcome John Doe,</p>
                                <p className="text-sm mt-2 font-medium">
                                    Here are items in your eventful moment bucket.
                                </p>
                            </div>
                            <div>
                                <Link to="/new-item" className="btn btn-submit">Add Item</Link>
                            </div>
                        </div> 

                        <div className="grid grid-cols-1 gap-4 my-10 md:grid-cols-2">
                            <BucketItemCard />
                            <BucketItemCard />
                            <BucketItemCard />
                            <BucketItemCard />
                        </div>
                        <div>
                            <button className="btn btn-submit">Load More</button>
                        </div>
                    </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Bucket;