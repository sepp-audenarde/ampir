import React, { useEffect } from "react";
import { useGlobalContext } from "./context/context";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

// routes for pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Projects from "./pages/Projects/Projects";
import Error from "./pages/Error/Error";

// navs and footer
import Navbar from "./components/Navbar/Navbar";
import Mobile_Navbar from "./components/Mobile_Navbar/Mobile_Navbar";
import Footer from "./components/Footer/Footer";

// modals
import Popup from "./popups/Popups";
import Licence_Modal from "./components/Licence_Modal/Licence_Modal";
import Sidebar from "./components/Sidebar/Sidebar";

export const baseUrl = "/ampir_react";

function App() {
	// const { resetScroll } = useGlobalContext();

	// useEffect(() => {
	// 	resetScroll();
	// }, []);

	return (
		<div className="App">
			{/* navs */}
			<Navbar />
			<Mobile_Navbar />

			{/* modals */}

			<Sidebar />
			<Popup />
			<Licence_Modal />

			{/* routes for pages */}
			<Routes>
				<Route element={<Home />} path={baseUrl + "/"} />
				<Route element={<About />} path={baseUrl + "/about"} />

				<Route element={<Contacts />} path={baseUrl + "/contacts"} />
				<Route element={<Projects />} path={baseUrl + "/projects"} />
				<Route element={<Error />} path={baseUrl + "*"} />
			</Routes>

			{/* footer */}
			<Footer />
		</div>
	);
}

export default App;
