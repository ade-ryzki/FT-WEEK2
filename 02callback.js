// callback function

const name = [
  'Abigail', 'Alexandra', 'Alison',
  'Amanda', 'Angela', 'Bella',
  'Carol', 'Caroline', 'Carolyn',
  'Deirdre', 'Diana', 'Elizabeth',
  'Ella', 'Faith', 'Olivia', 'Penelope'
]

const search = (str,num,condition) => {
  const newArrray =[];
  for(x of name) {
      if(newArrray.length == num) {
          break;
      }
      condition(str, x, newArrray)

  }

  if(newArrray.length == 0) {
      return "Nama tidak ditemukan"
  } else {
      return newArrray
  }
  // return newArr
}

const include = (str, nama, newArrray) => {

  if(nama.toLowerCase().includes(str.toLowerCase())) {
      newArrray.push(nama)
  }
}


console.log(search("an",3,include))