import React from "react";
import styles from "./Modal.module.scss";

import Michail_popup1 from "/popups/Michail_popup_1.webp";
import Michail_popup2 from "/popups/Michail_popup2.webp";
import Michail_popup3 from "/popups/Michail_popup3.webp";

import { Header, Card, Text, Status } from "./Modal";

const text1 = "Были проведены работы по восстановлению исторического облика Собора святого Архангела Михаила.";
const text2 = "В ходе работ было выполнено восстановление несущих конструкций здания, отреставрированы декоративные элементы фасада.";
const text3 = "Осуществлен ремонт шпиля собора, заменены крепления, восстановлен объемный медный декор, выполнена позолота крестоцвета.";
const text4 = "Выполнена реставрация башни храма. Сняты фиалы боковых фасадов и чугунный парапет.";

const text5 = "Для реставрации с башни был снят шпиль. Выполнено восстановление металлических элементов и позолота.";

const text6 =
	"Церковь построена в стиле псевдоготики. Здание увенчано остроконечным шатром на высоком барабане, декорированном готическими стрельчатыми окнами. Стены облицованы песчаником. Помещение имеет замечательную акустику и один из лучших в городе органов.";

const text7 = "Собор святого Архангела Михаила занесен в список Объектов культурного наследия России.";

const Michail = () => {
	return (
		<div className={styles.wrapper}>
			<Header info={{ type: "РЕСТАВРАЦИЯ", title: "Собор Святого Михаила" }} />
			<Card info={{ src: Michail_popup1, title: "Собор Святого Михаила во время / после реставрации" }} />
			<Text
				info={{
					text: [text1, text2, text3],
				}}
			/>

			<div className={styles.dubble}>
				<Card info={{ src: Michail_popup2, title: "Башня собора" }} />
				<Text
					info={{
						text: [text4],
					}}
				/>
			</div>

			<div className={styles.dubble}>
				<Text
					info={{
						text: [text5],
					}}
				/>
				<Card info={{ src: Michail_popup3, title: "Шпиль на башне собора" }} />
			</div>

			<Text
				info={{
					text: [text6],
				}}
			/>

			<Status
				info={{
					text: [text7],
				}}
			/>
		</div>
	);
};

export default Michail;
