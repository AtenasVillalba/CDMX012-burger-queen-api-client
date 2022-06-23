import React from "react";

const CardsOrders = (props) => {
  const { name, setIsDrawerOpenOrder, doneOrder, orders, setSelectedOrder } =
    props;

  const seeOrder = () => {
    console.log(orders);
    setSelectedOrder(orders);
    setIsDrawerOpenOrder(true);
  };

  return (
    <section className="boxCardsOrders">
      <img
        className="conteiner-img"
        src={require("../../assets/chef.png")}
        alt="imgFood"
      />
      {!doneOrder && (
        <img
          className="clock-img"
          src={require("../../assets/clock-blue.png")}
          alt="imgFood"
        />
      )}
      {doneOrder && (
        <img
          className="clock-img"
          src={require("../../assets/campana.png")}
          alt="imgFood"
        />
      )}
      <p>Client: {name}</p>
      <button onClick={seeOrder}>See Order</button>
    </section>
  );
};

export default CardsOrders;
