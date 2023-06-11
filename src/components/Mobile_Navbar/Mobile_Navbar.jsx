import React, { useState, useEffect, useRef } from "react";
import styles from "./Mobile_Navbar.module.scss";
import { Link } from "react-router-dom";
import { baseUrl } from "../../App";

const Mobile_Navbar = () => {
	return (
		<div className={styles.section}>
			<Link to={baseUrl + "/contacts"}>
				<div className={styles.link}>КОНТАКТЫ</div>
			</Link>
			<Link to={baseUrl + "/projects"}>
				<div className={styles.link}>НАШИ ПРОЕКТЫ</div>
			</Link>
			<Link to={baseUrl + "/about"}>
				<div className={styles.link}>О КОМПАНИИ</div>
			</Link>
			<Link to={baseUrl + "/"}>
				<div className={styles.link}>ГЛАВНАЯ</div>
			</Link>
		</div>
	);
};

export default Mobile_Navbar;
