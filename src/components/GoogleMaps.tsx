import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function GoogleMaps() {
  const apiKey = process.env.PUBLIC_LOCAL_GOOGLE_MAPS_API_KEY;

  return (
    <APIProvider apiKey={apiKey ?? ""}>
      <Map
        mapId="demo-map"
        style={{ width: "100%", height: "400px" }}
        defaultCenter={{ lat: 55.6761, lng: 12.5683 }}
        defaultZoom={10}
      >
        {/* Example marker */}
        <Marker position={{ lat: 55.6761, lng: 12.5683 }} />
      </Map>
    </APIProvider>
  );
}
