import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Company from './Components/Company/Company';
import Hero from './Components/Hero/Hero';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Project from './Page/Project';
import ProjectDetails from './Page/ProjectDetails';

function App() {
  return (
    <div >
        <BrowserRouter>
      <Layout>
            <Routes>

              <Route path='/' element = {<Home/>} />
              <Route path = "/project/:id" element = {<ProjectDetails/>} />

            </Routes>
        
      </Layout>
        </BrowserRouter>
     
    </div>
  );
}

export default App;