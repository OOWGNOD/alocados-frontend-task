import ChangeToken from "./pages/change";
import ChangeList from "./pages/changeList";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact={true} Component={ChangeToken} />
                <Route path="/ChangeList" exact={true} Component={ChangeList} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
