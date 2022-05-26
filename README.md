This assignment starts off with javascript that is used to display the current time by using built in JS functions and fetching for the 
day of the week, the month, the date of the month, and the year.
Then it Displays the current hour and minute time undernearth for reference to the calendar hour times.

Using HTML and bootstrap, I created 8 different horizontal divs that hold 3 different columns from left to right is the text, the input box, and the Save button.
Once information is typed into the box and it is allowed to do so, you cannot use boxes of times that have already past, they are greyed out depening on the time of day. If they are available and in the future, then they are green text boxes, and the current hour is highlighted in Red.

The save button text is green and when clicked it turns blue, after clicking, an event listener grabs the text from the input box and set it for local storage with a unique ID matching the text box id. Once in local storage, a for loop that displays all local storage fills in the inner text once reloaded. It inputs the local storage into those input boxes in place of the placeholder when you reload so that your boxes are filled with your previous work.

A screenshot is provided to show when the time was available and the greyed out boxes of the past time.