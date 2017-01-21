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
- To do List for this particular file:
- [ ] Create build process to compile SASS
- [ ] Refactor CSS to SASS

***
#### JS
app.js is handling routing 
- Currently pointing to /draft-day with /home being commented out (focus has been draft-day functionality)
- Once we are ready to develop other views, we'll need to adjust routing accordingly

##### Controllers
draft.controller.js
- Designated for the draft day view, and holds the bulk of the logic for handling draft data
- This one needs to be refactor real bad. I have over 20 scope variables that are just empty objects, most of them are being used, but I'm sure there are a few that I haven't even touched. **I am very okay with redoing this approach, when I built it quick and dirty this was the readily available idea at the moment**
- I have a function called **fullBench** (notifies the user when their bench is full and disables certain functionality) that has the skeleton of a switch case. This may be how we should approach this and other functions in this entire file :/
- We'll want to refactor our approach to what I did in lines 183 to 205 (looks incredibly messy)
- You'll see that I have a bunch of conditionals starting on line 225 that could possibly be refactored to make it much cleaner
- I have old logic for a sortable list in here as well, but the sorted list is currently non functional and the actual logic is being hanlded on the home.controller.js
- I also have two directives that handled defunct code that I may need to bring back for a different iteration that I want to make

home.controller.js
- All of this code is how I tried to handle a sortable table within a modal. The table works fine, but the table was ill-conceived
- I will want to use this functionality but definitely not in a modal

##### Services
draft.service.js
- My temporary database holding all of the player data (FYI, it doesn't have all of the complete data)

roster.service.js
- This is a future iteration where it will handle requests made to the database of the players

sortplayer.service.js
- This, like the draft service file, are temporary and this one also seems to be redundant 

***
### Views
index.html
- Holding all the usual logic from an Angular web app

home.html
- Future home of any landing page that we would like to have

draftDay.html
- Holds the entire draft day view
- Recently began refactoring this from an quick and dirty approach to actually utilizing ng-repeats properly
- With that refactor though, it dramatically changed how the roster table looks, as in it's not there until you start populating it with players
- I have a lot to do with this one to make it more visually pleasing and help it look like how it did before I refactored the player table into an ng-repeat
- To do list for this particular file:
- [ ] At the very least need to have unique colors for each position
- [ ] Ideally build it out so that it has at least the positions visible

***

### Fantasy Football App 1.0

### Fantasy Football App 2.0

### Creating Branches

### Pull Requests

### Style Guide
