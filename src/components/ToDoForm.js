import { useState } from "react";

const ToDoForm = ({ newList }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [isCompleted, setIsCompleted] = useState(false);

	const submit = (e) => {
		e.preventDefault();
		const newProduct = {
			id: Date.now(),
			title,
			description,
			isCompleted
		};
		console.log(newProduct);
		newList(newProduct);
	};

	return (
		<>
			<form action="" onSubmit={submit}>
				<div>
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="description">Description</label>
					<br />
					<textarea
						name="textarea"
						rows="10"
						cols="50"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
				</div>
				<div>
					<label htmlFor="isCompleted">Description</label>
					<input
						type="checkBox"
						id="isComplete"
						checked={isCompleted}
						onChange={(e) => setIsCompleted(e.target.checked)}
					/>
					<button> submit</button>
				</div>
			</form>
		</>
	);
};

export default ToDoForm;
