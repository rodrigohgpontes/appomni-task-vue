<template>
	<div class="contacts__new">
		<p class="contacts__add" @click="toggleNewForm">+ add new contact</p>

		<form
			class="contacts__form"
			v-bind:class="{ 'contacts__form--open': this.isOpen }"
			@submit="addContact"
		>
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
			<input class="contacts__submit-new" type="submit" value="Submit" />
		</form>
	</div>
</template>

<script>
export default {
	name: "NewContact",
	data() {
		return {
			isOpen: false,
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
		},
		toggleNewForm() {
			console.log("toggling form");
			this.isOpen = !this.isOpen;
		}
	}
};
</script>

<style lang="scss" scoped>
.contacts {
	&__add {
		margin-top: 1rem;

		cursor: pointer;
	}

	&__form {
		display: flex;
		flex-direction: column;

		border-radius: 0.25rem;
		margin: 0;
		padding: 0;

		background-color: #1f4068;

		max-height: 0;
		opacity: 0;
		visibility: hidden;

		transition: max-height 0.2s ease-in, opacity 0.2s ease-in 0.2s;

		&--open {
			max-height: 14rem;
			opacity: 1;
			visibility: visible;
			margin: 0.5rem auto 2rem;
			padding: 1rem;

			.contacts__input,
			.contacts__submit-new {
				display: block;
			}
		}
	}

	&__input {
		display: none;

		outline: none;
		border: solid 1px #1f4068;
		border-radius: 0.25rem;

		width: 25rem;
		max-width: 100%;
		height: 2.75rem;
		max-height: 100%;

		margin: 0.25rem auto;
		padding: 0.25rem 0.5rem;

		font-size: 1rem;
		line-height: 2rem;
		color: #1b1b2f;

		&::placeholder {
			color: #5b5b7f;
			font-style: italic;
		}

		&:active,
		&:focus {
			outline: 0;
			box-shadow: none;
			border-color: #e43f5a;

			background-color: white;
		}
	}

	&__submit-new {
		display: none;

		font-size: 1rem;
		color: white;
		font-weight: bold;

		border-radius: 3px;
		border: solid 1px transparent;

		max-width: 14rem;
		min-width: 6rem;
		min-height: 2rem;

		margin: 1rem auto 0;
		padding: 0.25rem 0.5rem;

		background-color: #e43f5a;

		cursor: pointer;

		&:active,
		&:focus {
			outline: 0;
		}

		&:hover {
			box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
				0 1px 3px rgba(0, 0, 0, 0.08);

			filter: brightness(130%);
		}
	}
}
</style>
