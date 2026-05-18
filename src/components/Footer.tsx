import "./declarations.ts"
import styles from "./Footer.module.css"

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <p className={styles.titulo}>Informações do Autor</p>
            <div className={styles.footerContent}>    
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
                <div className={styles.autoria}>
                    <p className={styles.subTitulo}>Autoria</p>
                    <p><strong>Nome: </strong>Luís Felipe Ramalho Las Casas</p>
                    <p><strong>Curso: </strong>Sistemas de Informação - PUC Minas Barreiro</p>
                    <p><strong>Local: </strong>Minas Gerais - Belo Horizonte</p>
                    <p>
                        <a href="https://linkedin.com/in/luisramalholc" target="_blank" className="hover:text-sky-400 transition-colors">
                            <i className="fa-brands fa-linkedin text-xl"></i> LinkedIn/luisramalholc
                        </a>
                    </p>
                    <p>
                        <a href="https://github.com/Luis-Ramalho-LC" target="_blank" className="hover:text-sky-400 transition-colors">
                            <i className="fa-brands fa-github text-xl"></i> GitHub/Luis-Ramalho-LC
                        </a>
                    </p>
                    <p>
                        <i className="fa-solid fa-envelope"></i> luisramalholc@gmail.com
                    </p>
                    <p>
                        <i className="fa-solid fa-phone"></i> (31) 98331-5896
                    </p>
                </div>
            </div>
        </footer>
    )
}