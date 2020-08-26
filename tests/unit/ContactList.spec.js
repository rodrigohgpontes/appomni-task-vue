import { shallowMount } from "@vue/test-utils";
import ContactList from "@/components/ContactList";

describe("ContactList", () => {
	const wrapper = shallowMount(ContactList, {
		propsData: {
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
		}
	});

	it("renders a list of contact names", () => {
		expect(wrapper.findAll(".contacts__field--name").length).toEqual(3);
	});
});
