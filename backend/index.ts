import express, { Request, Response } from "express"
import cors from "cors"
import { Info } from "./Info"


const app = express() // create express app
const port = 5000 // Using port 5000

app.use(cors()) // enable cors 
app.use(express.json()) // enable json parsing


// Create an endpoint for the Amazon status
app.get("/v1/amazon-status", (req: Request, res: Response) => {
    let start = Date.now(); // Getting the ccurrent time in milliseconds which will be used to calculate the time taken to get a response

    fetch("https://www.amazon.com/") // Make HTTP request to Amazon, getting the Amazon Homepage
        .then((resp) => { // Once the request is complete, get the response
            let timeTaken = Date.now() - start; // Calculate the time taken to get a response by subtracting the current time from the start time

            // Create a new Info object with the response URL, status code, time taken, and the current time
            const info = new Info(
                resp.url,
                resp.status,
                timeTaken,
                Date.now()
            )
            return info
        })
        .then((body) => { // Once the Info object is created, return it as the response
            res.json(body) 
        })
        .catch((err) => { // If there is an error, return the error message
            res.json({
                message: err.text()
            })
        })
    
})

// Create an endpoint for the Google status
app.get("/v1/google-status", (req: Request, res: Response) => {
    let start = Date.now();

    fetch("https://www.google.com/")
        .then((resp) => {
            let timeTaken = Date.now() - start;
            const info = new Info(
                resp.url,
                resp.status,
                timeTaken,
                Date.now()
            )
            return info
        })
        .then((body) => {
            res.json(body)
        })
        .catch((err) => {
            res.json({
                message: err.text()
            })
        })
})

// Create an endpoint for the All status
app.get("/v1/all-status", (req: Request, res: Response) => {
    let start = Date.now();
    let results = [] // Create an empty array to store the results of the requests

    fetch("https://www.amazon.com/")
        .then((resp) => {
            let timeTaken = Date.now() - start;
            const info = new Info(
                resp.url,
                resp.status,
                timeTaken,
                Date.now()
            )
            results.push(info) // Add the Amazon response to the results array
        })
        .then(() => {
            fetch("https://www.google.com/")
        .then((resp) => {
            let timeTaken = Date.now() - start;
            const info = new Info(
                resp.url,
                resp.status,
                timeTaken,
                Date.now()
            )
            results.push(info) // Add the Google response to the results array
            return results // Return the results array
        })
        .then((body) => {
            res.json(body)
        })
        .catch((err) => {
            res.json({
                message: err.text()
            })
        })
        })

})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})