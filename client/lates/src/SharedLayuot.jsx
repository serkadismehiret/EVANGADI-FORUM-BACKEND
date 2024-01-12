import React from "react";
import Navbar from "./Componets/Navbar";
import Footer from "./Componets/Footer";
import { Outlet } from "react-router-dom";
// import Landing from "./Componets/Landing";

function SharedLayuot() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}

export default SharedLayuot;