//this refers to window
console.log(this);

function helloThis() {
  // This refers to ....
  console.log("Inside this function, this is " + this);
}

var child = {
  age: 10,
  ageTenYears: function () {
    // This refers to cild object
    console.log(this.age + 10);
  },
};

var investor = {
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      // this refers to the investment object
      console.log(this.initialInvestment * 1.15);
    },
  },
};

//CALL THE FUnCTIONS/ invoke methods

//
helloThis();
//
child.ageTenYears();
//
investor.investment.investmentGrowth();
