<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
>>>>>>> 6ae6fefd02b8773f6b83b70b1de82258d19729fa

export default function Order(props) {
    const { name, price,qty } = props

    return (
        <section className="boxOrders">

            <p className="order" id="p1">{name}
            </p>
            <p className="order" id="p2">cant. {qty}
            </p>
            <p className="order" id="p3">${price}
            </p>
            <div className="iconContainer">
            <img
              className="icon"
              alt="deleteIcon"
              src={require("../../assets/delete.png")}
            />
            </div>
        </section>
    )
}

