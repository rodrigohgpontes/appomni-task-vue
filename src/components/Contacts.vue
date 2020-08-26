<template>
	<div class="contacts">
		<h1 class="contacts__title">Your contacts</h1>

		<NewContact v-on:add-contact="addContact" />

		<ContactList v-bind:contacts="contacts" v-on:del-contact="deleteContact" />
	</div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

import NewContact from "./NewContact";
import ContactList from "./ContactList";

export default {
	name: "ContacsModule",
	components: {
		NewContact,
		ContactList
	},
	data() {
		return {
			contacts: [
				{
					id: 1,
					name: "Alice",
					email: "alice@example.com",
					phoneNumber: "5551111",
					address: "1 Main Street, apt #1"
				},
				{
					id: 2,
					name: "Bob",
					email: "bob@example.com",
					phoneNumber: "5552222",
					address: "1 Main Street, apt #2"
				},
				{
					id: 3,
					name: "Carol",
					email: "carol@example.com",
					phoneNumber: "5553333",
					address: "1 Main Street, apt #3"
				}
			]
		};
	},
	methods: {
		deleteContact(id) {
			this.contacts = this.contacts.filter(contact => contact.id !== id);
		},
		addContact(newContact) {
			newContact.id = uuidv4();

			this.contacts = [...this.contacts, newContact];
		}
	}
};
</script>

<style lang="scss" scoped>
.contacts {
	background-color: #162447;
	color: white;
	width: 50rem;
	max-width: 100%;
	margin: auto;
	padding: 1rem;
}
</style>
