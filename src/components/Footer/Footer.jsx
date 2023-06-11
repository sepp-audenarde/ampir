import React from "react";
import styles from "./Footer.module.scss";
import Building from "../Building/Building";
import { Link } from "react-router-dom";

import { baseUrl } from "../../App";

const Footer = () => {
	return (
		<>
			<div className={styles.section}>
				<div className={styles.footer}>
					<div className={styles.logo}>
						<Link
							draggable="false"
							to={baseUrl + "/"}
							onClick={() => {
								window.scrollTo({
									top: 0,
									left: 0,
									behavior: "smooth",
								});
							}}>
							АМПИР
						</Link>
					</div>

					<div className={styles.contacts}>
						<div className={styles.sectionLogo}>
							<Link
								draggable="false"
								to={baseUrl + "/contacts"}
								onClick={() => {
									window.scrollTo({
										top: 0,
										left: 0,
										behavior: "smooth",
									});
								}}>
								КОНТАКТЫ
							</Link>
						</div>
						<div className={styles.subtext}>
							<div className={styles.topContacts}>
								<p>Отдел работы с клиентами</p>
								<p> 8 (812) 658 63 43</p>
								<p> 8 (812) 999 06 38</p>
								<p> 8 (921) 999 06 38</p>
							</div>
							<div className={styles.bottomContacts}>
								<p>E-mail</p>
								<p>info@skampir.ru</p>
							</div>
						</div>
					</div>

					<div className={styles.address}>
						<div className={styles.sectionLogo}>
							<Link
								draggable="false"
								to={baseUrl + "/contacts"}
								onClick={() => {
									window.scrollTo({
										top: 0,
										left: 0,
										behavior: "smooth",
									});
								}}>
								АДРЕС
							</Link>
						</div>
						<div className={styles.subtext}>
							<p>195279 г. Санкт-Петербург, пр. Энтузиастов, д.30, к.2, п.487</p>
						</div>
					</div>

					{/* <div className={styles.social}>
						<div className={styles.oneSocial}>INSTAGRAM</div>
						<div className={styles.oneSocial}>VK</div>
					</div> */}
				</div>
			</div>
			<div className={styles.subbuilding}>
				<Building />
			</div>
		</>
	);
};

export default Footer;
