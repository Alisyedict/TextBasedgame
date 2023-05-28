let readline = require('readline');


function startGame() {
  console.log("WELCOME TO YOUR DOOM");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("ENTER YOUR NAME: ", (playerName) => {
    console.log(`WELCOME, ${playerName}!`);

    rl.question("Choose a Loadout? \n 1. Shotgun \n 2. Sniper \n 3. Handgun \n 4. Machine Gun \n",   (choice) => {
      if ( choice === "1") {
        console.log("YOU HAVE CHOSEN THE SHOTGUN!");
        console.log("GOOD LUCK RELOADING!!!");
      } else if (choice === "2") {
        console.log("YOU HAVE CHOSEN THE SNIPER!");
        console.log("THAT HAS NO AMMO, GOOD JOB!!!");
      } else if (choice === "3") {
        console.log("YOU HAVE CHOSEN THE HANDGUN!");
        console.log("EXCELLENT CHOICE!");
      } else if (choice === "4") {
        console.log("YOU HAVE CHOSEN THE MACHINE GUN!");
        console.log("YOU'RE GONNA RUN WITH THIS WEAPON???");
      }

      rl.question("Choose Location? \n  1. City \n  2. Hospital \n  3. Abandoned Building \n", (location) => {
        if (location === "1") {
          console.log("You have chosen the City.");
        } else if (location === "2") {
          console.log("You have chosen the Hospital.");
        } else if (location === "3") {
          console.log("You have chosen the Abandoned Building.");
          console.log("Do you even wanna survive? .");
        }

        rl.question("Your path has been blocked by a zombie, do you: \n 1. attack \n 2. flee the scene \n ", (choice) => {
          if (choice === "1") {
            console.log("YOU HAVE CHOSEN TO ATTACK!");
            console.log("Which leads to you using ammo and because of the sound, more zombies are coming YOUR WAY!!!");
            console.log("While running away, you find a barrel with ammo and look what's in it... SNIPER AMMO!");
            console.log("Imagine if you had chosen the sniper right now...");
          } else if (choice === "2") {
            console.log("YOU HAVE CHOSEN TO FLEE!");
            console.log("While running, you fell down and lost a shoe (You're not Cinderella). STAND UP!");
            console.log("Zombies are getting closer...");

            console.log("YOU GET BITTEN!!!");
            console.log("GAME OVER");
            rl.close();
            return;
          }

          rl.question("You hide in a shed and find another person, but he's starting to show weird behavior: \n 1. Do you shoot him  \n 2. Help him?\n 3. Give him the Gun \n 4. Give em to the zombies as a present \n", (choice) => {
            if (choice === "1") {
              console.log("YOU CHOOSE TO SHOOT HIM and find out he was Infected!");
              console.log("Oh yeah, forgot to mention, as YOU FIRED A SHOT, A LOT OF ZOMBIES ARE COMING!!!!");
              console.log("As you escape the shed, you see a light from above!!!");
              console.log("A helicopter is throwing a rope to you.");
              console.log("YOU JUMP TO IT LIKE JOHN WICK AND FLY TO SAFETY");
              console.log("GOOD JOB, YOU SURVIVED!!!");
            } else if (choice === "2") {
              console.log("He turns out to be infected.");
              console.log("HE BITES YOU.");
              console.log("GAME OVER.");
            } else if (choice === "3") {
              console.log("WHY??????????.");            
              console.log("GAME OVER.");
            } else if (choice === "4") {
              console.log("You feel guilty about sending him as a Pinata but don't see the zombie behind you.");
              console.log("HE BITES YOU.");
              console.log("GAME OVER.");
            }
            console.log("|Made By: |Ali|Oliver|Sade|");
            rl.close();
             });
            });
            });
           });
           });
             } 

startGame();
