<template lang="pug">
div(:class="$style.loading")
   img(:class="$style.lodaing_image", src="@/assets/images/loading.png")
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
   name: "v-loading-wheel",
});
</script>

<style lang="scss" module>
.loading {
   width: 30px;
   height: 30px;
   padding: 5px;

   &>.lodaing_image {
      animation: rotate 5s infinite linear;
   }
}

@keyframes rotate {
   from {
      transform: rotate(0deg);
   }

   to {
      transform: rotate(360deg);
   }
}
</style>