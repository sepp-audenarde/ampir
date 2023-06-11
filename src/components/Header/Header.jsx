import React from "react";
import styles from "./Header.module.scss";

const Header = ({ info }) => {

	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.top}>
					<div className={styles.fillerTop}></div>
					<div className={styles.header}>{info.header}</div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.fillerBottom}></div>
					<div className={styles.texts}>
						<div className={styles.textLeft}>{info.text1}</div>
						<div className={styles.textRight}>{info.text2}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
