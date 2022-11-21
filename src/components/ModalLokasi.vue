<template>
    <teleport to="body">
      <div
        ref="modal-backdrop"
        class="fixed z-20 inset-0 overflow-y-auto bg-black bg-opacity-60 backdrop-blur"
      >
        <div
          class="flex items-center justify-center min-h-screen text-center"
        >
          <div
            class="bg-black bg-opacity-75 backdrop-blur text-white rounded-lg overflow-hidden shadow-xl w-modal space-y-0.5 relative"
            role="dialog"
            ref="modal"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div class="p-1 space-y-0.75">
                <div class="font-bold">Lokasi Majlis</div>
                <div class="text-sm">
                    Noor Arfa Craft Complex Batik Pavilion
                    Lot 4153, Kawasan Perindustrian Chendering,
                    21080, Kuala Terengganu, Terengganu
                </div>
                <!-- <div class="rounded overflow-hidden">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.91240516424!2d103.16502301476471!3d5.27635349617203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31b7beecdfa13e6b%3A0x528623c650d738e4!2sNoor%20Arfa%20Craft%20Complex!5e0!3m2!1sen!2smy!4v1669033198605!5m2!1sen!2smy" width="100%" height="180" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div> -->
                <div class="flex w-full items-center justify-center space-x-1">
                    <div>
                        <a href="https://waze.com/ul?ll=5.276524430147474, 103.16727607032999&navigate=yes">
                            <img class="w-icon h-icon rounded-md" src="../assets/img/waze.png" alt="">
                        </a>
                    </div>
                    <div>
                        <a href="https://www.google.com/maps/?q=5.276492380030661,103.16723315498588">
                            <img class="w-icon h-icon rounded-md" src="../assets/img/google-maps.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
            <div class="w-full border-t border-white border-opacity-25">
                <button class="block w-full py-0.75 text-gold" @click="$emit('close')">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </teleport>
</template>

<script setup>
// import wazeUrl from "./../assets/img/waze.png";
</script>

<script>
export default {
  name: 'ModalLokasi',
};
</script>