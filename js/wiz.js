
const cards =
      [{ limit: 1,
         cards: [
           { html: "Welcome to Magic School!<br>What will you choose as your major: Accountancy, or Politics?<p>Choose carefully!<br><br><br>",
             left: { hint: "Accounts",
                     preview: "Accountancy, the deepest of all arcana",
                     reward: { evil: +10 },
                     card: "You have elected to become a Magical Accountant! This is one of the most mysterious specializations our craft has to offer.<br><br><br>" },
             right: { hint: "Politics",
                      preview: "Politics, the domain of the true artiste",
                      card: "You have elected to become a Magical Accountant! This is one of the most mysterious specializations our craft has to offer.<br><br><br>" 
                      reward: { cash: -10, spells: +10, evil: +10 } } }
         ] },
       { html: 'Game Over', priority: -1 }]

const themeCards =
      [{ limit: 1,
         cards: [
           "An opportunity presents itself to become the school drug dealer.",
           "Bright red graffiti across the bike sheds proclaims that elves suck. Crosby is furious; Jennings, intrigued. Will you help solve this magical crime?",
           "'Would you lot like to learn how to ride a were-horse?' --- Crosby addresses the class one morning.",
           "You arrive early for registration to find your form-master in his underpants, tied to a silver chair and sobbing uncontrollably. Jennings begs you to listen to his plight; you could just walk away.",
           "Your best friend suggests that you start a school newspaper for wizards.",
           "You notice that your peers like to place bets on astrological conjunctions. It occurs to you to start a gambling operation.",
           "In order to impress your crush, you conjure forth the evil from within you as a nameless shadow.",
           "Your classmate Jennings has invented a new cryptocurrency powered by actual dwarf miners.",
           "It's about this time that many entrepreneurial magical students form their own startup.",
           "You're surprised by a spot quiz on ethical use of glamors. Will you cheat?",
           "Rumors are the constant curse of magic school. Jennings whispers that your doppelganger has been spotted in the Art wing. If true, then you must destroy it!",
           "A giant fatberg has been discovered in the sewers underneath the school. Jennings nudges you: you could use magic to clear it!",
           "Your English teacher offers to take your class on a tour of the Infinite Library.",
           "You are offered the chance to do a rotation in domination and control with Professor Prospero.",
           "A NASA rover will shortly land on Mars, threatening to reveal the location of your Burning Man-themed senior prom. Will you use magic to destroy it?",
         ] },
       { html: 'Game Over', priority: -1 }]
