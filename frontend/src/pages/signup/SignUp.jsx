import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";

function SignUp() {
  const [inputs,setInputs] = useState({
    fullname:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  })

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(inputs);
  }
  const handleCheckboxChange = (gender)=>{
     setInputs({...inputs , gender});
  } 

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding 
    backdrop-filter backdrop-blur-1g bg-opacity-30"
      >
        <h1 className="text-3xl  font-semibold text-center text-gray-300">
           SignUp
          <span className="text-blue-500">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full name</span>
            </label>
            <input
              type="text"
              placeholder="Abdur Rahman"
              className="w-full input input-bordered h-10"
              value = {inputs.fullname}
              onChange={(e)=> setInputs({...inputs, fullname:e.target.value})}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="abdurRahman69"
              className="w-full input input-bordered h-10"
              value = {inputs.username}
              onChange={(e)=> setInputs({...inputs, username:e.target.value})}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value = {inputs.password}
              onChange={(e)=> setInputs({...inputs, password:e.target.value})}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value = {inputs.confirmPassword}
              onChange={(e)=> setInputs({...inputs, confirmPassword:e.target.value})}
            />
          </div>
         
          <GenderCheckbox  onCheckboxChange={handleCheckboxChange} selectedGender = {inputs.gender}/>
          <Link to='/login' className="text-sm hover:underline hover:text-blue-600  inline-block">
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>

          </form>
      </div>
    </div>
  );
}

export default SignUp;

//starter code for signup component
// function SignUp() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div
//         className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding 
//     backdrop-filter backdrop-blur-1g bg-opacity-30"
//       >
//         <h1 className="text-3xl  font-semibold text-center text-gray-300">
//            SignUp
//           <span className="text-blue-500">ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Abdur Rahman"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="abdurRahman69"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Confirm Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
         
//           <GenderCheckbox />
//           <a href="#" className="text-sm hover:underline hover:text-blue-600  inline-block">
//             Already have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">Sign Up</button>
//           </div>

//           </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;

