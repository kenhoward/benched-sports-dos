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
