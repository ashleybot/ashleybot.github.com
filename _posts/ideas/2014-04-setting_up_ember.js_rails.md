---
layout: main
title: Setting Up Ember.js and Rails
---
My learning plan for 2014 includes learning about all the latest tools and frameworks a la mode.

Currently, I'm checkout out Ember.js. It's a javascript MV framework. You can have well organized and DRY code, and not fool around with page postbacks. It's pretty fantastic.

For a new project I'm working on, I wanted to use Rails as the backend, and Ember on the frontend.

It's all for ease of development, but setting it up isn't as straightforward as I'd like.

At first, I tried to incorporate Ember into an existing project, but it wasn't working. I now know that turbolinks was my problem.

So, if you plan on using ember within rails remove turbolinks!

* Add the ember-rails gem
* Set up a "static page" for ember, and handlebars
* Set your rails root to the static page
* Use jqeury to call your rail's actions and return json to your ember frontend models

## Create a new Rails application
rails new your_app_name

## Remove Turbolinks
Remove the gem 'turbolinks' line from your Gemfile.
Remove the //= require turbolinks from your app/assets/javascripts/application.js.
Remove the two "data-turbolinks-track" => true hash key/value pairs from your app/views/layouts/application.html.erb.

## Commend out coffescript, for simplicity

## Add Ember-Rails gem
bundle install

## Configure Ember
Add development to application, config.ember.variant = :development
http://blog.dcxn.com/2013/03/23/getting-started-with-ember-js-on-rails/

## Install Ember source files
rails g ember:install

## Add basic Ember application structure
rails g ember:bootstrap

## Add static controller, and set rails route
rails g controller static index

TODO: Review what was created
