import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import Container from '../../components/container/Container';
import { useNavigate } from 'react-router-dom';


const Map = () => {
  const navigate = useNavigate()
  const geoUrl = 'https://ismailarilik.com/react-covid-maps/geo.json';

  return (
    <Container designs="max:md-!p-0 mt-10 mb-20">
      <h1
        className="py-5 text-2xl font-semibold text-blue-900
      "
      >
        Choose a Country{' '}
      </h1>
      <div className="border shadow-lg rounded-md md:rounded-xl bg-gray-200 map">
        <ComposableMap>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => navigate(`/detail/${geo.id}`)}
                    style={{
                      default: { fill: 'white', stroke: 'gray' },
                      hover: { fill: 'rgb(66, 101, 196)' },
                      pressed: {
                        fill: 'none',
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </Container>
  );
};

export default Map;
