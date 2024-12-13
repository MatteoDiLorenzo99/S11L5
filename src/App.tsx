import React from 'react';
import Sidebar from './Components/Sidebar';
import TopNavBar from './Components/TopNavBarComponent';
import Novità from './Components/Novità'; 
import './App.css'; 

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <TopNavBar />

        <div className="content">
          <Novità /> 
        </div>
      </div>
    </div>
  );
};

export default App;
