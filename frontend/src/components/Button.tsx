import React from "react";

interface Props { // Define props that the component will receive
    name: string;
    url: string;
    setData: (data: string) => void; // Define a function that takes a string as an argument and returns void
}

function Button({ name, url, setData }: Props) { // Extract the data from the props

    // Define a function that fetches data from the server
    const handleClick = async () => {
        try {
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.text();
            setData(data) // Call the setData function and pass the data as an argument
            

        } catch (error) {
            console.error('An error occurred', error)
        }
    }

    // Render a button that calls the handleClick function when clicked
    return (
        <div>
            <button onClick={handleClick}>
                {name}
            </button>
        </div>
    )
}

export default Button