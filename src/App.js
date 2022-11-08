import "./styles.css";
import ToDoForm from "./components/ToDoForm";
import TodosList from "./components/TodosList";
import { useState } from "react";

export default function App() {
	const initialTodosList = [
		{
			id: 1,
			title: "hola",
			description: "dfds",
			isCompleted: true
		},
		{
			id: 13,
			title: "holaa",
			description: "dfdsggfghgf",
			isCompleted: false
		}
	];
	const [todosList, setTodosList] = useState(initialTodosList);

	const newList = (newProduct) => {
		setTodosList([...todosList, newProduct]);
	};

	return (
		<div className="App">
			<ToDoForm newList={newList} />
			<TodosList todosList={todosList} />
		</div>
	);
}
