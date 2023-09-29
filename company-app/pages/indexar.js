import React, { useState, useEffect }from 'react';
// import React, { useState, useEffect } from 'react';

import Footer from '@/components/footerar';
import Navbar from '@/components/headerHomear';
import AboutPage from '@/components/servicesar';
import ClientPage2 from '@/components/services2ar';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    backdropFilter: 'blur(2px)', // Apply a blur effect to the overlay
  };
    const images = [
    'https://images-ext-2.discordapp.net/external/gk6a5Ize5OjDeBkddl2A6U_32wgYSD-qNfDEZqqpq5k/%3Ft%3Dst%3D1695143385~exp%3D1695143985~hmac%3D574fa67fbb90c41404f4b7bb4f4f4ba1fc034374451f7befb3308e92f7f99a79/https/img.freepik.com/free-photo/construction-works-frankfurt-downtown-germany_1268-20907.jpg?width=1188&height=669',
    'https://img.freepik.com/free-photo/beautiful-shot-mountain-road-sunlight_181624-54700.jpg?w=826&t=st=1696017278~exp=1696017878~hmac=166eabadb567672491e8498402996322b374b2f91b74d3e5b310b9a7fda08335',
    'https://img.freepik.com/free-photo/form-dwelling-tower-high-engineering_1127-2349.jpg?size=626&ext=jpg&ga=GA1.1.1442964426.1687759231&semt=ais'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(timer);
    };
  }, [images]);

  const currentImage = images[activeIndex];

  const backgroundImageStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundImage: `url('${currentImage}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transformStyle: 'preserve-3d', // Add 3D effect
    perspective: '1000px', // Adjust the perspective value as needed
    transition: 'background-image 0.1s', // Update the background image smoothly
    zIndex: 0, // Ensure that other content is displayed above the background
  };

  return (
    <>
      <Navbar />
      <main >
        <section id='homesection'style={backgroundImageStyle} >
          <div style={overlayStyle}></div>
          <div className='text' >
            <h3 className='texth1'>منذ عام 2002</h3>
            <h1 className='textp'>نحن نبني الثقة</h1>
            <p className='p2'>نحنن هنا لتلبية احتياجاتك في عالم الإنشاءات والعقارات</p>
            <div class="slider__btn">
              <a class="htc__btn" href="/aboutar">عنا</a>
            </div>
          </div>
        </section>
        <section>
          <AboutPage />
        </section>
        <section>
          <ClientPage2 />
        </section>
      </main>

      <Footer style={{ flexShrink: 0 }} />
    </>
  );
};

export default Home;
