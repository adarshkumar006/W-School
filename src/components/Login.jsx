import { School } from "../data/schoolData";
let Login = () => { 
    return (
         <div>
             {/* Heading */} 
             <div className="container text-center text-danger p-4 mt-5 rounded-3"> 
                <h3 className="fw-bold text-warning"> {School.schoolName} Login Page </h3>
                 <p className="mb-0"> Please enter your credentials to access the  {School.schoolName} portal. </p> 
                 </div>
                 
                  {/* Login Card */} 
                  <div className="container d-flex justify-content-center"> 
                    <div className="card shadow p-4 mt-4 mb-5" style={{ width: "400px" }} >
                         <h2 className="text-center mb-4"> Login </h2>
                     <form>
                         {/* Email */}
                          <div className="mb-3"> 
                            <label className="form-label"> Email </label>
                             <input type="email" className="form-control" placeholder="Enter your email" />
                 </div>
     {/* Password */
     } <div className="mb-3"> 
     <label className="form-label"> Password </label>
      <input type="password" className="form-control" placeholder="Enter your password" /> 
      </div>
       {/* Remember Me */} 
       <div className="form-check mb-3"> 
        <input type="checkbox" className="form-check-input" id="remember" /> 
        <label className="form-check-label" htmlFor="remember" > Remember me </label>
         </div>
          {/* Login Button */}
           <button type="submit" className="btn btn-primary w-100" > <b>Login</b></button>
            </form>
             <div className="text-center mt-3">
                 <a href="#" className="text-decoration-none"> Forgot Password? </a> 
                 </div> 
                 </div> 
                 </div> 
                 </div> 
                 )
                  }; 
export default Login;