# code-challenge-teacher-roster
A straight forward and generalized code challenge to showcase the skills of candidates applying for the position of Full Stack Engineer

# Rules

At Pear Deck our Development team values the ability to: think through a project methodically, solve problems creatively, balance simplicity with innovation, write clear code that is easy to read and understand, follow sustainable standards and accepted best practices, make well reasoned decisions, and learn and grown through your work.

We've developed this code challenge to allow you, as a candidate, to showcase these abilities through executing a standard piece of work that touches on all the core competencies of a Full Stack Engineer.

### Logistics
  * Please read the exercise in full before planning and beginning your work
  * You are welcome to reach out to ask any questions, gain clarification or gather requirements at any time

### Execution
  * We ask that you execute the challenge in `JavaScript/TypeScript`, `React`, `Node` and `git` as it most closely reflects the work you will do at Pear Deck
  * Your work methodology is shown through your commit history, so please consider this in your work
  * Comments and documentation to mark your decisions, explain your solutions and show your reasoning are exepcted 

### Timing
  * You will have one week, from the time you receive the challenge, to complete and return your work 
  * We ask that you try to spend 3 hours or less on your solution within that week

### Delivery
  * Please return your solution as a zipfile or tarball of your git repo according to the instructions of the recruiter

### Review
  * After you deliver your work, one of our Developers will review your work
  * Should you pass and move onto team interviews with our Development Team there will likely be questions or discussions relating to this work, so please be prepared to help explain/teach your work!

# How this challenge will be judged
  * First and foremost, your ability to develop a working solution using the tech stack specified in the rules
  * Your execution of coding best practices and the readability of your code
  * Source control and work methodology is *important* so please use git, use meaningful commit messages and organize your work accordingly
  * There is not one *correct* solution and so your solution will be unique.  We will be paying attention to how you decide to solve the challenge, so please ensure that it reflect your strengths
  * Explaining your thinking, decision points and solution are critical. Comments and documentation will be reviewed and should provide context and clarity around your completed code.

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
