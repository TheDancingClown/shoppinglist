# Shopping List

A simple project to learn to implement Redux Toolkit within React Native.    
In order to save food wastage, the app will allow a user to enter an ingredient and the list of recipes will dynamically change as the search is narrowed. Meals can be added to a shopping list and a second screen will list all combined ingredients common to the added meals.    

![recipesScreenshot](./src/assets/images/recipesScreenshot.png)

## Features

* The search function is case insensitive and will return partial matches - typing 'ing' will return meals containg ingredients 'spring onions', 'ginger' etc.
* Meals can only be added to the shopping list once and an alert will show if attempted to add twice.
* Naigation is via the bottom tab bar and can easily switch between the list of recipes and the shopping list. The shopping list icon badge shows how many meals have been added.
* When a meal is added, common ingredients are added together within the shopping list.
* Meals can be removed on the shopping list screen and the ingredients list updates accordingly.
* App is locked in portrait mode.

## Redux

State was orginally passed between screen via props, however when attempting to also pass functions between screens I decided that functionality would be improved via the use of Redux.  Redux Toolkit was used for ease of learning.    
Two variables are stored - the list of meals added and the combined list of ingredients. The reducer actions for these states are all contained within the shppingListSlice.    
When the current state is needed to be retrieved to populate lists or update the badge count, useSelector is called. When state is altered, for instance when adding or removing meals, useDispatch is called. Once the redux store has been set up, it is much easier and cleaner for state management than passing around props between screens.

## Other dependencies added

Expo    
React navigation bottom tabs    
React native vector icons

## Further updates

It has only been simulated on iOS so far, so checks are needed for android compatability with fonts, icons and screen sizes.    
Modal views - click on a recipe thumbnail and see greater detail. List of ingredients, instructions, larger image.  
Ability to add new recipes - currently hardcoded and manually typed into js file. 
Change styling of shopping list - especially list of meals at top. Remove button hard to press on smaller screens.    

![ingredientsScreenshot](./src/assets/images/ingredientsScreenshot.png)
