import React from "react";
import styles from "./List_Advantages.module.scss";

const Advantage = ({ info }) => {
	return (
		<div className={styles.advantage}>
			<div className={styles.text}>{info.text}</div>
			<div className={styles.num}>{info.nth + 1}</div>
		</div>
	);
};

const List_Advantages = () => {
	const list = [
		"Наличие всех необходимых в реставрации лицензий",
		"Членство в СРО",
		"Опыт реставрации крупных объектов",
		"Составление реставрационных проектов",
	];

	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.bottom}>
					<div className={styles.fillerBottom}></div>

					<div className={styles.texts}>
						{list.map((elem, i) => (
							<Advantage key={i} info={{ text: elem, nth: i }} />
						))}
						<div className={styles.fillerBottom}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default List_Advantages;
