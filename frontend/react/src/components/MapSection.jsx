import React, { useEffect, useRef, useState } from "react";

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
        if (!window.DG || typeof window.DG.map !== "function") {
            setIsMapReady(false);
            return;
        }

        mapInstance.current = window.DG.map(mapRef.current, {
            center: cities.shelyayur.center,
            zoom: 12,
        });
        setIsMapReady(true);

        // первая метка
        markerRef.current = window.DG.marker(cities.shelyayur.center)
            .addTo(mapInstance.current)
            .bindPopup(cities.shelyayur.title);

        return () => mapInstance.current?.remove();
    }, []);

    // 🧠 Переключение города + обновление маркера
    useEffect(() => {
        if (!mapInstance.current || !window.DG || typeof window.DG.marker !== "function") return;

        const city = cities[activeCity];

        // переместить карту
        mapInstance.current.setView(city.center, city.zoom, {
            animate: true,
        });

        // удалить старый маркер
        if (markerRef.current) {
            mapInstance.current.removeLayer(markerRef.current);
        }

        // создать новый маркер
        markerRef.current = window.DG.marker(city.center)
            .addTo(mapInstance.current)
            .bindPopup(city.title);

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
