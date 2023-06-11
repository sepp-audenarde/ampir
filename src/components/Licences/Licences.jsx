import React, { useEffect, useRef } from "react";
import styles from "./Licences.module.scss";
import { useLocation } from "react-router-dom";

const Licences = () => {
	const licences = useRef();

	const { hash, key } = useLocation();

	useEffect(() => {
		if (hash === "#licences") {
			licences.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [key, hash]);

	return (
		<div className={styles.section} ref={licences}>
			<div className={styles.wrapper}>
				<div className={styles.top}>
					<div className={styles.fillerTop}></div>
					<div className={styles.header}>СПИСОК ЛИЦЕНЗИЙ И ДОПУСКОВ </div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.fillerBottom}></div>
					<div className={styles.texts}>
						<div className={styles.text}>СК АМПИР имеет лицензии и допуски на осуществление всех видов реставрационных работ.</div>
						<div className={styles.text}>
							СК АМПИР способна вести строительство, реконструкцию и реставрацию объектов практически любого предназначения, в том числе и
							памятников архитектуры Российской Федерации.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Licences;
