<template>
	<div class="contacts__list">
		<div v-bind:key="contact.id" v-for="contact in contacts">
			<contactItem
				class="contacts__item"
				v-bind:contact="contact"
				v-on:del-contact="$emit('del-contact', contact.id)"
			/>
		</div>
	</div>
</template>

<script>
import ContactItem from "./ContactItem.vue";

export default {
	name: "Contacts",
	components: {
		ContactItem
	},
	props: ["contacts"]
};
</script>

<style lang="scss" scoped>
.contacts {
	&__list {
		padding: 0.25rem;
	}
}
</style>
