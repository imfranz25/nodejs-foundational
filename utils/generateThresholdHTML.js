const generateThresholdHTML = ({ sensorData, threshold }) => {
  return `
    <h4>Sensor data:</h4>
    <p>Temperature (Celsius): ${sensorData.temperature_celsius}</p>
    <p>Humidity (Percent): ${sensorData.humidity_percent}</p>
    <p>Pressure (HPA): ${sensorData.pressure_hpa}</p>

    <br />

    <h4>Remarks:</h4>
    ${threshold}
  `;
};

module.exports = generateThresholdHTML;
