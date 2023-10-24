import { BrowserRouter, Route, Routes } from "react-router-dom"
import FcstMain from "./FcstMain"
import FcstNav from "./FcstNav"
import UltraSrtFcst from "./UltraSrtFcst"
import VilageFcst from "./VilageFcst"

const Fcst = () => {
  return (
    <BrowserRouter >
        <FcstNav/>
        <main className="container">
            <Routes>
                <Route path="/" element={<FcstMain/>}></Route>
                <Route path="/ultra/:dt/:area/:x/:y" element={<UltraSrtFcst/>}></Route>
                <Route path="/vilage/:dt/:area/:x/:y" element={<VilageFcst/>}></Route>
            </Routes>
        </main>
    </BrowserRouter>

    )
}

export default Fcst