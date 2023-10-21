import Slider from "react-slick";

function TeamSlider3() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
		arrows: false,
		speed:3500,
		responsive: [
			
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				dots: true,
				
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				
			  }
			},
		]
    };
    return (
        <>
            <Slider
                {...settings}
                className="team-carousel2 owl owl-carousel owl-none owl-theme owl-dots-primary-full"
            >
				<div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
					<div className="dlab-team style-2 m-b10">
						<div className="dlab-media">
							<img src="images/team/small/pic1.jpg" alt=""/>
						</div>
						<div className="dlab-content">
							<div className="clearfix">
								<h3 className="dlab-name"><a href="/team-3">John Doe</a></h3>
								<span className="dlab-position">Senior Designer</span>
							</div>
						</div>
					</div>
				</div>
				
				
				
			
			
				
				
				
				
				
				
						
            </Slider>
        </>
    );
}

export default TeamSlider3;
