import React from "react";
import styles from "./Home_Idea.module.scss";

const Home_Idea = () => {
	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.texts}>
					<div className={styles.midText}>
						<p>Доверие. Качество. Опыт.</p>
						<p>Это не просто слова - это кодекс, по которому мы работаем.</p>
						<br />
						<p>
							СК АМПИР состоит из архитекторов, инженеров и строителей, которые специализируются на разработке и управлении комплексными
							строительными проектами.
						</p>
					</div>
					<div className={styles.logoName}>СК АМПИР</div>
				</div>
			</div>
			<div className={styles.filler}></div>
		</div>
	);
};

export default Home_Idea;
