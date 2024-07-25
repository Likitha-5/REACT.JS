import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Ele from './Useref';
import CardListUI from './CardList';
function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/products" element={<Ele/>}/>
            <Route path="/" element={<CardListUI/>}/>
        </Routes>
        </BrowserRouter>
    );
}
export default App;