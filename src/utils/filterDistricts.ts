// Границы центральной части Москвы
const CENTRAL_BOUNDS = {
	minLat: 55.6,
	maxLat: 55.9,
	minLng: 37.3,
	maxLng: 37.9,
};

export const filterCentralDistricts = (districts: any[]) => {
	return districts.filter((district) => {
		const coordinates = district.geometry.coordinates[0][0];
		// Проверяем, находится ли хотя бы одна точка района в центральных границах
		return coordinates.some(
			([lng, lat]: [number, number]) =>
				lat >= CENTRAL_BOUNDS.minLat &&
				lat <= CENTRAL_BOUNDS.maxLat &&
				lng >= CENTRAL_BOUNDS.minLng &&
				lng <= CENTRAL_BOUNDS.maxLng
		);
	});
};
