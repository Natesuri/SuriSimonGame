
const colorsAvail = [
  {
    colorId: 'red',
  },
  {
    colorId: 'blue',
  },
  {
    colorId: 'green',
  },
  {
    colorId: 'yellow'
  },
];

///beginning sequence.length
let sequenceMin = 3;
//Current sequence length begins at min
let sequenceCurrent = sequenceMin;
//empty simonSequence that will be filled by createSequence function
let simonSequence = [];
let i = 0;

///function to create simon's sequence
let createSequence = function () {
  for (let i = 0; i < sequenceCurrent; i++) {
    //console.log("I work!");

    // assign randomly select colorId from colorsAvail and store in let simonColorSelect
    let simonColorSelect = colorsAvail[Math.floor(Math.random() * 4)].colorId;
    //console.log(simonColorSelect);

    //add random selection to Simon's sequence
    simonSequence.push(simonColorSelect);
  }
};





//fuction to display simon's sequence

//fuction to assign simonSequence[i] = correctSelection
//fuction to listen for user's selections, userSelection
//fuction to compare userSelection to correctSelection and report if they match
//function to fail the user if userSelection does not match the correctSelection
//report user success if they finish loop without failing
//add +1 to sequenceCurrent
