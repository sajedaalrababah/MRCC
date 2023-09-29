import React from "react";
import Footer from "@/components/footerar";
import Navbar from "@/components/headerProjectAr";
import styles from "../styles/project.module.css";

const teamMembers = [
  {
    name: "الاسم: تصريف الفيضانات ومنع مخاطرها في العيونة والجبيلية.",
    major:
      "الموقع: منطقة الحدود الشمالية.",
    image:
      "1مشروع.jpg",
  },
  {
    name: "تنفيذ مشاريع مياه المجموعة 7/3 في منطقة الحدود الشمالية",
    major:
      "الموقع: أمانة العينة وبلدية الجبيلة.",
    image:
      "/water.jpg",
  },
  {
    name: "عملية تجديد المدرسة الابتدائية الخامسة والمدرسة الثانوية الثانية في المجمعة",
    major:
      "الموقع: محافظة المجمعة.",
    image:
    "https://static.srpcdigital.com/styles/1200x600/public/2022/09/15/1663251404074764900.jpg",
  },
  {
    name: "عملية بناء المدرسة الابتدائية الأولى في الشعبة",
    major:
      "الموقع: محافظة المجمعة.",
    image:
"/school2.jpg",
  },
  {
    name: "تنفيذ خزانات المياه وشبكاتها للمجموعة 9/7 - رقم العقد [1]",
    major:
      "الموقع: منطقة نجران.",
    image:
    "/فيضان.jpg",
  },
  {
    name: "تنفيذ خزانات المياه وشبكاتها للمجموعة 9/6 - رقم العقد [2]",
    major:
    "الموقع: منطقة نجران.",
    image:
    "/خزان2.jpg",
  },
  
  {
    name: "عقد تنفيذ شبكة مياه الدوادمي - رقم العقد [2]",
    major:
      "الموقع: محافظة الدوادمي.",
    image:
   "/دوادمي2.jpg" ,
  },
  {
    name: "تنفيذ شبكة مياه الدوادمي",
    major:
      "الموقع: محافظة الدوادمي.",
    image:
      "/دوادمي1.jpg",
  },
  {
    name: "تركيب المأوى لمجموعة 30",
    major:
    "الموقع: مدينة الرياض.",
    image:
      "/مضلات.jpg",
  },

  {
    name: "مشاريع مياه للمجموعة 1/5",
    major:
      "الموقع: محافظة الدوادمي.",
    image:
      "/networkwater.jpg",
  },
  {
    name: "عقد تنفيذ شبكات مياه في مدينة وادي الدواسر",
    major:
      "الموقع: محافظة وادي الدواسر",
    image:
      "/دواسي.jpg",
  },
  {
    name: "عقد استكمال ربط المنازل وعداداتها في المدن والقرى في منطقة جازان",
    major:
      "الموقع: منطقة جازان",
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
    backgroundColor: "rgba(0, 0, 0, 0.5)", // ضبط الشفافية حسب الحاجة
  };

  return (
    <>
      <Navbar />
      <main>
        <section className={styles.aboutbackground}>
          <div style={overlayStyle}></div>
          <div className={styles.textABOUT}>
            {/* <h3 className='texth1'>WHO WE ARE</h3> */}
            <h1 className={styles.textpABOUT}>مشاريعنا</h1>
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
                    <h1 className="text-black text-s font-dmserif">
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
