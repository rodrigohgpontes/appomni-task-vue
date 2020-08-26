<template>
	<div class="contacts">
		<h1 class="contacts__title">Your contacts</h1>

		<NewContact
			v-on:add-contact="addContact"
			v-on:get-contacts-number="getNumberOfContacts"
		/>

		<ContactList v-bind:contacts="contacts" v-on:del-contact="deleteContact" />
	</div>
</template>

<script>
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
		getNumberOfContacts() {
			return this.contacts.length;
		},
		deleteContact(id) {
			console.log("deleteContact id: ", id);
			return;
		},
		addContact(newContact) {
			const { name, email, phoneNumber, address } = newContact;
			console.log("addContact newContact: ", name, email, phoneNumber, address);
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
