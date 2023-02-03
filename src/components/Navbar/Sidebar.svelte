<script>
    import links from '../../constants/links';
    import {link} from 'svelte-routing';
    import globalStore from '../../stores/globalStore';
    
</script>

<div class="sidebar-container">
    <div class="sidebar">
        <!-- header -->
        <div class="sidebar-header">
            <button class='btn-close' on:click='{() => { globalStore.toggleItem('sidebar', false)}}'>
                <i class="fas fa-window-close" />
            </button>
        </div>
        <!-- site logo -->
        <img src='/assets/images/logo.svg' class='logo sidebar-logo' alt='razors logo'/>
        <!-- links -->
        <ul class="sidebar">

            {#each links as sideLink}
            <li>
                <a href={sideLink.url} use:link on:click='{()=>{
                    console.log('sidebar closed')
                }}'>
                    {sideLink.text}
                </a>
            </li>
            {/each}

        </ul>
    </div>
</div>