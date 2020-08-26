<template>
	<div class="contacts__item" v-bind:class="{ 'is-open': this.isOpen }">
		<p class="contacts__field">
			{{ contact.name }}
		</p>

		<p class="contacts__field">
			{{ contact.email }}
		</p>

		<p class="contacts__field">
			{{ contact.phoneNumber }}
		</p>

		<p class="contacts__field">
			{{ contact.address }}
		</p>

		<button @click="$emit('del-contact', contact.id)" class="contacts__del">
			Delete Contact
		</button>
	</div>
</template>

<script>
export default {
	name: "ContactItem",
	props: ["contact"],
	data() {
		return {
			isOpen: false
		};
	},
	methods: {
		openItem() {
			this.isOpen = !this.isOpen;
		}
	}
};
</script>

<style scoped>
.contact-item {
	background: #f4f4f4;
	padding: 0.5rem;
}
.is-complete {
	text-decoration: line-through;
}
.del {
	background: red;
	color: white;
	border: none;
	padding: 0.25rem 0.5rem;
	border-radius: 50%;
	cursor: pointer;
	float: right;
}
</style>
