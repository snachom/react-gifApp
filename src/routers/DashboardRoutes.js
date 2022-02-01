import { Routes, Route } from "react-router-dom";
import { Navbar } from '../components/navbar/ui/Navbar';
import { HeroScreen } from "../components/hero-component/hero/HeroScreen";
import { DcScreen } from '../components/hero-component/dc/DcScreen';
import { MarvelScreen } from '../components/hero-component/marvel/MarvelScreen';
import { SearchScreen } from '../components/hero-component/search/SearchScreen';
import { HomeScreen } from "../pages/HomeScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container container-screens">        
        <Routes>

          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />

          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:heroId" element={<HeroScreen />} />

          <Route path="/" element={<HomeScreen />} />

        </Routes>
      </div>
    </>
  )
};
