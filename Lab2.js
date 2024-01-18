//Bai1
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔄️ Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔄️ Substitution'],
    [64, '🟡 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔄️ Substitution'],
    [72, '🔄️ Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🟡 Yellow card'],
]);

const arrEvent = [...new Set(gameEvents.values())];

gameEvents.forEach((values,key)=>{
    if(values ==='🟡 Yellow card' && key === 64){
        gameEvents.delete(key);
    }
})

const tongPhut = 90;
const tongSuKien= gameEvents.size;
const suKienTrungBinh = tongSuKien/tongPhut;
console.log(`${tongSuKien} sự kiện xảy ra, 
trung bình mỗi ${Math.ceil(tongPhut/tongSuKien)} phút xảy ra 1 sự kiện`);

gameEvents.forEach((values,key)=>{
    const half = key <=45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`${half} ${key}: ${values}`);
})

//Bai2
const inputData=[
    'underscore_case',
    'first_name',
    'Some_Variable',
    'calculate_AGE',
    'delayed_departure',
];

const convertToCamelCase = (text) => {
    const words = text.split('_');
    const camelCaseWords = words.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return camelCaseWords.join('');
  };

  inputData.forEach((text) => {
    const camelCase = convertToCamelCase(text);
    const tickMarks = '✅ '.repeat(camelCase.length);
    console.log(`${camelCase} ${tickMarks}`);
  });

//Bai3
const flights =
'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// � Delayed Departure from FAO to TXL (11h25)
// Arrival from BRU to FAO (11h45)
// � Delayed Arrival from HEL to FAO (12h05)
// Departure from FAO to LIS (12h30)
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
const [type, from, to, time] = flight.split(';');
const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
'_',
' '
)} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
console.log(output);
}

//Bai4

