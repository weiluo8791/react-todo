# Author: Wei Qi Luo
### Submitted Thur May 30th, 2019

-------------------

# Install instructions

Clone repository

    $ git clone git@github.com:weiluo8791/react-todo.git

Install dependencies

    $ cd react-todo
    $ npm install

Build one-time (webpack everything into script.js)

    $ npm run build

Build continuously (webpack and continously watch for change)

    $ npm run watch

Two way running it 

    1. $ npm run serve 
      After serve is running point the browser to http://localhost:5000
2. Just load [index.html](/index.html) from the browser


# Notes

## Complete todo item
When you click on an added item it will mark the item completed and the item will display with gray color. You can also toggle between complete and incomplete

## Delete todo item
When you click the trash bin on the right of an item it will delete the item from the view as well as from presistent data. You can delete either complete or incomplete item.

## Presistent Data
This app use the following to get presistent operation

    1 Axios - Promise based HTTP client for the browser and node.js 
    2 mockAPi - mock up APIs
    
use https://www.mockapi.io/docs for API GET, POST, PUT and DELETE so any todo item that you added, completed or deleted will be presistent the next time you run the application. 

https://5cef6b755660c40014948c42.mockapi.io/api/v1/todo will show you the current todo item and their status

Word of caution because mockapi.io is a learning and development environment sometime the ajax reponse might be slow coming back thus it might adding delay on the display for show, add and delete todo item.     


-------------------

# Assessment

The goal of this project is to use ReactJS capabilities and its paradigms by creating a TODO app. This app should be able to add TODOs and track the number of total TODOs as well as the number of unchecked TODOs.

This exercise must be completed within a week. The fully functional code must be uploaded to github. The work must be yours, no other person should be directly or indirectly involved.  After you complete the work please provide us the git hub link where we can download and assess the work.

## Instructions
Inside of [index.html](/index.html), you'll find some starter HTML. You shouldn't need to edit this file at all. Open this file on your computer into any browser to run the project. Make sure that [script.js](/script.js) and [styles.css](/styles.css)
are in the same local directory. With the file open in your browser, you should see a `New TODO` button, which `alert`s when clicked. Your goal will be to get this button to create new TODOs.

Inside [styles.css](/styles.css), you'll find some pre-written CSS for your convenience. You shouldn't need to edit this file at all, but feel free to if desired.

[script.js](/script.js) is where most of your work will be done. There is some starter code for you in the file. The `classNames` variable can be used to link any elements you create in js with the associated CSS class names. The next 3 lines of code are the HTML elements that you'll need to update when creating new
TODOs. Lastly, you'll see the `addTodo()` function. This gets executed when creating a new TODO. You should replace the `alert()` call with logic to create new TODOs.
Reminder: The above work needs to be done using ReactJS


Good luck!

## Challenge! (Not Required)
If you finish early and are up for a challenge, try adding delete functionality. This should be in the form of a button within each TODO that removes that TODO when clicked.
