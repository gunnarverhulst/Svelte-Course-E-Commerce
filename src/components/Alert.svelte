<script>
    import {fly, fade} from 'svelte/transition';
    import globalStore from '../stores/globalStore';
    import {onMount, onDestroy} from 'svelte';
    import { subscribe } from 'svelte/internal';


    let timeout;

    const handleClose = () => {
        globalStore.toggleItem('alert', false);
    };

    onMount(() => {
        timeout = setTimeout(() => {
            globalStore.toggleItem('alert', false);
        }, 3000);
    });

    onDestroy(() => {
        clearTimeout(timeout);
    });

</script>

<div class="alert-container"
    in:fly={{y:-200, duration:1000}}
    out:fade={{duration: 0}}
    class:alert-danger={$globalStore.alertDanger}>
    <div class="alert">
        <p>{$globalStore.alertText}</p>
        <button on:click={handleClose} class='alert-close'>
            <i class="fas fa-window-close"></i>
        </button>
    </div>
</div>  

    
