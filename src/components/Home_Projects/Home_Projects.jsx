import { React, useEffect } from "react";
import styles from "./Home_Projects.module.scss";

import Project from "../Project/Project";

import { projects } from "../../context/projectsData";
import { Link } from "react-router-dom";
import { baseUrl } from "../../App";

const Home_Projects = () => {
	const { Venus, Gatchina, Smolny } = projects;
	const current_projects = [Venus, Gatchina, Smolny];

	return (
		<div className={styles.section}>
			<div className={styles.titleWrapper}>
				<div className={styles.title}>
					<Link
						draggable="false"
						to={baseUrl + "/projects"}
						onClick={() => {
							window.scrollTo({
								top: 0,
								left: 0,
								behavior: "smooth",
							});
						}}>
						ОСУЩЕСТВЛЕННЫЕ ПРОЕКТЫ
					</Link>
				</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					{current_projects.map((el, i) => (
						<Project key={i} info={el} />
					))}
				</div>
			</div>
			{/* <div> */}
			<Link
				draggable="false"
				to={baseUrl + "/projects"}
				onClick={() => {
					window.scrollTo({
						top: 0,
						left: 0,
						behavior: "smooth",
					});
				}}>
				<div className={styles.subtitle}>
					<div className={styles.num}>(05)</div>
					<div className={styles.name}>
						<p className={styles.underline_one}>ВСЕ ПРОЕКТЫ</p>
					</div>
				</div>
			</Link>
			{/* </div> */}
		</div>
	);
};

export default Home_Projects;
