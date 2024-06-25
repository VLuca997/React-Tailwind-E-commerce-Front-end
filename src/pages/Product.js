import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext'
import Product from '../components/Product';

const Products = () => {
    const { products } = useContext(ProductContext);

    if (!products || products.length === 0) {
        return <p className='text-center'>Caricamento Prodotti, Attendere...</p>;
    }
    console.log(products)

    return (
        <section className='py-16 bg-gray-200'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                    {products.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
