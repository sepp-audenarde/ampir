import React from "react";
import styles from "./Contacts.module.scss";
import Header from "../../components/Header/Header";
import Contact_Info from "../../components/Contact_Info/Contact_Info";

const Contacts = () => {
	const info = {
		header: "КОНТАКТЫ",
		text1: "Свяжитесь с нами для сотрудничества или получения подробной информации.",
		text2: "СК АМПИР всегда готова к сотрудничеству и работе над новыми проектами.",
	};

	return (
		<div className={styles.section}>
			<Header info={info} />
			<Contact_Info />
		</div>
	);
};

export default Contacts;
