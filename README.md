# code-challenge-teacher-roster
A challenge for hopeful full stack devs to take home and test their skills

# Rules
So you want to be a Pear Deck dev, do you? Well you must pass this tech
challenge first! Do it in Javascript/React/Node and git (your work is shown
thorugh your commit history). You've got **a week** to work on it (though please
try to keep under the total working time to the ~3 hour mark). Once you've
submitted your code to us thorough a PR on github OR a zipfile, our team will
review your work and get back to you. Should you pass and move onto an
interview with our devs, in which we'll be doing a code review session with
you, so be prepared to help explain/teach your work!
## What we're grading on:
  * First and foremost, your ability to develop a working thing (in javascript)
  * Your coding best practices and the readability of your code
    * Source control is IMPORTANT (please use git)
  * Not necessarily grading, but we're going to be paying attention to how you decide to solve the challenge, so have it reflect your strengths

# The Task
With the recent events of COVID-19, virtual schooling has exploded. We need a
classroom roster, like Google Classroom, to help our teachers with their job.
Here's a link to a more complicated roster example to pull inspiration from: [Google Classroom](https://help.activelylearn.com/hc/en-us/articles/115000568233-Roster-students-with-Google-Classroom#:~:text=Select%20a%20class%20and%20under,will%20be%20highlighted%20in%20red)

We expect at least the *Core Functionality* to be implemented, though *Secondary Fuctionality* should be attempted. *Bonuses* are for bonus points.

Your task is to:
  * Create a responsive, virtual classroom roster for teachers to help manage their virtual classes
    * Core Functionality: The teacher should be able to add and remove students from the roster
    * Secondary Functionality: The rosters should be able to be applied to a classroom type (nameable)
    * Secondary Fucntionality: The teacher should be able to manage multiple class rosters
    * Bonus: Bulk import/export of the roster
    * Bonus: Show the participation percentage of a student
  * Dataset
    * Currently all the data is being converted from static md files using [gray-matter](https://www.npmjs.com/package/gray-matter) and [remark](https://www.npmjs.com/package/remark)
    * Files are defined in their respective directories of `/client/my-teacher-dashboard/classrooms/` and `/client/my-teacher-dashboard/students/`
    * There is currently no working server-side data thing, but the beginnings of one is there if you want to mess with it (it proxies to port 3001, so set that as your server port)

OPTIONAL:
If you want to convert this to use typescript, follow [this tutorial](https://nextjs.org/learn/excel/typescript).

## Setup
  0. Ensure you have `git` installed on your computer
  1. Fork this gitrepo or download the zip onto your computer and `cd` into it with a terminal
  2. Ensure you have npm (6.13.4) and node (v12.14.1) installed onto your computer
    - Tip: It's highly recommended that you install and use `nvm` to manage/install your node versions
    - If you have nvm, type ```nvm use``` in terminal once you're in the root of this project

  - Client-side
    1. cd into `/client/my-teacher-dashboard` and run ```npm install``` to install the required packages to run the client-side code
    2. Check the package.json for more script info, but run ```npm run dev``` to get a local instance running on port *3000*
  - Server-side
    - There is no working server side stuff, but client-side stuff does proxy to it (to port *3001*) if you want to try it out
    1. cd to the root of the project and run ```npm install``` here to get the packages necessary for the server cruft already there
    2. Check the package.json here for more info on the script stuff, but make sure that the port is `3001` and ```npm run start```

# Submitting your solution
  * TODO


# TODO for this README:
  * figure out how we want them to submit this? Their choice
    * github pr
    * github fork then share (how to private)
      * tarball of gitrepo and colleen can upload it to lever
    * gdrive folder share?
  * inmemory instance of mongo instead?
    * mongodb-memory-server (npm package)
  * setup easy bulk import of datasets (via csv)
  * do this code challenge on someone elses machine (to enduse setup is not impossible)
  * add a how to submit section
