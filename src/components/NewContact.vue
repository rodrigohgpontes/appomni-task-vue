<template>
	<div>
		<form class="contacts__new-form" @submit="addContact">
			<input
				class="contacts__input"
				type="text"
				v-model="name"
				name="name"
				placeholder="Enter the contact name..."
			/>
			<input
				class="contacts__input"
				type="email"
				v-model="email"
				name="email"
				placeholder="Enter contact email..."
			/>
			<input
				class="contacts__input"
				type="text"
				v-model="phoneNumber"
				name="phoneNumber"
				placeholder="Enter contact phone number..."
			/>
			<input
				class="contacts__input"
				type="text"
				v-model="address"
				name="address"
				placeholder="Enter contact address..."
			/>
			<input class="contacts__button" type="submit" value="Submit" />
		</form>
	</div>
</template>

<script>
export default {
	name: "NewContact",
	data() {
		return {
			name: "",
			email: "",
			phoneNumber: "",
			address: ""
		};
	},
	methods: {
		addContact(e) {
			e.preventDefault();
			const newContact = {
				id: 0,
				name: this.name,
				email: this.email,
				phoneNumber: this.phoneNumber,
				address: this.address
			};

			this.$emit("add-contact", newContact);
			this.name = "";
			this.email = "";
			this.phoneNumber = "";
			this.address = "";
		}
	}
};
</script>

<style lang="scss" scoped>
.contacts {
	&__new-form {
		display: flex;
		flex-direction: column;
	}
}
</style>
