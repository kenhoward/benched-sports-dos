# benched-sports-dos

### How to Get Started

1. git clone
2. cd benched-sports-dos
3. npm i
4. npm start
5. server is listening on port 8787

### Getting Around

Only folder to look at is public (everything else is still in development)

```public/
├── css/
│   └── main.css
├── images/
├── index.html
├── js/
│   ├── app.js
│   ├── controllers/
│   │   ├── draft.controller.js
│   │   └── home.controller.js
│   ├── services/
│   │   ├── draft.service.js
│   │   ├── roster.service.js
│   │   └── sortplayer.service.js
│   └── bootstrap.min.js
└── views/
    ├── draftDay.html
    └── home.html
```
***
#### CSS
Need to move over to SASS to help make things cleaner
- [ ] Create build process to compile SASS
- [ ] Refactor CSS to SASS

#### JS
app.js is handling routing 
- Currently pointing to /draft-day with /home being commented out (focus has been draft-day functionality)
- Once we are ready to develop other views, we'll need to adjust routing accordingly

##### Controllers
draft.controller.js
- Designated for the draft day view, and holds the bulk of the logic for handling draft data
- This one needs to be refactor real bad. I have over 20 scope variables that are just empty objects, most of them are being used, but I'm sure there are a few that I haven't even touched. **I am very okay with redoing this approach, when I built it quick and dirty this was the readily available idea at the moment.**
- I have a function called **fullBench** (notifies the user when their bench is full and disables certain functionality) that has the skeleton of a switch case. This may be how we should approach this and other functions in this entire file :/
- We'll want to refactor our approach to what I did in lines 183 to 205 (looks incredibly messy)
- You'll see that I have a bunch of conditionals starting on line 225 that could possibly be refactored to make it much cleaner
- I have my logic for a sortable list in here as well, but the sorted list is currently non functional (design-wise)
- I also have two directives that handledd

##### Services
home.controller.js

# TO BE COMPLETED
- explain how fantasy football app version 1.0 worked
- explain what are the many features of 2.0
- style guide suggestions (naming conventions)
- explaining all files
- how to handle future pull requests
