import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import NotFound from './pages/NotFound';
import Stat from './pages/Stat';
import States from './pages/States';
import MP from './screens/MP';
import TN from './screens/TN';
import RJ from './screens/RJ';
import KR from './screens/KR';
import RY from './screens/RY';
import TL from './screens/TL';
import AP from './screens/AP';
import CG from './screens/CG';
import VD from './screens/VD';
import MH from './screens/MH';
import GOA from './screens/GOA';
import SUR from './screens/SUR';
import GUJ from './screens/GUJ';
import KL from './screens/KL';
import JK from './screens/JK';
import HP from './screens/HP';
import PB from './screens/PB';
import DL from './screens/DL';
import UR from './screens/UR';
import BI from './screens/BI';
import JR from './screens/JR';
import OR from './screens/OR';
import WB from './screens/WB';
import ASS from './screens/ASS';
import LD from './screens/LD';
import ANNI from './screens/ANNI';
import ARP from './screens/ARP';

import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/stat' element={<Stat/>} />
        <Route path='/states' element={<States/>} />
        <Route path='/mp' element={<MP/>} />
        <Route path='/tn' element={<TN/>} />
        <Route path='/rj' element={<RJ/>} />
        <Route path='/kr' element={<KR/>} />
        <Route path='/ry' element={<RY/>} />
        <Route path='/tl' element={<TL/>} />
        <Route path='/ap' element={<AP/>} />
        <Route path='/cg' element={<CG/>} />
        <Route path='/vd' element={<VD/>} />
        <Route path='/mh' element={<MH/>} />
        <Route path='/goa' element={<GOA/>} />
        <Route path='/sur' element={<SUR/>} />
        <Route path='/guj' element={<GUJ/>} />
        <Route path='/kl' element={<KL/>} />
        <Route path='/jk' element={<JK/>} />
        <Route path='/hp' element={<HP/>} />
        <Route path='/pb' element={<PB/>} />
        <Route path='/dl' element={<DL/>} />
        <Route path='/ur' element={<UR/>} />
        <Route path='/bi' element={<BI/>} />
        <Route path='/jr' element={<JR/>} />
        <Route path='/or' element={<OR/>} />
        <Route path='/wb' element={<WB/>} />
        <Route path='/ass' element={<ASS/>} />
        <Route path='/ld' element={<LD/>} />
        <Route path='/anni' element={<ANNI/>} />
        <Route path='/arp' element={<ARP/>} />
        <Route path='/*' element={<NotFound/>} />
      </Routes>
      <Toaster position='bottom-right'/>
    </Router>
  );
}

export default App;
