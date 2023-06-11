import React from "react";
import styles from "./Sidebar_modal.module.scss";
import close_icon from "/icons/close.webp";
import { useGlobalContext } from "../../context/context";
import { Link } from "react-router-dom";

import { baseUrl } from "../../App";

const Sidebar_modal = ({ pathname }) => {
	const { closeSidebar, resetScroll } = useGlobalContext();

	const close = () => {
		closeSidebar();
	};

	const links = [
		{
			title: "Контакты",
			link: "/contacts",
		},
		{
			title: "Наши проекты",
			link: "/projects",
		},
		{
			title: "О компании",
			link: "/about",
		},
		{
			title: "Главная",
			link: "/",
		},
	];

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.top}>
					<div className={styles.button} onClick={close}>
						<img src={close_icon} alt="close" />
					</div>
					<div className={styles.links}>
						{links.map((elem, i) => {
							return (
								<div className={`${styles.link} ${pathname === elem.link ? styles.current : null}`} key={i}>
									<Link
										to={baseUrl + elem.link}
										onClick={() => {
											close();
											window.scrollTo({
												top: 0,
												left: 0,
												behavior: "smooth",
											});
										}}>
										{elem.title}
									</Link>
								</div>
							);
						})}

						{/* pathname === "/contacts" ? styles.current : null */}

						{/* <div className={styles.link}>Наши проекты</div>
						<div className={styles.link}>О компании</div>
						<div className={styles.link}>Главная</div> */}
					</div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.logo}>
						<Link
							to={baseUrl + "/"}
							onClick={() => {
								close();
								window.scrollTo({
									top: 0,
									left: 0,
									behavior: "smooth",
								});
							}}>
							Ампир
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar_modal;
