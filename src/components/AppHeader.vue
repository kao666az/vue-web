<template>
  <body>
    <nav class="navbar navbar-default">
      <div class="-contact-head hidden-xs">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-sm-offset-4">
              <div class="tagling-head">
                Wet Cleaning & Laundry
              </div>
            </div>
            <div class="col-sm-4">
              <div class="callnumber-head">
                <i class="fa fa-phone color-icon" aria-hidden="true"></i>
                <a>081-849-2230</a>
              </div>
              <div class="follow-head">
                follow us:
                <a><img src="~@/assets/images/icon-fb.png"/></a>
                <a><img src="~@/assets/images/icon-line.png"/></a>
                <a><img src="~@/assets/images/icon-tw.png"/></a>
                <a><img src="~@/assets/images/icon-yt.png"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed pull-left"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand">
            อี๊ฟ&เอฟ
            <div class="logofont-head">laundry</div>
            <hr class="line-logo hidden-xs" />
          </a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li class="active">
              <router-link to="/"
                >หน้าแรก <span class="sr-only">(current)</span></router-link
              >
            </li>
            <li class="">
              <router-link to="/Payment">ค่าบริการ</router-link>
            </li>
            <li class="">
              <router-link to="/Course">อบรมซักอบรีด</router-link>
            </li>
            <li class="">
               <router-link to="/Service">บริการลูกค้า</router-link>
            </li>
            <li class="">
              <router-link to="/Contact">ติดต่อเรา</router-link>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
      <div class="h10 hidden-xs"></div>
    </nav>
  </body>
</template>
