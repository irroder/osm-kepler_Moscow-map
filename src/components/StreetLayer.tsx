import { GeoJSON } from "react-leaflet";
import { Feature, LineString } from "geojson";
import moscowStreets from "../data/moscow-streets.json";

const StreetLayer = () => {
	const streetStyle = {
		color: "#ffffff",
		weight: 1,
		opacity: 0.8,
	};

	return <GeoJSON data={moscowStreets} style={streetStyle} />;
};

export default StreetLayer;
