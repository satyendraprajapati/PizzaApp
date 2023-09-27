import { useState } from "react";

import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: true,
  },
];

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />

        <Footer />
      </div>
    </>
  );
}
function Header() {
  return (
    <header className="header footer">
      <h1>Fast React Pizza co.</h1>;
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const pizzalength = pizzas.length;
  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>
        {/*  Short curkit */}
        {/* {pizzalength > 0 && (
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza
                name={pizza.name}
                photoName={pizza.photoName}
                gredient={pizza.ingredients}
                price={pizza.price}
                key={pizza.name}
              />
            ))}
          </ul>
        )} */}
        {/* Ternery operator */}
        {pizzalength > 0 ? (
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza
                name={pizza.name}
                photoName={pizza.photoName}
                gredient={pizza.ingredients}
                price={pizza.price}
                soldOut={pizza.soldOut}
                key={pizza.name}
              />
            ))}
          </ul>
        ) : (
          <p>We are working on our menu please come back latter:)</p>
        )}
        {/* <Pizza
          name="Focaccia"
          gredient="Bread with italian olive oil and rosemary"
          photoName="../public\images\focaccia.jpg"
          price={10 + 3}
        /> */}
      </main>
    </>
  );
}
function Pizza(props) {
  // if (props.soldOut) return null;
  return (
    <li className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.gredient} </p>
        <span>{props.soldOut ? "Sold out" : <p>{[props.price]}</p>}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const open = 12;
  const close = 23;
  const isOpen = hour >= open && hour <= close;

  return (
    <>
      <footer className="footer">
        {isOpen ? <Order close={close} /> : ""}
      </footer>
    </>
  );
}
function Order(props) {
  return (
    <div className="order">
      <p>
        We are open until, unitl {props.close}:00 come visit us or order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default App;
