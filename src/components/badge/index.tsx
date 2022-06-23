import React, { FC } from "react";

import { formatAmount } from "utils/fn";

import styles from "./badge.module.scss";

export type BadgeProps = {
	amount: number;
	label: string;
	color: string;
	Icon: any;
};

const Badge: FC<BadgeProps> = ({ amount, color, Icon, label }) => {
	return (
		<div className={styles.badge} style={{ backgroundColor: color }}>
			<div className={styles.badge__icon}>
				<Icon />
			</div>
			<div className={styles.badge__content}>
				<div className={styles.badge__amount}>
					&#8372;&nbsp;{formatAmount.format(amount)}
				</div>
				<div className={styles.badge__label}>{label}</div>
			</div>
		</div>
	);
};

export default Badge;
