import React from "react";
import styles from "./Advantages.module.scss";

const Advantages = () => {
	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.top}>
					<div className={styles.fillerTop}></div>
					<div className={styles.header}>ПРЕИМУЩЕСТВА</div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.fillerBottom}></div>

					<div className={styles.texts}>
						<div className={styles.text}>
							Имея лицензии на большинство видов реставрационных работ, СК АМПИР выполняет самые сложные реставрационные проекты.
						</div>
						<div className={styles.text}>
							Компания АМПИР всегда стремится к соблюдению сроков благодаря умелой координации действий специалистов.
						</div>
						<div className={styles.text}>
							Мы имеем опыт использования исторических материалов, благодаря чему возможно в точности воссоздать реставрируемый объект.
						</div>
						<div className={styles.text}>
							Реставрационные и строительные проекты всегда делятся на этапы и каждый этап прописывается в смете.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Advantages;
