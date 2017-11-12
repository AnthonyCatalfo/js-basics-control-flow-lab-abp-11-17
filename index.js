// Write your code in this file!
function scuberGreetingForFeet(rideLength){
  switch(rideLength) {
    case <=400:
        return 'This one is on me!'
        break;
    case <2000:
        return 'I will gladly take your thirty bucks.'
        break;
    case <2500:
      return 'No can do.'
      break;
    default:
        return "?"
      }
}
//result = x > y ? "good job" : 20;
function ternaryCheckCity(city) {
  return city==='NYC' ? 'Ok, sounds good.': 'No go.';
}
