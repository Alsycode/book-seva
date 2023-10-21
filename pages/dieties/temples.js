import Footer2 from "../../layout/footer-2";
import Header2 from "../../layout/header-2";
import Link from 'next/link';
import Image from "next/image";
function BlogGrid2({data}) {
    console.log("data",data)
   const image = data.data[0].attributes.image.data[0].attributes.formats.small.url;
    console.log("image",data)
  return (
    <>
      <Header2/>
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}>
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Dieties</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Dieties</li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Blog Large --> */}
        <section className="content-inner" style={{ backgroundImage: "url(images/background/bg2.png)" }}>
          <div className="container">
            <div className="row">
                {data.data.map((diety) => (
            <Link href={`./dieties/poojas`}>
              <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="dlab-blog style-1 m-b50 bg-white">
                  <div className="dlab-media dlab-img-effect zoom">
                    <a href="blog-details-2.html">
                    <Image
                                width={600}
                                height={300}
                                src={
                                    diety.attributes.image.data[0].attributes.formats.thumbnail.url }
                                 alt= {diety.attributes.nameinenglish}
                                    /> 
                                 
                               
                              
                    </a>
                  </div>
                  <div className="dlab-info text-center">
                    <h3 className="dlab-title">
                <a href="blog-details-2.html">{diety.attributes.nameinenglish}</a>
                    </h3>
                    <h4 className="dlab-title">
                      <a href="blog-details-2.html">
                      {diety.attributes.nameinmalayalam}</a>
                    </h4>
                  </div>
                  <div className="pricingtable-footer d-flex justify-content-center" style={{ marginBottom: '40px' }}>
  <a href="/pricing-table-3" className="btn btn-corner btn-outline-primary">SELECT</a>
</div>

                </div>
              </div>
</Link>
))}

              {/* <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="dlab-blog style-1 m-b50 bg-white">
                  <div className="dlab-media dlab-img-effect zoom">
                    <a href="blog-details-2.html">
                      <img src="images/blog/blog-grid/Bhadrakali.jpg" alt="" style={{ height: "170px" }} />
                    </a>
                  </div>
                  <div className="dlab-info text-center">
                    <h3 className="dlab-title">
                      <a href="blog-details-2.html">BHADRAKALI</a>
                    </h3>
                    <h4 className="dlab-title">
                      <a href="blog-details-2.html">ഭദ്രകാളി</a>
                    </h4>
                  </div>
                  <div className="pricingtable-footer d-flex justify-content-center" style={{ marginBottom: '40px' }}>
  <a href="/pricing-table-3" className="btn btn-corner btn-outline-primary">SELECT</a>
</div>

                </div>
              </div> */}

              {/* <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="dlab-blog style-1 m-b50 bg-white">
                <div className="dlab-media dlab-img-effect zoom">
  <a href="blog-details-2.html">
    <img src="images/dieties/devi.jpg" alt="" style={{ height: "170px" }} />
  </a>
</div>
                  <div className="dlab-info text-center">
                    <h3 className="dlab-title">
                      <a href="blog-details-2.html">SARPAM</a>
                    </h3>
                    <h4 className="dlab-title">
                      <a href="blog-details-2.html">സർപ്പം</a>
                    </h4>
                  </div>
                  <div className="pricingtable-footer d-flex justify-content-center" style={{ marginBottom: '40px' }}>
  <a href="/pricing-table-3" className="btn btn-corner btn-outline-primary">SELECT</a>
</div>

                </div>
              </div> */}


              {/* <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="dlab-blog style-1 m-b50 bg-white">
                  <div className="dlab-media dlab-img-effect zoom">
                    <a href="blog-details-2.html">
                      <img src="images/dieties/manibhooshanan.jpg" alt="" style={{ height: "170px" }} />
                    </a>
                  </div>
                  <div className="dlab-info text-center">
                    <h4 className="dlab-title">
                      <a href="blog-details-2.html">MANIBHOOSHANAN</a>
                    </h4>
                    <h4 className="dlab-title">
                      <a href="blog-details-2.html">മണിഭൂഷണൻ</a>
                    </h4>
                  </div>
                  <div className="pricingtable-footer d-flex justify-content-center" style={{ marginBottom: '40px' }}>
  <a href="/pricing-table-3" className="btn btn-corner btn-outline-primary">SELECT</a>
</div>

                </div>
              </div>
 */}

              {/* <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="dlab-blog style-1 m-b50 bg-white">
                  <div className="dlab-media dlab-img-effect zoom">
                    <a href="blog-details-2.html">
                      <img src="images/dieties/sivan.jpg" alt="" style={{ height: "170px" }} />
                    </a>
                  </div>
                  <div className="dlab-info text-center">
                    <h3 className="dlab-title">
                      <a href="blog-details-2.html">SHIVAN</a>
                    </h3>
                    <h4 className="dlab-title">
                      <a href="blog-details-2.html">
ശിവൻ</a>
                    </h4>
                  </div>
                  <div className="pricingtable-footer d-flex justify-content-center" style={{ marginBottom: '40px' }}>
  <a href="/pricing-table-3" className="btn btn-corner btn-outline-primary">SELECT</a>
</div>

                </div>
              </div> */}

              {/* <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="dlab-blog style-1 m-b50 bg-white">
                  <div className="dlab-media dlab-img-effect zoom">
                    <a href="blog-details-2.html">
                      <img src="images/dieties/devi.jpg" alt="" style={{ height: "170px" }} />
                    </a>
                  </div>
                  <div className="dlab-info text-center">
                    <h3 className="dlab-title">
                      <a href="blog-details-2.html">DEVI</a>
                    </h3>
                    <h4 className="dlab-title">
                      <a href="blog-details-2.html">ദേവി</a>
                    </h4>
                  </div>
                  <div className="pricingtable-footer d-flex justify-content-center" style={{ marginBottom: '40px' }}>
  <a href="/pricing-table-3" className="btn btn-corner btn-outline-primary">SELECT</a>
</div>

                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
      <Footer2/>
    </>
  );
}

export default BlogGrid2;

export async function getStaticProps() {
    try {
      // Set your authorization token
      const authToken = '1cc0a576b38722e585230c62dc90b0476114ad0a15b46ab32402682387a85a661eaa649219d2b959481317fc5cb253a6021487927a8c43f6018f1d1ee7e126540c8a9da5cc064e5e77d2cb43ec767894c2319957a651cdf7d84f914d4588c5cd83142301d22bc2c3cfcb8a7a248a6328307ceabd5ef6532153d892e16be6a5e5';
  
      // Define the API endpoint URL
      const apiUrl = 'https://aecstrapi-askn4.ondigitalocean.app/api/temple-lists?populate=*';
  
      // Create headers object with the authorization header
      const headers = new Headers({
        Authorization: `Bearer ${authToken}`,
      });
  
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
  
 