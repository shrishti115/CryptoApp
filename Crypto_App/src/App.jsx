
import {Navbar,Homepage, Cryptocurrencies, CryptoDetails, News, Exchanges  } from './components';
import {Layout, Typography, Space} from 'antd';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
   
    <div className="app">
      <div className="navbar">
        <Navbar/>
        </div>
        <div className="main">
         <Layout>
          <div className="routes">
          <Routes>
              <Route path="/" element={<Homepage/>} />
               
              <Route path="/exchanges" element={<Exchanges/>}/>
              
              
              <Route  path="/cryptocurrencies"element={<Cryptocurrencies/>}/>
               
              <Route path="/crypto/:coinId" element={<CryptoDetails/>}/>
               
              <Route path="/news" element={<News/>}/>
               
              </Routes>
            </div>
            </Layout>
            
        </div>
        <div className="footer">
          </div>
    </div>
    
  );

} 

export default App;