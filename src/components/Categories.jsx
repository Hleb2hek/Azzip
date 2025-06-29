import React from 'react'

import handleClick from "./func";

function Categories() {
	const [activeId, setActiveId] = React.useState(0);

	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

	return (
		<div className="categories">
			<ul>
				{categories.map((value, id) => (
					<li key={id}
						onClick={() => handleClick(id, activeId, setActiveId)}
						className={activeId === id ? 'active' : ''}
					>
						{value}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Categories;