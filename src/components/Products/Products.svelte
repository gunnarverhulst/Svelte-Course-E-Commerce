<script>
 //   import {onMount, onDestroy} from 'svelte';
    export let title="";
    import defaultProducts from '../../stores/defaultProducts';
    import Product from './Product.svelte';
    import Loading from '../Loading.svelte';
    
    /* 
    // Initial code to explain functionality of the store with subscribe and unsubscribe
    // This functionality can be replaced by using $products which will be used in the eachloop below
    
    let localProducts = [];
    let unsubscribe;
    
    onMount(() => {
        unsubscribe = products.subscribe(storeValue => {
            console.log('subscribed');
            localProducts = storeValue;
        });
    });

    onDestroy(() =>{
        unsubscribe();
    })*/
</script>

<section class='section'>
    <h2 class='section-title'>{title}</h2>
    <div class="products-center">
        <!-- {#each localProducts as product}-->
        <!-- as described earlier, $products will subscribe and unsubscribe automatically and replaces the whole code block from earlier-->
        <!-- it will always look for the latest data via subscribe when products is entered and unsubscribe when left-->
        {#each $defaultProducts as product (product.id)}
        <!--<h2>{product.title}</h2>-->
            <Product {product} />
        {:else}
            <Loading />
        {/each} 
    </div>
</section>

