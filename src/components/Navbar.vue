<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"
          ><strong>APLIKASI CEK TENDER</strong></router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <!-- <span class="navbar-toggler-icon"></span> -->
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/tenderlpse">Tender LPSE</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/lpse">LPSE</router-link>
            </li>
        </ul> -->
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="btn btn-xs btn-success" to="/bantuan"
                ><b-icon-question-circle></b-icon-question-circle> Pusat
                Bantuan</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>