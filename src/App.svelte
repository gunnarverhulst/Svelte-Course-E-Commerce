<script>
	// pages
	import Home from './pages/Home.svelte'
	import Login from './pages/Login.svelte'
	import Products from './pages/Products.svelte'
	import ProductTemplate from './pages/ProductTemplate.svelte';
	import About from './pages/About.svelte';

	// Router
	import {Router, Route, Link} from 'svelte-routing';

	// Components
	import Navbar from './components/Navbar/Navbar.svelte';
	import Sidebar from './components/Navbar/Sidebar.svelte';
	import Cart from './components/Cart/Cart.svelte';

	// global store
	import globalStore from './stores/globalStore';
	
</script>

<Router>
	<Navbar />
	{#if $globalStore.sidebar}
		<Sidebar />
	{/if}
	{#if $globalStore.cart}
		<Cart />
	{/if}
	
	<!-- Old version which is updated with above import of Navbar-->
	<!--<nav class='navbar'>-->
	<!--	<Link to='/'>Home</Link>-->
	<!--	<Link to='/about'>About</Link>-->
	<!--	<Link to='/products'>Products</Link>-->
	<!--</nav>-->
	<Route path='/' component={Home} />
	<Route path='/about' component={About} />
	<Route path='/login' component={Login} />
	<Route path='/products' component={Products} />
	<Route path='/products/:productid' component={ProductTemplate} />
</Router>
