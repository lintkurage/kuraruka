import Layout from "src/components/layout";
import styles from "../styles/404.module.css"

export default function Custom404() {
    return (
        <>
        <Layout title="404 - Page Not Found">
            <p className={styles.text404}>404 - Page Not Found</p>
        </Layout>
        </>
    );
    
  }