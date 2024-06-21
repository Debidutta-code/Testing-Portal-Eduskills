import React, { useState, useEffect } from 'react';
import './CandidatePerformance.css';
import Speedometer from './Speedometer';

const CandidatePerformance = () => {
    const [testsAttempted, setTestsAttempted] = useState(0);
    const [avgPercentage, setAvgPercentage] = useState(0);
    const [avgTimeSpentPerQuestion, setAvgTimeSpentPerQuestion] = useState(0);
    const [mark, setMark] = useState(0);

    // For demo purposes, we'll set the data statically.
    useEffect(() => {
        setTestsAttempted(5);
        setAvgPercentage(43);
        setAvgTimeSpentPerQuestion(1);
        setMark(43);
    }, []);

    return (
        <div className="candidate-performance-main-component">
            <div className="candidate-performance-child-main-component">
                <div className="candidate-performance-details-main-component">
                    <p>Tests Attempted: <span>{testsAttempted}</span></p>
                    <p>Avg Percentage: <span>{avgPercentage}%</span></p>
                    <p>Avg Time Spent Per Question: <span>{avgTimeSpentPerQuestion} mins</span></p>
                    <p>Institute Rank: <span>#1</span></p>
                    <p>Time of Last Test: <span>17th June 2024, 15:00</span></p>
                </div>
                <div className="candidate-performance-graph-main-component">
                    <Speedometer mark={mark} />
                </div>
            </div>
        </div>
    );
}

export default CandidatePerformance;
