const TodosList = ({ todosList }) => {
	return (
		<ul>
			{todosList.map((todoList) => (
				<li key={todoList.id}>
					<h1>Title: {todoList.title} </h1>
					<h1>Description: {todoList.description} </h1>
					<h1>is COmpleted: {todoList.isCompleted.toString()} </h1>
				</li>
			))}
		</ul>
	);
};

export default TodosList;
