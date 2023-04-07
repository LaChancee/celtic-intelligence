import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

export default function MapChart() {
    const [hoveredCountry, setHoveredCountry] = useState(null);

    return (
        <ComposableMap>
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => {
                        const fillColor = geo.properties.ISO_A2 === 'FR' ? 'red' : '#D6D6DA';
                        return (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                onMouseEnter={() => setHoveredCountry(geo.properties.NAME)}
                                onMouseLeave={() => setHoveredCountry(null)}
                                style={{
                                    default: {
                                        fill: fillColor,
                                        outline: 'none',
                                    },
                                    hover: {
                                        fill: '#1A3260',
                                        outline: 'none',
                                    },
                                    pressed: {
                                        fill: '#E42',
                                        outline: 'none',
                                    },
                                }}
                            />
                        );
                    })
                }
            </Geographies>
            {hoveredCountry && (
                <div className="tooltip">
                    <p>{hoveredCountry}</p>
                </div>
            )}
        </ComposableMap>
    );
}
