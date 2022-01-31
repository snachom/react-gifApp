import React from 'react';
import ReactDOM from 'react-dom';

import { GifExpertApp } from './components/gifs-component/GifExpertApp';
import { TodoApp } from './components/tasks-component/TodoApp';
import { HeroesApp } from './components/hero-component/HeroesApp';

import './index.css';


ReactDOM.render(
    // <GifExpertApp />,
    <TodoApp />,
    // <HeroesApp />,
  document.getElementById('root')
);

