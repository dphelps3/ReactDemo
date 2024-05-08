import styles from "../app/page.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.main}>
      {/* Shared Header */}
      <header>
        <h1>Game App</h1>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Shared Footer */}
      <footer>
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
};

export default Layout;