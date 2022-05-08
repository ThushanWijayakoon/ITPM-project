import React from "react";
import './membership.css'

function Membership(){
    return(
           

<section id="pricing" className="pricing-content section-padding">
	<div class="container">					
		<div class="section-title text-center">
			<h1>Membership</h1>
			<p>Choose Your Choice</p>
		</div>					
		<div class="row text-center">									
			<div class="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
				<div class="single-pricing">
					<div class="price-head">								
						<h2>Free</h2>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<h1 class="price">$0</h1>
					<h5></h5>
					<ul>
						<li>visit our website</li>
						
					</ul>
					<a href="#">Register Free</a>
				</div>
			</div>
			<div class="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0">
				<div class="single-pricing">
					<div class="price-head">								
						<h2>Premium</h2>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<h1 class="price">$7</h1>
					<h5>Monthly</h5>
					<ul>
						<li>Visit our website</li>
						<li>Buy our services</li>
						
					</ul>
					<a href="#">Purchase Now</a>
				</div>
			</div>
			<div class="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
				<div class="single-pricing single-pricing-white">
					<div class="price-head">								
						<h2>Business</h2>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<span class="price-label">Best</span>
					<h1 class="price">$20</h1>
					<h5>Monthly</h5>
					<ul>
					    <li>Visit our website</li>
						<li>Buy our services</li>
						<li>Promote your Business</li>
					</ul>
					<a href="#">Purchase Now</a>
				</div>
			</div>		  
		</div>
	</div>
</section>
    )
}

export default Membership;