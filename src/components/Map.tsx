import { MapContainer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { divIcon, LatLngTuple } from "leaflet";
import geoData from "../data/geo.json";
import StreetLayer from "./StreetLayer";
import GridBackground from "./GridBackground";

interface PointFeature {
	type: string;
	properties: {
		name: string;
		description: string;
		district?: string;
		type?: string;
		status?: string;
		tags?: string[];
	};
	geometry: {
		type: string;
		coordinates: [number, number];
	};
}

// Создаем кастомную SVG иконку в киберпанк стиле
const createCyberIcon = (color: string = "#00ff00") => {
	return divIcon({
		className: "cyber-marker",
		html: `
			<svg width="24" height="24" viewBox="0 0 24 24">
				<rect x="4" y="4" width="16" height="16" 
					stroke="${color}" 
					stroke-width="2" 
					fill="none"
					stroke-dasharray="4 2"
				/>
				<circle cx="12" cy="12" r="2" 
					stroke="${color}" 
					stroke-width="2" 
					fill="none"
				/>
			</svg>
		`,
		iconSize: [24, 24],
		iconAnchor: [12, 12],
	});
};

// Расширенные границы Москвы (сдвинуты немного правее)
const moscowBounds = [
	[55.3899, 37.2093], // Юго-запад (сдвинуто немного правее)
	[56.0167, 38.0357], // Северо-восток (сдвинуто немного правее)
] as [number, number][];

const Map = () => {
	return (
		<div className="relative w-full h-full">
			<GridBackground />
			<MapContainer
				center={[55.7558, 37.6073]}
				zoom={11}
				className="h-full w-full relative z-10"
				zoomControl={false}
				attributionControl={false}
				minZoom={11}
				maxZoom={11}
				maxBounds={moscowBounds}
				maxBoundsViscosity={0.0}
				dragging={true}
				doubleClickZoom={false}
				scrollWheelZoom={false}
				touchZoom={false}
				keyboard={false}
				boundsOptions={{
					padding: [0, 0],
					maxZoom: 11,
					animate: false,
				}}
			>
				<StreetLayer />
				{(geoData.features as PointFeature[]).map((feature, index) => {
					const position: LatLngTuple = [
						feature.geometry.coordinates[1],
						feature.geometry.coordinates[0],
					];

					return (
						<Marker
							key={index}
							position={position}
							icon={createCyberIcon()}
						/>
					);
				})}
			</MapContainer>
		</div>
	);
};

export default Map;
