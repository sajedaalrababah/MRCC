import React from "react";
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  const footerStyle = {
    // Add your background image here
    backgroundImage: `url('https://images-ext-1.discordapp.net/external/0gJ9S2_6gWm0kynQif-SlfOQnIpafnQZRH5JBC5_dfY/%3Fsize%3D626%26ext%3Djpg/https/img.freepik.com/free-photo/complex-aerial-view-city_23-2148975284.jpg?width=860&height=573')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const overlayStyle = {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.8)', // Adjust the alpha value for the desired opacity
    pointerEvents: 'none', // Allow clicks to go through the overlay
  };

  return (
    <>
    <div className="relative">
      <div style={overlayStyle}></div> {/* Overlay for the background image */}
      <div className="flex flex-col items-start justify-around w-full p-20 bg-white h-1/2 md:flex-row" style={footerStyle}>
        {/* MRCC Section */}
        <div className="p-5" style={{ zIndex: 2 }}>
          <ul>
            <p className="pb-6 text-3xl font-bold text-white-800">
              <span className="text-white">MRCC</span>
              <img
            className=""
            src="https://alhajry-overseas.com.sa/wp-content/uploads/2020/01/Kingdom-of-Saudi-Arabia.jpg"
            alt="Image 4"
            style={{width:'90px',height:'60px'}}

          />
            </p>
           
            <div className="flex gap-6 pb-5" >
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" style={{ color: 'white' }} />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" style={{ color: 'white' }} />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" style={{ color: 'white' }} />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" style={{ color: 'white' }} />
            </div>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="p-5" style={{ zIndex: 2 }}>
          <ul>
            <p className="pb-4 text-2xl font-bold text-white">Quick Links</p>
            <li className="pb-2 font-semibold text-white cursor-pointer text-md hover:text-orange-300">
              <Link href='/#about'>About</Link>
            </li>
            <li className="pb-2 font-semibold text-white cursor-pointer text-md hover:text-orange-300">
              <Link href='/project'>Project</Link>
            </li>
            <li className="pb-2 font-semibold text-white cursor-pointer text-md hover:text-orange-300">
              <Link href='/resources'>Resources</Link>
            </li>
            <li className="pb-2 font-semibold text-white cursor-pointer text-md hover:text-orange-300">
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="p-5 imgfooter" style={{ zIndex: 2,  }}>
        <p className="pb-4 text-2xl font-bold text-white">Galary</p>
          <div className="grid grid-cols-3 gap-4">
          <img
            className="" 
            src="https://images-ext-2.discordapp.net/external/gk6a5Ize5OjDeBkddl2A6U_32wgYSD-qNfDEZqqpq5k/%3Ft%3Dst%3D1695143385~exp%3D1695143985~hmac%3D574fa67fbb90c41404f4b7bb4f4f4ba1fc034374451f7befb3308e92f7f99a79/https/img.freepik.com/free-photo/construction-works-frankfurt-downtown-germany_1268-20907.jpg?width=1188&height=669"
            alt="Image 1"
            style={{width:'70px',height:'40px'}}

          />
          <img
            className=""
            src="https://images-ext-2.discordapp.net/external/Q_TFI_G4qC-QWvLx92FsfdEskzdEm6nxmJnzLLfaHHw/https/img.freepik.com/free-photo/new-road-is-construction-with-several-pieces-heavy-equipment_587448-4806.jpg?width=860&height=376"
            alt="Image 2"
            style={{width:'70px',height:'40px'}}

          />
          <img
            className=""
            src="https://images-ext-1.discordapp.net/external/Nc8cgjDkwsYO9NY2RWBL269f2_Nv9QEiDfws6tK2xIc/%3Fw%3D826%26t%3Dst%3D1695224400~exp%3D1695225000~hmac%3D7481f8e6af9e3e7760857d9c77e0d95a0db7cad0d7717fd7e224d0ed5989c209/https/img.freepik.com/free-photo/construction-site-with-cranes-against-blue-sky_1127-2304.jpg?width=840&height=669"
            alt="Image 3"
            style={{width:'70px',height:'40px'}}

          />
                    <img
            className=""
            src="https://images-ext-2.discordapp.net/external/MqyGRCypWwLPNAa_oUTe6tfKrATyyOo6GKQEQZPdROM/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1442964426.1687759231%26semt%3Dais/https/img.freepik.com/free-photo/excavator-action_1112-1598.jpg?width=860&height=583"
            alt="Image 6"
            style={{width:'70px',height:'40px'}}
          />
          <img
            className=""
            src="https://images-ext-1.discordapp.net/external/Oohem8fhxR0sygiopSAAvGqWFOyT6wTSGFst8InkGZQ/%3Ft%3Dst%3D1695222699~exp%3D1695226299~hmac%3D7a639617b9dd72bc68928e743c720336ac974675a3c6b4357296613203adaf0c%26w%3D1060/https/img.freepik.com/free-photo/group-excavator-working-construction-site_587448-4947.jpg?width=1194&height=669"
            alt="Image 4"
            style={{width:'70px',height:'40px'}}

          />
          <img
            className=""
            src="https://images-ext-1.discordapp.net/external/ektm-aHLm-JyuwVprlaZLQuQIn7TuMtchRcDkjTrXcU/%3Fw%3D996%26t%3Dst%3D1695240984~exp%3D1695241584~hmac%3Da111e70b7bb926499385dff1daf5831f840e5e59b94b26a6c970d0e930d7b8d9/https/img.freepik.com/free-photo/close-up-construction-site-excavator_1112-1223.jpg?width=1040&height=669"
            alt="Image 5"
            style={{width:'70px',height:'40px'}}

          />

          </div>
        </div>


        {/* Contact Info Section */}
        <div className="p-5" style={{ zIndex: 2 }}>
          <ul>
            <p className="pb-4 text-2xl font-bold text-white">Contact Info</p>
            <li className="pb-2 font-semibold text-white cursor-pointer text-md hover:text-orange-300">
              Riyadh, Saudi Arabia
            </li>
            <li className="pb-2 font-semibold text-white cursor-pointer text-md hover:text-orange-300">
              Phone: 011-244-8491
            </li>
            <li className="pb-2 font-semibold text-white cursor-pointer text-md hover:text-orange-300">
              Email: AARS1@HOTMAIL.COM
            </li>
          </ul>
        </div>
      </div>
      
    </div>
    <div className="flex flex-col items-center justify-center p-5 text-center " style={{ zIndex: 1,backgroundColor:'#fcc236'}}>
    <h1 className="font-semibold text-white">
      © 2023 All rights reserved | Build by{" "}
      <span className="font-semibold cursor-pointer hover:text-black">
        BS Team
      </span>
    </h1>
  </div>
</>
  );
}

export default Footer;