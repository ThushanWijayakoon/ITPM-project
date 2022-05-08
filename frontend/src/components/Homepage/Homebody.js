import React from "react";

function Homebody(){
    return(
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="https://static01.nyt.com/images/2019/02/03/travel/03frugal-srilanka01/merlin_148552275_74c0d250-949c-46e0-b8a1-e6d499e992cf-superJumbo.jpg" class="d-block w-100" alt="Trees in water colours"/>
        </div>
        <div class="carousel-item">
        <img src="https://i.natgeofe.com/n/d6bd5cdc-528f-4887-9cc3-3fb4e10d6651/sri-lanka-travel.jpg" class="d-block w-100" alt="A tree from pastels"/>
        </div>
        <div class="carousel-item">
        <img src="https://www.stokedtotravel.com/wp-content/uploads/2019/05/IMG_5379-1000x667.jpg"  class="d-block w-100" alt="Beautiful swan in a lake"/>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
    )
}

export default Homebody