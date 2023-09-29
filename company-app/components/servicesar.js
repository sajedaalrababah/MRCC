import { useRouter } from 'next/router'; // Import the useRouter hook
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../styles/about.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Define your team members' data in Arabic
const teamMembersArabic = [
    {
        name: 'بناء المباني',
        major: 'نقدم جميع جوانب البناء والأعمال الإنشائية، بدءًا من تنفيذ أعمال التسليح إلى كل ما يتعلق بالبنية التحتية من البداية إلى النهاية.',
        image: 'https://img.freepik.com/free-photo/beautiful-view-construction-site-city-during-sunset_181624-9347.jpg?size=626&ext=jpg&ga=GA1.2.1442964426.1687759231&semt=ais',
    },
    {
        name: 'بناء الطرق',
        major: 'نقدم خدمات شاملة لصيانة الطرق، بالإضافة إلى أعمال البنية التحتية والأعمال الكهربائية مثل الإضاءة ومحطات توليد الطاقة والمحولات ووسائل الاتصال .',
        image: 'https://img.freepik.com/free-photo/road-construction_342744-602.jpg?size=626&ext=jpg&ga=GA1.2.1442964426.1687759231&semt=ais',
    },
    {
        name: 'شبكة المياه ومياه الصرف الصحي',
        major: 'نقدم جميع الخدمات المتعلقة ببناء وصيانة شبكات المياه، بالإضافة إلى أعمال الصرف الصحي والتطهير.',
        image: 'https://img.freepik.com/free-photo/gray-pipe-with-water-coming-out-its-hole_181624-4705.jpg?size=626&ext=jpg&ga=GA1.1.1442964426.1687759231&semt=ais',
    },
    {
        name: 'تنسيق الحدائق وتنظيم المواقع',
        major: 'تصميم وتنسيق وصيانة جميع أنواع الحدائق، بالإضافة إلى تقديم أفضل الأفكار للعملاء لتزيين الحدائق باستخدام أحدث الأساليب والمعدات.',
        image: 'https://img.freepik.com/free-photo/reforestation-done-by-voluntary-group_23-2149500824.jpg?w=996&t=st=1695228680~exp=1695229280~hmac=ac6303f834ab800b6c53c9895b103c7988d8f6f14c57b7bd8b692ca98ca449fe',
    },
    {
        name: 'الكهرباء السفلية والإضاءة وخطوط الهاتف',
        major: 'تركيب وصيانة أنظمة الكهرباء وحلول الإضاءة.',
        image: 'https://img.freepik.com/free-photo/low-angle-shot-electric-linemen-working-pole_181624-46993.jpg?w=996&t=st=1695228852~exp=1695229452~hmac=77c3f5d36f15df3d04e1369f154e4425ebff95343abedb3bcd65f12d47c88284',
    },
    {
        name: 'صيانة شبكات المياه الرئيسية والفرعية',
        major: 'تصميم وتركيب وصيانة شبكات المياه الرئيسية والفرعية، مع ضمان توزيع المياه الفعّال والتسليم.',
        image: 'https://img.freepik.com/free-photo/diminishing-perspective-water-canal-near-dock_23-2148139879.jpg?w=360&t=st=1695229441~exp=1695230041~hmac=8732595d93953cfac8a075a654aa6ff2ff349b2be23d48f1a6992a48b8fa51b9',
    },
];

const AboutPage = () => {
    const router = useRouter();

    return (
        <div style={{ paddingTop: '20px', backgroundColor: '#fafafa' }}>
            <div className={styles.text}>
                <h2 className={styles.title__line}>خدماتنا <span className={styles.text__theme}>المقدمة</span></h2>
                <p className={styles.titlep}>خدمات ترتقي بتجربتك في الإنشاءات والعقارات</p>
            </div>
            <div style={{ padding: '50px' }}>
                <div id='about' className="flex items-center justify-center ">
                    <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
                        {teamMembersArabic.map((member, index) => (
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
