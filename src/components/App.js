import Background from "./background/Background"
import Presentation from "./presentation/Presentation"
import Skills from "./skills/Skills"

const App = () => {
    return(
        <div className="wrap-app">
            <Background />
            <Presentation />
            <Skills />
        </div>
    )
}
export default App