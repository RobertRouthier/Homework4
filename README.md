# Homework4

Firstly I set up both HTML pages for frame and applied some CSS styling to both pages;

Once frame and styling were up I began to work out all functions required for page with Javascript;

On my javascript page I first created all of my global variables;

Once variables were set, I created my click event to start the quiz game. In this event there are remove and add class features and calling the start of the game and my for loop of questions;

The start of the game starts the timer, adds hidden attribute and removes hidden attribute of the questions and the option of answers;

I set the questions and answers for the for loop;

I dynamically created HTML elements in createQuestion function to list each question, and set logic for questions to run through on click;

I set and if/else statement for the end of the question loop;

Once the game ends in quizEnd function I removed attributes for the submission section to enter contestant name, and hid the questions;

Set logic for remainder of time to equal score and set score to store in local storage, once score and name are submitted the page redirects to my score.html page;

On my score.js page I set logic to post score dynamically creating a ol html element;

I also included logic to clear local storage scores via button click on page;