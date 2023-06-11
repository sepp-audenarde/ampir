import { React } from "react";
import styles from "./List_Projects.module.scss";

import Project from "../Project/Project";

import { projects } from "../../context/projectsData";

const List_Projects = () => {
	const { Venus, Gatchina, Smolny, Priorat, Michail } = projects;

	const current_projects = [Michail, Priorat, Smolny, Gatchina, Venus];

	return (
		<div className={styles.section}>
			<div className={styles.titleWrapper}>
				<div className={styles.title}>ОСУЩЕСТВЛЕННЫЕ ПРОЕКТЫ</div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					{current_projects.map((el, i) => (
						<Project key={i} info={el} />
					))}
				</div>
			</div>
		</div>
	);
};

export default List_Projects;
