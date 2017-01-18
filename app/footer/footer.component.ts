import { Component } from '@angular/core';

@Component({
  selector: 'footer-component',
  template: `
  <div class="footer-spacer"></div>
  <footer class="footer">
    <div class="container">
      <div class="col-md-4">
        <h2 class="title">Likus Hotele i Restauracje</h2>
        <p>
          <a href="http://www.podroza.hotel.com.pl" target="_blank"><img src="http://stary.hotel.com.pl/images/Roza/stopka/LOGO_PR.png"></a>
          <a href="http://www.stary.hotel.com.pl" target="_blank"><img src="http://stary.hotel.com.pl/images/Roza/stopka/stary.png"></a>
          <a href="http://www.grand.hotel.com.pl" target="_blank"><img src="http://stary.hotel.com.pl/images/Roza/stopka/logo_grand_final.png"></a>
          <a href="http://www.monopolkatowice.hotel.com.pl" target="_blank"><img src="http://stary.hotel.com.pl/images/Roza/stopka/LOGO_MONOPOL_OK.png"></a>
          <a href="http://www.monopolwroclaw.hotel.com.pl/" target="_blank"><img src="http://stary.hotel.com.pl/images/Roza/stopka/HMW_logo.png"></a><br>
        </p>
        <p>book online: <a href="http://www.lhr.com.pl" target="_blank">www.lhr.com.pl</a></p>
      </div>
      <div class="col-md-4">
        <h2 class="title">Szybki Kontakt</h2>
        ul. Kanonicza 16 <br>
        tel: + 48 12 424 34 00<br>
        fa: +48 12 424 34 05  <br>
        <a href="mailto:panoramaaaa@hotel.com.pl">panorama@hotel.com.pl </a><br><br>
        
        <a target="_blank" href="https://www.facebook.com/"><img src="http://www.stary.hotel.com.pl/images/Roza/stopka/fb.png" alt="fb.png" border="0" height="22" width="22"></a> 
		    <a target="_blank" href="http://pl.tripadvisor.com/"><img src="http://www.stary.hotel.com.pl/images/Roza/stopka/badge_32x32_GREEN-14347-2.png" alt="trip.png" border="0" height="22" width="22"></a> 
		    <a target="_blank" href="https://plus.google.com/"><img src="http://www.stary.hotel.com.pl/images/Roza/stopka/gplus.png" alt="gplus.png" border="0" height="22" width="22"></a> 
		    <a href="http://pinterest.com/" target="_blank"><img src="http://www.stary.hotel.com.pl/images/Roza/stopka/big-p-button.png" alt="Follow Me on Pinterest" height="22" width="22"></a> 
		    <a href="http://www.youtube.com/" target="_blank"><img src="http://www.stary.hotel.com.pl/images/Roza/stopka/yt.png" alt="yt.png" border="0" height="22" width="22"></a>
      </div>
      <div class="col-md-4">
       <h2 class="title">Polecane strony</h2>
         <a href="http://www.vinoteka13.pl" target="_blank">www.vinoteka13.pl</a><br>
         <a href="http://www.delikatesy13.pl" target="_blank">www.delikatesy13.pl</a><br>
         <a href="http://www.pasaz-13.pl" target="_blank">www.pasaz-13.pl</a><br>
         <a href="http://www.vitkac.com" target="_blank">www.vitkac.com</a><br>
         <a href="http://www.likusrestauracje.pl" target="_blank">www.likusrestauracje.pl</a><br>
         <a href="http://www.gourmetfestival.pl" target="_blank">www.gourmetfestival.pl</a><br>
      </div>
      <!--<p class="text-muted">Place sticky footer content here.</p>-->
    </div>
  </footer>
`
})
export class FooterComponent  {
  name = 'Angular';

}
