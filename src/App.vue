<template>
  <app-header />
  <router-view />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<style>
/* CSS Document */
/* @font-face {
  font-family: "kit55f-webfont";
  src: url("fonts/kit55f-webfont.eot");
  src: url("fonts/kit55f-webfont.eot?#iefix") format("embedded-opentype"),
    url("fonts/kit55f-webfont.woff") format("woff"),
    url("fonts/kit55f-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Pacifico";
  src: url("fonts/Pacifico.eot");
  src: url("fonts/Pacifico.eot?#iefix") format("embedded-opentype"),
    url("fonts/Pacifico.woff") format("woff"),
    url("fonts/Pacifico.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "kit75f";
  src: url("fonts/kit75f.eot");
  src: url("fonts/kit75f.eot?#iefix") format("embedded-opentype"),
    url("fonts/kit75f.woff") format("woff"),
    url("fonts/kit75f.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "kit65f-webfont";
  src: url("fonts/kit65f-webfont.eot");
  src: url("fonts/kit65f-webfont.eot?#iefix") format("embedded-opentype"),
    url("fonts/kit65f-webfont.woff") format("woff"),
    url("fonts/kit65f-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "PSL029_0";
  src: url("fonts/PSL029_0.eot");
  src: url("fonts/PSL029_0.eot?#iefix") format("embedded-opentype"),
    url("fonts/PSL029_0.woff") format("woff"),
    url("fonts/PSL029_0.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
} */
img {
  border: 0;
  margin: auto;
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}

body {
  background: #fff;
  font-family: "kit55f-webfont";
  font-size: 18px;
  color: #000;
}
.carousel-inner > .item > img {
  margin: auto;
  width: 100%;
}

.cleaner {
  clear: both;
  width: 100%;
  height: 0px;
}
.h30 {
  clear: both;
  width: 100%;
  height: 30px;
}
.h20 {
  clear: both;
  width: 100%;
  height: 20px;
}
.h10 {
  clear: both;
  width: 100%;
  height: 10px;
}

.pull-left {
  margin: 4% 0 0;
}
.navbar-toggle .icon-bar {
  width: 30px;
  height: 4px;
  border-radius: 2px;
}

/*///////////////////////////////////////////////////////////////////////////head///////////////////////////////////////////////////////////////////////////*/

/*///////////////////////////////////////////////////////////////////////////head///////////////////////////////////////////////////////////////////////////*/

.navbar-brand {
  position: relative;
}
.navbar-brand > img {
  top: 0em;
  width: 5em;
  position: absolute;
}
.navbar {
  border: 0;
  border-radius: 0;
  margin-bottom: 0;
}
.navbar-default {
  border-color: transparent;
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: top center;
  background-size: cover !important;
  background-image: url("~@/assets/images/bg-head.png");
}
.navbar-default .navbar-nav > li > a {
  color: #181818;
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #fff;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:focus,
.navbar-default .navbar-nav > .active > a:hover {
  color: #181818;
  background-color: #ffebff;
}
.navbar-default .navbar-nav > li > a:focus,
.navbar-default .navbar-nav > li > a:hover {
  color: #181818;
  background-color: #ffebff;
}
.navbar-default .navbar-toggle:focus,
.navbar-default .navbar-toggle:hover {
  background-color: transparent;
}
.navbar-default .navbar-toggle {
  border: 0;
}
.navbar-default .navbar-brand {
  color: #fff;
  font-size: 32px;
  line-height: 0.9;
  padding: 10px 0;
  text-align: center;
  letter-spacing: 1px;
  font-family: "Pacifico";
}
.navbar-default .navbar-brand .logofont-head {
  font-family: "kit75f";
  text-transform: uppercase;
}
.nav > li > a {
  font-size: 25px;
  font-family: "PSL029_0";
}
.navbar {
  min-height: 70px;
}

/*///////////////////////////////////////////////////////////////////////////head///////////////////////////////////////////////////////////////////////////*/

/*///////////////////////////////////////////////////////////////////////////content///////////////////////////////////////////////////////////////////////////*/
.bg-content {
  background-size: cover !important;
  background: url("~@/assets/images/bg-content.png") top center no-repeat;
}
.welcome-title {
  font-size: 45px;
  color: #222222;
  margin: 10px 0;
  font-family: "Pacifico";
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.4);
}
.welcome-namelogo {
  text-align: center;
  margin: 10px 0;
}
.about-title {
  color: #65533f;
  font-family: "kit75f";
  text-transform: uppercase;
}
.about-box-full {
  padding: 10px 10px 0;
  margin: 20px 0;
  background: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
}
.about-box {
  text-align: justify;
  color: #0b0b0b;
}
.contact-about {
  margin: 5px 0;
  color: #65533f;
  font-size: 15px;
  font-family: "kit65f-webfont";
}
.img-about {
  padding: 10px;
}
.service-title {
  font-size: 30px;
  color: #3c3c3c;
  text-transform: uppercase;
}
.line-color {
  border-bottom: 1px solid #3c3c3c;
  border-top: 0;
  margin: -10px 0 0;
}
.service-title .service-box {
  font-family: "kit75f";
}
.service-box {
  text-align: justify;
  color: #222222;
  font-size: 16px;
  line-height: 1;
  margin: 30px 0;
}
.fontblod-service {
  font-family: "kit65f-webfont";
}

/*///////////////////////////////////////////////////////////////////////////content///////////////////////////////////////////////////////////////////////////*/

/*///////////////////////////////////////////////////////////////////////////footer///////////////////////////////////////////////////////////////////////////*/

.bg-footer {
  background-size: cover !important;
  background: url("~@/assets/images/bg-footer.png") top center no-repeat;
}
.footer-title {
  padding: 5px;
  margin: 10px 0;
  color: #222222;
  font-family: "kit75f";
  font-size: 25px;
  text-transform: uppercase;
  background: url("~@/assets/images/footer-title-1.png") left center no-repeat;
}
.addess-footer {
  color: #fff;
  padding: 0 14px 0 0;
}
.footer-title.-tite-2 {
  background: url("~@/assets/images/footer-title-2.png") left center no-repeat;
}
.footer-title.-tite-3 {
  background: url("~@/assets/images/footer-title-3.png") left center no-repeat;
}
.social-footer a {
  padding: 0 3px;
}
.contact-footer a {
  color: #fff;
  display: block;
}
.contact-footer a.-spac-footer {
  padding-left: 17%;
}
.contact-footer .fontblod-service {
  text-transform: uppercase;
}
.copyright {
  color: #fff;
}
.copyright a {
  color: #fff;
}
.navbar-default .navbar-brand:focus,
.navbar-default .navbar-brand:hover {
  color: #fff;
}
.bx-wrapper .bx-pager {
  z-index: 999;
}
/*///////////////////////////////////////////////////////////////////////////footer///////////////////////////////////////////////////////////////////////////*/

/*///////////////////////////////////////////////////////////////////////////media///////////////////////////////////////////////////////////////////////////*/

@media (max-width: 767px) {
  body {
    max-width: 100% !important;
  }
  .navbar-collapse {
    position: fixed;
    width: 250px;
    background: #fff;
    height: 100vh !important;
    max-height: none !important;
    top: 0;
    display: block;
    left: -250px;
    margin: 0 !important;
    z-index: 9999;
  }
  .navbar-collapse.in {
    left: 0 !important;
  }
  .all-container {
    width: 100%;
  }
  .all-container.-collapse {
    margin-left: 250px;
  }
  .navbar-default,
  .navbar-collapse,
  .navbar-collapse.collapsing,
  .all-container.all-container.all-container {
    transition: all 0.5s !important;
  }
  .navbar-default.-collapse {
    margin-left: 250px;
    width: 100%;
  }
}
/*///////////////////////////////////////////////////////////////////////////top-title///////////////////////////////////////////////////////////////////////////*/
.top-title-gray {
  border-bottom: 2px solid #999;
}
.top-title-brown {
  color: #5e401c;
}
.font-gray {
  color: #303030;
}
.box-shadow {
  box-shadow: 0 0 17px rgba(0, 0, 0, 0.4);
}
.font24 {
  font-size: 24px;
}
.border-bottom {
  border-bottom: 6px solid #999;
}

.course-img {
}
.course-img img {
  width: 100%;
  border: 1px solid #dfdfdf;
  border-radius: 50%;
  padding: 14px;
}
.course-img:hover img {
  border: 15px solid #dfdfdf;
  padding: 0px;
  transition: all 0.3s;
}
.bg-payment {
  background: url("~@/assets/images/bg-payment.png") bottom right no-repeat;
}
.line {
  border-bottom: 1px solid #000;
}
ul.contact-list li {
  list-style: none;
}
.right {
  float: right;
}
.font-larger {
  font-size: larger;
}

@media (max-width: 414px) {
  .font24 {
    font-size: 20px;
  }
  .font24 h1 {
    font-size: 32px;
  }
  .font24 h2 {
    font-size: 30px;
  }
}
</style>
