import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import  SinglePost from './components/SinglePost';
import  Post from './components/Post';
import  Project from './components/Project';
import NavBar from './components/NavBar'; 




function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route component ={Home} path='/' exact />
      <Route component ={About} path='/About'/>
      <Route component ={SinglePost} path='/Post/:slug '/>
      <Route component ={Post} path='/Posts'/>
      <Route component ={Project} path='/Projects'/>
    </Switch>


    </BrowserRouter>
  )
}

export default App;
