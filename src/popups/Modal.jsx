import React, { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";

import Venus from "./Venus";
import Gatchina from "./Gatchina";
import Smolny from "./Smolny";
import Priorat from "./Priorat";
import Michail from "./Michail";

export const Header = ({ info }) => {
	return (
		<div className={styles.header_wrap}>
			<div className={styles.header_type}>{info.type}</div>
			<div className={styles.header_name}>{info.title}</div>
		</div>
	);
};

export const Card = ({ info }) => {
	return (
		<div className={styles.card_wrap}>
			<div className={styles.card_image}>
				<img src={info.src} alt={info.type} draggable="false" />
			</div>
			<div className={styles.card_title}>{info.title}</div>
		</div>
	);
};

export const Text = ({ info }) => {
	return (
		<div className={styles.text_wrap}>
			<div className={styles.text_text}>
				{info.text.map((text, i) => (
					<p key={i}>{text}</p>
				))}
			</div>
		</div>
	);
};

export const Status = ({ info }) => {
	return (
		<div className={styles.status_wrap}>
			<div className={styles.status_text}>{info.text}</div>
		</div>
	);
};

const Modal = ({ project }) => {
	const modal = useRef();

	const list = {
		Venus: <Venus />,
		Gatchina: <Gatchina />,
		Smolny: <Smolny />,
		Priorat: <Priorat />,
		Michail: <Michail />,
	};

	return (
		<div className={styles.modalBody} ref={modal}>
			{list[project]}
		</div>
	);
};

export default Modal;
