import Footer3 from "../../../layout/footer-3"
import Header3 from "../../../layout/header-3";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import BlogSlider2 from "../../../component/blogSlider-2";
import Image from "next/image";

function TempleList({templeDetail,dietyData}) {
    console.log("templeDetail",templeDetail);
    const [filteredData, setFilteredData] = useState([]);
    const router = useRouter();
   const originalString = router.query.templedetail;
   const firstCommaIndex = originalString.indexOf(',');

   // Split the string at the first comma
   const templePart = originalString.slice(0, firstCommaIndex);
   const numbersPart = originalString.slice(firstCommaIndex + 1);
console.log("templeText",templePart);
   console.log("originalString",originalString);
   
   function filterDietyData(data, slug) {

     if (dietyData && dietyData.data) {
       const slugValues = numbersPart.split(',');
       const filteredDiety = dietyData.data.filter(item => {
         return slugValues.some(slugValue => item.attributes.slug.includes(slugValue));
       });

       return filteredDiety;
     } else {
       return [];
     }
   }
   useEffect(() => {
     if (numbersPart) {
       const filteredDiety = filterDietyData(dietyData, numbersPart);
       setFilteredData(filteredDiety);
     }
   }, [dietyData, numbersPart]);
   console.log("filteredData",filteredData);
    const filteredItems = templeDetail.data.filter(item => item.attributes.slug.includes(templePart));
    console.log("filteredItems",filteredItems);
  const image = filteredItems[0].attributes.image1.data.attributes.formats.large.url;
     const poojas = filteredItems[0].attributes.poojas.data;
     console.log("image",poojas);
  return (
    <>
      <Header3/>
        {/* {filteredItems.data.map((item)=>   */}
 <div className="page-content bg-white">

 <div className="dlab-bnr-inr" style={{"backgroundImage":`url(${image})`}}>
         <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Temple List</h1>
            
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
<p>{filteredItems[0].attributes.description1}</p>
<p>{filteredItems[0].attributes.description2}</p>
<p>{filteredItems[0].attributes.description3}</p>
<div className="dlab-bnr-inr-entry">
  <h1>Dieties</h1>
</div>
<section className="content-inner" style={{ backgroundImage: "url(images/background/bg2.png)" }}>
  <div className="container">
    <div className="row">
      {filteredData.map((item) => (
        <div key={item.id} className="col-lg-2 col-md-3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
          <div className="dlab-blog style-1 m-b30 bg-white">
            <div className="dlab-media dlab-img-effect zoom" style={{ position: 'relative' }}>
              <Link href={`./poojas/`}>
                <a>
                  <Image
                    width={700}
                    height={400}
                    src={item.attributes.dietyImage.data[0].attributes.formats.thumbnail.url}
                    alt={item.attributes.nameInEnglish}
                  />
                  {/* Button Container */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0',  // Set to '0' to remove the bottom margin
                      left: '0',
                      right: '0',
                      textAlign: 'center',
                    }}
                  >
                    <button
                      style={{
                        padding: '0px 0',  // Width set to '0' and color to red
                        background: 'red',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        width: '100%',  // Width set to 100%
                      }}
                    >
                      Book
                    </button>
                  </div>
                </a>
              </Link>
            </div>

            <div className="dlab-info text-center" style={{  padding: '0px 0', margin: '5px 0' }}>
              <h6 className="dlab-title">
                <a href="blog-details-2.html">{item.attributes.nameInEnglish}</a>
              </h6>
              {/* <h6 className="dlab-title">
                <a href="blog-details-2.html">{item.attributes.nameInMalayalam}</a>
              </h6> */}
            </div>
            {/* <div className="pricingtable-footer d-flex justify-content-center" style={{ marginBottom: '40px' }}>
              <a href="/pricing-table-3" className="btn btn-corner btn-outline-primary">SELECT</a>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  {/* <Link href={`./temples/teamdetails/${item.attributes.diety}${item.attributes.slug}`}> 
        <div className="col-lg-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
          <div className="dlab-blog blog-half m-b30">
            <div className="dlab-media">
          {/* <Image
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
              {/* <p>{item.attributes.nameinmalayalam}</p> */}
              {/* <p className="dlab-title"><span>{item.attributes.place}</span>  {item.attributes.district} </p> 
              <div className="dlab-button">
                <div className="pricingtable-footer d-flex justify-content-center" style={{ marginTop: '30px' }}>
                  <a href="/pricing-table-3" className="btn btn-corner btn-outline-primary" >SELECT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </Link>  */}
     

     

    </div>
  </div>
</section>

<div className="dlab-bnr-inr-entry">
  <h1>Poojas</h1>
</div>
<section className="content-inner" style={{ backgroundImage: "url(images/background/bg2.png)" }}>
          <div className="container">
            <div className="row">
               {poojas.map((item) => ( 
                
                <div key={item.id} className="col-lg-3 col-md-2 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                  <div className="dlab-blog style-1 m-b50 bg-white">
                    <div className="dlab-media dlab-img-effect zoom">
                      <Link href={`./dieties/poojas`}>
                        <a>
                          {/* <Image
                            width={700}
                            height={400}
                             src={item.attributes.image.data[0].attributes.formats.thumbnail.url}
                            alt={item.attributes.nameInEnglish}
                          />  */}
                        </a>
                      </Link>
                    </div>
                    <div className="dlab-info text-center">
                      <h6 className="dlab-title">
                        <a href="blog-details-2.html">{item.attributes.nameinenglish}</a>
                      </h6>
                      <h6 className="dlab-title">
                        <a href="blog-details-2.html">{item.attributes.nameinmalayalam}</a>
                      </h6>
                    </div>
                    {/* <div className="pricingtable-footer d-flex justify-content-center" style={{ marginBottom: '40px' }}>
                      <a href="/pricing-table-3" className="btn btn-corner btn-outline-primary">BOOK</a>
                    </div> */}
                  </div>
                </div>
              ))} 
            </div>
          </div>
        </section>
      </div>  
       {/* )}     */}
       {/* <BlogSlider2 updates={updates}/> */}
      <Footer3/>
    </>
  );
}

export default TempleList;


export async function getServerSideProps(context) {
  // Extract the 'slug' from the router's query parameters
  const { params } = context;
  const slug = context.query.templedetail;
  const firstCommaIndex = slug.indexOf(',');

   // Split the string at the first comma
   const templefetchPart = slug.slice(0, firstCommaIndex);
   const numbersfetchPart = slug.slice(firstCommaIndex + 1);

  // Define the first API URL and bearer token
  const bearerToken = "1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5";

  // Define the first API URL
  const apiUrl1 = `https://aecstrapi-askn4.ondigitalocean.app/api/temple-lists?filters[slug][$eq]=${templefetchPart}&populate=*`;

  // Define the second API URL
  const apiUrl2 = `https://aecstrapi-askn4.ondigitalocean.app/api/dieties?populate=*`;

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
    const response2 = await fetch(apiUrl2, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    if (!response2.ok) {
      throw new Error(`API request 2 failed with status ${response2.status}`);
    }

    // Parse the JSON response for the second URL
    const data2 = await response2.json();

    // Pass the fetched data as props to the component
    return {
      props: {
        templeDetail: data1,
        dietyData: data2,
      },
    };
  } catch (error) {
    // Handle errors here, e.g., log them or return an error prop
    return {
      props: { error: error.message },
    };
  }
}
