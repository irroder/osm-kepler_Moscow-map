import { GeoJSON } from "react-leaflet";
import moscowDistricts from "../data/moscow-streets.json";

const DistrictLayer = () => {
	const getRandomCyberpunkColor = () => {
		const colors = [
			"#ff00ff", // Неоновый розовый
			"#00ffff", // Неоновый голубой
			"#ff00aa", // Яркий розовый
			"#00ffaa", // Неоновый зеленый
			"#aa00ff", // Фиолетовый
			"#ffaa00", // Оранжевый
		];
		return colors[Math.floor(Math.random() * colors.length)];
	};

	const districtStyle = (feature: any) => {
		return {
			fillColor: getRandomCyberpunkColor(),
			weight: 1,
			opacity: 0.1,
			color: "#ffffff",
			fillOpacity: 0.1,
		};
	};

	return <GeoJSON data={moscowDistricts} style={districtStyle} />;
};

export default DistrictLayer;
