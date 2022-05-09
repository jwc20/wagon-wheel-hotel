# DEVELOPMENT BRANCH

# Wagon Wheel Hotel

## Entity Relationship Diagram

![Wagon Wheel Hotel ERD](./public/wagon-wheel-hotel-entity-relationship-diagram-new.png)

## Wireframes
![Home Page](./public/wireframes/home.png)
![Rooms Page](./public/wireframes/rooms.png)
![Reviews Page](./public/wireframes/reviews.png)

## Endpoints

### As a guest user, I can:

- Signup
- Log into and out from the site
- View all available rooms
- Request to reserve a room
  - Modify or delete the request
- Create a review for the room
  - Modify or delete the review

### As an admin user, I can:

- Log into and out from the site
- View all rooms (including available and not available)
- Accept or reject request for the room
- See all guests
- See all reservations
- See all reviews

### Directory: 
```
.
├── CONTRIBUTING.md
├── Gemfile
├── Gemfile.lock
├── LICENSE.md
├── Procfile
├── Procfile.dev
├── README.md
├── Rakefile
├── app
│   ├── channels
│   │   └── application_cable
│   │       ├── channel.rb
│   │       └── connection.rb
│   ├── controllers
│   │   ├── application_controller.rb
│   │   ├── concerns
│   │   └── fallback_controller.rb
│   ├── jobs
│   │   └── application_job.rb
│   ├── mailers
│   │   └── application_mailer.rb
│   ├── models
│   │   ├── application_record.rb
│   │   └── concerns
│   └── views
│       └── layouts
│           ├── mailer.html.erb
│           └── mailer.text.erb
├── bin
│   ├── rails
│   ├── rake
│   ├── setup
│   └── spring
├── client
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── reportWebVitals.js
│       └── setupTests.js
├── config
│   ├── application.rb
│   ├── boot.rb
│   ├── cable.yml
│   ├── credentials.yml.enc
│   ├── database.yml
│   ├── environment.rb
│   ├── environments
│   │   ├── development.rb
│   │   ├── production.rb
│   │   └── test.rb
│   ├── initializers
│   │   ├── application_controller_renderer.rb
│   │   ├── backtrace_silencers.rb
│   │   ├── cors.rb
│   │   ├── filter_parameter_logging.rb
│   │   ├── inflections.rb
│   │   ├── mime_types.rb
│   │   └── wrap_parameters.rb
│   ├── locales
│   │   └── en.yml
│   ├── puma.rb
│   ├── routes.rb
│   ├── spring.rb
│   └── storage.yml
├── config.ru
├── db
│   └── seeds.rb
├── lib
│   └── tasks
│       ├── install.rake
│       └── start.rake
├── log
│   └── development.log
├── package.json
├── public
│   ├── robots.txt
│   ├── wagon-wheel-hotel-entity-relationship-diagram.png
│   └── wireframes
│       ├── home.png
│       ├── reviews.png
│       └── rooms.png
├── spec
│   ├── rails_helper.rb
│   └── spec_helper.rb
├── storage
└── tmp
    ├── development_secret.txt
    ├── pids
    │   └── server.pid
    ├── restart.txt
    └── sockets

30 directories, 75 files

```

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Heroku CLI
- Postgresql
