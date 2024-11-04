# Emotional Tone Detector

This is a web application built using React on the frontend and Node.js/Express as a proxy server on the backend. The app analyzes the emotional tone (positive, neutral, or negative) of the input text by sending it to an external sentiment analysis API.

## Features

	•	Real-time Emotional Tone Analysis: Users can enter text, and the app analyzes its emotional tone.
	•	History Tracking: The app maintains a history of all analyzed texts.
	•	Animated Background: Displays a background of animated letters for visual interest.
	•	Stylish UI: Uses modern design principles, with responsive elements and dynamic styling based on the analysis result.

## Technologies Used

	•	Frontend: React, CSS, JavaScript
	•	Backend: Node.js, Express, Axios
	•	External API: Text-processing API for sentiment analysis
	•	Font: Nanum Gothic Coding

## Prerequisites

	•	Node.js and npm installed on your machine.

## Installation

1.	**Clone the repository:**
```
git clone https://github.com/yourusername/emotional-tone-detector.git
cd emotional-tone-detector
```

2.	**Install frontend and backend dependencies:**

```
npm install
```

## Usage

1.	**Start the proxy server:**

In the root directory, run:
```
node src/proxyServer.js
```

This will start the backend server on port 5001, which proxies requests to the external API.

2.	**Run the React frontend:**

In another terminal, run:
```
npm start
```
The React app will start on http://localhost:3000.

3.	**Analyze Text:**

	•	Enter any text in the input box and click “Check.”
	•	The app will analyze the tone and display it below the input box, with colors dynamically changing based on the result.
	•	A history of previous analyses will be displayed on the right side of the screen.

## File Details

	•	App.js: Main React component. Handles input, makes requests to the backend, and displays results.
	•	App.css: Contains all styles for the app, including animations for the background letters.
	•	proxyServer.js: A Node.js/Express server that forwards requests to the sentiment analysis API and handles CORS issues.
	•	HistoryList.js: Renders the history of analyzed texts.

## API Details

The application uses a proxy server to send requests to an external sentiment analysis API at http://text-processing.com/api/sentiment/. The proxy server is hosted at http://localhost:5001 to manage CORS issues.

	•	Endpoint: /analyze-sentiment
	•	Method: POST
	•	Body: { "text": "Your input text here" }
	•	Response: { "label": "positive" | "neutral" | "negative" }

**Example**

To test the API separately, you can use the following command:
```
curl -X POST -H "Content-Type: application/json" -d '{"text":"happy"}' http://localhost:5001/analyze-sentiment
```
This should return a JSON object with the label of the emotional tone.
