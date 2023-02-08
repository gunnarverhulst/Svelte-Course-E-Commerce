<script>
       export let title="";
       import Products from '../../stores/products';
       import Product from './Product.svelte';
       import Loading from '../Loading.svelte';
       // old code replaced by import of featuredStore above
       // $:featured = $defaultProducts.filter(item => item.featured === true);
       
   </script>
    <!-- {#if featured.length === 0} -->
    {#if $Products.length === 0}
        <Loading />
    {:else}
        <section class='section'>
            <h2 class='section-title'>{title}</h2>
            <div class="products-center">
                <!-- {#each featured as product (product.id)}-->
                {#each $Products as product (product.id)}
                    <Product {product} />
                {/each}
            </div>
        </section>
    {/if}
   
   