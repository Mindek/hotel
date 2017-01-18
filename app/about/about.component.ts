import { Component } from '@angular/core';

@Component({
    selector: 'about',
    template: `
<div class="container">
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>
  
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src="http://www.thefloridahotelorlando.com/var/floridahotelorlando/storage/images/media/images/photo-gallery/hotel-images/florida-hotel-orlando-night/27177-1-eng-US/Florida-Hotel-Orlando-Night.jpg" alt="Front Hotel View">
        <div class="carousel-caption">
          Florida hotel is the only one six stars Hotel in Florida.
        </div>
      </div>
      <div class="item">
        <img src="http://city360.com.pl/wp-content/uploads/2016/06/44.jpg" alt="Room preview">
        <div class="carousel-caption">
          You will met highest standard in our rooms, restaurants and bar.
        </div>
      </div>
      <div class="item">
        <img src="http://www.litorehotel.com/web/en/images/placeholders/1920x1200-0.jpg" alt="Pool preview">
        <div class="carousel-caption">
          Our visitors will not be bored because of number of attractions and entertainments.
        </div>
      </div>
    </div>
  
    <!-- Controls -->
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <!--<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>-->
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <!--<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>-->
      <span class="sr-only">Next</span>
    </a>  
  </div>
  
  <div class="row first-panel">
    <div class="col-md-6">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Królewskie miasto Kraków</h3>
        </div>
        <div class="panel-body">Witając Państwa w Królewskim Mieście Krakowie serdecznie zapraszamy do Hotelu Panorama**, położonego zaledwie 3 km od Wawelu i Starego Miasta, 1,5 km od Sanktuarium Miłosierdzia Bożego w Łagiewnikach oraz 1,5 km od Kampusu Uniwersytetu Jagiellońskiego.
W pobliżu hotelu znajduje się całodobowy market Tesco, jezioro Zakrzówek oraz Park Skałki Twardowskiego.</div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Lokalizacja</h3>
        </div>
        <div class="panel-body">O atrakcyjnej lokalizacji Hotelu Panorama stanowi również bezpośredni dostęp do węzła komunikacyjnego umożliwiającego łatwy dojazd do dowolnie wybranego miejsca w Krakowie, Kopalni Soli w Wieliczce czy trasy wylotowej z Krakowa w kierunku Zakopanego.
Dogodna lokalizacja hotelu pozwala na spokojny wypoczynek i zarazem uniknięcie zgiełku ruchliwego centrum.
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Script to Activate the Carousel -->
<script>
  $('.carousel').carousel({
    interval: 5000
  })
</script>
`
})
export class AboutComponent  {
    name = 'Angular';

}
