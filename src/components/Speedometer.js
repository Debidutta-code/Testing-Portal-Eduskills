// src/components/Speedometer.js
import React from 'react';
import GaugeChart from 'react-gauge-chart';

const Speedometer = ({ mark }) => {
    const normalizedMark = mark / 100;

    return (
        <div style={{ width: '100%' }}>
            <GaugeChart
                id="gauge-chart"
                nrOfLevels={3}
                percent={normalizedMark}
                arcPadding={0.02}
                cornerRadius={3}
                colors={['#FF5F6D', '#FFC371', '#00C49A']}
                animate={true}
                needleColor="black"
                needleBaseColor="#345243"
                textColor="#000000"
            />
        </div>
    );
}

export default Speedometer;
