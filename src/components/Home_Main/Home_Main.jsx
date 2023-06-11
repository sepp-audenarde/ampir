import React, { useState, useEffect, useRef } from "react";
import styles from "./Home_Main.module.scss";

import Home_Four from "../Home_Four/Home_Four";
import { useGlobalContext } from "../../context/context";

import big from "/images/big_home.webp";

const Home_Main = () => {
	const [counter, setCounter] = useState(0);

	const { dem, setDem } = useGlobalContext();
	const [firstClick, isFirstClick] = useState(false);
	const [isRerendered, setIsRerendered] = useState(counter);

	const toggle = () => {
		if (!firstClick) {
			isFirstClick(true);
		}
	};

	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.pics}>
					<div
						className={styles.big}
						onClick={() => {
							setCounter((p) => p + 1);
							if (firstClick) {
								setIsRerendered(true);
							}
						}}>
						<div className={styles.bigImage}>
							<img src={big} alt="big" className={styles.image0} draggable="false" />
						</div>
					</div>
					<Home_Four key={counter} toggle={toggle} firstClick={firstClick} isRerendered={isRerendered} dem={dem} setDem={setDem} />
				</div>
				<div className={styles.filler}></div>
			</div>
			<div className={styles.bottomHeader}>
				<div className={styles.text}>СК АМПИР — многопрофильная строительная компания</div>
			</div>
		</div>
	);
};

export default Home_Main;
