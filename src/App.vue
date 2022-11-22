<template>

  <ModalHubungi v-if="showHubungi" @close="showHubungi=false"/>
  <ModalLokasi v-if="showLokasi" @close="showLokasi=false"/>
 
  <div class="min-h-screen h-full w-full font-cormorant">
    <div class="w-full md:w-container mx-auto">

      <!-- Cover Section -->
      <div class="bg-local bg-no-repeat bg-center h-screen w-full bg-cover" :style="{ backgroundImage: `url(${mainBg})` }">
        <div class="flex flex-wrap w-full h-full items-center justify-center">
          <div class="flex flex-col items-center text-center text-white space-y-0.75">
            <div class="text-sm md:text-base font-cinzel uppercase">Walimatul Urus</div>
            <div class="text-h2 md:text-h1 text-gold font-cinzel space-y-0">
              <div>Alya</div>
              <div class="font-alex">&</div>
              <div>Azry</div>
            </div>
            <div class="space-y-0">
              <div class="uppercase font-cormorant italic tracking-widest text-sm md:text-base ">Jumaat</div>
              <div class="text-gold text-h3 md:text-h2 pl-0.25 pr-1 font-petit font-light italic">
                3<span class="text-white text-opacity-30">•</span>2<span class="text-white text-opacity-30">•</span>23
              </div>
              <!-- <div class="uppercase font-cormorant italic tracking-widest">2:30PM - 4:00PM</div> -->
            </div>
            <div class="uppercase text-xs md:text-sm">Noor Arfa Craft Complex<br>Kuala Terengganu</div>
          </div>
        </div>
      </div>

      <!-- Main section -->
      <div class="bg-white text-dark w-full p-3 flex flex-col items-center space-y-2 text-center text-sm md:text-base">
        <div class="text-lg">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
        <div class="capitalize font-nunito font-light">Walimatul urus</div>
        <div class="text-lg md:text-xl space-y-0.5 md:space-y-1 font-marcellus">
          <div>En. Yusof Bin Musa</div>
          <div>&</div>
          <div>Pn. Malina Binti Mohamad@Jusoh</div>
        </div>
        <div class="font-nunito font-light ">
          Dengan penuh hormat dan sukacitanya menjemput Dato’ / Datin / Tuan / Puan / Encik / Cik hadir ke majlis perkahwinan puteri kami
        </div>
        <div class="text-lg md:text-xl space-y-0.5 md:space-y-1 font-marcellus">
          <div>Noor Alya Shafiqah Binti Yusof</div>
          <div class="font-nunito font-light text-base md:text-md">dan pasangannya</div>
          <div>Mohammad Khairul Azry Bin Ahmad Azhan</div>
        </div>
        <div class="font-nunito space-y-0.25">
          <div class="font-bold">Tarikh</div>
          <div>Jumaat, 3 Februari 2023</div>
        </div>
        <div class="font-nunito space-y-0.25">
          <div class="font-bold">Masa</div>
          <div>11:00AM - 4:00PM</div>
        </div>
        <div class="font-nunito space-y-0.25">
          <div class="font-bold">Lokasi</div>
          <div>Noor Arfa Craft Complex,<br>Kuala Terengganu</div>
          <div class="flex w-full items-center justify-center space-x-1.5">
              <div>
                  <a href="https://waze.com/ul?ll=5.276524430147474, 103.16727607032999&navigate=yes">
                      <img class="w-icon h-icon rounded-xl shadow-md" src="./assets/img/waze.png" alt="">
                  </a>
              </div>
              <div>
                  <a href="https://www.google.com/maps/?q=5.276492380030661,103.16723315498588">
                      <img class="w-icon h-icon rounded-xl shadow-md" src="./assets/img/google-maps.png" alt="">
                  </a>
              </div>
          </div>
        </div>
      </div>

      <!-- Doa section -->
      <div class="bg-local bg-no-repeat bg-center h-full w-full bg-cover p-4 text-center text-sm md:text-base space-y-1 mb-[58px] md:mb-[77px]" :style="{ backgroundImage: `url(${secondaryBg})` }">
        <div class="text-gold">Ya Allah, berkatilah satukanlah hati kedua pasangan mempelai ini dengan iman, keyakinan dan tawakal kepadaMu, panjangkan umur mereka, lapangkanlah rezeki mereka, dekatlah mereka menuju kebaikan, jauhkanlah mereka dari keburukan, kurniakanlah mereka zuriat yang soleh dan solehah.</div>
        <div class="flex items-center justify-center text-white space-x-0.5 font-nunito">
          <div>Alya</div>
          <div class="animate-ping">
            <svg height="22px" version="1.1" viewBox="0 0 26 22" width="26px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                <g fill="#E7594F" id="Main-Card" transform="translate(-151.000000, -1862.000000)">
                  <g id="Group-5" transform="translate(151.000000, 1862.000000)">
                    <path d="M19.0586,0.7393 C16.1776,0.7393 13.7366,2.9893 12.8826,6.1043 C12.0306,2.9893 9.5876,0.7393 6.7056,0.7393 C3.1166,0.7393 0.2046,4.2323 0.2046,8.5413 C0.2046,17.1243 12.8826,22.0003 12.8826,22.0003 C12.8826,22.0003 25.5616,17.1243 25.5616,8.5413 C25.5616,4.2323 22.6496,0.7393 19.0586,0.7393" id="Fill-3"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div>Azry</div>
        </div>
      </div>

      <!-- Next section  -->

      <!-- Navigation section -->
      <div class="fixed z-10 bottom-0 w-full flex items-center justify-around py-0.5 md:py-1 md:w-container bg-dark text-white text-xs md:text-sm font-nunito">
        <button 
          type="button"
          @click="showHubungi = true"
          class="flex flex-col items-center space-y-0.25 w-full">
          <div>
            <span class="material-icons text-white">phone</span>
          </div>
          <div>Hubungi</div>
        </button>
        <button 
          type="button"
          id="showLokasi"
          @click="showLokasi = true"
          class="flex flex-col items-center space-y-0.25 w-full">
          <div>
            <span class="material-icons text-white">pin_drop</span>
          </div>
          <div>Lokasi</div>
        </button>
      </div>
      
    </div>
  </div>

</template>

<script>
import ModalHubungi from "./components/ModalHubungi.vue";
import ModalLokasi from "./components/ModalLokasi.vue";

import mainBg from "./assets/img/main-bg.png";
import secondaryBg from "./assets/img/main-bg.png";
// Set the date we're counting down to
var countDownDate = new Date("Feb 3, 2023 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

export default {
  name: 'App',
  components:{
    ModalHubungi,
    ModalLokasi,
  },
  data() {
    return {
      mainBg,
      secondaryBg,
      showHubungi: false,
      showLokasi: false,
    }
  },
}
</script>
