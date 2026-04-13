import styles from "./MelhoresAvaliacoes.module.css"
import "../declarations.ts"
import axios from "axios"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function MelhoresAvaliacoes(){

    interface MelhoresAvaliacoesInfo{
        id: number;
        name: string;
        backdrop_path: string;
        poster_path: string;
        first_air_date: string;
        overview: string;
        vote_average: string;
    }

    const [melhoresAvaliacoes, setMelhoresAvaliacoes] = useState<MelhoresAvaliacoesInfo[]>([])
    const [slideAtual, setSlideAtual] = useState(0)

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=1',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmUzMTYwYjM2MmJkNmU2OTU4NWVkODJmZGY3NzI2MCIsIm5iZiI6MTc0ODEyNTM1MS4zNDIwMDAyLCJzdWIiOiI2ODMyNDZhNzhhNzUwYjE1MDFlYjJjODYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.i29DhySLPPatGdxSGppa5buPw35e-beeIVZyEm5fl6k'
        }
    };

    axios
    .request(options)
    .then(res => setMelhoresAvaliacoes(res.data.results))
    .catch(err => console.error(err));

    const anterior = () => setSlideAtual((slideAtual) => (slideAtual == 0 ? 4 : slideAtual - 1))
    const proximo = () => setSlideAtual((slideAtual) => (slideAtual == 4 ? 0 : slideAtual + 1))

    return(
        <section>
            <p className={styles.titulo}>Melhores Avaliações</p>
            <div className="relative overflow-hidden">
                <div className={`${styles.conteudo}`}>
                    {melhoresAvaliacoes.map(serie => 
                    <Link key={serie.name}  to={`/Detalhes/${serie.id}`}>
                    <div 
                    className={`${styles.container} grid m-3 transition-transform ease-out duration-500`} 
                    style={{transform: `translateX(-${slideAtual * 408}%)`}}
                    >
                        <img className={`h-96 ${styles.img}`} src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt={serie.name} />
                        <div className={`${styles.cardInfo}`}>
                            <p className="text-white font-bold">{serie.name}</p>
                            <p>{serie.overview.slice(0, 100)+ '...'}</p>
                            <p>Avaliação: {serie.vote_average}</p>
                        </div>
                    </div>
                    </Link>
                    )}
                </div>
                <div className="inset-0">
                    <button onClick={anterior} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/80 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/></svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button onClick={proximo} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/80 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/></svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}