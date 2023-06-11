import React, { useEffect, useRef } from "react";
import styles from "./Sidebar.module.scss";
import Sidebar_modal from "./Sidebar_modal";
import { useGlobalContext } from "../../context/context";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
	const { closeSidebar, isSidebarOpen, screenWidth } = useGlobalContext();

	const { pathname } = useLocation();

	const sidebar_body = useRef();
	const sidebar_cover = useRef();
	const sidebar_modal = useRef();

	const close = () => {
		closeSidebar();
	};

	useEffect(() => {
		if (isSidebarOpen && screenWidth < 600) close();
	}, [screenWidth]);

	useEffect(() => {
		if (isSidebarOpen) {
			document.body.classList.add("disableScroll");
		} else {
			document.body.classList.remove("disableScroll");
		}

		if (isSidebarOpen) {
			sidebar_body.current.style.display = "flex";

			setTimeout(() => {
				sidebar_cover.current.style.opacity = "1";
				sidebar_modal.current.style.transform = "translateX(0px)";
			}, 0);
		} else {
			sidebar_cover.current.style.opacity = "0";
			sidebar_modal.current.style.transform = "translateX(350px)";

			const breaker = setTimeout(() => {
				sidebar_body.current.style.display = "none";
			}, 800);

			return () => {
				sidebar_body.current.style.display = "none";
				clearTimeout(breaker);
			};
		}
	}, [isSidebarOpen]);

	return (
		<div className={styles.sidebar} ref={sidebar_body}>
			<div className={styles.cover} ref={sidebar_cover} onClick={close}></div>
			<div className={styles.modal} ref={sidebar_modal}>
				<Sidebar_modal pathname={pathname} />
			</div>
		</div>
	);
};

export default Sidebar;
