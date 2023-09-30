# Weather App Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Error Handling](#error-handling)
7. [Unit Selection](#unit-selection)
8. [Geolocation](#geolocation)
9. [Styling](#styling)
10. [Responsive Design](#responsive-design)
11. [Future Improvements](#future-improvements)
<img width="960" alt="Screenshot 2023-09-30 090942" src="https://github.com/polidahiya/weatherapp3.0/assets/121171390/a450fcf8-edec-43be-9ca9-07da0933ba0e">

## 1. Introduction <a name="introduction"></a>
The Weather App is a web-based application that allows users to check the current weather conditions for a specific location. This documentation provides an overview of the app's features, technologies used, installation instructions, and usage guidelines.

## 2. Features <a name="features"></a>
### 2.1 Homepage
- Provides a simple user interface with a search input field and a "Get Weather" button.
- Users can enter a location (e.g., city ) in the search input.

### 2.2 Weather Display
- Displays the current weather conditions for the specified location.
- Includes details such as temperature, humidity, wind speed, and weather description.
- Weather data is fetched from a weather API OpenWeatherMap.

### 2.3 Error Handling
- Implements error handling for cases where the location entered by the user is not found or when there is an issue with the API request.
- Displays user-friendly error messages and provides guidance on how to proceed.

### 2.4 Unit Selection
- Allows users to switch between temperature units , Celsius and Fahrenheit.
- Implementwd a toggle to switch between units, and updates weather data accordingly.

### 2.5 Geolocation (Optional)
- Offers the option to use the user's geolocation to automatically fetch the weather for their current location.
- Requests and handles geolocation permissions appropriately.

### 2.6 Styling
- Applies CSS styles to make the app visually appealing, focusing on layout, color scheme, and readability.

### 2.7 Responsive Design
- Ensures that the app is responsive and functions well on both desktop and mobile devices.
- Tested for usability on various screen sizes.

## 3. Technologies Used <a name="technologies-used"></a>
- **HTML/CSS:** For the structure and styling of the web app.
- **JavaScript:** To handle user interactions and API requests.
- **Weather API (e.g., OpenWeatherMap):** To fetch weather data.
- **Geolocation API (Optional):** For geolocation functionality.
- **Responsive Design Techniques:** To make the app mobile-friendly.

## 4. Installation <a name="installation"></a>
To run the Weather App locally, follow these steps:
1. Clone or download the project from the repository.
2. Open the project folder in a code editor.
3. Ensure you have a valid API key for the weather API you plan to use (e.g., OpenWeatherMap).
4. Create a `.env` file in the project root directory and add your API key as follows:
   ```
   WEATHER_API_KEY=YOUR_API_KEY_HERE
   ```
5. Open the `index.html` file in your web browser.

## 5. Usage <a name="usage"></a>
1. Enter a location (e.g., city or ZIP code) in the search input field.
2. Click the "Get Weather" button to fetch and display the current weather conditions for the specified location.
3. Optionally, use the unit toggle or dropdown to switch between temperature units (Celsius/Fahrenheit).
4. If you have allowed geolocation, you can click a button to fetch weather for your current location.

## 6. Error Handling <a name="error-handling"></a>
- If the entered location is not found, a user-friendly error message will be displayed.
- If there is an issue with the API request, an error message will guide the user on how to proceed.

## 7. Unit Selection <a name="unit-selection"></a>
- Use the provided toggle or dropdown to switch between temperature units.
- Weather data will be updated accordingly.

## 8. Geolocation <a name="geolocation"></a>
- If you allow geolocation, the app will automatically fetch weather data for your current location.

## 9. Styling <a name="styling"></a>
- The app is designed with a visually appealing layout, color scheme, and readability in mind.

## 10. Responsive Design <a name="responsive-design"></a>
- The Weather App is responsive and has been tested on various screen sizes to ensure usability on both desktop and mobile devices.

## 11. Future Improvements <a name="future-improvements"></a>
Some potential future improvements for the Weather App include:
- Allowing users to save favorite locations.
- Providing weather alerts and notifications.
- Adding more weather-related information, such as UV index and air quality.
