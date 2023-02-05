import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Bosses.module.css';

const BossInformation = ({ boss }) => {
	const [players, setPlayers] = useState(1);
	const [characters, setCharacters] = useState(0);

	return (
		<>
			<li
				className={
					styles.boss_list_item +
					' ' +
					styles[boss.order + '_unique_boss_entry'] +
					' ' +
					styles[boss.difficulty.toLowerCase()] +
					' ' +
					styles[characters <= 0 ? 'empty_value' : '']
				}
			>
				<Image
					alt='boss image'
					src={`/images/${boss.name.replace(/\s+/g, '_').toLocaleLowerCase()}.png`}
					width='64'
					height='65'
				/>

				<div className={styles.grid_cell}>
					<p>{boss.difficulty.toLocaleUpperCase()}</p>
				</div>

				<div className={styles.grid_cell + ' ' + styles.name}>
					<p>{boss.name}</p>
				</div>

				<div className={styles.grid_cell + ' ' + styles.mesos}>
					<p>{boss.mesos.toLocaleString()}</p>
				</div>

				<div className={styles.grid_cell}>
					<button
						onClick={() => {
							players <= 1 ? setPlayers(1) : setPlayers(players - 1);
						}}
					>
						-
					</button>

					<p>{players}</p>

					<button
						onClick={() => {
							players >= 6 ? setPlayers(6) : setPlayers(players + 1);
						}}
						id={boss.name + boss.difficulty}
					>
						+
					</button>
				</div>

				<div className={styles.grid_cell}>
					<button
						onClick={() => {
							characters <= 0 ? setCharacters(0) : setCharacters(characters - 1);
						}}
					>
						-
					</button>

					<p>{characters}</p>

					<button
						onClick={() => {
							characters >= 54 ? setCharacters(54) : setCharacters(characters + 1);
						}}
					>
						+
					</button>
				</div>
			</li>
		</>
	);
};

export default BossInformation;
