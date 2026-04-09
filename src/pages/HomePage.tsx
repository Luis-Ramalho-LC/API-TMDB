import HeaderPrincipal from "../components/HeaderPrincipal.tsx"
import Footer from "../components/Footer.tsx"
import SeriesPrincipais from "../components/SeriesPrincipais.tsx"

export default function HomePage(){

    return(
        <>
            <HeaderPrincipal />
            <SeriesPrincipais />
            <Footer/>
        </>
    )
}