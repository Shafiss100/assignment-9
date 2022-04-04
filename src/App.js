import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Review from './Component/Review/Review';
import Dashboard from './Component/Dashboard/Dashboard';
import Blogs from './Component/Blogs/Blogs';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import './main.css';
import NotFound from './Component/NotFound/NotFound';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <div className='links'>
        <Link className='link' to={'/'}>HOME</Link>
        <Link className='link' to={'/review'}>REVIEW</Link>
        <Link className='link' to={'/dashboard'}>DASHBOARD</Link>
        <Link className='link' to={'/blog'}>BLOGS</Link>
        <Link className='link' to={'/about'}>ABOUT</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        
        <Route path='/blog' element={<Blogs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound></NotFound>}/>
      </Routes>
    </div>
  );
}

export default App;
