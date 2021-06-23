import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import MovieList from './comp/MovieList'
import MovieSoon from './comp/MovieSoon'
import MoviePop from './comp/MoviePop'
import './style.css'
import Movie from './Movie'

import {useState} from 'react' /*Hook */
import Search from './comp/Search'
import Form from './comp/Form'


function App() {

  return (
    <div className = "main">
   
      <div className="container">
      <BrowserRouter>
    <header>
      <div className="logo">
        Movie Room
      </div>
      <div className="links">
        <Link to ="/">Фильмы в кино</Link>
        <Link to = '/soon'>Скоро выйдут</Link>
        <Link to = '/popular'>Популярные фильмы</Link>
      </div>
      <div className="search">
        <Form />
      </div>
    </header>
      <Switch className = "sw">
        <Route path = "/soon">
          <h1>Скоро в кино</h1>
          <MovieSoon />
        </Route>
        <Route path ="/" exact>
          <MovieList />
        </Route>
        <Route path ="/popular">
          <h1>Популярные фильмы</h1>
          <MoviePop/>
        </Route>
        <Route path = "/movie/:id">
          <Movie />
        </Route>
        <Route path = "/search/:q">
          <Search />
        </Route>
      </Switch>
      </BrowserRouter>
      
      </div>
    
    </div>
  );
}

export default App;
