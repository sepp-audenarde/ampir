import React from "react";
import styles from "./Projects.module.scss";
import Header from "../../components/Header/Header";
import List_Projects from "../../components/List_Projects/List_Projects";

const Projects = () => {
	const info = {
		header: "НАШИ ПРОЕКТЫ",
		text1:
			"Мы гордимся проектами, которые нам удалось осуществить. Опыт позволяет компании АМПИР браться за сложные проекты, выполняя их качественно и в срок.",
		text2: "Объединяя профессионалов в строительстве и реставрации, компания АМПИР достигает высокого качества выполненных проектов.",
	};

	return (
		<div className={styles.section}>
			<Header info={info} />
			<List_Projects />
		</div>
	);
};

export default Projects;
