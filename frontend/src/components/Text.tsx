import React from "react";

interface Props { // Define props that the component will receive
    data: string;
}

function Text({ data }: Props) { // Extract the data from the props

    // Pretty print the data
    let prettyprint; 

    try {
        prettyprint = JSON.parse(data) // Convert the data to a JSON object
    } catch (error) {
        prettyprint = data // If parsing fails, render the data as is
    }
    
    // Convert the JSON object back to a string and format it with tabs
    return (
        <p>
            {JSON.stringify(prettyprint, null, "\t")}
        </p>
    )
}

export default Text