<!--readme.md-->

#YelpCamp
* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each campground has:
* Name
* Image

#Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

#Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

#Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

#Show Page
* Review the RESTful routes we've seen so far (a mapping between HTTP routes and CRUD)
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/templates

        RESTful Routes
    name        url             verb        description
    ====================================================================================
    INDEX       /dogs           GET     Display a list of all dogs
    NEW         /dogs/new       GET     Displays form to make a new dog
    CREATE      /dogs           POST    Add a new dog to DB
    SHOW        /dogs/:id       GET     Shows information about one dog
    EDIT        /dogs/:id/edit  GET     Show edit form for one dog
    UPDATE      /dogs/:id       PUT     Update a particular dog, then redirect somewhere
    DESTROY     /dogs/:id       DELETE  Delete a particular dog, then redirect somewhere
    
    
#Refactor Mongoose Code
* Create a models directory
* Use module.export
* Require everything correctly!

#Add Seeds File (Empties the db and then enters in sample data)
* Add a seeds.js file
* Run the seeds file everytime the server starts

#Add the Comment model
* Make our errors go away!
* Display comments on campground show page

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form
        
        NEW     campgrounds/:id/comments/new    GET
        CREATE  campgrounds/:id/comments        POST

#Style Show Page
* Add sidebar to show page
* Display comments nicely

#Finish Styling Show Page
* Add public directory
* Add custom stylesheet

#Add User Model
* Install all packages needed for auth
* Define User model

#Add User Model
* Configure Passport
* Add register routes
* Add register template

#Add Login
* Add login routes
* Add login template

#Add Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

#Show/Hide Links
* Correctly show/hide auth links in navbar

#Refactor The Routes
* Use Express router to reorganize all routes

#Users & Comments
* Associate users and comments
* Save author's name to a comment 

#Users & Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username + id to newly created campground

#Editing Campgrounds
* Add Method-Override
* Add Edit route for campgrounds
* Add link to Edit page
* Add Update route
* Fix $set problem

#Deleting Campgrounds
* Add Destroy route
* Add Delete button

#Authorization Part 1: Campgrounds
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

#Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

#Deleting Comments
* Add Destroy route
* Add Delete button

Campground Destroy Route: /campgrounds/:id
Comment Destroy Route: /campgrounds/:id/comments/:comment_id

#Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete 
* Refactor Middleware

#Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add Bootstrap alerts to header

#Landing Page Refactor




