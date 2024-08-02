//switch case
let day= window.prompt(`Enter day number(between 1 to 7):`);
day=Number(day);
switch(day){
    case 1:
        console.log(`Monday`);
        break;
    case 2:
        console.log(`Tuesday`);
        break;
    case 3:
        console.log(`Wednesday`);
        break;
    case 4:
        console.log(`Thursday`);
        break;
    case 5:
        console.log(`Friday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
    case 7:
        console.log(`Sunday`);
        break;
    default:
        console.log(`${day} is not a day`);
        break;
}

let score=window.prompt(`Enter your score(between 0 to 100):`);
score=Number(score);
switch(Math.floor(score/10)){
    case 9:
      console.log(`A`);
    break;
    case 8:
      console.log(`B`);
    break;
    case 7:
      console.log(`C`);
    break;
    case 6:
      console.log(`D`);
    break;
    case 5:
    case 4:
      console.log(`E`);
    break;
    case 3:
      console.log(`Fail`);
    break;
    default:
      console.log(`Invalid Input`);
    break;
}