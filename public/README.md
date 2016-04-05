Getty Images Search Engine
Create an account

Go to https://developer.gettyimages.com/login/
Create an account.

Be sure to select this option when signing up:
image

Read the Documentation

Link to the Docs

Goal

You are building an interface which will search Getty Images for a particular set of photos by keyword (or more) and then display the images to the user. Your interface must at the very minimum meet these requirements:

A way to take user input.
A button to start the search
Once you receive the response from the server with the image urls, display the images on the web app.
Caveats

As you read in the Docs (you did read the docs, right?), you will need to craft a custom header for your API KEY with Vanilla Javascript XHR request.
Stretch Goals

Add the ability to store the history of search terms. Consider a side-menu with the search terms and when those words are clicked it will trigger a new request to gettyimages and display the results to the interface.
Uber World Boss Spawn When you reload the page, the history is gone! How do you save your history? warning: we did not cover this in class yet, in the mood for an adventure?
Can you think of a way to use this in conjuction with the OpenWeather API?
Ahem if the forecast for the day in "Cloudy" then fire off a request to gettyimages for "cloudy" images (or videos).
Resources

http://slides.com/sgnl/xhr#/
GettyImages documentation