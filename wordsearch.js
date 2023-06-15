const wordSearch = (letters, word) => { 
  let verticalArray = [];
  const horizontalJoin = letters.map(ls => ls.join(''));
  
  if (letters.length < 1) {
    return false;
  }
  
  for (let i = 0; i < letters[0].length; i++) {
    let row = letters.map(e => e[i]);
    verticalArray.push(row);
  }
  const verticalJoin = verticalArray.map(ls => ls.join(''));

  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  for (l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  return false;
}

module.exports = wordSearch

//Pair programming activity done by sfia-o and mohaelmi
