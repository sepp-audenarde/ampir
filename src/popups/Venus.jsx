import React from "react";
import styles from "./Modal.module.scss";

import Venus_popup1 from "/popups/Venus_popup1.webp";
import Venus_popup2 from "/popups/Venus_popup2.webp";
import Venus_popup3 from "/popups/Venus_popup3.webp";
import Venus_popup4 from "/popups/Venus_popup4.webp";

import { Header, Card, Text, Status } from "./Modal";

const text1 = "СК АМПИР были выполнены реставрационнные работы по восстановлению архитектурного памятника «Павильон Венеры».";
const text2 =
	"Работы проводились в несколько этапов. В основании Павильона проведены гидрологические работы по осушению конструкции. Затем укреплен фундамент Павильона. Проведна реставрация фасадов и колонн.";
const text3 =
	"Проведно восстановление стеклянных элементов интерьера. Воссоздан пол в стиле «маркетри». Наиболее трудоемкой задачей было восстановление плафона «Триумф Венеры».";
const text4 =
	"Павильон, посвященный древнеримской богине любви Венере, находится на острове Любви, который в плане имеет форму треугольника и отсечен от суши искусственными каналами.";

const text5 = "Павильон состоит из двух равновеликих частей: большого зала и небольшого прямоугольного аванзала.";

const text6 =
	"Главный фасад декорирован колоннами ионического ордена. Широкая двухстворчатая застеклённая дверь обрамлёна профилированным архивольтом. Завершением портика является классический антаблемент и треугольный фронтон. В его тимпане помещена резная рельефная эмблема Амура — скрещённый колчан, полный стрел, горящий факел и ветви лавры и розы.";
const text7 =
	"По периметру фасадов павильона продолжены декор и композиция антаблемента. Вестибюль имеет профилированное обрамление и завершаются фигурным замковым камнем. Между арками расположенны рельефные медальоны.";
const text8 = "Павильон Венеры имеет статус музея и занесен в список Объектов культурного наследия России.";

const Venus = () => {
	return (
		<div className={styles.wrapper}>
			<Header info={{ type: "РЕСТАВРАЦИЯ", title: "Павильон Венеры" }} />
			<Card info={{ src: Venus_popup1, title: "Вид с острова Любви" }} />
			<Text info={{ text: [text1, text2] }} />

			<Card info={{ src: Venus_popup2, title: "Плафон «Триумф Венеры» после реставрации" }} />
			<Text
				info={{
					text: [text3],
				}}
			/>
			<Card info={{ src: Venus_popup3, title: "Росписи интерьера павильона" }} />
			<Text
				info={{
					text: [text4],
				}}
			/>
			<Card info={{ src: Venus_popup4, title: "Павильон Венеры во время реставрации" }} />
			<Text
				info={{
					text: [text5, text6, text7],
				}}
			/>

			<Status
				info={{
					text: text8,
				}}
			/>
		</div>
	);
};

export default Venus;
