import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import FilteringProducts from '../components/FilteringProducts ';

const Products = () => {
    const { products } = useContext(ProductContext);
    const [filteredProducts, setFilteredProducts] = useState(products);

    if (!products || products.length === 0) {
        return <p className='text-center'>Caricamento Prodotti, Attendere...</p>;
    }

    return (
        <section className='py-16 bg-gray-200'>
            <div className='container mx-auto flex flex-col md:flex-row'>
                <div className='w-full md:w-1/4 p-4 bg-white rounded-lg shadow-md mb-4 md:mb-0'>
                    <FilteringProducts products={products} setFilteredProducts={setFilteredProducts} />
                </div>
                <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto'>
                    {filteredProducts.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
