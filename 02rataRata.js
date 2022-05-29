// Buat program yang menghitung rata-rata UN beserta gradenya
const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69
// jadikan array / langsung total / 4
const array = [mtk , bahasaIndonesia , bahasaInggris , ipa]
// menentukan hasil total array
var hasil = 0
for(i = 0; i <array.length; i++){
   hasil += array[i];
}

// hitung rata-rata nilai
const rataRata = hasil / array.length
console.log('Rata-rata =', rataRata)

//atau secara langsung  dengan const rataRata = total / jumlah pelajaran

// menentukan Grade
const g = rataRata
{if ((g >=0) && (g<= 59))
  console.log ('Grade = E')
else if((g >=60) && (g<= 69))
  console.log ('Grade = D') 
 else if((g >=70) && (g<= 79))
  console.log ('Grade = C') 
 else if((g >=80) && (g<= 89))
  console.log ('Grade = B') 
 else if((g >=90) && (g<= 100))
  console.log ('Grade = A') 
}

//done