import React, { useState, useEffect } from 'react';
import axios from "axios";
import './WeatherComponent.css'; // Make sure to create a corresponding CSS file

// Import icons directly
import clearIcon from './assets/sun-icon.png';
import cloudIcon from './assets/cloud.png';
import rainIcon from './assets/rain-icon.png';
import snowIcon from './assets/snow-icon.png';
import thunderstormIcon from './assets/thunderstorm-icon.png';
// import drizzleIcon from './assets/drizzle-icon.png';
import hazeIcon from './assets/haze-icon.png';
// import defaultIcon from './assets/default-icon.png'; // Add this image for a default case

const WeatherComponent = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    // Define a mapping for weather icons based on the weatherData
    const weatherIconMap = {
        'Clear': clearIcon,
        'Clouds': cloudIcon,
        'Rain': rainIcon,
        'Snow': snowIcon,
        'Thunderstorm': thunderstormIcon,
        // 'Drizzle': drizzleIcon,
        'Haze': hazeIcon,
        // Add more mappings as needed
    };

    useEffect(() => {
        // Function to get the user's location
        const getUserLocation = async () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    await fetchData(lat, lon);
                }, () => {
                    console.log("Location access denied. Using default location.");
                    fetchData(49.2827, -123.1207); // Vancouver coordinates as fallback
                });
            } else {
                console.log("Geolocation is not supported by this browser.");
                fetchData(49.2827, -123.1207); // Vancouver coordinates as fallback
            }
        }

        // Function to fetch data from the weather API
        const fetchData = async (lat, lon) => {
            try {
                const apiKey = 'f1148087689390c205a110dcf7d4f1a4'; // Replace with your actual OpenWeather API key
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
                setData(response.data);
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        // Trigger user location fetch
        getUserLocation();
    }, []); // Empty dependency array to fetch only once

    const renderWeatherCard = (weatherData) => {
        // Fetch the icon based on the current weather
        const currentWeather = weatherData.weather[0].main;
        const weatherIcon = weatherIconMap[currentWeather] || null;
          // Get the current time
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        return (
            <div className="weather-card" style={{width:"40%"}}>
            <img src={weatherIcon} alt={currentWeather} className="weather-icon" />
            <div className="weather-info">
                    <h2>{weatherData.main.temp }°C</h2>
                    <p>{weatherData.name}</p>
                    <p>Current {currentTime} </p>
                    {/* <p>Description: {weatherData.weather[0].description}</p> */}
                    {/* <p>Feels like: {weatherData.main.feels_like}°C</p> */}
                </div>
            </div>
        );
    };

    return (
        <div className="weather-component">
            {isLoading ? (
            <div className="weather-card" style={{width:"50%"}}>
            {/* <img src={weatherIcon} alt={currentWeather} className="weather-icon" /> */}
            <div className="weather-info">
                    <h2>Fetching Temperature..</h2>
                    <p>Fetching Location ..</p>
                    <p>Fetching Time </p>
                    {/* <p>Description: {weatherData.weather[0].description}</p> */}
                    {/* <p>Feels like: {weatherData.main.feels_like}°C</p> */}
                </div>
            </div>
        ) : errorMessage ? (
                <p>Error: {errorMessage}</p>
            ) : data ? (
                renderWeatherCard(data)
            ) : (
                <p>Weather data is not available.</p>
            )}
        </div>
    );
};

export default WeatherComponent;
