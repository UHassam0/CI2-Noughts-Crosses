# Noughts and Crosses

This is a simple noughts and crosses game where the computer places its token randomly. Making it very easy. The next step would be to add difficulty levels where the computer selects squares to win

## Features

A noughts and crosses game

## Testing and validation

### Bugs





+ says game over - stalemate when board full even if shows a winner


+ I've had to define empty too many times

+ doesn't really seem to work overall

+ not centre aligned on media queries? and font contrast

### Solved Bugs

+ Incorrect win definitions - corrected win definitions - using brackets and corrected one reference to the wrong box. The ands needed containig in brackets as they were mixing with the ors for the different possibilities

+ relies on user to reset board - created reload function - currently only called when game reaches stalemate - will adjust to be called with button. remove for now

+ checks for winner and can call winner for blank spaces - corrected by adding clause to win checks to ensure the box is not empty and there is a win

+ clicking already filled box runs functions and adds aditional computer token - corrected by changing from checking the box is not empty to run functinos to making sure that if the box is not empty do nothing else do the rest of the functions

+ failed to call winner; seems to be that when O/computer is winner it only calls after next turn - correct by calling checkPlayerWin function again after computer turn

+ calls winner before inputting token - solved by removing alerts

+ allows cicking while form/modal is open - change CSS to 'pointer-events: none' for gridboxes then use JS to change the pointer-evetns to all on each of the grid-boxes


### Validators

html validator 

css validator 

 lighthouse results: 
