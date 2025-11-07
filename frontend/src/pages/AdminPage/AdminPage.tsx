import {Typography} from "@maxhub/max-ui";

import styles from "./AdminPage.module.scss";

const AdminPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<Typography.Headline variant="large-strong">Админ панель</Typography.Headline>
			</div>
			<div className={styles.description}>
				<Typography.Body variant="medium">
					Панель администратора для управления приложением.
				</Typography.Body>
			</div>
			<div className={styles.content}>
				<div className={styles.card}>
					<div className={styles.cardTitle}>
						<Typography.Headline variant="medium-strong">Управление пользователями</Typography.Headline>
					</div>
					<div className={styles.cardText}>
						<Typography.Body variant="medium">
							Просмотр и управление пользователями системы.
						</Typography.Body>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.cardTitle}>
						<Typography.Headline variant="medium-strong">Статистика</Typography.Headline>
					</div>
					<div className={styles.cardText}>
						<Typography.Body variant="medium">
							Общая статистика использования приложения.
						</Typography.Body>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.cardTitle}>
						<Typography.Headline variant="medium-strong">Настройки</Typography.Headline>
					</div>
					<div className={styles.cardText}>
						<Typography.Body variant="medium">
							Конфигурация и настройки системы.
						</Typography.Body>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminPage;
