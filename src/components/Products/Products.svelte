<script>
    export let title="";
    import Products from '../../stores/products';
    import Product from './Product.svelte';
    import Loading from '../Loading.svelte';
    

</script>

<section class='section'>
    <h2 class='section-title'>{title}</h2>
    <div class="products-center">
        <!-- {#each localProducts as product}-->
        <!-- as described earlier, $products will subscribe and unsubscribe automatically and replaces the whole code block from earlier-->
        <!-- it will always look for the latest data via subscribe when products is entered and unsubscribe when left-->
        {#each $Products as product (product.id)}
        <!--<h2>{product.title}</h2>-->
            <Product {product} />
        {:else}
            <Loading />
        {/each} 
    </div>
</section>

