<template>
	<div
		class="contacts__item"
		v-bind:class="{ 'contacts__item--open': this.isOpen }"
		@click="toggleItem"
	>
		<p class="contacts__field contacts__field--name">
			{{ contact.name }}
		</p>

		<p class="contacts__field contacts__field--hideable">
			<em>email</em>: {{ contact.email }}
		</p>

		<p class="contacts__field contacts__field--hideable">
			<em>phone</em>: {{ contact.phoneNumber }}
		</p>

		<p class="contacts__field contacts__field--hideable">
			<em>address</em>: {{ contact.address }}
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
		toggleItem() {
			this.isOpen = !this.isOpen;
		}
	}
};
</script>

<style lang="scss" scoped>
.contacts {
	&__field {
		height: 1.5rem;

		&--name {
			cursor: pointer;

			&::after {
				content: "^";
				float: right;
				transform: rotate(180deg);
			}
		}

		&--hideable {
			max-height: 0;
			opacity: 0;
			visibility: hidden;

			transition: max-height 0.2s ease-in, opacity 0.2s ease-in 0.2s;
		}
	}

	&__del {
		font-size: 0.75rem;
		color: white;
		font-weight: bold;

		border-radius: 3px;
		border: solid 1px transparent;

		padding: 0.25rem 0.5rem;

		background-color: red;

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

		max-height: 0;
		opacity: 0;
		visibility: hidden;

		transition: max-height 0.2s ease-in, opacity 0.2s ease-in 0.1s;
	}

	&__item {
		text-align: left;

		border-bottom: solid 1px white;

		padding: 1rem 0.5rem;

		&--open {
			.contacts__field {
				&--hideable {
					max-height: 2rem;
					opacity: 1;
					visibility: visible;
				}

				&--name {
					&::after {
						transform: rotate(0deg);
					}
				}
			}

			.contacts__del {
				max-height: 2rem;
				opacity: 1;
				visibility: visible;
			}
		}
	}
}
</style>
