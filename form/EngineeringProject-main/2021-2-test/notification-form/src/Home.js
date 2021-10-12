import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {
  return (
    <div className="Home">
      
        <h1><Link to ="/form1">전입 신고서 (세대 모두 이동)</Link></h1>
    
        <h1><Link to ="/form2">전입 신고서 (세대 일부 이동)</Link>
        </h1>
    </div>
  );
};

export default Home;
