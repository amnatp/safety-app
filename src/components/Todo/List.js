import React from "react";

const List = props => (
	<ul className="list-group">
		{props.tasks.map((item, key) => (
			<li
				className="list-group-item"
				id={item.id}
				key={item.id}
			>
				<span>{item.id}</span>
				<span>{item.task}</span>
				<span onClick={() => props.removeTask(item.id)}>
					<i className="fa fa-trash"></i>
				</span>
			</li>
		))}
	</ul>
);
export default List;
