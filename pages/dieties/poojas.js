import Footer3 from "../../layout/footer-3";
import Header3 from "../../layout/header-3";
import Link from 'next/link';
import Image from "next/image";
function BlogGrid2({blogData}) {
    console.log("blogData",blogData);
     const image = blogData.data[0].attributes.image.data.attributes.formats.thumbnail.url;
     
     console.log("image",image);
  return (
    <>
      <Header3/>
    <div className="page-content bg-white">
      
        <div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{ backgroundImage: "url(images/banner/bnr3.jpg)" }}>
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Poojas</h1>
            
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Poojas</li>
                </ul>
              </nav>
         
            </div>
          </div>
        </div>
      

      
        <section className="content-inner" style={{ backgroundImage: "url(images/background/bg2.png)" }}>
  <div className="container">
    <div className="row">
     {blogData.data.map((item)=> <Link href={`./dieties/poojas`}>
        <div className="col-lg-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
          <div className="dlab-blog blog-half m-b30">
            <div className="dlab-media">
          <Image
                                width={180}
                                height={180}
                                src={
                                    item.attributes.image.data.attributes
                                    .formats.thumbnail.url
                                }
                                alt={ blogData.data[0].attributes.heading}
                              /> 
            </div>
            <div className="dlab-info">
              <h5 className="dlab-title">
                <Link href="/blog-details-3"><a>MOOLA MANTHRAM ARCHANA</a></Link>
              </h5>
              <p>മൂലമന്ത്രം- അര്‍ച്ചന</p>
              <p>Price: <span>Rs {item.attributes.amount}</span></p>
              <div className="dlab-button">
                <div className="pricingtable-footer d-flex justify-content-center" style={{ marginTop: '30px' }}>
                  <a href="/pricing-table-3" className="btn btn-corner btn-outline-primary" >SELECT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>)}
     

     

    </div>
  </div>
</section>

      </div> 
      <Footer3/>
    </>
  );
}

export default BlogGrid2;

export async function getServerSideProps(context) {
    // Extract the 'slug' from the router's query parameters
    const slug = context.query.blog;
  
    // Define the first API URL and bearer token
   
    const bearerToken = "1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5";
  
    // Define the second API URL
    const apiUrl1 = `https://aecstrapi-askn4.ondigitalocean.app/api/devipoojas?populate=*`;
  
    try {
      // Fetch data from the first API using the provided URL and bearer token
      const response1 = await fetch(apiUrl1, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });
  
      if (!response1.ok) {
        throw new Error(`API request 1 failed with status ${response1.status}`);
      }
  
      // Parse the JSON response for the first URL
      const data1 = await response1.json();
  
      // Fetch data from the second API using the provided URL and bearer token
     
  
      // Pass the fetched data as props to the component
      return {
        props: {
          blogData: data1,
         
        },
      };
    } catch (error) {
      // Handle errors here, e.g., log them or return an error prop
      return {
        props: { error: error.message },
      };
    }
  }
  