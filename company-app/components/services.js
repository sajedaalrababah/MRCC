import { useRouter } from 'next/router'; // Import the useRouter hook

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../styles/about.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const teamMembers = [
    {
        name: 'Building Construction ',
        major: 'We provide all aspects of construction and building work, from executing reinforcement works to everything related to infrastructure from start to finish.',
        image: 'https://img.freepik.com/free-photo/beautiful-view-construction-site-city-during-sunset_181624-9347.jpg?size=626&ext=jpg&ga=GA1.2.1442964426.1687759231&semt=ais',


    },
    {
        name: 'Road Construction',
        major: 'We offer comprehensive road maintenance services, in addition to infrastructure and electrical works, such as lighting, power generation stations, transformers, communications.',
        image: 'https://img.freepik.com/free-photo/road-construction_342744-602.jpg?size=626&ext=jpg&ga=GA1.2.1442964426.1687759231&semt=ais',

    },
    {
        name: 'Water & Wastewater Network',
        major: 'We provide all services related to water network construction and maintenance, in addition to sewage and sanitation works.',
        image: 'https://img.freepik.com/free-photo/gray-pipe-with-water-coming-out-its-hole_181624-4705.jpg?size=626&ext=jpg&ga=GA1.1.1442964426.1687759231&semt=ais',

    },
    {
        name: 'Landscaping and site organization',
        major: 'Designing, landscaping, and maintaining all types of gardens, along with providing the best ideas to clients for decorating gardens with the latest methods and equipment.',
        image: 'https://img.freepik.com/free-photo/reforestation-done-by-voluntary-group_23-2149500824.jpg?w=996&t=st=1696025352~exp=1696025952~hmac=e5edbe85bba9d7a2f0066d0115dab26c7e0c1227ff525b5cdb26ce83ced2ef87',

    },
    {
        name: 'Underground Electrical ,lighting , Telephone , Lines.',
        major: 'Installation and maintenance of electrical systems and lighting solutions.',
        image: 'https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-15086.jpg?size=626&ext=jpg&ga=GA1.1.1442964426.1687759231&semt=ais',

    },
    {
        name: ' Maintenance of both main and submain water networks.',
        major: 'Design, installation, and maintenance of primary and submain water networks, ensuring efficient water distribution and delivery',
        image: 'https://img.freepik.com/free-photo/diminishing-perspective-water-canal-near-dock_23-2148139879.jpg?w=360&t=st=1695229441~exp=1695230041~hmac=8732595d93953cfac8a075a654aa6ff2ff349b2be23d48f1a6992a48b8fa51b9',

    },


];


const AboutPage = () => {
    const router = useRouter();


    return (
        <div style={{paddingTop:'20px' ,backgroundColor:'#fafafa'}}>
            <div className={styles.text}>
                <h2 className={styles.title__line}>OUR <span className={styles.text__theme}>SERVICES</span></h2>
                <p className={styles.titlep}>Services that Elevate Your Experience in Construction and Real Estate.</p>
            </div>
            <div style={{ padding: '50px' }}>
                <div id='about' className="flex items-center justify-center ">
                    <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="relative items-center justify-center overflow-hidden transition-shadow rounded-lg shadow-lg cursor-pointer group hover:shadow-xl hover:shadow-black/30" >
                                <div className="h-96 w-72">
                                    <img className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={member.image} alt={member.name} />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                <div className="absolute inset-0 flex translate-y-[40%] flex-col items-center justify-center px-2 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <h1 className="text-2xl font-bold text-white font-dmserif">{member.name}</h1>
                                    <p className="mb-3 text-white transition-opacity duration-300 opacity-0 text-m group-hover:opacity-100">{member.major}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <Footer style={{ flexShrink: 0 }} /> */}
        </div>
    );
};
export default AboutPage;