# FeedMe Tech Test

The FeedMe tech test comes with a mock data feed service that represents one of the many types of data feeds we have to process everyday at The Stars Group.

The challenge is to consume and transform the proprietary mock data. The proprietary data format will need to be parsed and enriched with the relevant field names and data types. For more information about the feed please read the provider README: https://hub.docker.com/r/tsgtechtest/provider/

## Tasks

We realise everyone has different levels of skill and experience when it comes to development so we have listed different levels of tasks below for you to choose from. If you do not have the time or the knowledge to complete them all then that's ok, we just want to see how you approach the problem and get a feel for how you code.

#### Basic Tasks

- Successfully connected to the provider service through Node's net module and set the project up to use ES6 module syntax to provide a cleaner solution which was nicer to write overall.
- Using Regex, I split the data by the delimeters and built event, market and outcome objects depending on what type of object was received within the header object.
- Jest was used to unit test the app as it is quick and easy to set up and I am familiar with it. Additionally, its powerful included assertions made testing the app much easier. I wrote some tests and outlined others that I would write with more time.

#### Intermediate Tasks

- I have saved the transformed packets in to a Mongo document store. Through using Mongoose I was able to use its abstractions and models to manipulate the data and query it. If this were a larger project, I probably would use MongoDBs native drivers for performance reasons.

#### Additional Tasks

- Successfully created a small frontend in React to display outcome fixtures. It displays as the list data prop updates which I would not do in a production app due to performance and possibilities of crashing the browser. Of course, a queuing system would be ideal in high traffic, event heavy solutions. For styling, I simply took the CSS and classes from the Sky Bet website.

## Running it

- Run the server with docker compose.
- Run the backend server in the backend directory with `npm run dev`
- Run the frontend server in the frontend directory with `yarn start`

## Getting Started

- Install Docker and Docker Compose: https://docs.docker.com/compose
- Start the mock data feed by typing `docker-compose up` in the root of the test directory
- Test mock feed API by opening a browser and navigating to http://localhost:8181/types
- Test mock feed by opening a new terminal and typing `telnet localhost 8282`. You should see a stream of packets.
- If the tests above succeed then you are ready to start coding. If you decide to attempt the Intermediate and Advanced tasks then we suggest adding to or using the services listed in the docker-compose.yml file
- To destroy the test environment you can type `docker-compose down`

## The Deliverable

Replace the contents of this README.md with:

1. A covering note explaining the technology choices you have made.
1. Any instructions required to run your solution and tests in a Linux environment.

Email as an attachment or a link the git bundled repository showing your commit history with all your commits on the master branch:

        git bundle create <anything>.bundle --all

## Equality & Diversity

We consider all candidates equally, fairly and without bias. To that end, we ask that you do not leave any personally identifying information in your submission (such as your name within an author field or file, or in use as test data). We run all VCS-based submissions through an anonymiser before assessment, so that there is no identifying information in the commit history, but this will only remove references in the committing author and email address, not deep in the code submitted.
