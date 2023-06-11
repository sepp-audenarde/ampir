import React, { useEffect, useRef } from "react";
import styles from "./Our_Services.module.scss";
import { useLocation } from "react-router-dom";

const Our_Services = () => {
	const services = useRef();

	const { hash, key } = useLocation();

	useEffect(() => {
		if (hash === "#services") {
			services.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [key, hash]);

	return (
		<div className={styles.section} ref={services}>
			<div className={styles.wrapper}>
				<div className={styles.top}>
					<div className={styles.header}>НАШИ УСЛУГИ</div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.texts}>
						<div className={styles.text}>
							СК АМПИР имеет более чем 20-летний опыт в сфере строительства и реставрации. Компания предоставляет широкий спектр услуг по
							реставрации и обслуживанию исторических зданий и сооружений.
						</div>
						<div className={styles.text}>
							Мы работаем с любыми возможными материалами, от кирпичных зданий до сооружений из металла и стекла. Мы готовы предложить
							выполнение как крупных, так и небольших работ по реставрации.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Our_Services;
