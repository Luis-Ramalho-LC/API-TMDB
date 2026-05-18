import styles from "./VisaoGeral.module.css"
import "../declarations.ts"
import { useParams } from "react-router-dom"
import axios from 'axios';
import { useState } from "react";

export default function VisaoGeral(){
    interface seriesInfo{
        id: number;
        name: string;
        tagline: string;
        first_air_date: string;
        overview: string;
        backdrop_path: string;
        vote_average: number;
    }

    const params = useParams()
    const [serie, setSerie] = useState<seriesInfo | null>(null)

    const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/tv/${params.id}?&language=pt-BR`,
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmUzMTYwYjM2MmJkNmU2OTU4NWVkODJmZGY3NzI2MCIsIm5iZiI6MTc0ODEyNTM1MS4zNDIwMDAyLCJzdWIiOiI2ODMyNDZhNzhhNzUwYjE1MDFlYjJjODYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.i29DhySLPPatGdxSGppa5buPw35e-beeIVZyEm5fl6k'
    }
    };

    axios
    .request(options)
    .then(res => setSerie(res.data))
    .catch(err => console.error(err));
    
    return(
        <section className={styles.body}>
            <p className={styles.titulo}>Visão Geral</p>
            <div className={styles.content}>
                <img src={`https://image.tmdb.org/t/p/w780/${serie?.backdrop_path}`} alt={serie?.name} />
                <div className={styles.contentInfo}>
                    <div className={styles.nomeDaSerie}>
                        <p className={styles.subtitulo}>{serie?.name} ({serie?.first_air_date.slice(0,4)})</p>
                        <i className="fa-solid fa-heart text-red-500"></i>
                    </div>
                    <i>{serie?.tagline}</i>
                    <div>
                        <p className={styles.subtitulo}>Sinopse</p>
                        <p>{serie?.overview}</p>
                    </div>
                    <p>Avaliação: {serie?.vote_average ? (serie.vote_average * 10 + '').slice(0,4) + "%" : "Indisponível"}</p>
                </div>
            </div>
        </section>
    )
}