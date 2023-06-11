import React from "react";
import styles from "./Project.module.scss";
import { useGlobalContext } from "../../context/context";

const Project = ({ info }) => {
	const { openProject, projects } = useGlobalContext();

	const clicked = () => {
		const cur_project = Object.entries(projects).filter(([_key, value]) => value.link === info.link)[0][0];

		openProject(cur_project);
	};

	return (
		<div className={styles.box}>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<div className={styles.top} onClick={clicked}>
						<div className={styles.project}>ПРОЕКТ</div>
						<div className={styles.name}>{info.name}</div>
					</div>

					<div className={styles.bottom} onClick={clicked}>
						<div className={styles.more}>ПОДРОБНЕЕ</div>
						<div className={styles.about}>{info.linkName}</div>
					</div>
				</div>

				<div className={styles.right}>
					<div className={styles.pictures}>
						<div className={styles.picturesWrapper}>
							<div className={info.size === 1 ? styles.pic1 : styles.pic2} onClick={clicked}>
								<img src={info.picture1} alt="pic 1" className={info.size === 1 ? styles.img1 : styles.img2} />
								<div className={styles.cover}></div>
							</div>
							<div className={info.size === 1 ? styles.pic2 : styles.pic1} onClick={clicked}>
								<img src={info.picture2} alt="pic 2" className={info.size === 1 ? styles.img2 : styles.img1} />
								<div className={styles.cover}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
