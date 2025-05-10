import { useState, useEffect } from 'react';
import { Footer, NavigationBar, RouteTitle } from '../components/Route_Components';
import { AboutMeLink } from '../components/resume/About_Me';
import { ExperienceItem, Google, NASA, USArmy } from '../components/resume/Experience';
import { AcademicInvolvement } from '../components/resume/Academic_Involvement';
import img_profile from '/profile.jpg'
import PageLoader from "../components/Page_Loader";
import '../css/resume.css'
import '../css/w3.css'

function Resume() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1200);
    }, []);

    return (
        <>
            {loading ? (
                <PageLoader />
            ) : (
                <div className="route-container">
                    <div className="resume-container w3-content">
                        <NavigationBar />

                        <div className="w3-row-padding">

                            <RouteTitle plain_text="Interactive Resume.">
                                <div className="btn-download">
                                    <a href="https://docs.google.com/document/d/1aRP5LGOwz1ywaAzwiP_AlnI-LAGG3Q0VKHdKFPD7Hfg/edit?usp=sharing"
                                        target="_blank">&nbsp;&nbsp;Download</a>
                                </div>
                            </RouteTitle>

                            <div className="w3-third">
                                {/* about me container */}
                                <div className="w3-card-4">

                                    {/* photo container > about me container */}
                                    <div className="w3-display-container photo-container">
                                        <img src={img_profile} alt="Avatar" />
                                        <div className="w3-display-bottomleft w3-container">
                                            <h1 className="aboutme-name">Kelci Mensah</h1>
                                        </div>
                                    </div>

                                    {/* information > about me */}
                                    <div className="w3-container aboutme-container">

                                        <div className="aboutme-information">
                                            <AboutMeLink icon="fa-regular fa-map" plain_text='New York, NY' />
                                            <AboutMeLink
                                                icon="fa-brands fa-github fa-fw"
                                                plain_text='@hellokelci'
                                                href_link='https://www.github.com/hellokelci'
                                            />
                                            <AboutMeLink
                                                icon="fa-regular fa-paper-plane fa-fw"
                                                plain_text='kelcimensah@gmail.com'
                                                href_link='mailto:kelcimensah@gmail.com'
                                            />
                                            <AboutMeLink
                                                icon="fa-brands fa-linkedin-in fa-fw"
                                                plain_text='Kelci Mensah'
                                                href_link='https://www.linkedin.com/in/kelcimensah'
                                            />
                                        </div>

                                        <hr />

                                        {/* education > about me container */}
                                        <h3 className="subheader" style={{ color: "#345D98" }}>Education.</h3>

                                        <div className="education-item">
                                            <p>Dual Bachelors in Computer Science and Cognitive Science, High Honors</p>
                                            <p className="location">
                                                <a href="https://www.rutgers.edu/" className="hyperlink" target="_blank" style={{ color: "#CC0033" }}>Rutgers
                                                    University</a>, New Brunswick, NJ
                                            </p>
                                            <p className="date"><i className="fa-regular fa-calendar"></i> 2019 - 2023</p>
                                        </div>

                                        {/* skills > about me container */}
                                        <h3 className="subheader" style={{ color: "#1F1F1F" }}>Skills.</h3>

                                        <div className="education-item">
                                            <h4>Languages + Libraries</h4>
                                            <p>Python, Numpy, Pandas, HTML, CSS, JavaScript, TypeScript, React.js, SQL, Git</p>
                                        </div>

                                        <div className="education-item">
                                            <h4>Software + Digital Tools</h4>
                                            <p>Google Cloud Platform, Google Workspace, Figma, Adobe Photoshop, Procreate iOS, Microsoft Office 365</p>
                                        </div>

                                        <br />
                                        <br />

                                    </div>
                                </div>
                            </div>

                            <div className="w3-twothird">
                                {/* work experience container */}
                                <div className="experience-container w3-container w3-card w3-margin-bottom">

                                    <h2 className="subheader" style={{ color: "#DA4E3F", margin: "2.5rem 0 1rem" }}>
                                        Work Experience.
                                    </h2>

                                    <ExperienceItem experience="Cloud Technical Resident, Google Cloud">
                                        <a className="location"><Google />, Atlanta, GA</a>
                                        <p><i className="fa-regular fa-calendar"></i> November 2023 - Present</p>
                                    </ExperienceItem>

                                    <hr />

                                    <ExperienceItem experience="Cloud Technical Resident, Google Cloud">
                                        <a className="location"><Google />, New York City, NY</a>
                                        <p><i className="fa-regular fa-calendar"></i> May 2022 - August 2022</p>
                                        <ul>
                                            <li>
                                                Developed an <a style={{ color: "#DA4E3F" }} className="hyperlink" href="https://console.cloud.google.com/getting-started?walkthrough_id=functions--first-function-python" target="_blank">interactive Python web-based tutorial</a> to help beginner cloud developers get started writing functions with Google Cloud.
                                            </li>
                                            <li>
                                                Created audio and visual media content to advocate the Google Cloud developer and enterprise partnership.
                                                <ul>
                                                    <li>
                                                        Contributed to the production life cycle of YouTube content for Google Cloud including contextual research, scripting, and starring in visual media. [<a className="hyperlink" href="#" style={{ color: "#cc0033" }}>view</a>]
                                                    </li>
                                                    <li>
                                                        Supported the production lifecycle of audio content for Google Cloud Platform by starring in podcasts featuring internal and external clients.
                                                    </li>
                                                    <li>
                                                        Published a technical blog piece advocating benefits of student and entry-level developers using Google Cloud Platform’s (GCP) <a style={{ color: "#0057E7" }} href="https://cloud.google.com/bigquery/" className="hyperlink" target="_blank">Big Query</a> solution. [<a className="hyperlink" href="#" style={{ color: "#cc0033" }}>view</a>]
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Contributed to the <a style={{ color: "#3A7359" }} href="https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute" className="hyperlink" target="_blank">Google Computer Science Summer Institute</a> program as a teacher’s assistant (TA) for the computer science principles curriculum.
                                            </li>
                                        </ul>
                                    </ExperienceItem>

                                    <hr />

                                    <ExperienceItem experience="Graphics and Visualization Lab Intern">
                                        <a className="location"><NASA />, Cleveland, Ohio</a>
                                        <p><i className="fa-regular fa-calendar"></i> August 2020 - August 2021</p>

                                        <ul>
                                            <li>
                                                Integrated Wordpress CMS tools with HTML, CSS, and JavaScript programming to develop and maintain team content on the official website for the NASA Glenn Graphics and Visualization Lab.
                                                <ul>
                                                    <li>
                                                        Monitored site metrics using web analytics tools to gauge public interest on projects.
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Developed K-12 STEM education curriculums for virtual audiences using Python and Java programming languages with a focus on data structure algorithms, web development, and hands-on robotics programming.
                                            </li>
                                            <li>
                                                Created digital iconography for internal tools while practicing government-standard design principles.
                                            </li>
                                        </ul>
                                    </ExperienceItem>

                                    <hr />

                                    <ExperienceItem experience='Cyber Security Intern'>
                                        <a className="location"><USArmy /> (Aberdeen Proving Ground), Aberdeen, MD</a>
                                        <p><i className="fa-regular fa-calendar"></i> July 2018</p>

                                        <ul>
                                            <li>
                                                Assisted cyber-security specialists within the Department of Defense (D.O.D) in maintaining sensitive digital safety on military-grade operating systems.
                                                <ul>
                                                    <li>
                                                        Preserved IP address anonymity and practiced invasive malware defense strategies using Linux command line tools.
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </ExperienceItem>

                                    <br />
                                </div>

                                {/* academic involvement container */}
                                <div className="involvement-container w3-container w3-card w3-margin-bottom">
                                    <h2 className="subheader" style={{ color: "#3A7359", margin: "2.5rem 0 1rem" }}>Academic Involvement.</h2>

                                    <AcademicInvolvement
                                        involvement="Minority Engineering Educational Task (MEET) - Rutgers University NSBE Chapter"
                                        active_dates="2019 - 2023"
                                        description="Pre-professional student organization for Black, Hispanic, Asian, and other minority-representing student identities within engineering and other technology-based STEM fields."
                                    />

                                    <AcademicInvolvement
                                        involvement="Douglass-DIMACS Computer Science Living Learning Community"
                                        active_dates="2019 - 2023"
                                        description="A curated living-learning center and community for women-representing undergraduate students majoring in computer science."
                                    />

                                    <br />
                                    <br />

                                </div >
                            </div >
                        </div >
                    </div >

                    <Footer />
                </div>
            )}

        </>
    )
}

export default Resume;