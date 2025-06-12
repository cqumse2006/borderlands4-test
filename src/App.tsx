
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import Borderlands4 from '@/pages/Borderlands4';
import NotFound from '@/pages/NotFound';
import './App.css';

function App() {
  return (
    <Router data-id="r10wsxze0" data-path="src/App.tsx">
      <div className="App" data-id="2mp6tp2zm" data-path="src/App.tsx">
        <Routes data-id="rml81cueq" data-path="src/App.tsx">
          <Route path="/" element={<Borderlands4 data-id="uajs9hxk3" data-path="src/App.tsx" />} data-id="y5mzfbob5" data-path="src/App.tsx" />
          <Route path="/home" element={<HomePage data-id="5b1lz48zz" data-path="src/App.tsx" />} data-id="f3120trkn" data-path="src/App.tsx" />
          <Route path="*" element={<NotFound data-id="pn16du7p7" data-path="src/App.tsx" />} data-id="d5rg4kty7" data-path="src/App.tsx" />
        </Routes>
        <Toaster data-id="aq4h515gz" data-path="src/App.tsx" />
      </div>
    </Router>);

}

export default App;