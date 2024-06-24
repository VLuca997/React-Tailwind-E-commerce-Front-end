import { useContext } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from 'react-icons/bs'

//importiamo il CartContext
import { CartContext } from "../contexts/CartContext";
const Product = ({ product }) => {
    // console.log(product)

    //aggiungiamo il cart:
    const {addToCart} = useContext(CartContext)

    //Desctructuring prodotto:
    const { id, image, category, title, price } = product;

    return (
            <div>
                <div className="border border-cyan-400 h-[300px] mb-4 relative overflow-hidden group transition">
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="w-[200px] mx-auto flex justify-center items-center">
                        <img className="max-h-[160px] group-hover:scale-110 transition duration-300" src={image} />
                        </div>
                    </div>
                    <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0  group-hover:opacity-100 transition-all duration-300 easy-in-out">
                        <button onClick={() => addToCart(product, id)}>
                            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                                <BsPlus className="text-3xl"/>
                            </div>
                        </button>
                        <Link to={`/product/${id}`} className="w-12 h-12 bg-white justify-center flex items-center text-primary drop-shadow-xl">
                        <BsEyeFill/>
                        </Link>
                    </div>
                </div>
                <div>
                        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
                        <Link to={`/product/${id}`} className="font-semibold mb-1  hover:text-red-500 transition duration-300 easy-in-out">
                            {title}
                        </Link>
                        <p className="font-semibold">{price}</p>
                </div>
                {/* {product.title} */}
            </div>
    );
};

export default Product;
