import React, { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../Redux/Actions/ActionNames";

const AddToContact = () => {
	const contacts = useSelector((state) => state.allReducers);
	const dispatch = useDispatch();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const checkContactEmailExists = contacts.filter((contact) =>
			contact.email === email ? contact : null
		);
		const checkContactPhoneExists = contacts.filter((contact) =>
			contact.phone === phone ? contact : null
		);

		if (!email || !name || !phone) {
			return toast.warning("Please fill in all fields!!");
		}
		if (checkContactEmailExists.length > 0) {
			return toast.error("This email already exists!!");
		}
		if (checkContactPhoneExists.length > 0) {
			return toast.error("This phone number already exists!!");
		}

		const data = {
			id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
			email,
			name,
			phone,
		};

		dispatch(addContact(data));

		history.push("/");
	};

	return (
		<div className="container-fluid">
			<h1 className="text-center text-dark py-3 display-2">Add Post</h1>
			<div className="row">
				<div className="col-md-6 p-5 mx-auto shadow">
					<form onSubmit={(e) => handleSubmit(e)}>
						<div className="form-group">
							<input
								className="form-control"
								type="text"
								placeholder="Full name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<input
								className="form-control"
								type="email"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<input
								type="tel"
								minLength="10"
								maxLength="10"
								className="form-control"
								name="phone"
								placeholder="Phone"
								pattern="[7-9]{1}[0-9]{9}"
								title="Phone number with 7-9 and remaing 9 digit with 0-9"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<input
								className="btn btn-block btn-dark"
								type="submit"
								value="Add Student"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddToContact;
// const mapStateToProps = (state) => ({
// 	contacts: state,
// });
// const mapDispatchToProps = (dispatch) => ({
// 	addContact: (data) => {
// 		dispatch({ type: "ADD_CONTACT", payload: data });
// 	},
// });

// export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
