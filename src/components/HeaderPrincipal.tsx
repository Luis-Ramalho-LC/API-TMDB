import "./declarations.ts"
import styles from './HeaderPrincipal.module.css'

function HeaderPrincipal(){

    return(
        <header className={styles.header}>
            <img className={styles.logo} src="./web-app-manifest-192x192.png" alt="Logo"></img>
            <a href='./Explorador.tsx' className={(styles.link)}>Explorador</a>
        </header>
    );
}

export default HeaderPrincipal