# FeedMe Tech Test

The FeedMe tech test comes with a mock data feed service that represents one of the many types of data feeds we have to process everyday at The Stars Group.

The challenge is to consume and transform the proprietary mock data. The proprietary data format will need to be parsed and enriched with the relevant field names and data types. For more information about the feed please read the provider README: https://hub.docker.com/r/tsgtechtest/provider/

## Tasks

We realise everyone has different levels of skill and experience when it comes to development so we have listed different levels of tasks below for you to choose from. If you do not have the time or the knowledge to complete them all then that's ok, we just want to see how you approach the problem and get a feel for how you code.

#### Basic Tasks

- Create an app that connects the provider service on the exposed TCP port
- Successfully connected to the provider service through Node's net module

- Transform the proprietary data format into JSON using the field names and data types defined in the provider /types endpoint
- Using Regex, I split the data by the delimeters and built event, market and outcome objects depending on what type of object was received within the header object.

- Write unit tests
- Jest was used to unit test the app as it is quick and easy to set up. Additionally, its powerful included assertions made testing the app much easier.

#### Intermediate Tasks

- Save the JSON into a NoSQL store with a document per fixture. Each document should contain the event data and the child markets and outcomes for the fixture

#### Additional Tasks

- Implement a front end that displays the hierarchical NoSQL data.
- Successfully created a small frontend in React to display outcome fixtures.
- Create a Dockerfile for your app(s)

## Languages

We use a mixture of coding languages at The Stars Group but for data consumption we mainly use Java (Kotlin) and Node. For this tech test we recommend you use either Java or NodeJS, but if you don't know either or you can show off your skills better in another language then please do so.

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
