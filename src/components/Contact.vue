<style>
#map {
  width: 100%;
  height: 250px;
  box-shadow: 1px 1px 2px #c4c4c4;
  border: 1px solid #666;
  overflow: hidden;
  text-align: center;
}

#map2 {
  width: 100%;
  height: 250px;
  text-align: center;
  box-shadow: none;
  border: none;
}

#map2 img {
  max-width: 100%;
  height: 100%;
  box-shadow: 1px 1px 2px #c4c4c4;
  border: 1px solid #666;
}
</style>

<template>
  <body>
    <div class="all-container">
      <div class="">
        <!--bg-content-->
        <div class="container">
          <div class="font-gray font24">
            <div class="clearfix h20"></div>
            <ul class="col-xs-12 col-lg-6  contact-list">
              <h1 class=" top-title-brown">ร้าน White Rose – ไวท์โรส</h1>
              <div class="cleaner h10"></div>
              <li>
                <span class="list-image"><i class="fa fa-map-marker"></i></span>
                <div class=" right" style="width:96%;">
                  ชั้น 2 อาคารศุภาลัยปาร์ค (ตึก B) ถนนศรีนครินทร์ แขวงหนองบอน
                  เขตประเวศ กรุงเทพ 10250
                </div>
              </li>
              <div class="cleaner"></div>
              <li>
                <span class="list-image"><i class="fa fa-phone"></i></span>
                โทรศัพท์ : 02-361-9380 , 081-849-2230
              </li>
              <li>
                <span class="list-image"><i class="fa fa-qrcode"></i></span>
                Line ID:
                <a href="http://line.me/ti/p/~nucharee5342" target="_blank"
                  >nucharee5342</a
                >
              </li>
              <li>
                <span class="list-image"
                  ><i class="fa fa-facebook-square"></i
                ></span>
                Facebook :
                <a
                  href="https://www.facebook.com/nuch5342/about/?ref=page_internal"
                  target="_blank"
                  >White Rose Laundry</a
                >
              </li>
              <!-- <div class="cleaner h10"></div>
              <div style="width:100%">
                <strong>Google Map </strong><br />
                <div class="map" id="map"></div>
              </div>
              <div class="cleaner h10"></div> -->
            </ul>

            <div class="col-xs-12 col-lg-6 contact-form">
              <div class="topic-title">
                <span class="bg-white"
                  ><i class="fa fa-paper-plane"></i> ส่งข้อความติดต่อเรา
                </span>
              </div>
              <div class="cleaner h10"></div>
              <form
                class="well form-horizontal"
                action="sendemail.php"
                id="form1"
                method="post"
              >
                <fieldset>
                  <legend class="contact-title-1">Contact Form</legend>
                  <div class="form-group">
                    <label class="col-md-4 control-label">ชื่อเรื่อง</label>
                    <div class="col-md-8 inputGroupContainer">
                      <div class="input-group">
                        <span class="input-group-addon"
                          ><i class="glyphicon glyphicon-home"></i
                        ></span>
                        <input
                          name="subject"
                          placeholder="ชื่อเรื่อง"
                          class="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <!--form-group-->
                  <div class="form-group">
                    <label class="col-md-4 control-label">ชื่อ - สกุล</label>
                    <div class="col-md-8 inputGroupContainer">
                      <div class="input-group">
                        <span class="input-group-addon"
                          ><i class="glyphicon glyphicon-user"></i
                        ></span>
                        <input
                          name="name"
                          placeholder="ชื่อ - สกุล"
                          class="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <!--form-group-->
                  <div class="form-group">
                    <label class="col-md-4 control-label">E-mail</label>
                    <div class="col-md-8 inputGroupContainer">
                      <div class="input-group">
                        <span class="input-group-addon"
                          ><i class="glyphicon glyphicon-envelope"></i
                        ></span>
                        <input
                          name="email"
                          placeholder="E-mail"
                          class="form-control"
                          type="email"
                        />
                      </div>
                    </div>
                  </div>
                  <!--form-group-->
                  <div class="form-group">
                    <label class="col-md-4 control-label">โทรศัพท์</label>
                    <div class="col-md-8 inputGroupContainer">
                      <div class="input-group">
                        <span class="input-group-addon"
                          ><i class="glyphicon glyphicon-earphone"></i
                        ></span>
                        <input
                          name="telephone"
                          placeholder="โทรศัพท์"
                          class="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <!--form-group-->
                  <div class="form-group">
                    <label class="col-md-4 control-label">ข้อความ</label>
                    <div class="col-md-8 inputGroupContainer">
                      <div class="input-group">
                        <span class="input-group-addon"
                          ><i class="glyphicon glyphicon-pencil"></i
                        ></span>
                        <textarea
                          class="form-control"
                          name="message"
                          placeholder="ข้อความ"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <!--form-group-->
                  <div class="form-group">
                    <label class="col-md-4 control-label"></label>
                    <div class="col-md-8">
                      <!--<button type="reset" class="btn btn-warning">Reset <span class="glyphicon glyphicon-send"></span></button>-->
                      <button type="submit" class="btn btn-info  pull-right">
                        Send <span class="glyphicon glyphicon-send"></span>
                      </button>
                      &nbsp;
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <!--contact-form-->

            <div class="cleaner"></div>
          </div>
          <!--display-->
          <div class="cleaner"></div>
        </div>
      </div>

      <div class="bg-footer">
        <div class=" container">
          <div class="row">
            <div class="col-xs-12 col-sm-4 bg-gooter-right">
              <div class="footer-title">
                ร้าน White Rose ไวท์โรส
              </div>
              <div class="addess-footer">
                ชั้น 2 อาคารศุภาลัยปาร์ค (ตึก B) ถนนศรีนครินทร์ แขวงหนองบอน
                เขตประเวศ กรุงเทพ 10250
              </div>
              <div class="copyright">
                Copyright 2016 www.responsive-demos.com Powered by
                <a href="http://www.baanwebsite.com" target="_blank"
                  >บ้านเว็บไซต์</a
                >
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 bg-gooter-right">
              <div class="footer-title  -tite-3">
                contact
              </div>
              <div class="contact-footer">
                <a href="tel:023619380"
                  ><span class="fontblod-service">Hotline : </span
                  >02-361-9380</a
                >
                <a href="tel:0818492230" class="-spac-footer"> 081-849-2230</a>
                <a href="http://line.me/ti/p/~nucharee5342" target="_blank"
                  ><span class="fontblod-service">Line ID :</span>
                  nucharee5342</a
                >
                <a
                  href="https://www.facebook.com/pg/nuch5342/about/?ref=page_internal"
                  target="_blank"
                  ><span class="fontblod-service">facebook :</span> White Rose
                  Laundry</a
                >
              </div>
            </div>
            <div class="col-xs-12 col-sm-4">
              <div class="footer-title -tite-2">
                Follow us:
              </div>
              <div class="social-footer">
                <a
                  href="https://www.facebook.com/pg/nuch5342/about/?ref=page_internal"
                  target="_blank"
                  class="hvr-grow"
                  ><img src="~@/assets/images/icon-fb.png"
                /></a>
                <a
                  href="http://line.me/ti/p/~nucharee5342"
                  target="_blank"
                  class="hvr-grow"
                  ><img
                    src="~@/assets/images/icon-line.png"
                /></a>
                <a href="https://twitter.com/" target="_blank" class="hvr-grow"
                  ><img src="~@/assets/images/icon-tw.png"
                /></a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  class="hvr-grow"
                  ><img src="~@/assets/images/icon-yt.png"
                /></a>
              </div>
              <div class="copyright -online-footer">
                Online : 1 l Today : 8 l Total : 110,854
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
  <!-- <script type="text/javascript">
    $(function() {
      $("#captcha-refresh").click(function() {
        $(".verify-code").attr(
          "src",
          "../contact-us/verify-image-bg.php?rnd=" + Math.random()
        );
        //console.log($(this));
        return false;
      });

      $(".fancybox").fancybox();
    });
  </script> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Contactpang'
})
</script>
<style>
.font-large {
  font-size: 26px;
}

@media (max-width: 414px) {
  .font-large {
    font-size: 22px;
  }
}
</style>
