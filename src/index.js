import './scss/app.scss'

import { setup } from 'svelte-match-media'

import App from './components/App.svelte';
import { makeServer } from './server.js';

// CALL SIDE EFFECTS FOR THE APPLICATION HERE
setup();

/*
TODO:  When application is more ready enable this check 
if (process.env.NODE_ENV === "development") {
	makeServer({ environment: "development" })
} 
*/

makeServer({ environment: "development" })

const app = new App({
	target: document.body
});

export default app;