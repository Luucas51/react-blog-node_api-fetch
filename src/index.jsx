import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import GetPosts from './components/GetPosts/GetPosts';
import styles from './styles/style.scss'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import GetPostsId from './components/GetPostsId/GetPostsId';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Cookies from "js-cookie"

const App = () => {

  const token = Cookies.get('token')

    return (
      <div >
        <div className='container'>
          {token === undefined ?
          <>
            <a href='/register'>Inscription</a>
            <a href='/login'>Connexion</a>
          </>
          :
          <> 
            <button>Déconnexion</button>
          </>
          }
        </div>
        <div className='header'>
          <h1 className='title'><span className='title-color'>Blog</span> React</h1>
          <p>Bienvenue sur mon Blog en ReactJS qui fetch une API NodeJS</p>
          <a className='link' href="/posts">Voir les posts</a>
        </div>
        <Router>

            <Routes>

                <Route path='/posts' element={ <GetPosts/> }/>
                <Route path='/posts/:id' element={ <GetPostsId/> }/>
                <Route path='/register' element={ <Register/> }/>
                <Route path='/login' element={ <Login/> }/>
            </Routes>

        </Router>
      </div>
    );
};


reactDom.render(<App />, document.getElementById('root'));