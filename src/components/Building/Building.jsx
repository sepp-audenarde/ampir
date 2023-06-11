import React from "react";
import styles from "./Building.module.scss";
import building from "/images/house_footer.webp";

const Building = () => {
	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<img src={building} alt="building" className={styles.building} draggable="false" />
			</div>
			<div className={styles.border}></div>
		</div>
	);
};

export default Building;
