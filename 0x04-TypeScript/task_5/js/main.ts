interface MajorCredits {
    credits: number;
    brand: "FNB"; 
  }
  
  interface MinorCredits {
    credits: number;
    brand: "Capitec"; 
  }
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const totalCredits: MajorCredits = {
      credits: subject1.credits + subject2.credits,
      brand: "FNB"
    };
    return totalCredits;
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const totalCredits: MinorCredits = {
      credits: subject1.credits + subject2.credits,
      brand: "Capitec" 
    };
    return totalCredits;
  }
  
  const subject1: MajorCredits = { credits: 19, brand: "FNB" };
  const subject2: MajorCredits = { credits: 28, brand: "FNB" };
  const subject3: MinorCredits = { credits: 10, brand: "Capitec" };
  const subject4: MinorCredits = { credits: 4, brand: "Capitec" };
  
  const majorTotal = sumMajorCredits(subject1, subject2);
  const minorTotal = sumMinorCredits(subject3, subject4);
  

  