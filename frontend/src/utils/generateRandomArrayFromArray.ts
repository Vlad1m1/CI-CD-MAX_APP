
export function generateRandomArrayFromArray<T>(array: T[], newLength: number): T[] {
	const uniqueIndexes = new Set<number>();
	
	while(uniqueIndexes.size < newLength) {
		uniqueIndexes.add(Math.round(Math.random() * array.length));
	}
	
	const indexes = Array.from(uniqueIndexes);
	return indexes.map(index => array[index]);
}
