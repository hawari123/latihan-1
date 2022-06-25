const nama = ["Burhanudin", "Hawari", "namaku"];
const namaku = nama.map(nama => nama + ("w"));
console.log(namaku);    

let namaDepan, namaTengah, namaBelakang;
[namaDepan, namaTengah, namaBelakang] = [namaku[0],namaku[1],namaku[2]];

console.log(namaDepan,namaTengah,namaBelakang);

let mahasiswa = {
    nama1 : namaDepan + namaTengah + namaBelakang,
    umur : 20
}

let{nama1, umur} = mahasiswa;

console.log(nama1,umur);

function cetak(cb){
    console.log(mahasiswa.nama1);
    cb();
}

cetak(function(){
    console.log(mahasiswa,umur);
});