<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-sm navbar-dark fixed-top">
        <div class="container">
          <router-link to="/" class="navbar-brand">
            <img src="./assets/beer.png" width="30" height="30"
                 class="d-inline-block align-top" alt="logo">
            적셔!
          </router-link>
          <div class="form-inline my-2 my-lg-0 mr-auto">
            <input class="form-control mr-sm-2"
                   type="search" placeholder="Search" aria-label="Search">
            <input class="btn btn-outline-warning my-2 my-sm-0"
                    type="button" value="Search">
          </div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Log In</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/signup" class="nav-link">Sign Up</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <router-view/>
    <footer>
      <p class="container">@ 2018 Copyright: Augustine</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    searchKeyword: '',
  }),
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Jua');

  .navbar-brand {
    font-family: 'Jua', sans-serif;
  }

  body {
    padding-top: 70px;
  }

  .navbar {
    background: #222222;
  }

  .nav-item::after {
    content: '';
    display: block;
    width: 0px;
    height: 2px;
    background: #fec400;
    transition: 0.2s;
  }

  .nav-item:hover::after {
    width: 100%;
  }

  .navbar-dark .navbar-nav .active > .nav-link,
  .navbar-dark .navbar-nav .nav-link.active,
  .navbar-dark .navbar-nav .nav-link.show,
  .navbar-dark .navbar-nav .show > .nav-link,
  .navbar-dark .navbar-nav .nav-link:focus,
  .navbar-dark .navbar-nav .nav-link:hover {
    color: #fec400;
  }

  .nav-link {
    padding: 15px 5px;
    transition: 0.2s;
  }

  footer {
    background-color: #222222;
    height: 60px;
  }

  footer p {
    color: #fec400;
    text-align: center;
    padding-top: 17px;
  }
</style>
