<template>
	<div id="app">
		<Contacts msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
import Contacts from "./components/Contacts.vue";

export default {
	name: "App",
	components: {
		Contacts
	}
};
</script>

<style>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html {
	font-size: 16px;
}

body {
}

#app {
	font-family: Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
