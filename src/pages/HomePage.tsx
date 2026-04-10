import HeaderPrincipal from "../components/HeaderPrincipal.tsx"
import Footer from "../components/Footer.tsx"
import SeriesPopulares from "../components/SeriesPopulares.tsx"
import MelhoresAvaliacoes from "../components/MelhoresAvaliacoes.tsx"

export default function HomePage(){

    return(
        <>
            <HeaderPrincipal />
            <SeriesPopulares />
            <MelhoresAvaliacoes />
            <Footer/>
        </>
    )
}