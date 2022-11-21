<template>
    <teleport to="body">
      <div
        ref="modal-backdrop"
        class="fixed z-20 inset-0 overflow-y-auto  backdrop-blur"
      >
        <div
          class="flex items-center justify-center min-h-screen text-center"
        >
          <div
            class="bg-black bg-opacity-90 backdrop-blur text-white rounded-lg overflow-hidden shadow-xl w-modal space-y-0.5 relative"
            role="dialog"
            ref="modal"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div class="p-1 space-y-0.75">
                <div class="font-bold">Hubungi</div>
                <div class="w-full space-y-0.5 text-base">
                    
                    <div class="flex w-full items-center justify-between bg-white bg-opacity-10 rounded px-1 py-0.5">
                        <div class="font-medium text-left space-y-0.25">
                            <div>En. Yusof</div>
                            <div class="italic text-xs font-light">Bapa Pengantin</div>
                        </div>
                        <div class="flex items-center space-x-0.75">
                            <div>
                                <a href="tel:+6013-9509127">
                                    <img class="w-call h-call rounded-xl -rotate-90" src="../assets/img/call.jpeg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="https://wa.me/60139509127" target="_blank">
                                    <img class="w-call h-call rounded-xl" src="../assets/img/whatsapp.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex w-full items-center justify-between bg-white bg-opacity-10 rounded px-1 py-0.5">
                        <div class="font-medium text-left space-y-0.25">
                            <div>Pn. Malina</div>
                            <div class="italic text-xs font-light">Ibu Pengantin</div>
                        </div>
                        <div class="flex items-center space-x-0.75">
                            <div>
                                <a href="tel:+6019-3146559">
                                    <img class="w-call h-call rounded-xl -rotate-90" src="../assets/img/call.jpeg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="https://wa.me/60193146559" target="_blank">
                                    <img class="w-call h-call rounded-xl" src="../assets/img/whatsapp.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex w-full items-center justify-between bg-white bg-opacity-10 rounded px-1 py-0.5">
                        <div class="font-medium text-left space-y-0.25">
                            <div>Asmiera</div>
                            <div class="italic text-xs font-light">Kakak Pengantin</div>
                        </div>
                        <div class="flex items-center space-x-0.75">
                            <div>
                                <a href="tel:+6013-9314187">
                                    <img class="w-call h-call rounded-xl -rotate-90" src="../assets/img/call.jpeg" alt="">
                                </a>
                            </div>
                            <div>
                                <a href="https://wa.me/60139314187" target="_blank">
                                    <img class="w-call h-call rounded-xl" src="../assets/img/whatsapp.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="w-full border-t border-white border-opacity-25">
                <button class="block w-full py-0.75 text-red font-semibold" @click="$emit('close')">Close</button>
            </div>
          </div>
        </div>
      </div>
    </teleport>
</template>

<script>
export default {
  name: 'ModalHubungi',
};
</script>