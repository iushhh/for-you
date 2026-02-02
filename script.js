let currentScreen = 0;
let lineIndex = 0;
let mood = 'hurt';

const screens = document.querySelectorAll('.screen');

function nextScreen() {
  screens[currentScreen].classList.remove('active');
  currentScreen++;
  screens[currentScreen].classList.add('active');
}

function revealLine() {
  const lines = screens[1].querySelectorAll('.line');
  if (lineIndex < lines.length) {
    lines[lineIndex].classList.remove('hidden');
    lineIndex++;
  } else {
    nextScreen();
  }
}

function chooseMood(selected) {
  mood = selected;
  nextScreen();
  showMessage();
}

function showMessage() {
  const textBox = document.getElementById('typedText');
  const finishBtn = document.getElementById('finishBtn');
  const hurtExtras = document.getElementById('hurtExtras');
  const songLink = document.getElementById('songLink');

  const messages = {
    hurt: `
  I know I hurt you.
And I won’t try to justify it.
I just want you to know I see it now.
And I’m truly sorry.

Motle, i know i have fucked up a lot of times, and  everytime i end up hurting you like this and you always choose us everytime but it has always been me whose was selfish and choosing myself and running away from things but not more.
I really know that you have no more patience left and it is justified. I don't want forgiveness but i want to make an impactful apology to you. If i would have been in front of you i couldn't have faced you or looked into your eye.
I feel so guilty and ashamed of myself. I have realised my mistake and i also know that even i won't say things it would be very hard for you to trust me on that. However i have acted with you was due to my ignorant and for granted behaviour
towards you. You are one of a kind and you truly deserve all the love in this world. I really hope i keep loving you the way you deserve. And i promise on everything i have, I have loved you with my whole heart in these 3.5years,
yes i have made mistakes, yes i lacked, yes i took you for granted in every fight, yes i was wrong most of the time but yes i loved you since day 1. I love talking to you not because it is a habit but beacuse i love it, i love seeing you smile
i love seeing you goofy, i love how you look , how you dress, how you speak, how you get offended, how you get irritated, how you get scared, i love every flaw you have, i love every thing about you, i love however you are. 

I stopped communicating myself cause i feared that i have to answer so many questions from you, which was nothing but your concern for me. You were always the sorted one in this relationship and i was confused, ignorant and bitch.
I can't undo the things i have already done and damaged with but i could just APOLOGISE for it. I have so much to say and talk to you by sitting beside you. This is the point i am crying cause i know the damage i have done.
I am doing this with no intention or reciprocation of anything but to make you understand that you i respect you, i have always been, i love you, i care for you, i want to see you happy,
you were never a garden or gudia to me(jiske pass jab mann kiya gaya chale jao). 

I want to say something which i can't say face to face and i only say conclusion part. Here i have time to think and i can put my thoughts into words. I lack in vocabulary that could make someone feel calm and relax due to which 
i feel it frustrates me as to how i am unable to calm you and end up saying hurtful things. This is not me i promise. You always loved way beyond and above than anyone have ever done to me in this world. I really hope someone could 
love you the way you love everyone cause i lacked. You are an amazing human being, you inspire me, i feel warm and safe around you(nosy beh gayi laptop mein thodi si). Meri daya, dhobi, nonsense, i hope the very best for you meri jaan. 
I am always your one call away till death bed and i promise that. I will watch friends, i will watch every disney movie, i will never stop watching taarak mehta. You will always hold a special place in my heart motle. 

Mera ghopluuuuu....... 

    `,

    confused: `
I know things feel unclear right now.
And that confusion didn’t come from nowhere.

You deserved clarity.
You deserved steadiness.
And I’m sorry I didn’t give you that.

[WRITE YOUR FULL MESSAGE HERE]
    `,

    here: `
Thank you for still being here.
I don’t take that lightly.

I know trust isn’t kept by words alone,
and I want to show you, patiently, that I can do better.

[WRITE YOUR FULL MESSAGE HERE]
    `
  };

  // Show full message instantly
  textBox.innerText = messages[mood];

  // Show extras only for "hurt"
  if (mood === 'hurt') {
    hurtExtras.classList.remove('hidden');
    songLink.href = "https://open.spotify.com/track/YOUR_SONG_ID";
  }

  finishBtn.classList.remove('hidden');
}
