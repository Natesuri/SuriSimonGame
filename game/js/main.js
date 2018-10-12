
const colorsAvail = [
  {
    colorId: 'red',
    // class: 'red',
  },
  {
    colorId: 'blue',
    // class: 'blue',
  },
  {
    colorId: 'green',
    // class: 'green',
  },
  {
    colorId: 'yellow',
    // class: 'yellow',
  },
];

///beginning sequence.length
let sequenceMin = 3;
//Current sequence length begins at min
let sequenceCurrent = sequenceMin;
//empty simonSequence that will be filled by createSequence function
let simonSequence = [];

///function to create simon's sequence
let createSequence = function () {
  for (let i = 0; i < sequenceCurrent; i++) {
    //console.log("I work!");

    // assign randomly select colorId from colorsAvail and store in let simonColorSelect
    let simonColorSelect = colorsAvail[Math.floor(Math.random() * 4)];
    //console.log(simonColorSelect);

    //add random selection to Simon's sequence
    simonSequence.push(simonColorSelect);
  }
};

createSequence();



//fuction to display simon's sequence
  //js to change css of game elements
let playSequence = function () {
  for (let i = 0; i < simonSequence.length; i++) {
    $('#' + simonSequence[i].colorId).toggleClass('bright');
    // console.log(simonSequence[i].colorId + " is played!")
    // Add a time interval to reset the class 500 miliseconds after the click, and then restart the loop

  }
}


$('div').click(function() {
  $(this).toggleClass('bright');
  // Add a time interval to reset the class 500 miliseconds after the click
});

// Testing code to link colorsAvail array to Div.Id
  // let toggledElement = document.getElementById('red');
  // jQuery for above
  // $('#red').toggleClass('bright');


//fuction to assign simonSequence[i] = correctSelection

//fuction to listen for user's selections, userSelection
//fuction to compare userSelection to correctSelection and report if they match
//function to fail the user if userSelection does not match the correctSelection
//report user success if they finish loop without failing
//add +1 to sequenceCurrent

//add 1 more random color to the end
