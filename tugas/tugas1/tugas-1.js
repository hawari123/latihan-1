const nama = ["Namaku", "Burhanudin", "Hawari"];

const namaku = nama.map(nama => 1 + nama);
const namaku1 = namaku.filter(nama => nama.includes("w"));
const myNickName = namaku.find(nama => nama.includes("d"));

console.log(namaku);
console.log(namaku1);
console.log(myNickName);

function welcome(callback){
    console.log("Selamat Datang");
    callback();
}

welcome(
    function(){
        console.log(myNickName);
});