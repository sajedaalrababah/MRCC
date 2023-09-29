import React from 'react';
import Footer from '@/components/footerar';
import Navbar from '@/components/headerAboutar';
import styles from '../styles/aboutbage.module.css';

const About = () => {
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '500px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
  };

  return (
    <>
      <Navbar />
      <main>
        <section className={styles.aboutbackground}>
          <div style={overlayStyle}></div>
          <div className={styles.textABOUT}>
            <h1 className={styles.textpABOUT}>من نحن</h1>
          </div>
        </section>

        <div className={styles.containerorganization}>
          <div className={styles.iconContainer}>
          <div class="elementor-icon-wrapper">
                                <div class="elementor-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="20" viewBox="0 0 21 8" fill="none">
                                        <path d="M7 0H13L6 8H0L7 0Z" fill="#FCC236"></path>
                                        <path d="M13 0H7L15 8H21L13 0Z" fill="#FCC236"></path>
                                    </svg>
                                </div>
                            </div>
          </div>
          <p className={styles.title}>نظرة عامة</p>
        </div>

        <section className={`${styles.weare} row`}>
          <div className={styles.containertext}>
            <div className={styles.divabouttext}>
              <p className={styles.title}>من نحن</p>
              <p className={styles.text}>
                <br></br>
                شركة City Rocks Contracting، الموجودة في الرياض، تُعتبر واحدة من المؤسسات التي تعمل في تقديم وتنفيذ العقود لبناء المباني وتزيين الداخل والخارج، بالإضافة إلى الصيانة. تأسست الشركة في عام 2002. منذ تأسيسها، اختصت الشركة في تنفيذ مهام متنوعة، بما في ذلك شبكات المياه والخزانات، وصيانة الطرق، والأعمال التحتية، وأعمال الكهرباء.
              </p>
            </div>
            <br></br>
            <div className={styles.divabouttext}>
              <p className={styles.title}>رؤيتنا</p>
              <p className={styles.text}>
                <br></br>
                نحن نتطلع إلى التوسع في مشاريع مستقبلية متقدمة وتنفيذ أفكار ذكية من خلال استغلال أحدث التقنيات لرفع شركتنا إلى المستوى العالمي في تقديم خدمات ذات جودة عالية واحترافية.
              </p>
            </div>
          </div>

          <div className={styles.divaboutimg}>
            <img
              className={styles.imgabout}
              src="https://images-ext-1.discordapp.net/external/ektm-aHLm-JyuwVprlaZLQuQIn7TuMtchRcDkjTrXcU/%3Fw%3D996%26t%3Dst%3D1695240984~exp%3D1695241584~hmac%3Da111e70b7bb926499385dff1daf5831f840e5e59b94b26a6c970d0e930d7b8d9/https/img.freepik.com/free-photo/close-up-construction-site-excavator_1112-1223.jpg?width=1040&height=669"
              alt="Image 2"
            />
          </div>
        </section>

        <section className="htc__offer__area ptb--150 bg__white">
          <div className="container">
            <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 separator">
                                <div className="offer">
                                    <div className="offer__icon">
                                        <img src="https://htmldemo.net/tm/simply/simply/images/others/icon-2/1.png" alt="icon images" />
                                    </div>
                                    <div className="offer__details">
                                        <h2><a href="#">اعلى تصنيف</a></h2>
                                        <p>نحن مصنفون كأفضل الشركات  في مجال الانشاءات و العقارات</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 separator">
                                <div className="offer">
                                    <div className="offer__icon">
                                        <img src="https://htmldemo.net/tm/simply/simply/images/others/icon-2/2.png" alt="icon images" />
                                    </div>
                                    <div className="offer__details">
                                        <h2><a href="#">افضل خدمه</a></h2>
                                        <p>تمتاز خدمتنا في مجال العقارات بأعلى مستوى من الجودة والاحترافية.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-6">
                                <div className="offer">
                                    <div className="offer__icon">
                                        <img src="https://htmldemo.net/tm/simply/simply/images/others/icon-2/3.png" alt="icon images" />
                                    </div>
                                    <div className="offer__details">
                                        <h2><a href="#">افضل تكلفه</a></h2>
                                        <p>نسعى دائماً لتقديم أفضل العروض والأسعار في صناعة الإنشاءات والعقارات

</p>
                                    </div>
                                </div>
                            </div>
            </div>
          </div>
        </section>

        <div className={styles.containerorganization}>
          <div className={styles.iconContainer}>
          <div class="elementor-widget-container">
                            <div class="elementor-icon-wrapper">
                                <div class="elementor-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="20" viewBox="0 0 21 8" fill="none">
                                        <path d="M7 0H13L6 8H0L7 0Z" fill="#FCC236"></path>
                                        <path d="M13 0H7L15 8H21L13 0Z" fill="#FCC236"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
          </div>
          <p className={styles.title}>هيكل التنظيم</p>
          <section className={styles.divorganization}>
            <div className={styles.centerContent}>
              <img
                className={styles.imgorganization}
                src="/Beige Nude Business Organization Chart .png"
                alt="Image 2"
              />
            </div>
          </section>
        </div>
      </main>
      <Footer style={{ flexShrink: 0 }} />
    </>
  );
};

export default About;
