// import { useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import axios from "../axiosConfig";

// function Register() {
//   const navigate = useNavigate();
//   // const usernameDom = useRef(null);
//   const usernameDom = useRef();
//   const firstnameDom = useRef();
//   const lastnameDom = useRef();
//   const emailDom = useRef();
//   const passwordDom = useRef();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const usernameValue = usernameDom.current.value;
//     const firstValue = lastnameDom.current.value;
//     const lastValue = lastnameDom.current.value;
//     const emailValue = emailDom.current.value;
//     const passValue = passwordDom.current.value;
//     if (
//       !usernameValue ||
//       !firstValue ||
//       !lastValue ||
//       !emailValue ||
//       !passValue
//     ) {
//       alert("please provide all required information");
//       return;
//     }

//     try {
//       await axios.post("users/register", {
//         username: usernameValue,
//         firstname: firstValue,
//         lastname: lastValue,
//         email: emailValue,
//         password: passValue,
//       });
//       alert("login successfull. please login");
//       navigate("/login");
//     } catch (error) {
//       alert("something went wrong!");
//       console.log(error.response);
//     }
//   }

//   return (
//     <>
//       <div className="w-full max-w-xs ml-10">
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               // for="username"
//             >
//               Username
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               // id="username"
//               type="text"
//               placeholder="Username"
//               ref={usernameDom}
//               // value={usernameDom}
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               // for="username"
//             >
//               first name
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               // id="username"
//               type="text"
//               placeholder="first name"
//               ref={firstnameDom}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               last name
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               // id="username"
//               type="text"
//               placeholder="last name"
//               ref={lastnameDom}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               email
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               // id="username"
//               type="email"
//               placeholder="email"
//               ref={emailDom}
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               // for="password"
//             >
//               Password
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//               // id="password"
//               type="password"
//               placeholder="******************"
//               ref={passwordDom}
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-blue-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit">
//               Register
//             </button>
//             <button
//               className="bg-blue-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit">
//               <Link to={"/login"}>Sign in</Link>
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }
// export default Register;

import React from "react";
import { useRef, useState } from "react";
import axios from "../../src/axiosConfig";
import { Link, useNavigate } from "react-router-dom";

function Register({ toggle }) {
  let navigatTo = useNavigate();
  let userNameDom = useRef(null);
  let firstNameDom = useRef(null);
  let lastNameDom = useRef(null);
  let emailNameDom = useRef(null);
  let passWordDom = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    let userNameValue = userNameDom.current.value;
    let firstNameValue = firstNameDom.current.value;
    let lastNameValue = lastNameDom.current.value;
    let emailValue = emailNameDom.current.value;
    let passWordValue = passWordDom.current.value;
    if (
      !userNameValue ||
      !firstNameValue ||
      !lastNameValue ||
      !emailValue ||
      !passWordValue
    ) {
      alert("all fields required");
      return;
    }
    try {
      await axios.post("/users/register", {
        username: userNameValue,
        firstname: firstNameValue,
        lastname: lastNameValue,
        email: emailValue,
        password: passWordValue,
      });
      alert("user registered successfully");
      navigatTo("/");
    } catch (error) {
      alert("somthing went wrong");
      console.log(error.response.data);
    }
  }

  return (
    <>
      <div className="w-1/3 ml-10 bg-blue-100 mt-20 mb-5 p-2 max-h-90 ">
        <h1 className="text-2xl text-center">Create account</h1>
        <form onSubmit={handleSubmit} className="  rounded px-8 pt-6 pb-10">
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-green-50"
              // id="username"
              type="text"
              placeholder="Username"
              ref={userNameDom}
              // value={userNameDom}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded border-gray-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-green-50"
              // id="username"
              type="text"
              placeholder="first name"
              ref={firstNameDom}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-gray-400  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-green-50"
              // id="username"
              type="text"
              placeholder="last name"
              ref={lastNameDom}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-gray-400  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-green-50"
              // id="username"
              type="email"
              placeholder="email"
              ref={emailNameDom}
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-green-50"
              // id="password"
              type="password"
              placeholder="******************"
              ref={passWordDom}
            />
            {/* <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p> */}
          </div>

          <div className="flex items-center justify-between px-10">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Register
            </button>
            <Link to="/">
              <button
                onClick={() => toggle(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline"
                type="button">
                I have account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
