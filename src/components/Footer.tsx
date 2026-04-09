import "../declarations.ts"
import styles from "./Footer.module.css"

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <p className={styles.titulo}>Informações do Autor</p>
            <div className={styles.footerContent}>
                <section className={styles.section}>
                    <div className={styles.sobre}>
                        <p className={styles.subTitulo}>Sobre</p>
                        <p>Sou estudante de Sistema de informação, atualmente no 3° período da graduação,
                            em busca de oportunidades para desenvolver minhas habilidades em programação.
                            Possuo conhecimentos em HTML, JavaScript e C#. Aprendo com facilidade, sou
                            organizado, pontual e proativo.
                        </p>
                    </div>
                    <div>
                        <p className={styles.subTitulo}>Habilidades Técnicas</p>
                        <p>Linguagem: C#, Javascript, TypeScript</p>
                        <p>FrameWorks: Bootstrap, React</p>
                        <p>Ferramentas: git/GitHub, VSCode</p>
                    </div>
                </section>
                    <p className={styles.subTitulo}>Autoria</p>
                <div className={styles.autoria}>
                    <p><strong>Nome: </strong>Luís Felipe Ramalho Las Casas</p>
                    <p><strong>LinkedIn: </strong><a className={styles.link} href="https://linkedin.com/in/luisramalholc">https://linkedin.com/in/luisramalholc</a></p>
                    <p><strong>Curso: </strong>Sistemas de Informação - PUC Minas Barreiro</p>
                    <p><strong>GitHub: </strong><a className={styles.link} href="https://github.com/Luis-Ramalho-LC">https://github.com/Luis-Ramalho-LC</a></p>
                    <p><strong>Local: </strong>Minas Gerais - Belo Horizonte</p>
                    <p><strong>Cell: </strong>(31) 98331-5896</p>
                    <p><strong>Email: </strong>luisramalholc@gmail.com</p>
                </div>
            </div>
        </footer>
    )
}