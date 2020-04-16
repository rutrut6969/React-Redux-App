import React from 'react';
import Head from './components/head/Head';
import Body from './components/body/Body';
import './App.css';

function App() {
  return (
    <div className='App'>
      <section className='Head'>
        <Head />
      </section>
      <section className='Body'>
        <Body />
      </section>
    </div>
  );
}

export default App;
