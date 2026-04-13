import { Link } from "react-router-dom";
import "./declarations.ts"
import styles from './HeaderPrincipal.module.css'

function HeaderPrincipal(){

    return(
        <header className={styles.header}>
            <Link to="/"><img className={styles.logo} src="../web-app-manifest-192x192.png" alt="Logo"></img></Link>
            <Link to="/Explorador"><p className={(styles.link)}>Explorador</p></Link>
        </header>
    );
}

export default HeaderPrincipal