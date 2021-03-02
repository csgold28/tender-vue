<template>
  <div class="tender-lpse">
    <Navbar />
    <div class="container">
      <DatatenderLPSE/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import DatatenderLPSE from "@/components/DatatenderLPSE.vue";
export default {
  name: "TenderLPSE",
  components: {
    Navbar,
    DatatenderLPSE,
  },
};
</script>

<style>
</style>