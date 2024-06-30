import React, { useContext, useState } from 'react';
import { ProductContext } from '../../contexts/Product/ProductContext';
import Product from '../../components/Product/Product';
import FilteringProducts from '../../components/Product/FilteringProducts ';
import SearchBar from '../../components/Product/SearchBar';

const Products = () => {
    const { products } = useContext(ProductContext);
    const [filteredProducts, setFilteredProducts] = useState(products);

    if (!products || products.length === 0) {
        return <p className='text-center'>Caricamento Prodotti, Attendere...</p>;
    }

    return (
        <section className='pb-16 bg-yellow-300 flex-col flex justify-center w-full'>
            <div className='bg-zinc-500 flex justify-center mt-2 py-3'>
                <SearchBar />

            </div>
            <div className='flex flex-col p-5'>
                <div className='bg-gray-400 p-5 items-center'>
                    <FilteringProducts products={products} setFilteredProducts={setFilteredProducts} />
                </div>
                <div className='m-4'>

                </div>
                <div className=' grid grid-cols-4 gap-4 '>
                    {filteredProducts.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
