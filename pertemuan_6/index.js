/*
     Object 
     jika kita dapat menguasai objek, java sudah dikuasai
*/

// const mahasiswa1 = ['John', 'Doe', '31', 'true'];

//1.object literals
const mhs1={  //const lebih sering digunakan untuk object atau array
    namaDepan : "John",
    namaBelakang : "Doe",
    umur:31,
    sudahLulus:true,
    alamat :{
        jalan:'jln. sarongsong',
        kecamatan:'Airmadidi',
        kabupaten:'Minahasa Utara',
    },
    IPSemester:[3.05, 3.25, 3.0, 3.4],
    hitungIPK : function(){
       let total = 0;
       this.IPSemester.forEach(function(el){
           total = total + el;
       });
       return total / 4;
    },
};

//2.kata kunci new
const mhs2 = new Object();
mhs2.namaDepan = "Jane";
mhs2.namaBelakang="Smith";

//mengakses properti objek
//1.dot notation
console.log(mhs1.umur);
//2. bracket notation
console.log(mhs1["namaBelakang"]);

console.log(mhs1.alamat.jalan);
console.log(mhs1.IPSemester[3]);  //menambahkan array dalam object
console.log(mhs1.hitungIPK());  //nilai ipknya direturn total(nilainya dikembalikan)




