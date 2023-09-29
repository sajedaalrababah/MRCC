import { useRouter } from 'next/router'; // Import the useRouter hook

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../styles/client.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const teamMembers = [
    {
        name: 'The Ministry of Water and Electricity',
        image: 'https://al-ayuni.com/wp-content/uploads/2018/05/mowe-logo.jpg',


    },
    {
        name: 'The General Directorate of Water - Riyadh Region',
        image: 'https://th.bing.com/th/id/OIP.sXcUPmrkujAyla6_pgKr0gHaFj?pid=ImgDet&rs=1',

    },
    {
        name: 'The General Directorate of Education - Riyadh Region',
        image: 'https://th.bing.com/th/id/OIP.kbrmUGfM63GLBJeF4a24ugHaEK?pid=ImgDet&rs=1',

    },
    {
        name: 'The National Water Company',
        image: 'https://rjeem.com/wp-content/uploads/2020/07/%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B9%D9%84%D8%A7%D9%85-%D8%B9%D9%86-%D9%81%D8%A7%D8%AA%D9%88%D8%B1%D8%A9-%D8%B4%D8%B1%D9%83%D8%A9-%D8%A7%D9%84%D9%85%D9%8A%D8%A7%D9%87.jpg',

    },
    {
        name: ' Al-Ainiyah and Al-Jabaliyah Municipality',
        image: 'https://th.bing.com/th/id/OIP.gFVDvNdfnW3gX2lZQ2YSmgAAAA?pid=ImgDet&rs=1',

    },


];


const ClientPage2 = () => {
    const router = useRouter();


    return (
        <div style={{ paddingTop: '20px',paddingBottom:'30px',backgroundColor:'whitesmoke',paddingLeft:'50px',paddingRight:'50px' }}>
            <div className={styles.text}>
                <h2 className={styles.title__line}>OUR <span className={styles.text__theme}>CLIENT</span></h2>
                <p className={styles.titlep}>Our Clients: Our Partners in Success and the Vision for Tomorrow.</p>
            </div>
            <div style={{ padding: '10px',marginTop:'10px' ,}} className={styles.contain}>
                <div id='about' className="flex items-center justify-center ">
                    <div className="grid grid-cols-1 gap-2 lg:grid-cols-5" >
                        {teamMembers.map((member, index) => (
                            <div key={index} className="relative items-center justify-center" >
                                <div className={styles.clientDiv}>
                                    <img className={styles.clientImage} src={member.image} alt={member.name} />
                                </div>
                                <div className="absolute m-5 text-center">
                                    {/* <h1 className={styles.clientText}>{member.name}</h1> */}
                                    

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ClientPage2;