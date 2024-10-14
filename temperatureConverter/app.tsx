import React, { Component } from "react";

interface State {
  temperature: number;
  scale: "c" | "f";
}

class TemperatureConverter extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      temperature: 0,
      scale: "c", 
    };
  }

  handleTemperatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const temperature = parseFloat(event.target.value);
    this.setState({ temperature });
  };

  handleScaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const scale = event.target.value as "c" | "f";
    this.setState({ scale });
  };

  convertTemperature = (temperature: number, scale: "c" | "f") => {
    return scale === "c"
      ? (temperature * 9) / 5 + 32 
      : ((temperature - 32) * 5) / 9; 
  };

  render() {
    const { temperature, scale } = this.state;
    const convertedTemperature = this.convertTemperature(
      temperature,
      scale === "c" ? "f" : "c"
    );

    return (
      <div>
        <h1>Temperature Converter</h1>
        <label>
          Temperature:
          <input
            type="number"
            value={temperature}
            onChange={this.handleTemperatureChange}
          />
        </label>
        <label>
          Scale:
          <select value={scale} onChange={this.handleScaleChange}>
            <option value="c">Celsius</option>
            <option value="f">Fahrenheit</option>
          </select>
        </label>
        <h2>
          Converted Temperature: {convertedTemperature.toFixed(2)}°
          {scale === "c" ? "F" : "C"}
        </h2>
      </div>
    );
  }
}

export default TemperatureConverter;
