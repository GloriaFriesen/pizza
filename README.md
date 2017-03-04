# Pizza

#### Pizza Builder, Current Version: 03/03/2017

#### By Gloria Friesen

## Description
This web application allows the user to build a pizza based on size and toppings and adjusts pricing based on selected options.

## Setup/Installation Instructions
* In your web browser of choice, go to: <http://github.com/GloriaFriesen/pizza>
* Clone repository
* In terminal
  * Switch to pizza directory
  * open index.html
* In browser
  * Select size, meat toppings, and veggie toppings
  * Click 'Let's get this pizza cookin' button and see your pizza, including price

###### OR
  * _Go directly to my gh-page in your web browser and start building your pizza: <http://gloriafriesen.github.io/pizza>_


## Specifications

|Behavior|Input|Output|
|:---:|:---:|:---:|
|Creates pizza and returns object|"Make Pizza"|Pizza = {}|
|Creates pizza with price|"Make Pizza"|Pizza = {price: 15}|
|Creates pizza with selected size|"small"|Pizza = {size: "small"}|
|Creates pizza with selected toppings|"pepperoni"|Pizza = {toppings: [pepperoni]}|
|Creates pizza with multiple toppings|"pepperoni, mushrooms"|Pizza = {toppings: [pepperoni, mushrooms]}|
|Adjusts price based on size of pizza|"small"|Pizza = {price: 12, size: "small"}|
|Adjusts price based on topping|"pepperoni"|Pizza = {price: 15.50, topping: [pepperoni]}|
|Adjusts price based on multiple toppings|"pepperoni, mushrooms"|Pizza = {price: 16, topping: [pepperoni, mushrooms]}|
|Adjusts price based on size and toppings|"size: small, toppings: pepperoni, mushrooms"|Pizza = {price: 19, size: large, topping: [pepperoni, mushrooms]}|


## Known Bugs
None that I know of.

## Support and contact details
Questions? Concerns? Suggestions? Reach out to me via github: <https://github.com/GloriaFriesen>.

## Technologies Used
* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _JQuery_

## License
This software is licensed under the MIT license.
Copyright (c) 2017 Gloria Friesen.
