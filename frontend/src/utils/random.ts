
export const random = (min: number, max: number, roundTo = 0) => {
	const a = (Math.random() * (max - min) + min);
	
	if(roundTo === 0) {
		return Math.round(a);
	}
	
	return Number(a.toFixed(roundTo));
};
