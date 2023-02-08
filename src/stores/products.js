import {writable, derived} from 'svelte/store';
import url from '../strapi/URL';
import getProducts from '../strapi/getProducts';

const store = writable([], () => {
    setProducts();
    return () => {};
});

async function setProducts(){
    let products = await getProducts();

    if(products) {
        products = flattenProducts(products);
        store.set(products);
    }
}

// subscribe
// set
// update

// flatten products
function flattenProducts(data){

    return data.data.map(product =>{
        let title = product.attributes.Title;
        let price = product.attributes.Price;
        let id = product.id;
        let description = product.attributes.Description;
        let featured = product.attributes.Featured;
        let image = `${url}${product.attributes.Image.data.attributes.url}`;
        return { ...product, title, price, id, description, featured, image};
    })
}

// featured store
export const featuredStore = derived(store, $featured => {
    return $featured.filter(item => item.featured === true);
});

export default store;