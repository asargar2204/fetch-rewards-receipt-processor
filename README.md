# Receipt Processor Project

## Description

This project is a receipt processor application that analyzes receipts assigns points based on specific conditions. The porject is structured into several key components including a controller file, route file, service file, util file, `app.js`, and `middleware.js` for handling various aspects of the application logic.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js version 18.16.0. If you do not have it installed, please download and install it from [Node.js official website](https://nodejs.org/).
- Npm version 9.7.1. It usually comes with Node.js, but make sure you have the correct version.

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1 Clone the repo with command "git clone https://github.com/asargar2204/fetch-rewards-receipt-processor.git "

2 Navigate to the project directory with cd 

3 Install NPM packages with command as "npm install --save"

4 Running the Application

a) Without Docker

To start the application, run the following command in your terminal "npm start"
This will start the server on localhost:3000, or another port if specified in your environment variables.

b) With Docker

If you prefer to use Docker, ensure you have Docker installed and running on your machine. 
Then, build and run the application using Docker with the following commands "docker build -t fetch-rewards . "

Run the application in a with command as "docker run -p 3000:3000 -d fetch-rewards "

This will also start the server on localhost:3000.

## Usage
After starting the application, you can go to the postman and make the request POST and paste "localhost:3000/receipts/process" with json body in the body field and make raw and also change it to JSON.It will produce an id.
To get the points , in postman make the request GET and paste "localhost:3000/receipts/e32eaff7-5b4e-4cd6-9d5f-37b7f2597c8f/points" 

Note - please make sure to put the id which you got after the post request and not the one used in previous link


## Contact
Your Name - Adtya Namdeo Sarhar

Project Link: https://github.com/asargar2204/fetch-rewards-receipt-processor
