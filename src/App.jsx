import { Routes, Route} from "react-router-dom";
import Inicio from "./pages/Inicio";
import Eventos from "./pages/Eventos";
import NotFound from "./pages/NotFound";
import Noticias from "./pages/Noticias";
import BlogNews from "./pages/BlogNews";
import LauyoutPublic from "./layout/LauyoutPublic";

const App = () => {

  return (
    <>
      <Routes>
        <Route element={<LauyoutPublic/>} path="/">
          <Route element={<Inicio/>} index></Route>
          <Route element={<Eventos/>} path="/eventos"></Route>
          <Route element={<Noticias/>} path="/noticias"></Route>
          <Route element={<BlogNews/>} path="/noticias/:id"></Route>
        </Route>
        <Route element={<NotFound/>} path="*"></Route>
      </Routes>
    </>
  )
}

export default App