import {
	ADD_CONTACT,
	DELETED_CONTACT,
	UPDATE_CONTACT,
	CLEAR_CONTACT,
} from "../Constants/ActionType.js";

export const addContact = (data) => {
	return {
		type: ADD_CONTACT,
		payload: data,
	};
};

export const deleteContact = (id) => {
	return {
		type: DELETED_CONTACT,
		payload: id,
	};
};

export const updateContact = (data) => {
	return {
		type: UPDATE_CONTACT,
		payload: data,
	};
};

export const clearContact = () => {
	return { type: CLEAR_CONTACT };
};
