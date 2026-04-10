import HeaderPrincipal from "../components/HeaderPrincipal.tsx";
import Footer from "../components/Footer.tsx";
import SeriesPopulares from "../components/HomePage/SeriesPopulares.tsx";
import MelhoresAvaliacoes from "../components/HomePage/MelhoresAvaliacoes.tsx";
import SeriesFavoritas from "../components/HomePage/SeriesFavoritas.tsx";

export default function HomePage() {
  return (
    <>
      <HeaderPrincipal />
      <SeriesPopulares />
      <MelhoresAvaliacoes />
      <SeriesFavoritas />
      <Footer />
    </>
  );
}
