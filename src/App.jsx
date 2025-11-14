import Home from "./pages/HomePage.jsx"
import Buy from "./pages/BuyPage.jsx"
import History from "./pages/HistoryPage.jsx"
import Header from "./components/header"

function App () {
    const appStyle = {
        background: 'linear-gradient(180deg, #0C152B 20%, #141F37 40%, #133146 70%)',
    }
    return (
        <div style={appStyle}>
            <Header/>
            <Home/>
            <Header/>
            <History/>
            <Header/>
            <Buy/>
        </div>
    );
}

export default App;