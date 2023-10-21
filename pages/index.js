import { useEffect } from "react";
import PricingT3 from "../component/pricingTable-3";
import AboutUs3 from "../element/aboutUs-3";
import GetInTouch3 from "../element/get-in-touch";
import Newsletter3 from "../element/newsletter-3";
import Features3 from "../element/our-features-3";
import Projects3 from "../element/Projects-3";
import Service3 from "../element/service-3";
import Slider3 from "../element/slider-3";
import Team3 from "../element/team-3";
import Testimonial3 from "../element/testimonial-3";
import Blog3 from "./../element/blog-3";
import Clients3 from "./../element/clients-3";
import Footer3 from "./../layout/footer-3";
import Header3 from "./../layout/header-3";

function Index3() {
 
  return (
    <>
      <Header3 />
      <div className="page-content bg-white" id="top">
        <Slider3 />
        {/* <Service3 /> */}
        {/* <AboutUs3 /> */}
        {/* <Features3 /> */}
        {/* <Projects3 /> */}
        {/* <Newsletter3 /> */}
        {/* <Team3 /> */}
        {/* <PricingT3 /> */}
        {/* <Testimonial3 /> */}
        {/* <Blog3 /> */}
        {/* <Clients3 /> */}
        <GetInTouch3 />
        <Footer3 />
      </div>
    </>
  );
}

export default Index3;
function YourPage({ data }) {
  // Your page component code here
}

export async function getServerSideProps() {
  try {
    // Set your authorization token
    const authToken = '1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5';

    // Define the API endpoint URL
    const apiUrl = 'https://aecstrapi-askn4.ondigitalocean.app/api/temple-lists?populate=*';

    // Create headers object with the authorization header
    const headers = {
      Authorization: `Bearer ${authToken}`,
    };

    // Make the request to the API endpoint with the authorization header
    const response = await fetch(apiUrl, { headers });

    // Check if the response status code is OK (200)
    if (response.status === 200) {
      const data = await response.json();
      return {
        props: {
          data,
        },
      };
    } else {
      console.error('Error fetching data:', response.status);
      return {
        props: {
          data: null, // You can handle the error gracefully
        },
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: null, // You can handle the error gracefully
      },
    };
  }
}

