/*
Rob Garcia
Codecademy
main.js
April 10, 2022
*/

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// STEP 3: define a factory function that can be used to create objects that represent DNA samples of the pAequor organism.
const pAequorFactory = (num, dnaBases) => {
  return {
    specimenNum: num,
    dna: dnaBases, 
    // STEP 4: create a method that randomly selects a single DNA base in the given sample and assigns a random base that is NOT equal to the original base type. 
    mutate() {
      //console.log(this.dna);
      let random = Math.floor(Math.random() * this.dna.length);
      //console.log(random);
      let j = 1;
      while (j !== 0) {
        let newBase = returnRandBase();
        if (this.dna[random] !== newBase) {
          this.dna[random] = newBase;
          break;
        } else {
          j++;
        }
      }
      return this.dna;
    },
    //STEP 5: create a method to compare the DNA sequences of different samples.  Accepts a pAequor object as a parameter and prints a message to the console with the percent DNA the two samples have in common.
    compareDNA(testSpecimen) {
      let countSame = 0;
      for(let i = 0; i < this.dna.length; i++) {
        if (testSpecimen.dna[i] === this.dna[i]) {
          countSame++;     
        }
      }
      let percentCommon = countSame/testSpecimen.dna.length*100;
      console.log(`specimen #${this.specimenNum} and specimen #${testSpecimen.specimenNum} have ${percentCommon}% DNA in common.`)
    },
    // STEP 6: create a method to test the chance of survival for a given DNA sample.  This method will check if the given DNA sample contains at least 60% C or G bases.
    willLikelySurvive() {
      //console.log(this.dna);
      let countC = 0;
      let countG = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C') {
          countC++;
        } else if (this.dna[i] === 'G') {
          countG++;
        }
      }
      //console.log(countC);
      //console.log(countG);
      if(countC/this.dna.length >= 0.6 || countG/this.dna.lenght >= 0.6) {
        return true;
      } else {
        return false;
      }
    },
    // STEP 9 EXTENSION: create a method that returns the complementary DNA strand of the given sample.
    complementStrand() {
      let complement = [];
      for (let i = 0; i < this.dna.length; i++) {
        switch (true) {
          case this.dna[i] === 'A': 
            complement.push('T');
            break;
          case this.dna[i] === 'T': 
            complement.push('A');
            break;
          case this.dna[i] === 'C': 
            complement.push('G');
            break;
          case this.dna[i] === 'G': 
            complement.push('C');
            break;
        }
      }
      return complement;
    }
  }
}

//console.log(pAequorFactory(1, mockUpStrand()).mutate());
const ex1 = pAequorFactory(1, mockUpStrand());
const ex2DNA = pAequorFactory(2, mockUpStrand()).mutate();
//console.log(ex2DNA);
//pAequorFactory(2, ex2DNA).compareDNA(ex1);
//console.log(pAequorFactory(1, mockUpStrand()).willLikelySurvive());


// STEP 7: create 30 instances of pAequor that can survive in their natural environement
let sample = [];
let sampleIndex = 1;
while(sample.length <= 30) {
  let testSample = pAequorFactory(sampleIndex, mockUpStrand());
  if (testSample.willLikelySurvive()) {
    sample.push(testSample);
  }
  sampleIndex++;
}
console.log(sample);
// 6,777 samples were created and checked until 30 instances that would likely survive were found!


// The code below tests the challenge extension (STEP 9)
console.log(ex1);
const ex1Complement = pAequorFactory(2, ex1.dna).complementStrand();
console.log(ex1Complement);





