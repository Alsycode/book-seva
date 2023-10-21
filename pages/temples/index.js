import Footer3 from "../../layout/footer-3"
import Header3 from "../../layout/header-3";
import Link from 'next/link';
import Image from "next/image";
function TempleList({templeData}) {
    console.log("blogData",templeData);
//    const image = templeData.data[0].attributes.image.data[0].attributes.formats.thumbnail.url;
     
//      console.log("image",image);

  return (
    <>
      <Header3/>
 <div className="page-content bg-white">
      
        <div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{ backgroundImage: "url(images/banner/bnr3.jpg)" }}>
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Temples</h1>
            
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Temples</li>
                </ul>
              </nav>
         
            </div>
          </div>
        </div>
      

      
        <section className="content-inner" style={{ backgroundImage: "url(images/background/bg2.png)" }}>
  <div className="container">
    <div className="row">
     {templeData.data.map((item)=> 
    //  ${item.attributes.nameinenglish}
     <Link href={`./temples/templedetails/${item.attributes.slug},${item.attributes.diety}`}>
        <div className="col-lg-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
          <div className="dlab-blog blog-half m-b30">
            <div className="dlab-media">
          <Image
           width={180}
           height={180}
           src={item.attributes.image.data[0].attributes
            .formats.thumbnail.url}
            alt={ item.attributes.nameinenglish}                     
            />                   
        
                              
            </div>
            <div className="dlab-info">
              <h5 className="dlab-title">
               <a>{item.attributes.nameinenglish}</a>
              </h5>
              <p>{item.attributes.nameinmalayalam}</p>
              <p className="dlab-title"><span>{item.attributes.place}</span>  {item.attributes.district} </p>
              {/* <div className="dlab-button">
                <div className="pricingtable-footer d-flex justify-content-center" style={{ marginTop: '30px' }}>
                  <a href="/pricing-table-3" className="btn btn-corner btn-outline-primary" >SELECT</a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </Link>
      )}
     

     

    </div>
  </div>
</section>

      </div>  
      <Footer3/>
    </>
  );
}

export default TempleList;

export async function getServerSideProps(context) {
    // Extract the 'slug' from the router's query parameters
    const slug = context.query.blog;
  
    // Define the first API URL and bearer token
    const bearerToken = "1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5";
  
    // Define the second API URL
    const apiUrl1 = `https://aecstrapi-askn4.ondigitalocean.app/api/temple-lists?populate=*`;
  
    try {
      // Fetch data from the first API using the provided URL and bearer token
      const response1 = await fetchWithTimeout(apiUrl1, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }, 60000); // Set the timeout to 10 seconds (in milliseconds)
  
      if (!response1.ok) {
        throw new Error(`API request 1 failed with status ${response1.status}`);
      }
  
      // Parse the JSON response for the first URL
      const data1 = await response1.json();
  
      // Fetch data from the second API using the provided URL and bearer token
  
      // Pass the fetched data as props to the component
      return {
        props: {
          templeData: data1,
        },
      };
    } catch (error) {
      // Handle errors here, e.g., log them or return an error prop
      return {
        props: { error: error.message },
      };
    }
  }
  
  // Function to fetch with a timeout
  async function fetchWithTimeout(url, options, timeout) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
  
    try {
      const response = await fetch(url, { ...options, signal: controller.signal });
      clearTimeout(timeoutId); // Clear the timeout if the request completes within the timeout
      return response;
    } catch (error) {
      if (error.name === "AbortError") {
        throw new Error("Request timed out");
      }
      throw error;
    }
  }
  