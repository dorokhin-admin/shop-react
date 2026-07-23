import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapSection() {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const markerRef = useRef(null);

    const cities = {
        shelyayur: {
            title: "п. Щелькяюр",
            center: [65.3246, 53.391375],
            zoom: 12,
        },
        vertep: {
            title: "п. Вертеп",
            center: [65.29766, 53.196726],
            zoom: 12,
        },
        krasnobor: {
            title: "п. Краснобор",
            center: [65.29526, 53.288491],
            zoom: 12,
        },
        diur: {
            title: "п. Диюр",
            center: [65.277299, 53.358724],
            zoom: 12,
        },
    };

    const [activeCity, setActiveCity] = useState("shelyayur");
    const [isMapReady, setIsMapReady] = useState(false);

    // 🧠 Инициализация карты (1 раз)
    useEffect(() => {
        let isCanceled = false;

        const initializeMap = () => {
            if (!mapRef.current) return;
            if (!L || typeof L.map !== 'function') {
                return;
            }

            if (isCanceled) return;

            const map = L.map(mapRef.current, {
                center: cities.shelyayur.center,
                zoom: 12,
            });

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);

            mapInstance.current = map;
            setIsMapReady(true);

            markerRef.current = L.marker(cities.shelyayur.center)
                .addTo(mapInstance.current)
                .bindPopup(cities.shelyayur.title);
        };

        initializeMap();

        return () => {
            isCanceled = true;
            mapInstance.current?.remove();
        };
    }, []);

    // 🧠 Переключение города + обновление маркера
    useEffect(() => {
        if (!mapInstance.current || typeof L.marker !== "function") return;

        const city = cities[activeCity];

        mapInstance.current.setView(city.center, city.zoom, {
            animate: true,
        });

        if (markerRef.current) {
            markerRef.current.setLatLng(city.center).setPopupContent(city.title);
        } else {
            markerRef.current = L.marker(city.center)
                .addTo(mapInstance.current)
                .bindPopup(city.title);
        }
    }, [activeCity]);

    return (
        <div className="map-section">
            <div className="map-tabs">
                {Object.entries(cities).map(([key, city]) => (
                    <button
                        key={key}
                        className={activeCity === key ? "active" : ""}
                        onClick={() => setActiveCity(key)}
                    >
                        {city.title}
                    </button>
                ))}
            </div>

            <div
                ref={mapRef}
                className={`map-wrapper ${isMapReady ? "" : "map-wrapper--fallback"}`}
            >
                {!isMapReady && <span>{cities[activeCity].title}</span>}
            </div>
        </div>
    );
}
