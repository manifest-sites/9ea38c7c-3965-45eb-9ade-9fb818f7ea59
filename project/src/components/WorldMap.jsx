import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function WorldMap() {
  return (
    <div className="h-screen w-full">
      <MapContainer 
        center={[42.8711, -85.8644]} 
        zoom={4} 
        className="h-full w-full"
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Michigan marker */}
        <Marker position={[44.3148, -85.6024]}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold">Michigan</h3>
              <p>The Great Lakes State</p>
            </div>
          </Popup>
        </Marker>
        
        {/* England marker */}
        <Marker position={[52.3555, -1.1743]}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold">England</h3>
              <p>United Kingdom</p>
            </div>
          </Popup>
        </Marker>
        
        {/* Machu Picchu marker */}
        <Marker position={[-13.1631, -72.5450]}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold">Machu Picchu</h3>
              <p>Ancient Inca Citadel, Peru</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default WorldMap