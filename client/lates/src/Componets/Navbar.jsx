// import React from "react";
// import React, { useEffect, useState,useStateValue } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useStateValue } from "../stateprovider";

// import axios from "../axiosConfig";
// import { Link } from "react-router-dom";

// function Navbar() {

//   const [{ user }, dispatch] = useStateValue();
//   const [show, handleShow] = useState(false);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (user == null) {
//       navigate("/login");
//     }
//   }, [navigate]);

//   const handlelogout = () => {
//     dispatch({
//       type: "SET_USER",
//       user: null,
//     });
//     navigate("/login");
//   };

//   const handleClick = () => {
//     navigate("/profile");
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.innerWidth > 992) {
//         handleShow(true);
//       } else {
//         handleShow(false);
//       }
//     };
//     window.addEventListener("resize", handleScroll);
//     return () => {
//       window.removeEventListener("resize", handleScroll);
//     };
//   }, []);

// return (
//     <nav className="flex items-center justify-between flex-wrap bg-white py-10 px-20">

//       <div className="flex items-center flex-shrink-0 text-black mr-6">
//         {/* <Link to="/"> */}
//         <img
//           src="https://forum.ibrodev.com/assets/evangadi-logo-5fea54cc.png"
//           alt=""
//         />
//         {/* </Link> */}

//       </div>

//       <div className="w-full block flex-grow lg:flex lg:items-right lg:w-auto justify-around">
//         <div className=" lg:flex-grow pl-80 justify-between items-right">
//           <a
//             href="#responsive-header"
//             className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
//             HOME
//           </a>
//           <a
//             href="#responsive-header"
//             className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white ">
//             How it works
//           </a>
//         </div>
//         <div>
//           <a
//             href="/"
//             className="inline-block text-sm px-10 mr-10 py-2 pr-10 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-blue-700 mt-4 lg:mt-0 bg-blue-500">
//             SIGN IN
//           </a>

//         </div>
//       </div>
//     </nav>

//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slide from "./Slide";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // console.log(windowWidth);
  const logingOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="bg-white w-full px-10 fixed top-0 left-0  shadow z-10 ">
      {/* //  <div className="flex items-center justify-between flex-wrap bg-white py-10 px-20"> */}
      <div className="  flex justify-between  pl-[20px] py-1 ">
        <Link to="/login">
          <img
            className="max-w-none"
            src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
            alt="Evangadi Logo"
          />
        </Link>
        {windowWidth > 990 ? (
          <div className=" flex space-x-6 mr-20">
            <Link className=" hover:text-orange-500 py-2" to="/">
              Home
            </Link>
            <Link className=" hover:text-orange-500 py-2" to="/">
              How it Works{" "}
            </Link>
            <Link
              className={`py-2 ' ${
                token
                  ? " hover:text-orange-500"
                  : "hover:bg-orange-500 text-white  px-20   rounded-md border border-gray-600 bg-blue-600"
              } `}
              to="/sign in"
              onClick={logingOut}>
              {!token ? "SIGN IN" : "LOG OUT"}
            </Link>
          </div>
        ) : (
          <div>
            <Slide />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
