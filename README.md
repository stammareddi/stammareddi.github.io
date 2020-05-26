

<h1> MusicMaker - Gaming & Personal Web Application </h1>


# Table of Contents

1. [Info](#Info)
2. [Technologies](#Technologies)
3. [Setup](#Setup)
4. [Status](#Status)


# Info

The goal of this project was to create a game where the users clicks on a color to output a unique sound.
This application is a great introductory project to using keyframes in css. 

## Technologies 

Project is created with:

HTML <br>
CSS <br>
JAVASCRIPT <br>
BOOTSTRAP <br>
 

## Setup

At the top of the application it consists of an animated nav bar at the top.

This includes a about me tab and login tab.
The other tab will lead the users using the application to my projects on GitHub. 
My last tab is a to-do list which I created using bootstrap where it’s a responsive webpage following the breakpoints of the screen.

<h4> The Music Maker application </h4>

<i> Index.html <br> 
The html file consisted of div tags where the class was from pad1 to pad6. Each pad consisted of a audio tag which had a unique audio sound. 

<br><i> Index.js <br> 
I used a event listener to store the sounds, pad, visual, and info in constant variables whenever the page loads. Lastly I had a color array which stored colors in hexadecimal. 

Once the user clicks on a pad it would trigger a event listener where it would play the specific sound for that color and it calls the createBubble function.

The createBubbles is a helper function which would create a div element and the passed in parameter will help determine the color of the bubble. Then there is a if statement which will call the animation property based on the color being passed in. Finally once the animation is completed I made sure to add a event listener for whenever the animation ends to remove the bubble created earlier form the log so it won’t use up unwanted memory.
 
On top of that, I was also interested in adding a feature where you can play the sounds based on the key that was pressed. To do this I had an event listener where it would listen for a keypress and return whichever key was pressed on back to the function logKey.

The logKey is a helper function that would create a bubble and based on the certain key pressed it would go ahead and play the sound with the animation. Lastly I made sure to delete the animated bubbles ones the animation ended.

<br> <i> Style.css <br> 
This website was designed using the border-box style property. My keyframes were labled from jumpGreen up to the sixth color which was jumpRed. Each keyframe had a unique animation because the created bubble had to come from the color clicked on rather than one start and end position for the bubbles.



#### Status 

Working towards implementing bootstrap on the music maker application, while continuisuly working on creating 
my about me and a login page.
