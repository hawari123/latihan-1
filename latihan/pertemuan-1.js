const nama = ["namaku", "itu", "adalah"];

const namaku = nama.map(nama => 1 + nama);
const namaku2 = namaku.filter(nama => nama.includes("a"));
const myNickName = namaku2.find(nama => nama.includes("u"));

console.log(namaku);
console.log(namaku2);
console.log(myNickName);

function welcome(callback){
    console.log("selamat datang");
    callback();
}

welcome(
    function(){
        console.log(myNickName);
    }
)