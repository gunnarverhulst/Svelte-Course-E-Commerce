<script>
    // Cart button
    // Global store
    import {link} from 'svelte-routing';
    import CartButton from '../Cart/CartButton.svelte';
    import globalStore from '../../stores/globalStore';
    
</script>

<nav class='navbar'>
    <div class="nav-center">
        <!-- sidebar toggle -->
        <button class='btn-sidebar-toggle' on:click='{() =>{globalStore.toggleItem('sidebar',true);}}'>
            <i class="fas fa-bars" />
        </button>
        <!-- logo -->
        <a href='/' use:link class='navlogo'>
            <img src='/assets/images/logo.svg' class='logo' alt='razors logo' />
        </a>
        <!-- cart button -->
        <CartButton />
    </div>
</nav>