import React, { useEffect, useRef } from "react";
import Modal from "./Modal";
import styles from "./Popups.module.scss";
import { useGlobalContext } from "../context/context";

const Popups = () => {
	const { closeProject, currentProject, isProjectOpen } = useGlobalContext();

	const popup_body = useRef();
	const popup_cover = useRef();
	const modal = useRef();
	const filler = useRef();

	const showModal = () => {};

	const close = () => {
		closeProject();
	};

	useEffect(() => {
		if (isProjectOpen) {
			document.body.classList.add("disableScroll");
		} else {
			document.body.classList.remove("disableScroll");
		}

		if (isProjectOpen) {
			popup_body.current.style.display = "flex";
			setTimeout(() => {
				popup_cover.current.style.opacity = "1";
				modal.current.scrollTop = 0;
				modal.current.style.transform = "translateY(0)";
			}, 0);
			showModal();
		} else {
			if (filler.current.getBoundingClientRect().y < 750) {
				modal.current.scrollTop -= 200;
			}

			modal.current.style.transform = "translateY(100vh)";
			popup_cover.current.style.opacity = "0";

			const breaker = setTimeout(() => {
				popup_body.current.style.display = "none";
			}, 800);

			return () => {
				popup_body.current.style.display = "none";
				clearTimeout(breaker);
			};
		}
	}, [isProjectOpen]);

	return (
		<div className={styles.popup} ref={popup_body}>
			<div onClick={close} className={styles.cover} ref={popup_cover}></div>
			<div className={styles.modal} ref={modal}>
				<div className={styles.fillerTop} onClick={close}></div>
				<Modal project={currentProject} />
				<div className={styles.fillerBottom} onClick={close} ref={filler}></div>
			</div>
		</div>
	);
};

export default Popups;
