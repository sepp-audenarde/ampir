import React from "react";
import styles from "./List_Licences.module.scss";

import { licences } from "../../context/licencesData";
import { useGlobalContext } from "../../context/context";

const Licence = ({ info, open }) => {
	return (
		<div className={styles.licence}>
			<div className={styles.image} onClick={() => open(info)}>
				<img src={info.image} alt="licence" draggable="false" />
			</div>
			<div className={styles.name}>{info.name}</div>
		</div>
	);
};

const List_Licences = () => {
	const { openGallery } = useGlobalContext();

	function open(licence) {
		openGallery(licence);
	}

	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				{licences.map((elem, i) => (
					<Licence info={elem} key={i} open={open} />
				))}
			</div>
		</div>
	);
};

export default List_Licences;

// поправить, что в полном размере лицензии заходят друг на друга в режиме адаптивности
