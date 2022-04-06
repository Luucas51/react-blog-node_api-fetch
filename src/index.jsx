import React from 'react';
import reactDom from 'react-dom';
import GetPosts from './components/GetPosts/GetPosts';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import GetPostsId from './components/GetPostsId/GetPostsId';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

const App = () => {
    return (
      <>
        <h1>Blog Node Fetch</h1>
        <p>Bienvenue sur mon Blog en ReactJS qui fetch une API NodeJS</p>
        <a href="/posts">Voir les posts</a>
        <Router>

            <Routes>

                <Route path='/posts' element={ <GetPosts/> }/>
                <Route path='/posts/:id' element={ <GetPostsId/> }/>
                <Route path='/register' element={ <Register/> }/>
                <Route path='/login' element={ <Login/> }/>
            </Routes>

        </Router>
      </>
    );
};


reactDom.render(<App />, document.getElementById('root'));