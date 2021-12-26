import {
	ADD_CONTACT,
	DELETED_CONTACT,
	UPDATE_CONTACT,
	CLEAR_CONTACT,
} from "../Constants/ActionType.js";
import { toast } from "react-toastify";

const initialState = [
	{
		id: 0,
		name: "Rajkumar Mali",
		email: "rajkumar@email.com",
		phone: 9595959595,
	},
	{ id: 1, name: "rohan kurane", email: "rohan@gmail.com", phone: 7575757575 },
];

export const ContactReducers = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CONTACT:
			toast.success("Contact added successfully!!", {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 3000,
			});
			state = [...state, action.payload];
			return state;

		case DELETED_CONTACT:
			toast.success("Contact Deleted successfully!", {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 3000,
			});
			const contactFilter = state.filter((contact) =>
				contact.id === action.payload ? null : contact
			);
			state = contactFilter;
			return state;

		case UPDATE_CONTACT:
			toast.success("Contact updated successfully!!", {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 3000,
			});
			const contactUpdate = state.filter((contact) =>
				contact.id === action.payload.id
					? Object.assign(contact, action.payload)
					: contact
			);
			state = contactUpdate;
			return state;

		case CLEAR_CONTACT: {
			toast.success("Your Contact is Empty Now!", {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 3000,
			});
			return { state: [] };
		}

		default:
			return state;
	}
};
