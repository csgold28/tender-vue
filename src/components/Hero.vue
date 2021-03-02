<template>
  <div class="hero">

    <!-- dekstop -->
    <div class="d-none d-md-block">
        <div class="row mt-5">
            <div class="col-md-6">
                <div class="d-flex h-100">
                    <div class="justify-content-center align-self-center">
                        <h2><strong>Sistem Info Tender LPSE</strong></h2>
                        <p>Ayo.. segara pilih tender LPSE se-indonesia dan ikut tender sesuai dengan Bidang Usaha Kamu.</p>
                        <router-link class="btn btn-lg btn-success" to="/tenderlpse"><b-icon-search></b-icon-search> Cari Sekarang</router-link>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <img src="../assets/images/hero.png" width="100%">
            </div>
        </div>
    </div>
        
    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
         <div class="row mt-5">
             <div class="col-md-6 mb-4">
                <img src="../assets/images/hero.png" width="100%">
            </div>
            <div class="col-md-6">
                <div class="d-flex h-100">
                    <div class="justify-content-center align-self-center">
                        <h2><strong>Sistem Info Tender LPSE</strong></h2>
                        <p>Ayo.. segara pilih tender LPSE se-indonesia dan ikut tender sesuai dengan Bidang Usaha Kamu.</p>
                        <router-link class="btn btn-lg btn-success" to="/tenderlpse"><b-icon-search></b-icon-search> Cari Sekarang</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Hero'
}
</script>

<style>

</style>