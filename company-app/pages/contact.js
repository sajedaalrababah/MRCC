import React from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/headerContact';
import styles from '../styles/contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone, faMapMarker, faGlobe } from '@fortawesome/free-solid-svg-icons';




const Contactpage = () => {
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
            <main >
                <section className={styles.aboutbackground} >
                    <div style={overlayStyle}></div>
                    <div className={styles.textABOUT} >
                        {/* <h3 className='texth1'>WHO WE ARE</h3> */}
                        <h1 className={styles.textpABOUT}>Contact US</h1>

                    </div>
                </section>


                <section className="htc__contact__area bg__white ptb--150">
                    <div className="container">
                        <div className={`${styles.row}  pb--100`}>
                            <div className="col-md-12">
                                <div className={styles.htc__contact__inner}>
                                    <h2 className={styles.title__line5}>CONTACT INFORMATION</h2>

                                    <p className={styles.htc__contact__innerp}>Feel free to contact us for further information and inquiries. </p>
                                </div>
                                <div className={styles.htc__address__container}>
                                    <div className={styles.ct__address}>
                                        <div className={styles.ct__address__icon}>
                                            <FontAwesomeIcon icon={faMapMarker} className={styles.ct__address__icon_i} />
                                        </div>
                                        <div className="ct__details">
                                            <p>Riyadh, Saudi Arabia <br></br>Alfarouq, Riyadh, Saudi Arabia</p>
                                        </div>
                                    </div>

                                    <div className={styles.ct__address}>
                                        <div className={styles.ct__address__icon}>
                                            <FontAwesomeIcon icon={faPhone} className={`${styles.ct__address__icon_i}`} />
                                        </div>
                                        <div className="ct__details">
                                            <p><a href="#"> (011) 244 8491</a></p>
                                            <p><a href="#">(011) 244 8491</a></p>
                                        </div>
                                    </div>

                                    <div className={`${styles.ct__address} smt-20}`}>

                                        <div className={styles.ct__address__icon}>
                                            <FontAwesomeIcon icon={faGlobe} className={styles.ct__address__icon_i} />
                                        </div>
                                        <div className="ct__details">
                                            <p><a href="#">AARS1@HOTMAIL.COM</a></p>
                                            <p><a href="#">AARS1@HOTMAIL.COM</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.row2}  `}>
                            <div className="col-md-12">
                                <div className={styles.htc__google__map}>
                                    <h2 className={styles.title__line5}>WHERE WE LOCATED</h2>
                                    <div className={styles.map__contacts}>
                                        <div className="mapouter">
                                            <div className={styles.gmap_canvas}>

                                                <iframe
                                                    className={styles.gmap_canvas_i}
                                                    style={{ width: "90%", height: "470px" }}
                                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.162655247995!2d46.757915399999995!3d24.652528999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0664d640d8a9%3A0x923a5798fb8c760d!2z2LTYsdmD2Ycg2LXYrtmI2LEg2KfZhNmF2K_ZitmG2Kkg2YTZhNmF2YLYp9mI2YTYp9iqINin2YTYudin2YXYqQ!5e0!3m2!1sar!2sjo!4v1695408038552!5m2!1sar!2sjo`}                                                ></iframe>

                                                {/* <a href="https://www.google.com/maps/place/Luminus+Technical+University+College+(LTUC),+Airport+Rd.,+Bridge%D8%8C+Jordan%E2%80%AD/@31.897932,35.8688197,17z/data=!4m14!1m7!3m6!1s0x151ca7e4aee722d5:0x8693a9183825010b!2sLuminus+Technical+University+College+(LTUC),+Airport+Rd.,+Bridge%D8%8C+Jordan!8m2!3d31.897932!4d35.8688197!16s%2Fm%2F0cp4nlx!3m5!1s0x151ca7e4aee722d5:0x8693a9183825010b!8m2!3d31.897932!4d35.8688197!16s%2Fm%2F0cp4nlx?hl=en-US&gl=US"></a> */}
                                            </div>
                                        </div>
                                    </div>
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

export default Contactpage;









