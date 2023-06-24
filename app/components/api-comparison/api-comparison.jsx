"use client";
import { useState, useEffect } from "react";

export default function APIComparison() {
  const API_ENDPOINTS = ["https://www.espn.com", "https://www.nhl.com"];
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchAPIResponses = async (apiEndpoints) => {
      const promises = apiEndpoints.map(async (endpoint) => {
        const startTime = performance.now();

        // Let's see how long our request takes to complete
        const res = await fetch(endpoint).then((res) => res);

        const endTime = performance.now();

        return {
          endpoint,
          responseTimeInMS: endTime - startTime,
          statusCode: res.statusCode,
          meta: res,
        };
      });

      const apiResponses = await Promise.all(promises);
      setResults(apiResponses);
    };

    fetchAPIResponses(API_ENDPOINTS);
  }, []);

  return (
    <div>
      <h1>API Performance</h1>
      &nbsp;
      <p />
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            Response time is {result.responseTimeInMS.toFixed(2)}ms for{" "}
            <a href={result.endpoint} target="_blank">
              {result.endpoint}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
