import { Outlet } from "react-router-dom"
import Background from "./background/Background"
import Presentation from "./presentation/Presentation"

const App = () => {

    return(
        <div className="wrap-app">
            <Background />
            <Presentation />
            <Outlet />
        </div>
    )
}
export default App