import React from "react";
import styles from "./Home.module.scss";

import Home_Main from "../../components/Home_Main/Home_Main";
// import Home_Wide from "../../components/Home_Wide/Home_Wide";
import Home_Idea from "../../components/Home_Idea/Home_Idea";
import Home_Service from "../../components/Home_Service/Home_Service";
import Home_Projects from "../../components/Home_Projects/Home_Projects";
import Home_Lepnina from "../../components/Our_Lepnina/Our_Lepnina";

const Home = () => {
	return (
		<div>
			<Home_Main />
			{/* <Home_Wide /> */}
			<Home_Idea />
			<Home_Service />
			<Home_Projects />

		</div>
	);
};



export default Home;
