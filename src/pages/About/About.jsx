import React, { useEffect, useRef } from "react";
import styles from "./About.module.scss";
import Header from "../../components/Header/Header";
import Advantages from "../../components/Advantages/Advantages";
import List_Advantages from "../../components/List_Advantages/List_Advantages";

import Our_Services from "../../components/Our_Services/Our_Services";
import List_Our_Services from "../../components/List_Our_Services/List_Our_Services";

import Our_Lepnina from "../../components/Our_Lepnina/Our_Lepnina";

import Licences from "../../components/Licences/Licences";
import List_Licences from "../../components/List_Licences/List_Licences";

const About = () => {
	const info = {
		header: "О КОМПАНИИ",
		text1:
			"СК АМПИР ведет деятельность с 2001 года. Наша команда профессионалов готова взяться за строительные, ремонтные и реставрационные проекты любой сложности.",
		text2: "Наш состав - это люди, работавшие в крупных строительных компаниях, а также в государственных предприятиях.",
	};

	return (
		<div className={styles.section}>
			<Header info={info} />
			<Advantages />
			<List_Advantages />

			<Our_Lepnina />

			<Our_Services />
			<List_Our_Services />

			<Licences />
			<List_Licences />
		</div>
	);
};

export default About;
