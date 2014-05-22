---
layout: main
title: Using json with Ember.js and Rails
---
## Create rails model
rails g model market name:string

## Edit the Migration File
It's always good to add, up and down blocks in case you need to undo something

## Migration
rake db:migrate

## Test it in the ruby console
rails c

Market.all

## Add Markets controller
rails g controller market

## Test it
curl http://localhost:3000/markets.json

## Add Ember routes in router.js

## Use jquery to get json data from rails

## Use handlbars to display data in static page
