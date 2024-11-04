import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState(null);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const rows = document.querySelectorAll('.letter-row');
        rows.forEach(row => {
            const randomText = generateRandomLetters();
            row.setAttribute('data-text', randomText);
            row.innerHTML = randomText;
        });
    }, []);

    const generateRandomLetters = () => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return Array(100).fill().map(() => alphabet[Math.floor(Math.random() * alphabet.length)]).join(' ');
    };

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleAnalyze = async () => {
        if (inputText.trim() === '') return;

        try {
            const response = await axios.post(
                '/api/proxy',
                { text: inputText },
                { headers: { 'Content-Type': 'application/json' } }
            );

            const label = response.data.label === 'pos' ? 'positive' :
                response.data.label === 'neg' ? 'negative' : 'neutral';

            const analysisResult = { label, text: inputText };
            setResult(label);
            setHistory(prevHistory => [...prevHistory, analysisResult]);

            setInputText('');
        } catch (error) {
            console.error('Error in tone analysis:', error);
            setResult('Error in tone analysis');
        }
    };

    return (
        <div className="app-container">
            <div className="background-letters">
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
                <div className="letter-row"></div>
            </div>

            <div className="left-column">
                <header className="header">Emotional Tone Detector</header>
                <div className="input-container">
                    <textarea
                        className="input-textarea"
                        placeholder="Enter text here..."
                        value={inputText}
                        onChange={handleInputChange}
                    />
                    <button className="analyze-button" onClick={handleAnalyze}>
                        Check
                    </button>
                </div>

                {result && (
                    <div className={`result ${result}`}>
                        Emotional Tone: {result}
                    </div>
                )}
            </div>

            <div className="right-column">
                <div className="history">
                    <h2>Analysis History</h2>
                    <ul>
                        {history.map((item, index) => (
                            <li key={index}>
                                {item.text} - {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
