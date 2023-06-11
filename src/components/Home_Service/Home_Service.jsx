import { React, useEffect, useRef } from "react";
import styles from "./Home_Service.module.scss";

import { useGlobalContext } from "../../context/context";
import { Link } from "react-router-dom";

import { baseUrl } from "../../App";

const Home_Service = () => {
	const { scroll_Y, resetScroll } = useGlobalContext();
	const left = useRef();
	const right = useRef();

	useEffect(() => {
		if (left.current) {
			const { top: topLeft } = left.current.getBoundingClientRect();
			const { top: topRight } = right.current.getBoundingClientRect();

			// const screenWidth = window.screen.width;
			const screenWidth = window.innerWidth;

			if (screenWidth < 1140) {
				left.current.style.transform = `translateY(0px)`;
				right.current.style.transform = `translateY(0px)`;
				return;
			}

			if (topLeft < 1100 && topLeft > -300) {
				left.current.style.transform = `translateY(${Math.round(topLeft * 0.4)}px)`;
				right.current.style.transform = `translateY(${Math.round(topRight * 0.3)}px)`;
			}
		}
	}, [scroll_Y]);

	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.left} ref={left}>
					<div className={styles.header}>
						<Link
							draggable="false"
							to={{ pathname: baseUrl + "/about", hash: "#services" }}
							onClick={() => {
								resetScroll();
							}}>
							УСЛУГИ
						</Link>
					</div>
					<div className={styles.subHeader}>МЫ ПРЕДЛАГАЕМ ВАМ</div>
					<div className={styles.text}>
						<p className={styles.step}>
							Наличие допусков и
							<Link
								className={styles.textLink}
								draggable="false"
								to={{ pathname: baseUrl + "/about", hash: "#licences" }}
								onClick={() => {
									resetScroll();
								}}>
								лицензий
							</Link>
							на большинство видов строительно-монтажных, отделочных, инженерных и реставрационных работ, позволяют компании осуществлять
							крупные генподрядные проекты.
						</p>
						{/* <p className={styles.step}></p> */}
						<p className={styles.step}>
							Компания способна вести
							<Link
								className={styles.textLink}
								draggable="false"
								to={{ pathname: baseUrl + "/about", hash: "#services" }}
								onClick={() => {
									resetScroll();
								}}>
								строительство, реконструкцию и реставрацию
							</Link>
							объектов практически любого предназначения, в том числе и памятников архитектуры Российской Федерации под «ключ».
						</p>
						<p className={styles.step}>
							СК АМПИР имеет собственное производство
							<Link
								className={styles.textLink}
								draggable="false"
								to={{ pathname: baseUrl + "/about", hash: "#lepnina" }}
								onClick={() => {
									resetScroll();
								}}>
								фасадного декора
							</Link>
							и интерьерной лепнины. Мы готовы предложить Вам создание проектов фасадов и проведение фасадных работ.
						</p>
					</div>

					<div className={styles.linkLicences}>
						<Link
							draggable="false"
							to={{ pathname: baseUrl + "/about", hash: "#licences" }}
							onClick={() => {
								resetScroll();
							}}>
							Лицензии СК АМПИР
						</Link>
					</div>
					<div className={styles.linkLicences}>
						<Link
							draggable="false"
							to={{ pathname: baseUrl + "/about", hash: "#services" }}
							onClick={() => {
								resetScroll();
							}}>
							Список услуг СК АМПИР
						</Link>
					</div>
				</div>

				<div className={styles.right} ref={right}>
					<div className={`${styles.box} ${styles.underline_one}`}>
						<div className={styles.num}>(01)</div>
						<div className={styles.name}>
							<p>
								<Link
									draggable="false"
									to={{ pathname: baseUrl + "/about", hash: "#services" }}
									onClick={() => {
										resetScroll();
									}}>
									ПРОЕКТИРОВАНИЕ
								</Link>
							</p>
						</div>
					</div>

					{/* <div className={`${styles.box} ${styles.underline_one}`}>
						<div className={styles.num}>(04)</div>
						<div className={styles.name}>
							<p>
								<Link
									draggable="false"
									to={{ pathname: "/about", hash: "#services" }}
									onClick={() => {
										resetScroll();
									}}>
									РЕМОНТ
								</Link>
							</p>
						</div>
					</div> */}

					<div className={`${styles.box} ${styles.underline_one}`}>
						<div className={styles.num}>(02)</div>
						<div className={styles.name}>
							<p>
								<Link
									draggable="false"
									to={{ pathname: baseUrl + "/about", hash: "#services" }}
									onClick={() => {
										resetScroll();
									}}>
									РЕСТАВРАЦИЯ
								</Link>
							</p>
						</div>
					</div>

					<div className={`${styles.box} ${styles.underline_one}`}>
						<div className={styles.num}>(03)</div>
						<div className={styles.name}>
							<p>
								<Link
									draggable="false"
									to={{ pathname: baseUrl + "/about", hash: "#services" }}
									onClick={() => {
										resetScroll();
									}}>
									РЕКОНСТРУКЦИЯ
								</Link>
							</p>
						</div>
					</div>

					<div className={`${styles.box} ${styles.underline_one}`}>
						<div className={styles.num}>(04)</div>
						<div className={styles.name}>
							<p>
								<Link
									draggable="false"
									to={{ pathname: baseUrl + "/about", hash: "#services" }}
									onClick={() => {
										resetScroll();
									}}>
									ФАСАДНЫЕ РАБОТЫ
								</Link>
							</p>
						</div>
					</div>

					<div className={`${styles.box} ${styles.underline_one}`}>
						<div className={styles.num}>(05)</div>
						<div className={styles.name}>
							<p>
								<Link
									draggable="false"
									to={{ pathname: baseUrl + "/about", hash: "#services" }}
									onClick={() => {
										resetScroll();
									}}>
									ГЕНЕРАЛЬНЫЙ ПОДРЯД
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home_Service;
