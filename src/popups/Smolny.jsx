import React from "react";
import styles from "./Modal.module.scss";

import Smolny_popup1 from "/popups/Smolny_popup1.webp";
import Smolny_popup2 from "/popups/Smolny_popup2.webp";

import { Header, Card, Text, Status } from "./Modal";

const text1 =
	"СК АМПИР были проведены реставрационные работы в Смольном соборе. Было восстановлено напольное покрытие, отреставрирована лепнина на 2-ом и 3-ем этажах.";
const text2 = "Собор построен в стиле пышного елизаветинского барокко, окрашен в светлый, мягкий голубой цвет, купола — в серый.";
const text3 = "В отреставрированном западном крыле Смольного Собора располагается Комитет по управлению государстенным имуществом.";
const text4 = "Смольный Собор является православным собом и занесен в список Объектов культурного наследия России.";

const Smolny = () => {
	return (
		<div className={styles.wrapper}>
			<Header info={{ type: "РЕСТАВРАЦИЯ", title: "Смольный собор" }} />
			<Card info={{ src: Smolny_popup1, title: "Вид на Смольный Собор" }} />
			<Text
				info={{
					text: [text1],
				}}
			/>

			<Card info={{ src: Smolny_popup2, title: "Здание КУГИ СПБ в котором проводилась реставрация" }} />

			<Text
				info={{
					text: [text2, text3],
				}}
			/>

			<Status
				info={{
					text: [text4],
				}}
			/>
		</div>
	);
};

export default Smolny;
