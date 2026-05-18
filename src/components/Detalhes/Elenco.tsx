import styles from './Elenco.module.css'
import '../declarations.ts'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Elenco(){
    interface Role{
        character: string;
        episode_count: string;
    }

    interface Ator {
        id: number;
        name: string;
        roles: Role[];
        profile_path: string | null;
    }

    const params = useParams()

    const [elenco, setElenco] = useState<Ator[]>([])
    const [slideAtual, setSlideAtual] = useState(0)

    useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${params.id}/aggregate_credits?api_key=82e3160b362bd6e69585ed82fdf77260&language=pt-BR`)
      .then(res => res.json())
      .then(data => {
        setElenco(data.cast.slice(0, 20));
      });
  }, [params.id]);

    const anterior = () => setSlideAtual((slideAtual) => (slideAtual == 0 ? 4 : slideAtual - 1))
    const proximo = () => setSlideAtual((slideAtual) => (slideAtual == 4 ? 0 : slideAtual + 1))

    return(
        <section>
            <p className={styles.titulo}>Elenco</p>
            <div className="relative overflow-hidden">
                <div className={`${styles.conteudo}`}>
                    {elenco.map(ator => 
                    
                        <div 
                        key={ator.id}
                        className={`${styles.container} grid m-3 transition-transform ease-out duration-500`} 
                        style={{transform: `translateX(-${slideAtual * 408}%)`}}
                        >
                            <img className={`h-96 ${styles.img}`} src={`https://image.tmdb.org/t/p/w500/${ator.profile_path}`} alt={ator.name} />
                            <div className={`${styles.cardInfo}`}>
                                <p className="text-white font-bold">{ator.name}</p>
                                <p>{ator.roles && ator.roles.length > 0 
                                    ? `como ${ator.roles[0].character}` 
                                    : 'Personagem não informado'}
                                </p>
                            </div>
                        </div>
                    
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