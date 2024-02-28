import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Apiproject from './Apiproject';
import Useeffect from './Useeffect';
import Mapping from './Mapping';

const App = () => 
{
  return (
    <Router>
        <div>
            <Routes>
                <Route path = "/apiproject" element={<Apiproject/>}/>
                <Route path = "/useeffect" element={<Useeffect/>}/>
                <Route path = "/mapping" element={<Mapping/>}/>
            </Routes>
        </div>
    </Router>
  );  
};

export default App;
