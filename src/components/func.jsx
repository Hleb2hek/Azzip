function handleClick(i, active, set) {
	if (active === i) {
		set(null)
	} else {
		set(i)
	}
}

export default handleClick;