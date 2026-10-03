/* ============ PENGATURAN (edit di sini) ============ */
var CONFIG={
  brand:"UndangMe",
  wa:"6283179381307",          // nomor WhatsApp: format 62, tanpa + dan tanpa 0 di depan
  waTampil:"0831-7938-1307",   // nomor yang ditampilkan di footer
  email:"halo@domainmu.com",
  alamat:"Indramayu, Jawa Barat, Indonesia",
  instagram:"",   // link Instagram, contoh https://instagram.com/namamu (kosong = tidak tampil)
  tiktok:"",      // link TikTok (kosong = tidak tampil)
  sheetUrl:"https://script.google.com/macros/s/AKfycbwrvgyP9YiO49UZtWcNqj0S5pAXxvyJCX3iTFtNvLa2643uJ3kq_Z_1Aa6jB9xnt6oh/exec"     // link Web app dari Google Apps Script (lihat panduan). Kosong = testimoni cuma dikirim lewat WhatsApp.
};

/* ============ DAFTAR TEMA (tambah/hapus/ubah di sini) ============
 n    = nama tema
 k    = kategori ("Klasik" atau "Animasi Premium")
 d    = deskripsi singkat
 c1,c2,t = warna preview cadangan (dipakai kalau foto tidak ada)
 shot = alamat gambar preview, contoh "img/royal-gold.jpg" atau link https://...
 demo = link demo/preview undangan asli tema ini. Tombol "Lihat demo" langsung membuka link ini. Kalau dikosongkan (""), tombolnya tampil pudar dan tidak bisa diklik. */
var THEMES=[
{n:"Blue-Flowers",k:"Terpopuler",d:"",c1:"#1A1233",c2:"#3B2A7A",t:"#CFC2FF",
 shot:"img/populer/T-BlueFlowers.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/114?kpd=Bapak%20Budi"},
{n:"Pandora-Classic",k:"Terpopuler",d:"",c1:"#DDE7D8",c2:"#B9CDB3",t:"#1F3A24",
 shot:"img/populer/T-PandoraClassic.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/134?kpd=Bapak%20Budi"},
{n:"Elegan-Gold",k:"Terpopuler",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/populer/T-EleganGold.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/91?kpd=Bapak%20Budi"},
{n:"Bee-Classic",k:"Terpopuler",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/populer/T-BeeClassic.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/32?kpd=Bapak%20Budi"},

{n:"New-Sky",k:"Rekomendasi",d:"",c1:"#F6DDE0",c2:"#E6C6D3",t:"#4A1630",
 shot:"img/rekom/R-NewSky.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/454?kpd=Bapak%20Budi"},
{n:"Elegan-Grey",k:"Rekomendasi",d:"",c1:"#1A1233",c2:"#3B2A7A",t:"#CFC2FF",
 shot:"img/rekom/R-EleganGrey.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/79?kpd=Bapak%20Budi"},
{n:"Elegan-Picture",k:"Rekomendasi",d:"",c1:"#DDE7D8",c2:"#B9CDB3",t:"#1F3A24",
 shot:"img/rekom/R-EleganPicture.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/421?kpd=Bapak%20Budi"},
{n:"Aesthetic-Romance",k:"Rekomendasi",d:"",c1:"#1B2340",c2:"#2E3A66",t:"#F0D9A0",
 shot:"img/rekom/R-AestheticRomance.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/199?kpd=Bapak%20Budi"},
{n:"New-Prose",k:"Rekomendasi",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/rekom/R-NewProse.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/467?kpd=Bapak%20Budi"},
{n:"Aesthetic-Peacock",k:"Rekomendasi",d:"",c1:"#0B0B0F",c2:"#2A2A33",t:"#D9DCE3",
 shot:"img/rekom/R-AestheticPeacock.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/419?kpd=Bapak%20Budi"},
{n:"Fantasy-Peacock",k:"Rekomendasi",d:"",c1:"#E9B48F",c2:"#B9673F",t:"#3E1A0C",
 shot:"img/rekom/R-FantasyPeacock.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/403?kpd=Bapak%20Budi"},
{n:"Elegan-Nature",k:"Rekomendasi",d:"",c1:"#EAF7F1",c2:"#C4E6D6",t:"#1C4A38",
 shot:"img/rekom/R-EleganNature.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/198?kpd=Bapak%20Budi"},
{n:"Eternal-Flowers",k:"Rekomendasi",d:"",c1:"#0F2A3D",c2:"#5B3A8C",t:"#BDF2E6",
 shot:"img/rekom/R-EternalFlowers.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/407?kpd=Bapak%20Budi"},
{n:"New-Rose",k:"Rekomendasi",d:"",c1:"#F9D3DC",c2:"#D9A5C4",t:"#4A1630",
 shot:"img/rekom/R-NewRose.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/431?kpd=Bapak%20Budi"},

{n:"Minimalist-Floral",k:"Tanpa Foto",d:"",c1:"#F6DDE0",c2:"#E6C6D3",t:"#4A1630",
 shot:"img/tf/TF-MinimalistFloral.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/179?kpd=Bapak%20Budi"},
{n:"Minimalist-Cream-C",k:"Tanpa Foto",d:"",c1:"#1A1233",c2:"#3B2A7A",t:"#CFC2FF",
 shot:"img/tf/TF-MinimalistCreamC.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/333?kpd=Bapak%20Budi"},
{n:"Minimalist-White-C",k:"Tanpa Foto",d:"",c1:"#DDE7D8",c2:"#B9CDB3",t:"#1F3A24",
 shot:"img/tf/TF-MinimalistWhiteC.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/331?kpd=Bapak%20Budi"},
{n:"Minimalist-Flower",k:"Tanpa Foto",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/tf/TF-MinimalistFlower.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/219?kpd=Bapak%20Budi"},
{n:"Minimalist-One",k:"Tanpa Foto",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/tf/TF-MinimalistOne.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/163?kpd=Bapak%20Budi"},
{n:"Minimalist-Two",k:"Tanpa Foto",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/tf/TF-MinimalistTwo.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/164?kpd=Bapak%20Budi"},
{n:"Minimalist-Blue-C",k:"Tanpa Foto",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/tf/TF-MinimalistBlueC.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/337?kpd=Bapak%20Budi"},

{n:"Luxury-Caramel",k:"Elegan",d:"",c1:"#F6DDE0",c2:"#E6C6D3",t:"#4A1630",
 shot:"img/elegan/E-LuxuryCaramel.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/447?kpd=Bapak%20Budi"},
{n:"Luxury-Silver-C",k:"Elegan",d:"",c1:"#1A1233",c2:"#3B2A7A",t:"#CFC2FF",
 shot:"img/elegan/E-LuxurySilverC.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/187?kpd=Bapak%20Budi"},
{n:"Luxury-Prussian",k:"Elegan",d:"",c1:"#DDE7D8",c2:"#B9CDB3",t:"#1F3A24",
 shot:"img/elegan/E-LuxuryPrussian.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/92?kpd=Bapak%20Budi"},
{n:"Luxury-Burgundy-C",k:"Elegan",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/elegan/E-LuxuryBurgundyC.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/166?kpd=Bapak%20Budi"},
{n:"Elegan-Tea-C",k:"Elegan",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/elegan/E-EleganTeaC.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/180?kpd=Bapak%20Budi"},
{n:"Elegan-Gold-C",k:"Elegan",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/elegan/E-EleganGoldC.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/183?kpd=Bapak%20Budi"},
{n:"Elegan-Black-C",k:"Elegan",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/elegan/E-EleganBlackC.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/348?kpd=Bapak%20Budi"},
{n:"Bali-Night",k:"Elegan",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/elegan/E-BaliNight.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/178?kpd=Bapak%20Budi"},

{n:"Fantasy-Green",k:"Undangan 3D",d:"",c1:"#F6DDE0",c2:"#E6C6D3",t:"#4A1630",
 shot:"img/3d/3D-FantasyGreen.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/451?kpd=Bapak%20Budi"},
{n:"Fantasy-Garden",k:"Undangan 3D",d:"",c1:"#1A1233",c2:"#3B2A7A",t:"#CFC2FF",
 shot:"img/3d/3D-FantasyGarden.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/380?kpd=Bapak%20Budi"},
{n:"Aesthetic-Symphony",k:"Undangan 3D",d:"",c1:"#DDE7D8",c2:"#B9CDB3",t:"#1F3A24",
 shot:"img/3d/3D-AestheticSymphony.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/399?kpd=Bapak%20Budi"},
{n:"Fantasy-Love",k:"Undangan 3D",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/3d/3D-FantasyLove.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/391?kpd=Bapak%20Budi"},
{n:"Fantasy-Symphony",k:"Undangan 3D",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/3d/3D-FantasySymphony.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/392?kpd=Bapak%20Budi"},
{n:"Fantasy-Forest",k:"Undangan 3D",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/3d/3D-FantasyForest.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/344?kpd=Bapak%20Budi"},
{n:"Fantasy-World",k:"Undangan 3D",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/3d/3D-FantasyWorld.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/343?kpd=Bapak%20Budi"},

{n:"Aesthetic-Flowers",k:"Flower",d:"",c1:"#F6DDE0",c2:"#E6C6D3",t:"#4A1630",
 shot:"img/Flower/F-AestheticFlowers.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/367?kpd=Bapak%20Budi"},
{n:"Fantasy-Spring",k:"Flower",d:"",c1:"#1A1233",c2:"#3B2A7A",t:"#CFC2FF",
 shot:"img/Flower/F-FantasySpring.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/377?kpd=Bapak%20Budi"},
{n:"Blue-Flowers-C",k:"Flower",d:"",c1:"#DDE7D8",c2:"#B9CDB3",t:"#1F3A24",
 shot:"img/Flower/F-BlueFlowersC.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/184?kpd=Bapak%20Budi"},
{n:"Super-Classic",k:"Flower",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/Flower/F-SuperClassic.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/161?kpd=Bapak%20Budi"},
{n:"Customs-Anime-C",k:"Flower",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/Flower/F-CustomsAnimeC.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/301?kpd=Bapak%20Budi"},
{n:"Orchid-Flower-C",k:"Flower",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/Flower/F-OrchidFlowerC.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/328?kpd=Bapak%20Budi"},
{n:"Pandora-Forest-C",k:"Flower",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/Flower/F-PandoraForestC.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/329?kpd=Bapak%20Budi"},
{n:"Pandora-Nature",k:"Flower",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/Flower/F-PandoraNature.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/254?kpd=Bapak%20Budi"},
{n:"Super-Blue",k:"Flower",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/Flower/F-SuperBlue.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/173?kpd=Bapak%20Budi"},

{n:"Eternal-Islamic",k:"Islami",d:"",c1:"#F6DDE0",c2:"#E6C6D3",t:"#4A1630",
 shot:"img/islami/I-EternalIslamic.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/406?kpd=Bapak%20Budi"},
{n:"Lentera-Taqwa",k:"Islami",d:"",c1:"#1A1233",c2:"#3B2A7A",t:"#CFC2FF",
 shot:"img/islami/I-LenteraTaqwa.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/481?kpd=Bapak%20Budi"},
{n:"Islamic-One",k:"Islami",d:"",c1:"#DDE7D8",c2:"#B9CDB3",t:"#1F3A24",
 shot:"img/islami/I-EternalIslamic.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/395?kpd=Bapak%20Budi"},
{n:"Eternal-Arabic",k:"Islami",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/islami/I-EternalArabic.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/415?kpd=Bapak%20Budi"},
{n:"Muslim-Tawakkal-C",k:"Islami",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/islami/I-MuslimTawakkal-C.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/283?kpd=Bapak%20Budi"},
{n:"New-Arabic",k:"Islami",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/islami/I-NewArabic.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/456?kpd=Bapak%20Budi"},
{n:"Simple-Arabic-C",k:"Islami",d:"",c1:"#EEF0EC",c2:"#CFD8CB",t:"#2F3B2C",
 shot:"img/islami/I-SimpleArabic-C.jpg",
 demo:"https://id.sudahnikah.com/s/1952/undangan/228?kpd=Bapak%20Budi"},
];

function wa(x){return "https://wa.me/"+CONFIG.wa+"?text="+encodeURIComponent(x)}
function bindWA(){document.querySelectorAll("[data-wa]").forEach(function(a){a.href=wa(a.getAttribute("data-wa").replace("MomentKita",CONFIG.brand));a.target="_blank";a.rel="noopener"})}
var cfg={brand:CONFIG.brand,copy:"\u00A9 2026 "+CONFIG.brand+". All Rights Reserved.",waTampil:CONFIG.waTampil,email:CONFIG.email,alamat:CONFIG.alamat};
document.querySelectorAll("[data-cfg]").forEach(function(el){el.textContent=cfg[el.getAttribute("data-cfg")]});
document.querySelectorAll("[data-mail]").forEach(function(a){a.href="mailto:"+CONFIG.email});
var socEl=document.getElementById("soc");if(socEl){socEl.innerHTML=[["Instagram",CONFIG.instagram],["TikTok",CONFIG.tiktok]].filter(function(s){return s[1]}).map(function(s){return '<a href="'+s[1]+'" target="_blank" rel="noopener">'+s[0]+'</a>'}).join("")}
document.title=CONFIG.brand+" \u2013 Undangan Digital";
var cats=["Semua","Terpopuler","Rekomendasi","Tanpa Foto","Elegan","Undangan 3D","Flower","Islami"],cur="Semua",chips=document.getElementById("chips"),grid=document.getElementById("grid"),moreBtn=document.getElementById("moreThemes"),expanded=false;
function slug(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}
function fallback(t){return '<div class="cp" style="background:linear-gradient(160deg,'+t.c1+','+t.c2+');color:'+t.t+'"><small>The Wedding of</small><b>Alif &amp; Kirana</b><i>12 September 2026</i><span>Buka undangan</span></div>'}
function render(){
chips.innerHTML=cats.map(function(c){return '<button class="chip" aria-pressed="'+(c===cur)+'" data-c="'+c+'">'+c+'</button>'}).join("");
var list=THEMES.filter(function(t){return cur==="Semua"||t.k===cur});
var AWAL=8,showBtn=false;
if(cur==="Semua"&&list.length>AWAL){
  showBtn=true;
  if(!expanded){list=list.slice(0,AWAL)}
}
if(moreBtn)moreBtn.innerHTML=expanded
  ?'Lihat lebih sedikit<i class="bi bi-chevron-up" style="margin-left:6px"></i>'
  :'Lihat lainnya<i class="bi bi-chevron-down" style="margin-left:6px"></i>';
grid.innerHTML=list.map(function(t){
var i=THEMES.indexOf(t);
var pv='<div class="shot" data-i="'+i+'"><img loading="lazy" alt="Screenshot tema '+t.n+'" src="'+t.shot+'"></div>';
return '<article class="item">'+pv+'<h3>'+t.n+'</h3><p>'+t.d+'</p>'+'<div class="acts">'+'<a class="btn o'+(t.demo?'':' off')+'" href="'+(t.demo||"#")+'" target="_blank" rel="noopener"'+(t.demo?'':' aria-disabled="true" tabindex="-1"')+'><i class="bi bi-eye" style="margin-right: 5px;"></i>Preview</a>'+'<a class="btn" data-wa="Halo Kak, aku mau pesan undangan tema &quot;'+t.n+'&quot;." href="#">Pilih tema</a></div></article>'}).join("");
if(moreBtn)moreBtn.hidden=!showBtn;
bindWA()}
chips.addEventListener("click",function(e){var b=e.target.closest(".chip");if(b){cur=b.getAttribute("data-c");expanded=false;render()}});
if(moreBtn)moreBtn.addEventListener("click",function(){expanded=!expanded;render()});
/* Gambar tidak ditemukan -> balik ke preview warna */
grid.addEventListener("error",function(e){var im=e.target,b=im.closest&&im.closest(".shot");if(im.tagName==="IMG"&&b){b.outerHTML=fallback(THEMES[b.getAttribute("data-i")])}},true);
render();

/* Menu hamburger (HP) */
var burger=document.getElementById("burger"),nav=document.getElementById("nav");
burger.addEventListener("click",function(){var o=nav.classList.toggle("open");burger.setAttribute("aria-expanded",o);burger.setAttribute("aria-label",o?"Tutup menu":"Buka menu")});
nav.addEventListener("click",function(e){if(e.target.tagName==="A"){nav.classList.remove("open");burger.setAttribute("aria-expanded","false");burger.setAttribute("aria-label","Buka menu")}});

/* ============ TESTIMONI (tambah/hapus/ubah di sini) ============
 nama = nama pemberi testimoni | info = kota / tema yang dipakai
 isi = kalimat testimoni | bintang = 1 sampai 5
 foto = alamat foto profil, contoh "img/rahmat.jpg" (kosongkan = pakai huruf awal nama) */
var TESTIMONI=[
{nama:"Rahmat & Dina",info:"Yogyakarta \u00B7 Tema Classic Romance",bintang:5,foto:"",isi:"Prosesnya cepat, kurang dari 10 menit undangan kami sudah jadi dan dibagikan ke keluarga besar."},
{nama:"Aditya & Fira",info:"Surabaya \u00B7 Tema Royal Gold",bintang:5,foto:"",isi:"Temanya elegan, banyak tamu bertanya dibuat di mana. Fitur RSVP sangat membantu."},
{nama:"Bagas & Sari",info:"Bandung \u00B7 Tema Rustic Floral",bintang:5,foto:"",isi:"Amplop digitalnya jadi solusi untuk keluarga di luar kota. Semua tercatat rapi."}
];
var testiEl=document.getElementById("testi");
if(testiEl){
testiEl.innerHTML=TESTIMONI.map(function(x){
var av=x.foto?'<img alt="" src="'+x.foto+'">':x.nama.charAt(0);
return '<article class="tc"><div class="stars" role="img" aria-label="Rating '+x.bintang+' dari 5">'+"\u2605".repeat(x.bintang)+"\u2606".repeat(5-x.bintang)+'</div><p>'+x.isi+'</p><div class="who"><div class="av">'+av+'</div><div><b>'+x.nama+'</b><span>'+x.info+'</span></div></div></article>'}).join("");
}

/* ============ ANIMASI NGETIK DI JUDUL (atur di sini) ============
 Judulnya diketik berulang-ulang, isinya SAMA PERSIS dengan h1 di index.html.
 Kalau judulnya diganti di index.html, ganti juga TYPE_TEXT di bawah ini. */
var TYPE_TEXT="Rangkai kisah cinta kalian menjadi undangan yang berkesan";
var TYPE_SPEED=60;   // kecepatan ngetik (milidetik per huruf)
var ERASE_SPEED=25;  // kecepatan menghapus (milidetik per huruf)
var TYPE_HOLD=5000;  // lama teks penuh ditampilkan sebelum dihapus lagi (milidetik)
(function(){
var el=document.querySelector(".hero h1");
if(!el)return;
function siklus(){
  var i=0;
  (function ketik(){
    el.textContent=TYPE_TEXT.slice(0,i);
    if(i<TYPE_TEXT.length){i++;setTimeout(ketik,TYPE_SPEED)}
    else{setTimeout(hapus,TYPE_HOLD)}
  })();
  function hapus(){
    (function langkah(){
      el.textContent=TYPE_TEXT.slice(0,i);
      if(i>0){i--;setTimeout(langkah,ERASE_SPEED)}
      else{setTimeout(siklus,300)}
    })();
  }
}
siklus();
})();

/* ============ ANIMASI PARAGRAF HERO (atur di sini) ============
 Kata-katanya muncul dari bawah satu-satu, TAPI mulai dari kata PALING AKHIR
 duluan, baru mundur ke kata pertama. Diulang terus-menerus. Isinya harus SAMA
 PERSIS dengan <p> di bawah h1 pada index.html. Kalau teksnya diganti di
 index.html, ganti juga PARA_TEXT di bawah ini. */
var PARA_TEXT="Pilih desain yang sesuai dengan kamu, lengkapi dengan detail acara, lalu bagikan undangan kepada keluarga dan sahabat kamu dengan mudah.";
var WORD_STAGGER=100; // jeda antar kata (milidetik)
var PARA_HOLD=9000;  // lama teksnya tampil penuh sebelum diulang lagi (milidetik)
(function(){
var p=document.querySelector(".hero p");
if(!p)return;
var words=PARA_TEXT.split(" ");
p.innerHTML=words.map(function(w){return '<span class="word">'+w+'</span>'}).join(" ");
var spans=p.querySelectorAll(".word"),n=spans.length;
function munculkan(){
  spans.forEach(function(sp,i){
      var delay=i*WORD_STAGGER;
    setTimeout(function(){sp.classList.add("show")},delay);
  });
}
function siklusParagraf(){
  munculkan();
  setTimeout(function(){
    spans.forEach(function(sp){sp.classList.remove("show")});
    setTimeout(siklusParagraf,250);
  },(n-1)*WORD_STAGGER+PARA_HOLD);
}
siklusParagraf();
})();
