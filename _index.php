<?php

  require('mailing.php');
  $MailSend = new Mailing();

  if(isset($_POST['submit']))
  {
    if($_POST['name'] != "" && $_POST['text'] != "" && $_POST['subject'] != "")
    {
      $text = $_POST['text'];
      $headers = "MIME-Version: 1.0" . "\r\n";
      $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
      $headers .= 'From: <' . $_POST['name'] . '>' . "\r\n";
      $text = wordwrap($text, 70);

      $MailSend->sendMail("radek.vele@seznam.cz", $_POST['subject'],
        $text, $headers);
    }
  }
?>
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale-1">
  <link rel="stylesheet" href="style/reset.css">
  <link rel="stylesheet" href="style/layout.css">
  <link rel="stylesheet" href="style/main.css">
  <title>Radek Véle - obkladač</title>
 </head>
 <body>
  <section class="introduction">
   <header class="picture">
    <p class="company"><i>Radek Véle - Obkladač</i></p>
   </header>
   <ul class="menu">
    <li class="dropMenu">
     <div class="backThreeLine">
      <img class="threeLine" src="img/menuPic.png" alt="menu">
     </div>
     <ul class="hiddenMenu">
      <li class="intro"><a href="#">Úvod</a></li>
      <li class="serv"><a href="#">Služby</a></li>
      <li class="galler"><a href="#">Fotogalerie</a></li>
      <li class="conta"><a href="#">Kontakt</a></li>
     </ul>
    </li>
   </ul>   
   <p class="aboutMe">Naše společnost s dlouholetou tradicí a zkušeností v zahraničí Vám nabízí kvalitní služby v oboru zednických, obkladačských, sádrokartonářských prací, zateplování budov, rekonstrukcí bytových jader, půdních vestaveb apod.. 
   <br>Jsme Vám plně k dispozici.
   </p>
  </section>
  <section class="service">
    <div class="obal">
      <p class="mainParagraph">Co nabízíme?</p>
      <div class="fasady">
        <img src="img/fasada.jpg" alt="fasáda" class="fasada">
        <p class="first">Stavebně zednické práce</p>
        <p class="serviceText">Stavby a rekonstrukce RD a bytů, montáž sádrokartonu, stavby plotů a zídek, půdní vestavby a osazování bazénů do terénu.</p>
      </div>
      <div class="zatepleni">
        <img src="img/zatepleni.JPG" alt="zateplení" class="zatepl">
        <p class="first">Zateplování fasád</p>
        <p class="serviceText">- systém STO, - systém BAUMIT</p>
      </div>
      <div class="dlazby">
        <img src="img/dlazba.jpg" alt="dlažby" class="dlazba">
        <p class="first">Obkladačské a zednické práce</p>
        <p class="serviceText">Montáž obkladů a dlažeb ve standartním i luxusním provedení, rekonstrukce koupelen a bytových jader na klíč, montáž obkladů a dlažeb všeho druhu.</p>
      </div>
    </div>
  </section>
  <section id="gallery" class="gallery">
  	
  </section>
  <section class="contact">
  	<form method="post" action="">
      <input class="name" name="name" type="text" placeholder=" Váš email" />
      <input class="subject" name="subject" type="text" placeholder=" Předmět" />
      <textarea class="text" name="text" placeholder=" Text zprávy"></textarea>
      <input class="submit" name="submit" type="submit" value="Odeslat">      
    </form>
    <div class="obal2">
      <div class="map"></div>
      <div class="cont">
        <div class="bloky">
          <img class="email" src="img/message.png" alt="email">
          <p class="mail">radek.vele@seznam.cz</p>
        </div>
        <div class="bloky">
          <img class="phone" src="img/phone.png" alt="telefon">
          <p class="cislo">604 865 776</p>
        </div>
        <div class="bloky">
          <img class="address" src="img/address.png" alt="adresa">
          <p class="adresa">F.L. Čelakovského 4269/5 <br>Jablonec nad Nisou 466 04</p>
        </div>   
      </div>
    </div>
    <footer>
    <p>Copyright &copy; 2015 Daniel Véle</p>
  </footer>
  </section>
  <script src="js/jquery-1.11.1.min.js"></script>
  <script type="text/javascript" src="js/javascript.js"></script>
  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2-zaTxpBbby9DrJIpBPKUzao1nXw3d4E"></script>
 </body>
</html>