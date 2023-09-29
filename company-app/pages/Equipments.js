import Footer from "@/components/footer";
import Navbar from "@/components/headerHome";
import styles from "../styles/equipments.module.css";

const Equipmentspage = () => {
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
            <h1 className={styles.textpABOUT}>OUR EQUIPMENTS</h1>
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
            <p className={styles.title}>Equipments</p>
          </div>
        <section className={styles.sectionTable}>
          
          <div className={styles.divTable}>
            <div className={styles.divTable2}>
              <div className={styles.container}>
                
                    <div className={styles.alltabel}>
                      <table className={styles.tablel}>
                        <thead className={styles.thead}>
                          <tr className={styles.tr}>
                            <th className="wpdt-cell wpdt-fs-000018 wpdt-bc-0274BE wpdt-tc-FFFFFF">
                              No.
                            </th>
                            <th className="wpdt-cell wpdt-fs-000018 wpdt-bc-0274BE wpdt-tc-FFFFFF">
                              Description
                            </th>
                            <th className="wpdt-cell wpdt-fs-000018 wpdt-bc-0274BE wpdt-tc-FFFFFF">
                              Quantity
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                         
                          <tr className="wpdt-cell-row3 even">
                            <td className="">01</td>
                            <td className="">كرين100 طن </td>
                            <td className="">1</td>
                          </tr>
                          <tr className="wpdt-cell-row3 odd">
                            <td className="">02</td>
                            <td className="wpdt-cell">كرين 70 طن </td>
                            <td className="wpdt-cell">1</td>
                          </tr>
                          <tr className="wpdt-cell-row3 even">
                            <td className="">03</td>
                            <td className="">كرين 50 طن</td>
                            <td className="">4</td>
                          </tr>
                          <tr className="wpdt-cell-row3 odd">
                            <td className="">04</td>
                            <td className="">كرين 25 طن </td>
                            <td className="">1</td>
                          </tr>
                          <tr className="wpdt-cell-row3 odd">
                            <td className="">05</td>
                            <td className="">بوكلين حفار و دقاق </td>
                            <td className="">8</td>
                          </tr>
                          <tr className="wpdt-cell-row3 even">
                            <td className="">06</td>
                            <td className="">شيول حفار </td>
                            <td className="">7</td>
                          </tr>
                         
                          <tr className="wpdt-cell-row3 even">
                            <td className="">07</td>
                            <td className="">شيول لودر </td>
                            <td className="">3</td>
                          </tr>
                          <tr className="wpdt-cell-row3 odd">
                            <td className="">08</td>
                            <td className="">
                             قلاب 
                            </td>
                            <td className="">3</td>
                          </tr>
                          <tr className="wpdt-cell-row3 even">
                            <td className="">09</td>
                            <td className="">
                             قصاصه اسفلت 
                            </td>
                            <td className="">5</td>
                          </tr>
                          <tr className="wpdt-cell-row3 even">
                            <td className="">10</td>
                            <td className="">
                             فراده  اسفلت 
                            </td>
                            <td className="">2</td>
                          </tr>
                          <tr className="wpdt-cell-row3 even">
                            <td className="">11</td>
                            <td className="">
                             رصاصه مختلفه
                            </td>
                            <td className="">7</td>
                          </tr>
                          <tr className="wpdt-cell-row3 even">
                            <td className="">12</td>
                            <td className="">
                             رجاج تربة 
                            </td>
                            <td className="">2</td>
                          </tr>
                          <tr className="wpdt-cell-row3 even">
                            <td className="">13</td>
                            <td className="">
                                تانك مياه سعه 14 م3
                            </td>
                            <td className="">1</td>
                          </tr>
                        </tbody>
                      </table>
                      <style id="wpdt-custom-style-1">
                        {`
    .wpdt-fs-000018 {
      font-size: 20px !important;
    }
    .wpdt-bc-0274BE {
      background-color: #0274BE !important;
    }
    .wpdt-tc-FFFFFF {
      color: #FFFFFF !important;
    }
  `}
                      </style>
                    </div>
                  </div>
                </div>
              </div>
           
        </section>
      </main>

      <Footer style={{ flexShrink: 0 }} />
    </>
  );
};
export default Equipmentspage;
