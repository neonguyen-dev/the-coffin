## Short description of your project
The Coffin is an application where students can see upcoming pubs in Kistan 2.0 located in KTH Kista. Users will be able to access the app either as guests or admin. Accessing the app as a guest will let the user view upcoming events (upcoming page) as well as get access to the websites of the two different masteries located in Kista (QMISK and TMEIT). By pressing an event, the user will be directed to a page displaying all the details for the event, such as the event name,  a description, the food served, etc. If the selected event has started, the user should also be able to see the current amount of guests to know if there is space for them at the pub.

When initially accessing the app, the user will automatically be logged in as a guest but from the login page, they can get admin access. Since admin access should only be available to a select group of people (the people that are part of the masteries), there will be no sign up page. After a user has logged in as admin, they will be able to create events which will be displayed under the upcoming page. Furthermore, when an event has started, the admin user will be able to keep track of the amount of guests that are at the event. This is done by letting the admin add/remove guests from the event.

## What you have done
The skeleton for the app itself has been established. The essential views, presenters and models to the basic functionality of the app have been created and most of them display desired data. 
A database was also set up via Firebase for us to fetch and store data concerning the pub information, this is where our initial API calls are made concerning the mid-project review. This can be seen now when accessing the “Upcoming” page. The pubs displayed are data fetched via API call. Basic routing was also established, we ensured that the relevant pages are reached upon clicking the displayed buttons, however this remains incomplete as not everything is tied together just yet. 

We’ve also implemented a model “EventModel” which contains most of what will be needed for our project, at least at the moment. 

One of the big parts of this application is authentication. Users should be able to authenticate themselves and thereafter get admin access. This is something that’s been a lot more complicated than anticipated. So far, information gathering about this has been the biggest focus and the implementation has just begun. At the moment, it’s only the authentication of users that’s been implemented in the login page and this is done in the “auth” branch.

## What you still plan to do
A number of things are yet to be implemented, both backend and frontend. That includes connecting a few of the existing views and also creating new ones. Mainly the Admin view is missing. In the admin view, it will include the option to edit information about an upcoming pub, the option to create a new pub that will be added to the upcoming list and also a pub history that displays all the previous pubs and the peak number of guests for that pub. This active number of guests would also ideally like to be used as a sort of counter for guests to have a live view of how many guests are currently present at the pub. 

One thing which hasn’t been decided on yet is how we’re going to keep track of the application state. At the moment, we’re not taking the application state into consideration at all. We could either do this in a more relaxed way, similar to how we did in the DinnerModel, or we could use Redux to do this.

There is still a lot of work left concerning authentication since at the moment, not much has been done. Some of the things left to do are: conditional rendering depending on if a user is signed in or not, restrict certain routes to admins by implementing firebase security rules and add views and presenters for these restricted routes. Furthermore, it would be good to have two security levels for admin users, level 1 being the lowest and level 2 being the highest. The ones with level 2 can alter any event and add events for any mastery and the ones with level 1 can only alter/add events connected to their mastery. This also implies that there is a way of connecting users to a certain mastery. 

Finally, given the time we would like to try implementing “crew-control” functionality of the light and sound systems in our pub, this would be done using the API of the servers we have in-house at Kistan. This could be a nice feature to have for those working the pubs so they don’t have to necessarily have to go to the main computer at the bar to change the lights or volume of the speakers for example. 

## Your project file structure (short description/purpose of each file)
Following the MVP model, we have a folder created holding the relevant modules. Following a similar structure to the previous labs, Presenters and Views are contained in eponymous folders, whereas models are stored separately within the src/app for easy access. 
Furthermore, each page of the app has its own folder containing a page.jsx file. This is part of the reason we decided to use Nextjs for the project, as this framework allows for much more concise routing. 

We have played around with restructuring to make code navigation smoother and concise, all without breaking or having to rewrite any of the actual code functionality. For safety’s sake have we kept this experimentation isolated to the “auth” branch, where we might merge it later on once we’re sure of it.       























This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
