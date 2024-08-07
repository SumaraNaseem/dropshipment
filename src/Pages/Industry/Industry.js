import React from 'react'
import './Industry.css'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

  const salesData = [
    { ISO_A3: 'USA', sales: 500 },
    { ISO_A3: 'CHN', sales: 300 },
    { ISO_A3: 'RUS', sales: 200 },
    // Add more sales data here
  ];  

const Industry = () => {
  return (
    <div className='industry'>
        <div className='head'>
            <h1>Start Selling In A</h1>
            <h1 className='head2'>Rapidly Growing Industry</h1>
        </div>
        <div className="map">
            <ComposableMap>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                        const countrySales = salesData.find(
                            (country) => country.ISO_A3 === geo.properties.ISO_A3
                        );
                        return (
                            <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={countrySales ? '#FF5733' : '#DDD'}
                            />
                        );
                        })
                    }
                </Geographies>
            </ComposableMap>
        </div>
    </div>
  )
}

export default Industry