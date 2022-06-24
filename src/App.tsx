import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import styles from "./App.module.scss";
import Menu from "./components/menu";

const Dashboard = lazy(() => import("./views/dashboard"));
const TableCategory = lazy(() => import("./views/table-category"));
const TableTotal = lazy(() => import("./views/table-total"));

function App() {
	return (
		<div className={styles.app}>
			<nav className={styles.app__left}>
				<Menu />
			</nav>

			<main className={styles.app__right}>
				<Suspense fallback={<h1>Loading...</h1>}>
					<Routes>
						<Route path="/" element={<Dashboard />}></Route>

						<Route path="/table" element={<TableTotal />}></Route>

						<Route path="/table/:category" element={<TableCategory />}></Route>
					</Routes>
				</Suspense>
			</main>
		</div>
	);
}

export default App;
