# UserInvites


# README

- Ruby version "3.0.1" using `rvm install "ruby-3.0.1"` 

- Rails version "7.0.1"
  
- Bundler gem version > 2

- System dependencies
  
  Requires node >14, yarn


# How to run the application

  Unzip the zip file - UserInvites.zip

  Execute `nvm use 14`, bundle install`, `npm i`, `yarn`
  
  create the db using `rails db:setup` or `rails db:create` & `rails db:migrate`
  
  Execute `foreman start -f Procfile.dev` Hit the url - `http://localhost:3000/`

  Attached FlowSnaps zip for the application workflow.


 # How to use API's
  
  Install curl for accessing the API's

  Signup API:
  curl -XPOST -H "Content-Type: application/json" -d '{ "user": { "email": "z@z.com", "password": "123456" } }' http://localhost:3000/api/v1/users

  Login API:
  curl -XPOST -H "Content-Type: application/json" -d '{ "user": { "email": "z@z.com", "password": "123456" } }' http://localhost:3000/api/v1/users/sign_in

  Logout API:
  curl -XDELETE -H "Content-Type: application/json" -d '{ "user": { "email": "z@z.com", "password": "123456" } }' http://localhost:3000/api/v1/users/sign_out
