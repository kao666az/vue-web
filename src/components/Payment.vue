<template>
  <body>
    <div class="all-container">
      <div class="">
        <div class="container">
          <div class="row">
            <div class="col-xs-12  font-gray font24">
              <h1
                class="top-title-gray text-center"
                data-scroll-reveal="enter from the top after .7s"
              >
                <span class="border-bottom">ค่าบริการ</span>
              </h1>
              <div class="cleaner h20"></div>
              <h1><strong>ค่าบริการซักแห้ง / ซัก อบ รีด</strong></h1>
              <div
                class="col-xs-12 col-md-12 bg-payment font-large"
                data-scroll-reveal="enter from the right after .7s"
              >
                <div class="col-xs-12 col-md-4 col-lg-2">
                  <strong>Laundry Package </strong>
                </div>
                <div class="col-xs-12 col-md-8 col-lg-10">
                  : เสื้อผ้าประจำวัน 100 ชิ้นต่อเดือน (For 100 Pcs clothing per
                  Month)
                  <br />ไม่รวมเครื่องนอน ผ้าขนหนู และผ้าซักแห้ง หรือผ้าพิเศษ
                </div>
                <div class="cleaner h10"></div>
                <div class="col-xs-12 col-md-4 col-lg-2">
                  <strong>ลูกค้ารับ-ส่งเอง</strong>
                </div>
                <div class="col-xs-12 col-md-8 col-lg-10">
                  เดือนละ 3,000 บาท (3,000 Bht/Month)
                </div>
                <div class="cleaner h10"></div>
                <div class="col-xs-12 col-md-4 col-lg-2">
                  <strong>บริการรับ-ส่ง (Delivery/Pick up)</strong>
                </div>
                <div class="col-xs-12 col-md-8 col-lg-10">
                  เดือนละ 3,500 บาท (3,500 Bht/Month)
                </div>
                <div class="cleaner h10"></div>
                <div class="col-xs-12 col-md-12">
                  <strong>บริการรับส่ง เขตบางนา ศรีนครินทร์ สุขุมวิท</strong>
                </div>
                <div class="cleaner h10"></div>
              </div>
              <!--col-xs-12 col-md-12-->
              <div class="cleaner h20"></div>
              <div class="line"></div>

              <div class="cleaner h20"></div>
              <div
                class="col-xs-12 col-md-12 text-center"
                data-scroll-reveal="enter from the top after .7s"
              >
                <h1><strong>ค่าบริการเป็นรายชิ้น (Price per Piece)</strong></h1>
                <div class="cleaner h10"></div>
                <img src="~@/assets/images/table.png" class="img-responsive" />
              </div>
              <div class="cleaner h20"></div>
            </div>
            <div class="cleaner h10"></div>
          </div>
          <!--row-->
        </div>
        <!--container-->
      </div>
      <!--bg-content-->

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
                Online : 4 l Today : 95 l Total : 109,933
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Paymentpang'
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
