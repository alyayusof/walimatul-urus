<template>

  <!-- <div class="flex flex-col w-full h-full min-h-screen">
    <div class="flex-1 w-full h-full flex flex-wrap items-center justify-center bg-black">
        <div class="space-y-2 text-white text-center">
            <div class="text-h3 md:text-h1 font-black uppercase">Coming Soon</div>
            <div>This page is under construction. <br/> Thank you for visiting.</div>
        </div>
    </div>
  </div> -->
 
  <div class="min-h-screen h-full w-full bg-dark font-garamond">
    <div class="w-full md:w-container mx-auto">

      <!-- Main Section -->
      <div class="bg-local bg-no-repeat bg-center h-screen w-full bg-cover" :style="{ backgroundImage: `url(${mainBg})` }">
        <div class="flex flex-wrap w-full h-full items-center justify-center">
          <div class="flex flex-col items-center text-center text-white space-y-1.5">
            <div class="uppercase">Walimatul Urus</div>
            <div class="text-h1 text-gold font-cinzel space-y-0">
              <div>Alya</div>
              <div class="font-alex">&</div>
              <div>Azry</div>
            </div>
            <div class="space-y-0.25">
              <div class="uppercase">Jumaat</div>
              <div class="flex items-center justify-center space-x-1">
                <div class="border-y-2 border-white">FEB</div>
                <div class="text-h1 pb-1.75">3</div>
                <div class="border-y-2 border-white">2023</div>
              </div>
            </div>
            <div class="uppercase">Noor Arfa Craft Complex<br>Kuala Terengganu</div>
          </div>
        </div>
      </div>

      <!-- Next section -->
    </div>
  </div>

</template>

<script>
import mainBg from "../src/assets/img/main-bg.png";

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
  data() {
    return {
      mainBg,
    }
  },
}
</script>
