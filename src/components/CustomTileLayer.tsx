import { TileLayer } from "react-leaflet";

const CustomTileLayer = () => {
	return (
		<TileLayer
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			attribution=""
			className="map-tiles"
		/>
	);
};

export default CustomTileLayer;
