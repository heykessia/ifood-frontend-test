# iFood Frontend Test

Create a web application called Spotifood used to display the preferred playlists from iFood's customers. The web application has only one page:
* A page that lists the featured playlists at Spotify according to some criteria.

## Business rules

* The page is composed of two components:
    * One list of featured playlists
    * One filter component with API filter fields and one local search text input to filter the playlists by "name".
    
* The filter component should be used to filter the elements displayed by the list of featured playlists.
* The API filter fields and their possible values/type should be mounted by consuming this API **[1. Playlists Filters]** (http://www.mocky.io/v2/5a25fade2e0000213aa90776)
* The featured playlists to be displayed should be consumed from this API **[2. See the documentation from Spotify]** (https://developer.spotify.com/web-api/get-list-featured-playlists/)
* Every time the user change any information on the filter component, the list should be refresh accordingly. In case of API filter field change you should recall the playlists API with the filter parameters every time.
* Considering that we live in a chaotic and fast-changing world, the page should refresh its content every 30 seconds, to see if any information from the Spotify APIs had been changed.

## Hints or Constraints

We will use one API from Spotify Web API. You should follow the Spotify guide in order to create a token needed to access Spotify's API.
To mount the API filter fields on the filter component, you **must** consume the API that provides the metadata about the fields (Link 1).
You could use Material UI, Bootstrap or any other toolkit to accelerate your resolution. We will not provide any UI prototype or design.

## Non functional requirements

As this application will be a worldwide success, it must be prepared to be accessible, responsive, fault tolerant and resilient.
We **strongly recommend** using React to build the application.
Also, briefly elaborate on your solution architecture details, choice of patterns and frameworks.
Fork this repository and submit your code.

# Solution

For this challenge React is beeing used. The user must login with Spotify to be able to see the featured playlists and filter them.

## Setup

This project runs with `node 12.19.0` and uses `yarn 1.22.10` as package manager. To start, install the dependencies from the root folder.

### Install dependecies
```
    yarn
```

### Configure env

Creates the `.env` file in the root folder with the same keys that the example bellow and the client id from spotify.

```
REACT_APP_CLIENT_ID=
REACT_APP_AUTH_URL=https://accounts.spotify.com/authorize
REACT_APP_REDIRECT_URL=http://localhost:3000/authentication
REACT_APP_FILTERS_URL=http://www.mocky.io/v2/5a25fade2e0000213aa90776
REACT_APP_FEATURED_URL=https://api.spotify.com/v1/browse/featured-playlists
```

### Run the application

In the project directory, you can run:

```
yarn start
```

### Run the tests

```
yarn test
```

## CI

The CI workflow will run the lint and the tests in every commit or merge on master branch.

