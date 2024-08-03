export const isPhone = () => {
	return window.matchMedia('(max-width: 800px)').matches;
};
