import cn from "classnames";

import Avatar from "components/avatar";
import Typography from "components/typography";
import { ParagraphView } from "components/typography/paragraph";
import { TitleTag } from "components/typography/title";
import Button, { ButtonView } from "../../components/button";
import { hoc } from "../../utils/hoc";

import useDashboard from "./dashboard.hook";

import styles from "./dashboard.module.scss";
import Badge from "components/badge";

const Dashboard = hoc(useDashboard, ({ width, userName, badgesData }) => (
	<section className={styles.dashboard}>
		<div className={cn(styles.dashboard__row, styles.dashboard__title)}>
			<Typography.Title Tag={TitleTag.h1}>
				Welcome back,{" "}
				<Typography.Paragraph view={ParagraphView.regular} bold>
					{userName}
				</Typography.Paragraph>
			</Typography.Title>

			{width! >= 1366 && (
				<Button view={ButtonView.primary}>
					<Typography.Paragraph view={ParagraphView.button}>
						Add purchase
					</Typography.Paragraph>
				</Button>
			)}
		</div>

		<div className={cn(styles.dashboard__row, styles.dashboard__badges)}>
			{badgesData.map((data) => (
				<Badge {...data} />
			))}
		</div>

		<div className={cn(styles.dashboard__row, styles.dashboard__menu)}>
			<section className={styles.dashboard__inline}>
				{width! < 1366 && (
					<Button view={ButtonView.primary}>
						<Typography.Paragraph view={ParagraphView.button}>
							Add purchase
						</Typography.Paragraph>
					</Button>
				)}

				<Typography.Paragraph view={ParagraphView.link}>
					Statistics
				</Typography.Paragraph>

				<Typography.Paragraph view={ParagraphView.link}>
					Profile
				</Typography.Paragraph>
			</section>

			<section>
				<Avatar name="Mykola" />
			</section>
		</div>

		<div
			className={cn(styles.dashboard__row, styles.dashboard__last_purchases)}
		>
			Last Purchases
		</div>

		<section className={cn(styles.dashboard__chart)}>The chart</section>
	</section>
));

export default Dashboard;
