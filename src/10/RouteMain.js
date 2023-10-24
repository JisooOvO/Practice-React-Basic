import { BrowserRouter, Routes, Route } from "react-router-dom"
import RouteHome from "./RouteHome"
import RouteNav from "./RouteNav"
import RoutePage1 from "./RoutePage1"
import RoutePage2 from "./RoutePage2"

const RouteMain = () => {
  return (
    <BrowserRouter>
        <main className="container">
            <section className="mb-3">
                <h1 className="text-2xl font-bold mt-4 mb-4 text-center">React-Router-DOM 으로 라우팅</h1>
                <RouteNav/>
            </section>
            <article className="m-1">        
                <Routes>
                    <Route path='/' element={<RouteHome/>}/>
                    <Route path='/page1/:item' element={<RoutePage1/>}/>
                    <Route path='/page2' element={<RoutePage2/>}/>
                </Routes>
            </article>
        </main>
    </BrowserRouter>
  )
}

export default RouteMain