"use client";
import { useState, useEffect } from "react";
import { title } from '../../constants'

interface APIRequest {
  endpoint: string
}

interface APIResponse {
  endpoint: string
  responseTime: number
  httpStatusCode: number
  res: any
}

export default function APIComparison() {
  const API_REQUESTS: APIRequest[] = [
    { endpoint: "https://www.espn.com" },
    { endpoint: "https://www.nhl.com" }
  ]
  const [results, setResults] = useState<APIResponse[]>([]);

  useEffect(() => {
    const fetchAPIResponses = async (apiEndpoints: APIRequest[]) => {
      const promises = apiEndpoints.map(async (url) => {
        const startTime = performance.now();

        // Simple example - let's see how long it takes each request to complete
        const res = await fetch(url.endpoint).then((res) => res);

        const endTime = performance.now();

        return {
          endpoint: url.endpoint,
          responseTime: endTime - startTime,
          httpStatusCode: res.status,
          res,
        };
      });

      const apiResponses = await Promise.all(promises);
      setResults(apiResponses);
    };

    fetchAPIResponses(API_REQUESTS);
  }, []);

  if (!results || results.length === 0) return null

  return (
    <div>
      <h1>{title}</h1>
      &nbsp;
      <p />
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            Response time is {result.responseTime.toFixed(2)}ms for{" "}
            <a href={result.endpoint} target="_blank" rel="noopener noreferrer">
              {result.endpoint}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
