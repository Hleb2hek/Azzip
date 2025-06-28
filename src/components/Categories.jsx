import React from 'react'

function Categories() {
	const [activeId, setActiveId] = React.useState(0);

	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

	function handleClick(i, active, set) {
		if (active === i) {
			set(null)
		} else {
			set(i)
		}
	}

	return (
		<div className="categories">
			<ul>
				{categories.map((value, id) => (
					<li onClick={() => handleClick(id, activeId, setActiveId)} className={activeId === id ? 'active' : ''}>
						{value}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Categories;