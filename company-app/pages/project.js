import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/headerProject";
import styles from "../styles/project.module.css";

const teamMembers = [
  {
    name: "NAME : The drainage of floods and the prevention of their hazards in Al-Uyunah and Al-Jubailiyah.",
    major:
      " LOCATION : Northern Borders.",
    image:
      "1مشروع.jpg",
  },
  {
    name: "NAME : Implementation of Group 7/3 Water Projects in the Northern Border Region",
    major:
      " LOCATION : Al-Ayina and Al-Jubailah Municipality.",
    image:
      "/water.jpg",
  },
  {
    name: "NAME : Renovation Process of Fifth Primary School and Second Secondary School in Al-Majma'ah",
    major:
      " LOCATION :Majmaah Governorate.",
    image:
      "https://static.srpcdigital.com/styles/1200x600/public/2022/09/15/1663251404074764900.jpg",
  },
  {
    name: "NAME : Construction Process of the First Primary School in Al-Shu'bah",
    major:
      " LOCATION :Majmaah Governorate.",
    image:
    "/school2.jpg",
  },
  {
    name: "NAME : Implementation of Water Tanks and Networks for Group 9/7 - Contract Number[1]",
    major:
      " LOCATION :Najran Region.",
    image:
    "/فيضان.jpg",
  },
  {
    name: "NAME : Execution of Water Tanks and Networks for Group 9/6 - Contract Number [2]",
    major:
    " LOCATION : Najran Region.",
    image:
    "/خزان2.jpg",
    },
  
  {
    name: "NAME : Implementation Contract for Dawadmi Water Network - Contract Number [2]",
    major:
      "LOCATION : Dawadmi Governorate .",
    image:
    " /دوادمي2.jpg " ,
  },
  {
    name: "NAME : Implementation of Dawadmi Water Network",
    major:
      "LOCATION : Dawadmi Governorate .",
    image:
    "/دوادمي1.jpg",
    },
  {
    name: "NAME : Installation of Shelters for Group 30",
    major:
    "LOCATION : Riyadh City.",
    image:
    "/مضلات.jpg",
  },

  {
    name: "NAME : Water Projects for Group 1/5",
    major:
      "LOCATION : Dawadmi Governorate .",
    image:
    "/networkwater.jpg",
    },
  {
    name: "NAME : Contract for the Implementation of Water Networks in Wadi Al-Dawasir City",
    major:
      "LOCATION : Wadi Al-Dawasir Governorate",
    image:
    "/دواسي.jpg",
  },
  {
    name: "NAME : Contract for the Completion of Home Connections and Meters in Cities and Villages in the Jazan Region",
    major:
      "LOCATION : Jazan Region",
    image:
      "/jazan.jpg",
  },


];

const Projectpage = () => {
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "500px",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
  };

  return (
    <>
      <Navbar />
      <main>
        <section className={styles.aboutbackground}>
          <div style={overlayStyle}></div>
          <div className={styles.textABOUT}>
            {/* <h3 className='texth1'>WHO WE ARE</h3> */}
            <h1 className={styles.textpABOUT}>OUR PROJECT</h1>
          </div>
        </section>

        <div className={styles.containerorganization}>
          <div className={styles.iconContainer}>
            <div class="elementor-widget-container">
              <div class="elementor-icon-wrapper">
                <div class="elementor-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="20"
                    viewBox="0 0 21 8"
                    fill="none"
                  >
                    <path d="M7 0H13L6 8H0L7 0Z" fill="#FCC236"></path>
                    <path d="M13 0H7L15 8H21L13 0Z" fill="#FCC236"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* <p className={styles.title}>OVERVIEW</p> */}
        </div>

        <div style={{ padding: "50px" }}>
          <div id="about" className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative items-center justify-center overflow-hidden transition-shadow rounded-lg shadow-lg cursor-pointer group hover:shadow-xl hover:shadow-black/30"
                >
                  <div >
                    <img
                     className={styles.imgproject}
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <div className="inset-x-0 p-2 bg-white bottom-20">
                    <h1 className="text-black text-m font-dmserif">
                      {member.name}
                    </h1>
                    <p className="text-black text-s">{member.major}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer style={{ flexShrink: 0 }} />
    </>
  );
};

export default Projectpage;