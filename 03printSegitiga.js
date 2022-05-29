// Buatlah program yang memiliki satu variabel dengan nama “printSegitiga” yg berisi tipe data number yang menghasilkan output segitiga terbalik yang berisi angka

const printSegitiga = 5

for(let i = 0;i < printSegitiga; i++)
  {
    let s =''
    for(let j = 0 ; j < printSegitiga -i; j++)
      {
        s += j + 1
      }
    console.log(s)
  }

  //done