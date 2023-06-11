import React, { useEffect, useRef } from "react";
import styles from "./Licence_Modal.module.scss";
import { useGlobalContext } from "../../context/context";

const Licence_Modal = () => {
	const { closeGallery, currentLicence, isGalleryOpen } = useGlobalContext();

	const gallery_body = useRef();
	const gallery_cover = useRef();
	const gallery_modal = useRef();

	const close = () => {
		closeGallery();
	};

	useEffect(() => {
		if (isGalleryOpen) {
			document.body.classList.add("disableScroll");
		} else {
			document.body.classList.remove("disableScroll");
		}

		if (isGalleryOpen) {
			gallery_body.current.style.display = "flex";

			setTimeout(() => {
				gallery_cover.current.style.opacity = "1";
			}, 0);
		} else {
			gallery_cover.current.style.opacity = "0";

			const breaker = setTimeout(() => {
				gallery_body.current.style.display = "none";
			}, 400);

			return () => {
				gallery_body.current.style.display = "none";
				clearTimeout(breaker);
			};
		}
	}, [isGalleryOpen]);

	useEffect(() => {}, [currentLicence]);

	return (
		<div className={styles.gallery} ref={gallery_body}>
			<div className={styles.cover} ref={gallery_cover} onClick={close}></div>
			<div className={styles.modal} ref={gallery_modal}>
				<div className={styles.container}>
					<img src={currentLicence ? currentLicence.image : null} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Licence_Modal;
