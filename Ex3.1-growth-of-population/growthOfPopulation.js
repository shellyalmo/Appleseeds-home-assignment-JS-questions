/**
 * How many years does the town need to see its population greater or equal to p 
inhabitants?
p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
- the function nb_year should return n number of entire years needed to get a population
greater or equal to p.
- aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)
 */

function growthOfPopulation(p0, percent, aug, p) {
  if (
    p0 > 0 &&
    typeof p0 === "number" &&
    p > 0 &&
    typeof p === "number" &&
    percent > 0 &&
    typeof aug === "number"
  ) {
    let metCondition = false;
    let counter = 0;
    let result = 0;
    while (metCondition === false) {
      result = p0 + p0 * percent * 0.01 + aug;
      counter++;
      if (result >= p) {
        metCondition = true;
      } else {
        p0 = result;
      }
    }
    return counter;
  } else {
    return "aug is an integer, percent a positive or null number, p0 and p are positive integers";
  }
}

module.exports.growthOfPopulation = growthOfPopulation;
