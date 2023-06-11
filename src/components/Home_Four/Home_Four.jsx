import React, { useEffect, useRef, useState } from "react";
import styles from "./Home_Four.module.scss";

import top_left from "/images/top_left_home.webp";
import top_right from "/images/top_right_home.webp";
import bottom_right from "/images/bottom_right_home.webp";
import bottom_left from "/images/bottom_left_home.webp";

import puzzle_1_1 from "/puzzle/puzzle_1_1.webp";
import puzzle_1_2 from "/puzzle/puzzle_1_2.webp";
import puzzle_1_3 from "/puzzle/puzzle_1_3.webp";
import puzzle_1_4 from "/puzzle/puzzle_1_4.webp";

import puzzle_2_1 from "/puzzle/puzzle_2_1.webp";
import puzzle_2_2 from "/puzzle/puzzle_2_2.webp";
import puzzle_2_3 from "/puzzle/puzzle_2_3.webp";
import puzzle_2_4 from "/puzzle/puzzle_2_4.webp";

import puzzle_3_1 from "/puzzle/puzzle_3_1.webp";
import puzzle_3_2 from "/puzzle/puzzle_3_2.webp";
import puzzle_3_3 from "/puzzle/puzzle_3_3.webp";
import puzzle_3_4 from "/puzzle/puzzle_3_4.webp";

const pic_row_one = {
	1: top_left,
	2: puzzle_1_1,
	3: puzzle_2_1,
	4: puzzle_3_1,
};

const pic_row_two = {
	1: top_right,
	2: puzzle_1_2,
	3: puzzle_2_2,
	4: puzzle_3_2,
};

const pic_row_three = {
	1: bottom_right,
	2: puzzle_1_3,
	3: puzzle_2_3,
	4: puzzle_3_3,
};

const pic_row_four = {
	1: bottom_left,
	2: puzzle_1_4,
	3: puzzle_2_4,
	4: puzzle_3_4,
};

const Cell = ({ info, idx, change, base_num, moveFirstTime, moved, toggle, listOfClick }) => {
	const cell = useRef();
	const cur = useRef();
	const next = useRef();

	const [isCurFront, setIsCurFront] = useState(true);
	const [line, setLine] = useState([...Object.values(info)]);

	const [counter, setCounter] = useState(base_num);
	const max_length = line.length;

	const step = () => {
		setLine((prev) => [...prev.slice(1), ...prev.slice(0, 1)]);
		setCounter((prev) => (prev + 1 === max_length ? 0 : prev + 1));
	};

	useEffect(() => {
		const current_pic = line[0];
		step();
		const next_pic = line[1];
		step();

		const range = Math.random() * (0.9 - 0.2) + 0.2;
		(() => (cell.current.style.opacity = range))();

		setTimeout(() => {
			cell.current && (() => (cell.current.style.opacity = 1))();
		}, 500);

		cur.current.src = current_pic;
		next.current.src = next_pic;
	}, []);

	function changePic() {
		cell.current.style.opacity = 1;
		change(idx, counter);
		moveFirstTime(idx);
		step();
		if (cur.current) cell.current.style.pointerEvents = "none";
		const insert = line[0];

		if (isCurFront) {
			if (cur.current) cur.current.style.opacity = 0;
			if (next.current) next.current.style.opacity = 1;

			setTimeout(() => {
				if (cur.current) cur.current.src = insert;
				if (cell.current) cell.current.style.pointerEvents = "auto";
			}, 300);
		} else {
			if (cur.current) cur.current.style.opacity = 1;
			if (next.current) next.current.style.opacity = 0;

			setTimeout(() => {
				if (next.current) next.current.src = insert;
				if (cell.current) cell.current.style.pointerEvents = "auto";
			}, 300);
		}

		setIsCurFront((prev) => !prev);
	}

	useEffect(() => {
		if (listOfClick !== null) {
			if (listOfClick.includes(idx)) {
				changePic();
			}
		}
	}, [listOfClick]);

	return (
		<div
			className={styles.small}
			onClick={() => {
				changePic();

				setTimeout(() => {
					toggle();
				}, 200);
			}}
			ref={cell}>
			<img src={""} className={styles.next} alt="next" draggable="false" ref={next} />
			<img src={""} className={styles.current} alt="small" draggable="false" ref={cur} />
		</div>
	);
};

const Home_Four = ({ toggle, firstClick, isRerendered, dem, setDem }) => {
	const link = useRef();

	const table = [pic_row_one, pic_row_two, pic_row_four, pic_row_three];
	const [cellNums, setCellNums] = useState({
		1: 0,
		2: 0,
		3: 0,
		4: 0,
	});

	function change(idx, cur_num) {
		setCellNums((prev) => ({
			...prev,
			[idx]: cur_num,
		}));
	}

	const [moved, setMoved] = useState({
		1: false,
		2: false,
		3: false,
		4: false,
	});

	const moveFirstTime = (idx) => {
		setMoved((prev) => ({
			...prev,
			[idx]: true,
		}));
	};

	useEffect(() => {
		const res = [...new Set(Object.values(cellNums))];

		if (Object.values(moved).every((val) => val)) {
			if (res.length === 1) {
				if (res[0] !== 1) {
					closePics();
				}
			}
		}
	}, [cellNums]);

	function closePics() {
		if (link.current) link.current.style.gap = "0px";
		if (link.current) link.current.style.padding = "10px";

		setTimeout(() => {
			if (link.current) link.current.style.gap = "10px";
			if (link.current) link.current.style.padding = "0px";
		}, 1000);
	}

	const [listOfClick, setListOfClick] = useState(null);
	useEffect(() => {
		if (firstClick && !isRerendered && !dem) {
			closePics();
			setDem(true);

			const arr = Object.entries(moved)
				.filter((e) => e[1] === false)
				.map((e) => +e[0]);

			setListOfClick(arr);
		}
	}, [firstClick]);

	return (
		<div className={styles.fourWrapper}>
			<div className={styles.four} ref={link}>
				{table.map((elem, i) => (
					<Cell
						info={elem}
						key={i}
						idx={i + 1}
						change={change}
						base_num={cellNums[i + 1]}
						moveFirstTime={moveFirstTime}
						moved={moved[i + 1]}
						toggle={toggle}
						listOfClick={listOfClick}
					/>
				))}
			</div>
		</div>
	);
};

export default Home_Four;
