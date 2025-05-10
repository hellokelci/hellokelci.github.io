import { useState, useEffect } from 'react';
import { Footer, NavigationBar, RouteTitle } from '../components/Route_Components';
import { AboutMeLink } from '../components/resume/About_Me';
import { ExperienceItem, Google, NASA, USArmy } from '../components/resume/Experience';
import { AcademicInvolvement } from '../components/resume/Academic_Involvement';
import {ResumeSubheader, ResumeHeader} from '../components/resume/Headers';
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
                    <div className="route-container-resume w3-content">
                        <NavigationBar />

                        <div className="w3-row-padding">

                            <RouteTitle plain_text="My Resume."></RouteTitle>

                            <div className="w3-third">
                                {/* about me container */}
                                <div className="w3-card-4">

                                    {/* photo container > about me container */}
                                    <div className="w3-display-container photo-container">
                                        <img src={img_profile} alt="Portfolio photo" />
                                        <div className="w3-display-bottomleft w3-container">
                                            <h1 className="aboutme-name">Kelci Mensah</h1>
                                        </div>
                                    </div>

                                    {/* information > about me */}
                                    <div className="w3-container aboutme-container">

                                        <div className="aboutme-information">
                                            <AboutMeLink icon="fa-regular fa-map" plain_text='New York City, NY' />
                                            <AboutMeLink
                                                icon="fa-brands fa-github fa-fw"
                                                plain_text='hellokelci'
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
                                        <ResumeSubheader plain_text='Education'/>

                                        <div className="education-item">
                                            <p>Dual Bachelors in Computer Science and Cognitive Science, High Honors</p>
                                            <p className="location">
                                                <a href="https://www.rutgers.edu/" className="hyperlink" target="_blank" style={{ color: "#CC0033" }}>Rutgers, The State University of New Jersey</a>, New Brunswick, NJ
                                            </p>
                                            <p className="date"><i className="fa-regular fa-calendar"></i> 2019 - 2023</p>
                                        </div>

                                        {/* skills > about me container */}
                                        <ResumeSubheader hex_color="1F1F1F" plain_text='Technical Skills'/>

                                        <div className="skill-item">
                                            <p>Python, JavaScript, TypeScript, React.js, SQL, Git, HTML, CSS, Google Cloud Platform, Figma, Adobe Photoshop, Procreate iOS</p>
                                        </div>

                                        <br />
                                        <br />

                                    </div>
                                </div>
                            </div>

                            <div className="w3-twothird">
                                {/* work experience container */}
                                <div className="experience-container w3-container w3-card w3-margin-bottom">

                                    <ResumeHeader hex_color="DA4E3F" plain_text="Work Experience"/>

                                    <ExperienceItem experience="Cloud Architect, Google Cloud">
                                        <a className="location"><Google />, New York City, NY</a>
                                        <p><i className="fa-regular fa-calendar"></i> November 2023 - Present</p>
                                        <ul>
                                            <li>
                                                Designed and supported technical implementation of highly-available, scalable, and secure cloud solutions on Google Cloud Platform within startups customer sector.
                                            </li>
                                            <li>
                                                Utilized expertise in Google Cloud Platform products including serverless computing (Cloud Functions, Cloud Run), artificial intelligence (Vertex AI, Gemini), and data analytics (BigQuery, Dataflow) to successfully deliver multiple large-scale cloud migration projects, exceeding client expectations and timelines.
                                            </li>
                                        </ul>
                                    </ExperienceItem>

                                    <hr />

                                    <ExperienceItem experience="Developer Relations Engineer, Google Cloud">
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