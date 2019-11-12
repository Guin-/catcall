# Catcall
## Description
Cat Call is a responsive web app that helps users search for adoptable cats by their location.
It provides important information regarding each cat and the contact information for
the shelter so that you may move forward with the adoption process.
All data is provided by the Petfinder API.
It was built with Django, React, Redux, and React Bootstrap.


## Local Setup
### Setup
Create a python3 virtual environment, and sign up for a petfinder api key and secret [here](https://www.petfinder.com/developers/) . Then clone the project and follow the steps below to get set up locally.

1. Install python packages
    `$ pip install -r requirements.txt`

2. Install frontend dependencies
    `$ npm install`

3. Create environment variables for your `SECRET_KEY`, `PETFINDER_API_KEY`, and `PETFINDER_API_SECRET`

4. Initial frontend build
    `$ npm run build`

### Development

1. From the backend directory start the backend dev server at localhost:8000
   `$ ./manage.py runserver`

2. From the root directory run
    `$ npm run start`

## Features
- User can enter a zipcode to find adoptable cats near that zipcode
- User will see a list of adoptable cats in an infinite scroll grid of cat cards
- User can click on a cat card and be taken to the detail page
- User can see cat detail data including the shelters contact information, and tags which describe health & behavior, if the cat prefers a home with or without other cats, dogs, or children, and general characteristics.

## Architecture
### Frontend Architecture
- React for UI components
- Redux using react-redux for frontend state management
- react-router for frontend routes
- React-Bootstrap and native CSS for styling
- See `frontend-architecture.md` for details of routes, containers, components, and redux architecture

### Backend Architecture
- Django project served by gunicorn
- Minimal template for serving initial page load
- Calls to api are proxied to petfinder api using `django-proxy` swapping out the domain.
- Petfinder response goes straight back to browser and frontend handles data manipulation

### Deployment
- Deployed on Heroku on heroku-16 stack using python and node buildbacks

## Problems Encountered & Solutions
### V1 of Petfinder API
- V1 of the Petfinder API had an option to return JSON, however, it was primarily built to work with XML. The data returned in JSON responses had numerous nested meaningless `$t` as keys. I wrote a function to clean the data of these to return a response that would be easier to work with.
- V1 of the Petfinder API did not have standard error codes. I wrote some custom error handling to make sure that errors would actually be displayed in an error component in the frontend instead of being swallowed and having the application break without any notification to the user.
### V2 of Petfinder API rewrite
- I refactored my code to work with V2 of the Petfinder API. This version solved the problems above so I got to delete code and remove complexity from my app. I added code to handle authenticating to the API with an access token. I also had to refactor my components to work with some changes in the data shape and availability returned by the new API calls.

