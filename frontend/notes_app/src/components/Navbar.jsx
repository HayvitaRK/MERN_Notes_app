import React from "react";

const Navbar = () => {
    return (
        <div> 
            <div className="div">
            <form onSubmit={()=>{}}>
            <h1>Login</h1>
            <input type="text" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <button type="submit">Submit</button>
            </form>
            </div>
            
        </div>
    )
}

export default Navbar;