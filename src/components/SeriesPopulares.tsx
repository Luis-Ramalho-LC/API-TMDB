import { useEffect, useState } from "react"
import axios from "axios"
import styles from "./SeriesPopulares.module.css"
import "../declarations.ts"

export default function SeriesPopulares(){

    interface SeriesInfo{
        id: number;
        backdrop_path: string;
        poster_path: string;
        name: string;
        first_air_date: string;
        overview: string;
    }

    const [series, setSeries] = useState<SeriesInfo[]>([])
    const [slideAtual, setSlideAtual] = useState(0)
    
    const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/tv/day?language=pt-BR',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmUzMTYwYjM2MmJkNmU2OTU4NWVkODJmZGY3NzI2MCIsIm5iZiI6MTc0ODEyNTM1MS4zNDIwMDAyLCJzdWIiOiI2ODMyNDZhNzhhNzUwYjE1MDFlYjJjODYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.i29DhySLPPatGdxSGppa5buPw35e-beeIVZyEm5fl6k'
    }
    };

    axios
    .request(options)
    .then(res => setSeries(res.data.results))
    .catch(err => console.error(err));

    const anterior = () => setSlideAtual((slideAtual) => (slideAtual == 0 ? series.length - 1 : slideAtual - 1))
    const proximo = () => setSlideAtual((slideAtual) => (slideAtual == series.length - 1 ? 0 : slideAtual + 1))

    useEffect(() => {
        const slideInterval = setInterval(() => {setSlideAtual((prev) => (prev === series.length - 1? 0: prev + 1))}, 5000)
        return () => clearInterval(slideInterval)
    }, [series.length])

    return(
        <section>
            <h2 className={styles.titulo}>Séries Populares</h2>
            
            <div id="default-carousel" className={`relative w-200 ${styles.carousel}`} data-carousel="slide">
                
                <div className="relative h-56 overflow-hidden rounded-base md:h-150">
                    
                    {series.map((serie, index) => (
                        <div key={serie.id} className="duration-700 ease-out" data-carousel-item>
                            <img 
                            src={`https://image.tmdb.org/t/p/original/${serie.backdrop_path}`} 
                            className={`absolute ${slideAtual == index? 'block' : 'hidden'} w-full ${styles.slide}`} 
                            alt={serie.name}></img>
                            <div className={`absolute ${slideAtual == index? 'block' : 'hidden'} ${styles.detalhesCarousel}`}>
                                <p className={`flex justify-center  ${styles.detalhesTitulo}`}>{serie.name}</p>
                                <p className={`flex justify-center ${styles.detalhesOverview}`}>{serie.overview.slice(0, 160) + "..."}</p>
                            </div>
                        </div>
                    ))}

                </div>
                
                <div className="absolute bottom-6 right-0 left-0">
                    <div className="flex items-center justify-center gap-2">
                        {series.map((_, i) => (
                            <div key={i} onClick={() => setSlideAtual(i)} className={`
                                transition-all w-3 h-3 bg-white rounded-full
                                ${slideAtual == i ? "p-2" : "opacity-50"}    
                            `} 
                            />
                        ))}
                    </div>
                </div>
                
                <button onClick={anterior} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button onClick={proximo} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </section>
    )
}