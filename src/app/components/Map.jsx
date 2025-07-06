"use client";

import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";

export default function Map({ lat, long, title }) {
  const customIcon = new L.Icon({
    iconUrl: "/pin.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div className="col-12 mt-4">
      <MapContainer
        center={[lat, long]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "500px" }}
        className="rounded-3 shadow w-100"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, long]} icon={customIcon}>
          <Popup>{title}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
