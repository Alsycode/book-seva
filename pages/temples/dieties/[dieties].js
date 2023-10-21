import Footer2 from "../../../layout/footer-2";
import Header2 from "../../../layout/header-2";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from 'next/image';

function BlogGrid2({ dietyData }) {
    console.log("dietyData",dietyData)
   const router = useRouter();
   const originalString = router.query.dieties;
   console.log("originalString",originalString);
   let numbersEndIndex = 0;


   for (let i = 0; i < originalString.length; i++) {
    if (isNaN(originalString[i]) && originalString[i] !== ',') {
      numbersEndIndex = i;
      break;
    }
  }
   
   // Extract the numbers and text parts
   const numbersPart = originalString.substring(0, numbersEndIndex); // "01,02,03,04"
   const textPart = originalString.substring(numbersEndIndex); // "sreenarayanapuram-temple"
   
   console.log("Numbers Part:", numbersPart);
   console.log("Text Part:", textPart);
  
   
   
   
   
   
   
   


   const slug = router.query.dieties;
   const [filteredData, setFilteredData] = useState([]);
console.log("filteredData",filteredData)
    function filterDietyData(data, slug) {

      if (data && data.data) {
        const slugValues = slug.split(',');
        const filteredDiety = data.data.filter(item => {
          return slugValues.some(slugValue => item.attributes.slug.includes(slugValue));
        });

        return filteredDiety;
      } else {
        return [];
      }
    }
    useEffect(() => {
      if (slug) {
        const filteredDiety = filterDietyData(dietyData, slug);
        setFilteredData(filteredDiety);
      }
    }, [dietyData, slug]);

    console.log("filtered", filteredData);

  return (
    <>
      <Header2 />
   <div className="page-content bg-white">
        <div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}>
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Dieties</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Dieties</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <section className="content-inner" style={{ backgroundImage: "url(images/background/bg2.png)" }}>
          <div className="container">
            <div className="row">
              {filteredData.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                  <div className="dlab-blog style-1 m-b50 bg-white">
                    <div className="dlab-media dlab-img-effect zoom">
                    <Link href={`./poojas/${textPart},${item.attributes.nameInEnglish}`}>
                        <a>
                          <Image
                            width={700}
                            height={400}
                            src={item.attributes.dietyImage.data[0].attributes.formats.thumbnail.url}
                            alt={item.attributes.nameInEnglish}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="dlab-info text-center">
                      <h3 className="dlab-title">
                        <a href="blog-details-2.html">{item.attributes.nameInEnglish}</a>
                      </h3>
                      <h4 className="dlab-title">
                        <a href="blog-details-2.html">{item.attributes.nameInMalayalam}</a>
                      </h4>
                    </div>
                    <div className="pricingtable-footer d-flex justify-content-center" style={{ marginBottom: '40px' }}>
                      <a href="/pricing-table-3" className="btn btn-corner btn-outline-primary">SELECT</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div> 
      <Footer2 />
    </>
  );
}

export default BlogGrid2;


export async function getServerSideProps(context) {
   
    const slug = context.query.blog;
  
    
   
    const bearerToken = "1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5";
  
    
    const apiUrl1 = `https://aecstrapi-askn4.ondigitalocean.app/api/dieties?populate=*`;
  
    try {
      
      const response1 = await fetch(apiUrl1, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });
  
      if (!response1.ok) {
        throw new Error(`API request 1 failed with status ${response1.status}`);
      }
  
      
      const data1 = await response1.json();
  
      
      return {
        props: {
          dietyData: data1,
         
        },
      };
    } catch (error) {
      
      return {
        props: { error: error.message },
      };
    }
  }
  