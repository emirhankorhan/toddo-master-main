
import './App.css';
import Home from './component/home/Home';
import { Route, Routes } from 'react-router-dom';
import Oauth from './component/oauth/Oauth';
import Todolist from '../src/component/todolist/Todolist'
import Dashboard from '../src/component/dashboard/Dashboard'
import Chart from './component/chart/Chart';
import Setting from './component/Setting/Setting';
import Editsetting from './component/Setting/Editsetting';
import AppContext from "./component/context/AppContext";
import React, { useContext } from "react";




function App() {

  

  const { updatedTodoId } = useContext(AppContext);

  return (
    <div className='App'>
       <div className='message-div'>
        "Ne yazık ki henüz mobil uyumlu değiliz!"
      </div>
      <div className='appp'>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/oauth' element={<Oauth />} />
          <Route path='/mypage' element={<Todolist />} />
          <Route path='/chart' element={<Chart />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/setting/1' element={<Editsetting />} />
          <Route path='/dashboard' element={<Dashboard />} />

        </Routes>
      </div>
      
    </div>
  );
}

export default App;
