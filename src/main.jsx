import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import { Botao } from './components/Botao';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Botao  text='Clicar no Botão'/>
    <Botao  text='Clicar no Botão 2'/>
  </React.StrictMode>,
)
