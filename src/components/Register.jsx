import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';

function Register() {
    return (
        <React.Fragment>
        <Navbar />
        <div className="bg-white-50 flex flex-col  mx-auto">
            <div className="max-w-md w-80 mx-auto mt-10 mb-5">
                <div className="text-2xl font-bold mt-2 text-left"> Create an account,</div>
            </div>
            <form>
                <div className="form-group ">
                    <label htmlFor="name" className="text-xs font-bold text-gray-600">Fullname</label>
                    <input type="text" id="name" className="w-80 p-2 border border-gray-300 block mx-auto rounded mt-1" required/>
                </div>
            
                <div className="form-group">
                <label htmlFor="email" className="text-xs font-bold text-gray-600">Email</label>
                    <input type="email" id="email" className="w-80 p-2 border border-gray-300 block mx-auto rounded mt-1" required/> 
        
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="text-xs font-bold text-gray-600">Password</label>
                    <input type="password" id="password" className="w-80 p-2 border border-gray-300 block mx-auto rounded mt-1" required/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-submit">Create</button>
                </div>
              
            </form>
        </div>
        <Footer className="fixed" />
    </React.Fragment>
    )
}

export default Register
