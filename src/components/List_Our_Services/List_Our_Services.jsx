import React, { useEffect, useRef } from "react";
import styles from "./List_Our_Services.module.scss";
import { useLocation } from "react-router-dom";

const List_Our_Services = () => {
	const services1 = [
		"Разработка проектов по консервации, ремонту, реставрации",
		"Инженерные работы на реставрируемых объектах",
		"Реставрация оснований и фундаментов",
		"Реставрация металлических конструкций, деталей, кровли",
		"Реставрация деревянных конструкций, воссоздание позолоты",
		"Реставрация мебели, картин, скульптур, статуй, и иных предметов искусства",
		"Восстановление / воссоздание отделки помещений",
		"Воссоздание наружных и внутренних покрасок, архитектурно-лепного декора",
		"Воссоздание мраморных поверхностей и изделий",
		"Воссоздание тканей, гобеленов, ковров, декора, мозаик, графики",
	];

	const services2 = [
		"Выполнение генерального подряда",
		"Проведение полной реконструкции",
		"Диагностика состояния здания",
		"Частичная и полная реставрация фасадов",
		"Монтаж систем энергоснабжения",
		"Монтаж инженерных систем и оборудования",
		"Проведение ландшафтных работ на территории объекта",

		"Проведение скрытых работ в помещениях",
		"А также иные виды строительных работ",
	];

	const lepnina = useRef();
	const { hash, key } = useLocation();

	useEffect(() => {
		if (hash === "#lepnina") {
			lepnina.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [key, hash]);

	const services3 = [
		"Производство элементов фасадного декора на заказ",
		"Производство элементов внутреннего декора",
		"Производство карнизов, молдингов, подоконников, цокольных молдингов",
		"Производство замковых камней, колонн и полуколонн, боссажей и панелей утепления",
		"Проведение проектных работ дизайнером",
		"Широкий выбор готовых декоративных изделий",
	];

	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.bottom}>
					{/* <div className={styles.fillerBottom}></div> */}

					<div className={styles.texts}>
						<div className={styles.subHeader}>Реставрационные работы:</div>
						<div className={styles.services}>
							{services1.map((elem, i) => (
								<p key={i}>{elem}</p>
							))}
						</div>
						<div className={styles.subHeader}>Строительные работы:</div>
						<div className={styles.services}>
							{services2.map((elem, i) => (
								<p key={i * 2}>{elem}</p>
							))}
						</div>
						<div className={styles.subHeader} ref={lepnina}>
							Производство лепнины
						</div>
						<div className={styles.services}>
							{services3.map((elem, i) => (
								<p key={i * 2}>{elem}</p>
							))}
						</div>
					</div>
					<div className={styles.fillerBottom}></div>
				</div>
			</div>
		</div>
	);
};

export default List_Our_Services;
