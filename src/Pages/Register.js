import React from "react";

const Register = () => {
  return (
    <div className="wrapper">
        <div className="container">
            <form className="form">
                <div className="col-6">
                   <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" className="field" />
                   </div>
                     <div className="form-group">
                     <label htmlFor="gender">Gender</label>
                     <select className="gender">
                         <option>Male</option>
                         <option>Female</option>
                     </select>
                     </div>
                     <div className="form-group">
                         <label htmlFor="DOB">Date If Birth <span style={{color: 'red'}}>*</span> </label>
                         <div className="dob">
                             <select name="year">
                                 <option>YY</option>
                                 <option>1994</option>
                                 <option>1995</option>
                                 <option>1996</option>
                                 <option>1997</option>
                                 <option>1998</option>
                             </select>
                             <select name="month">
                                 <option>MM</option>
                                 <option>1994</option>
                                 <option>1995</option>
                                 <option>1996</option>
                                 <option>1997</option>
                                 <option>1998</option>
                             </select>
                             <select name="year">
                                 <option>YY</option>
                                 <option>1994</option>
                                 <option>1995</option>
                                 <option>1996</option>
                                 <option>1997</option>
                                 <option>1998</option>
                             </select>
                         </div>
                     </div>

                </div>
                <div className="col-6"></div>
            </form>
        </div>
    </div>
  );
};

export default Register;
