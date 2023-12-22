The Coffin

A link to deployed/running app:
https://the-coffin.web.app/ 

A link to your git repository:
https://github.com/neonguyen-dev/the-coffin 


## Short description of your project
The Coffin is a web application where students can view all the upcoming pubs in Kistan 2.0 located in KTH Kista as well as the number of guests that are at a pub. When first accessing the website the user will see the landing page where they are given three options, view the next QMISK event, the next TMEIT event or all of the upcoming events. If they choose one of the first two options they will be redirected to the pub page for the next pub for each respective masterie. On the pub page they will be provided with a short description of the pub (the theme, food served, etc) and if the pub has started they will also be able to view the number of guests at the pub.

Furthermore, the web app serves the purpose of helping the workers keep track of the guests that are at the pub. To get access to this part of the website the user must first log in however. On the log in page a user can either log in or create a new account if they don’t have one. When logged in, if the user navigates to the schedule they will be able to view all pubs ever hosted and this is where they can add new pubs as well. If a pub was created by mistake or with the wrong information, it can be removed by first accessing the pub page and then removing it. When at the schedule page, the user can access the guest list for the currently active pub. Here the user can add and remove guests with regards to if they are members (internals) or externals.


## Project file structure
Following the MVP model, we have a folder created holding the relevant modules. Changes were made to the file structure from the mid project review. It now holds two main folders which are  (protected) and (unprotected). These two files divide the views and presenters in which are accessed by the admin and the guest respectively.  There is also a third folder containing everything about the authentication, which is the login and register page and view. 

Furthermore, each page of the app has its own folder containing a page.jsx file. This is part of the reason we decided to use Nextjs for the project, as this framework allows for much more concise routing. 


	## Setup
Assuming that the user have Nextjs installed, the following steps can be made to run the application:

## Install dependencies 
npm intsall
## Run project
npm run dev

After these steps are completed, the user can now access the application on a local host and do anything. 
