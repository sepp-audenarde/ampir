import React from "react";
import styles from "./Contact_Info.module.scss";

const Contact_Info = () => {
	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.top}>
					{/* <div className={styles.fillerTop}></div> */}
					<div className={styles.header}>Контакты компании "СК АМПИР"</div>
				</div>
				<div className={styles.bottom}>
					{/* <div className={styles.fillerBottom}></div> */}
					<div className={styles.texts}>
						<div className={styles.block}>
							<div className={styles.subtitle}>ОТДЕЛ РАБОТЫ С КЛИЕНТАМИ</div>
							<div className={styles.info}>8 (812) 658 63 43</div>
							<div className={styles.info}>8 (812) 999 06 38</div>
							<div className={styles.info}>8 (921) 999 06 38</div>
						</div>
						<div className={styles.block}>
							<div className={styles.subtitle}>E-MAIL СК АМПИР</div>
							<div className={styles.info}>info@skampir.ru</div>
						</div>
						<div className={styles.block}>
							<div className={styles.subtitle}>АДРЕС</div>
							<div className={styles.info}>195279 г. Санкт-Петербург, пр. Энтузиастов, д.30, к.2, п.487</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact_Info;
