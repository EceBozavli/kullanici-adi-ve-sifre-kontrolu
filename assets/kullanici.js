let kullanici = prompt('Kullanıcı adınızı giriniz: ').toLocaleLowerCase();
let sifre = prompt('şifrenizi giriniz: ');

if (kullanici==='admin' && sifre==='1234') {
  console.log('giriş başarılı!');
}

else{
  console.log('Hatalı giriş!');
}