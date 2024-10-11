import React from 'react';
import Container from '../../components/Container';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const Map = () => {
  const geoUrl = 'https://ismailarilik.com/react-covid-maps/geo.json';

  return (
    <Container designs="!p-1">
      <div className="shadow-lg rounded-xl mt-10">
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </Container>
  );
};

export default Map;
