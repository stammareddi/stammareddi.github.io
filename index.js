window.addEventListener('load', ()=> {// after page is loaded


   


    const sounds = document.querySelectorAll(".sound") // when page load the sound is stored here
    const pads = document.querySelectorAll(".pads div") // the pads from 1 to 6
    const visual = document.querySelector(".visual");
    const info = document.querySelector(".infoV");
    // has the elements 
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3"
    ]
    // stores these ^^^ in a array

    // remove text after click
    
    window.addEventListener("click" ,moveItems);
    var tapM = document.getElementById("tapMusic");
    
    function moveItems(){
        setTimeout(() => {
            
            var elem=  document.getElementById("header");
            tapM.style.display= "none";
            var me =  document.getElementById('me');
            
           
            me.style.visibility = "hidden";
             
            elem.style.animation = 'move 2s ease';
    
            elem.style.bottom = "25%";
    
            const infoData = document.getElementById("infoV");
             
    
              setTimeout(function() {
                infoData.style.visibility = "visible";
                infoData.style.animation = 'slide 2s appear';
                
              },750);

        }, 500);
      

         

          
    }

    
    window.addEventListener('keypress', moveItems);
    

    window.addEventListener('keypress', logKey)

    function logKey(e){
        const bubble = document.createElement('div'); // creates html element
        visual.appendChild(bubble); // attaching bubble child to visual(parent)

        if(e.code === 'KeyA'){
            bubble.style.backgroundColor = "#60d394";
            sounds[0].currentTime = 0;
            sounds[0].play();
            bubble.style.animation = 'jumpGreen 2s ease';
        } else if (e.code == 'KeyS')
        {
            bubble.style.backgroundColor = "#d36060";
            sounds[1].currentTime = 0;
            sounds[1].play();
            bubble.style.animation = 'jumpRed 2s ease';
        } else if (e.code == 'KeyD')
        {
            bubble.style.backgroundColor = "#c060d3";
            sounds[2].currentTime = 0;
            sounds[2].play();
            bubble.style.animation = 'jumpPurple 2s ease';
        }else if (e.code == 'KeyJ')
        {
            bubble.style.backgroundColor = "#d3d160";
            sounds[3].currentTime = 0;
            sounds[3].play();
            bubble.style.animation = 'jumpYellow 2s ease';
        }else if (e.code == 'KeyK')
        {
            bubble.style.backgroundColor = "#6860d3";
            sounds[4].currentTime = 0;
            sounds[4].play();
            bubble.style.animation = 'jumpViolet 2s ease';
        }else if (e.code == 'KeyL')
        {
            bubble.style.backgroundColor =  "#60b2d3";
            sounds[5].currentTime = 0;
            sounds[5].play();
            bubble.style.animation = 'jumpLightBlue 2s ease';
        }
       
    }
   


    // sound 
    pads.forEach((pad,index) =>{ // each pad and index

        pad.addEventListener("click", function(){
            
            sounds[index].currentTime = 0; // allows user to double click on same pad without 
            // waiting for sound to be done
            sounds[index].play();
            createBubbles(index);

            
        });

        
    });


    // function that makes visuals 
    const createBubbles = (index) => {
        const bubble = document.createElement('div'); // creates html element
    visual.appendChild(bubble); // attaching bubble child to visual(parent)
        
        bubble.style.backgroundColor = colors[index]; // set color based on index

        //get index number and based on index number call the that certain 
        // type of bubble animation 

        if(colors[index] == "#60d394")
        {
            bubble.style.animation = 'jumpGreen 2s ease';

        }else if(colors[index] == "#d36060"){

            bubble.style.animation = 'jumpRed 2s ease';

        } else if(colors[index] == "#c060d3"){

            bubble.style.animation = 'jumpPurple 2s ease';

        } else if(colors[index] == "#d3d160"){

            bubble.style.animation = 'jumpYellow 2s ease';

        } else if(colors[index] == "#6860d3"){

            bubble.style.animation = 'jumpViolet 2s ease';

        } else if(colors[index] == "#60b2d3"){

            bubble.style.animation = 'jumpLightBlue 2s ease';
        } 



       // bubble.style.animation = 'jump 1s ease'; // animation = "Name Duration TimingFunction"
        bubble.addEventListener("animationend", function(){
            visual.removeChild(this); // when the animation is done remove it from log so 
            // effiency of the code wont be affected
        });
    }
});