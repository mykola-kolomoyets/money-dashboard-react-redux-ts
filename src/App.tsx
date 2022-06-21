import React from "react";
import { Routes, Route } from "react-router";
import styles from "./App.module.scss";
import Menu from "./components/menu";
import Dashboard from "./views/dashboard";

function App() {
  return (
    <div className={styles.app}>
      <nav className={styles.app__left}>
        <Menu />
      </nav>

      <main className={styles.app__right}>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
