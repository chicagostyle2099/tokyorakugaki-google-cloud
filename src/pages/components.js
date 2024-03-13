import React, { useState, useEffect } from "react";
import { getCompletion } from "./api";

function MyComponent() {
  const [completion, setCompletion] = useState(null); // Initialize as null

  useEffect(() => {
    async function fetchData() {
      try {
        const completionData = await getCompletion("Once upon a time,", 0);
        if (completionData === null) {
          console.log("completionData is null");
        }
        setCompletion(completionData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  // Handle different states of the completion data
  if (completion === null) {
    return <div>Loading...</div>; // Render a loading indicator while data is being fetched
  } else {
    return (
      <div>
        <h1>Generated Completion:</h1>
        <p>{completion}</p>
      </div>
    );
  }
}

export default MyComponent;
