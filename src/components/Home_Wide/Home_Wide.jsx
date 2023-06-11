import React from "react";
import { useRef, useEffect, useState } from "react";

import styles from "./Home_Wide.module.scss";

import wide from "/images/wide_home.webp";

import { useGlobalContext } from "../../context/context";

// import { scroll_Y } from "../../utils/utils";

const Home_Wide = () => {
	const { scroll_Y } = useGlobalContext();

	return (
		<div className={styles.section}>
			<div className={styles.textContainer}>
				<p className={styles.text}>Современные и традиционные решения в реставрации</p>
			</div>
			<div className={styles.wrapper}>
				<div src={wide} alt="image" className={styles.picture} style={{ transform: `translateX(${-scroll_Y * 0.1}px)` }}></div>
			</div>
		</div>
	);
};

export default Home_Wide;
