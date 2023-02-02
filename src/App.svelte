<script>
	export let name;
	// pages
	import Home from './pages/Home.svelte'
	import Login from './pages/Login.svelte'
	import Products from './pages/Products.svelte'
	import ProductTemplate from './pages/ProductTemplate.svelte';
	import About from './pages/About.svelte';

	// Router
	import {Router, Route, Link} from 'svelte-routing';
</script>

<Router>
	<nav class='navbar'>
		<Link to='/'>Home</Link>
		<Link to='/about'>About</Link>
		<Link to='/products'>Products</Link>
	</nav>
	<Route path='/' component={Home} />
	<Route path='/about' component={About} />
	<Route path='/login' component={Login} />
	<Route path='/products' component={Products} />
	<Route path='/products/:productid' component={ProductTemplate} />
</Router>
