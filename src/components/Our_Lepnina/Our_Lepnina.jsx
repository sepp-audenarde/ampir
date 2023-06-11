import React, { useEffect, useRef } from "react";
import styles from "./Our_Lepnina.module.scss";
import { useLocation } from "react-router-dom";

const Our_Lepnina = () => {
	const partners = useRef();

	const { hash, key } = useLocation();

	useEffect(() => {
		if (hash === "#partners") {
			partners.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [key, hash]);

	return (
		<div className={styles.section} ref={partners}>
			<div className={styles.wrapper}>
				<div className={styles.top}>
					<div className={styles.filler}></div>
					<div className={styles.header}>ИЗГОТОВЛЕНИЕ ЛЕПНИНЫ</div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.filler}></div>

					<div className={styles.texts}>
						<div className={styles.text}>СК АМПИР имеет собственное производство фасадного декора и интерьерной лепнины.</div>
						<div className={styles.text}>
							Мы готовы предложить Вам создание эскизов для Ваших проектов, производство элементов фасадного декора и проведение необходимых
							работ по их установке на объекте.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Our_Lepnina;
