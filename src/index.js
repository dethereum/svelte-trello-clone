import './scss/app.scss'

import { setup } from 'svelte-match-media'

import App from './components/App.svelte';

setup();

const app = new App({
	target: document.body
});

export default app;