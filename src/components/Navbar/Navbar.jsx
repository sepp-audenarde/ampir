import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.scss";
import menuImg from "/images/menu_navbar.webp";
import { useGlobalContext } from "../../context/context";
import { Link, useLocation } from "react-router-dom";

import { baseUrl } from "../../App";

const Navbar = () => {
	const { openSidebar, scroll_Y } = useGlobalContext();
	const { pathname } = useLocation();
	const [prevscroll, setPrevScroll] = useState(0);

	const menu = useRef();

	useEffect(() => {
		if (prevscroll < scroll_Y) {
			menu.current.classList.add(styles.turn);
		} else {
			menu.current.classList.remove(styles.turn);
		}

		setPrevScroll(scroll_Y);
	}, [scroll_Y]);

	useEffect(() => {
		menu.current.classList.add(styles.turn);
	}, []);

	const contacts = (
		<Link to={baseUrl + "/contacts"} draggable="false">
			контакты
		</Link>
	);
	const main = (
		<Link to={baseUrl + "/"} draggable="false">
			главная
		</Link>
	);

	return (
		<div className={styles.section}>
			<div className={styles.header}>
				<div className={styles.name}>
					<Link to={baseUrl + "/"} draggable="false">
						АМПИР
					</Link>
					{/* click */}
				</div>
				<div className={styles.link}>{pathname === baseUrl + "/contacts" ? main : contacts}</div>
			</div>
			<div className={styles.menu} onClick={() => openSidebar()}>
				<div className={styles.image} src={menuImg}>
					<img src={menuImg} alt="menu" className={styles.picture} draggable="false" />
					<div className={styles.rotator} ref={menu}>
						меню
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
