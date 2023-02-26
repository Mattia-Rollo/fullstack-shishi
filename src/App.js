import Navbar from './components/navbar'
import Card from './components/card';
import React,{ Component } from 'react';

import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';

class App extends Component{

  // qui creo uno state delle variabili quando avvio l'applicazione
  state = {
    cards: [
        {id: 0,nome: "California",prezzo: 1.99, immagine: california, quantità: 0},
        {id: 1,nome: "Dragon",prezzo: 2.45,immagine: dragon, quantità: 0},
        {id: 2,nome: "Dynamite",prezzo: 1.05,immagine: dynamite, quantità: 0},
        {id: 3,nome: "Philadelphia",prezzo: 2.45,immagine: philadelphia, quantità: 0},
        {id: 4,nome: "Rainbow",prezzo: 2.45,immagine: rainbow, quantità: 0},
        {id: 5,nome: "Shrimp",prezzo: 0.50,immagine: shrimp, quantità: 0},
    ]
   }
   
  //  funzione per filtrare le cards e riscrivere lo state così da poter eliminarle
   handleDelete = cardId =>{
    const cards = this.state.cards.filter(card => card.id !== cardId)
    this.setState({cards})
   }


   handleIncrement = card => {
    const cards = this.state.cards;
    const id = cards.indexOf(card);
    cards[id] = card;
    cards[id].quantità++;
    this.setState({cards})
  }
  
  
   render(){
    return (
    <>
      <Navbar />
      <div className='container'>
        <h1>Cosa desideri ordinare?</h1>
        <hr/>
        <div className='row row-cols-lg-3 row-cols-1 g-2'>
            {this.state.cards.map(card => (
              <Card key={card.id}
              card={card}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              />
            )
            )}
        </div>
      </div>
    </>
  );
  }
}

export default App;
