import styles from "./VisaoGeral.module.css"
import "../declarations.ts"
import { useParams } from "react-router-dom"
import axios from 'axios';
import { useState } from "react";

export default function VisaoGeral(){
    interface seriesInfo{
        id: number;
        name: string;
        overview: string;
        backdrop_path: string;
        popularity: string;
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
        <>
            <p className={styles.titulo}>Visão Geral</p>
            <img src={`https://image.tmdb.org/t/p/w780/${serie?.backdrop_path}`} alt={serie?.name} />
            <div>
                <p>{serie?.name}</p>
                <p>{serie?.overview}</p>
                <p>{serie?.popularity}</p>
                <p>{serie?.vote_average}</p>
            </div>
        </>
    )
}