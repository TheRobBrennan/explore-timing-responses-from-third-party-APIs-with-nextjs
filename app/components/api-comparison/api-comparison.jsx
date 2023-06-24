"use client";
import { useState, useEffect } from "react";

export default function APIComparison() {
  const API_ENDPOINTS = ["https://www.espn.com", "https://www.nhl.com"];

  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchAPIResponses = async (apiEndpoints) => {
      const promises = apiEndpoints.map(async (endpoint) => {
        const startTime = performance.now();

        //const res = await fetch(endpoint);
        await fetch(endpoint);

        const endTime = performance.now();

        return {
          endpoint,
          responseTime: endTime - startTime,
        };
      });

      const apiResponses = await Promise.all(promises);
      setResults(apiResponses);
    };

    fetchAPIResponses(API_ENDPOINTS);
  }, []);

  return (
    <div>
      <h1>API Comparison Results</h1>
      &nbsp;
      <p />
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            Endpoint: {result.endpoint}
            <br />
            Response Time: {result.responseTime.toFixed(2)} ms
          </li>
        ))}
      </ul>
    </div>
  );
}
