import { useState, useEffect } from 'react';
import { Footer, NavigationBar, RouteTitle } from '../components/Route_Components';
import { AboutMeLink } from '../components/resume/About_Me';
import { ExperienceItem, Google, NASA, USArmy } from '../components/resume/Experience';
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
                                        <ResumeSubheader hex_color="1F1F1F" plain_text='Languages'/>

                                        <div className="skill-item">
                                            <p>Python, JavaScript, TypeScript, React.js, SQL, Git, HTML+CSS</p>
                                        </div>

                                        <ResumeSubheader hex_color="1F1F1F" plain_text='Tools & Products'/>

                                        <div className="skill-item">
                                            <p>Cloud Build, Vertex AI Platform (Gemini, Workbench, Agent Builder, Pipelines), Data Fusion, Cloud Run, Cloud SQL, Looker Studio, Procreate iOS, Figma, Adobe Photoshop</p>
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

                                    <ExperienceItem experience="Customer Engineer (Cloud Architect), Google Cloud">
                                        <a className="location"><Google />, New York City, NY</a>
                                        <p><i className="fa-regular fa-calendar"></i> November 2023 - Present</p>
                                        <ul>
                                            <li>
                                                Drove the end-to-end technical implementation of scalable and secure cloud solutions for five (and counting) high-growth startups, delivering projects within accelerated timelines and providing production-deployment support.
                                            </li>
                                            <li>
                                                Developed SQL-based internal metrics tools and dashboards to assist with startups account management and platform growth.
                                            </li>
                                            <li>
                                                Produced shareable, hands-on, technical demos for applied industry-specific use cases to demonstrate feasibility of building business solutions on the cloud with step-by-step explanations [<a style={{ color: "#0057E7" }} className="hyperlink" href="https://gitlab.com/gcloud-demos/gemini-events-specialist" target="_blank">Gemini Events Specialist</a>, <a style={{ color: "#3A7359" }} className="hyperlink" href="https://gitlab.com/gcloud-demos/harborview-customer-segmentation-analysis" target="_blank">Customer Segmentation Analysis</a>]
                                            </li>
                                        </ul>
                                    </ExperienceItem>

                                    <hr />

                                    <ExperienceItem experience="Developer Relations Engineer, Google Cloud">
                                        <a className="location"><Google />, New York City, NY</a>
                                        <p><i className="fa-regular fa-calendar"></i> May 2022 - August 2022</p>
                                        <ul>
                                            <li>
                                                Developed an <a style={{ color: "#DA4E3F" }} className="hyperlink" href="https://console.cloud.google.com/getting-started?walkthrough_id=functions--first-function-python" target="_blank">interactive Python web-based tutorial</a> for beginner cloud developers to create HTTP functions using Cloud Functions API and Cloud Build API.
                                            </li>
                                            <li>
                                                Produced audio and visual media content to drive individual developer adoption of Google Cloud Platform (GCP).
                                                <ul>
                                                    <li>
                                                        Contributed YouTube content creation by conducting contextual research, producing scripts, and starring in videos directed by the Google Production Studio. [
                                                            <a className="hyperlink" href="https://www.youtube.com/watch?v=CX0BTkimL7A" style={{ color: "#0057E7" }}>view</a>, <a className="hyperlink" href="https://www.youtube.com/watch?v=noCY3oGWdeI" style={{ color: "#cc0033" }}>view</a>, <a className="hyperlink" href="https://www.youtube.com/watch?v=S07XtiB_wPU" style={{ color: "#3A7359" }}>view</a>]
                                                    </li>
                                                    <li>
                                                        Participated in and supported the production lifecycle of GCP podcasts with internal and external clients. [<a className="hyperlink" href="https://googlecloudpodcast.libsyn.com/disaster-recovery-with-cody-ault-and-jo-anne-bourne" style={{ color: "#3A7359" }}>listen</a>, <a className="hyperlink" href="https://googlecloudpodcast.libsyn.com/contact-center-ai-with-amit-kumar-and-vasili-triant" style={{ color: "#cc0033" }}>listen</a>]
                                                    </li>
                                                    <li>
                                                        Published an official technical blog advocating benefits of student and entry-level developer adoption to <a style={{ color: "#0057E7" }} href="https://cloud.google.com/bigquery/" className="hyperlink" target="_blank">Big Query</a>, including a step-by-step scenario tutorial. [<a className="hyperlink" href="https://cloud.google.com/blog/topics/developers-practitioners/leveling-your-data-analysis-skills-student" style={{ color: "#DA4E3F" }}>read</a>]
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
                                                Created 2D digital iconography from scratch and integrated into the frontend UI with JavaScript to OpenMDAO, an open source optimization framework and platform used to build internal analysis tools with derivatives.
                                            </li>
                                            <li>
                                                Developed custom Wordpress CMS tools with JavaScript, HTML + CSS programming to maintain internal team content on the official website for the NASA Glenn Research Center’s Graphics and Visualization Lab.
                                            </li>
                                            <li>
                                                Monitored Wordpress site metrics using Google Analytics to drive public interest and monitor demo performance on 3D aerospace vehicle and parts modeling projects (planes, engines, and wind turbines).
                                            </li>
                                            <li>
                                                Led the development of K-12 STEM education curriculums for virtual audiences to teach Python and Java principles to children in STEM, with a focus on hands-on robotics programming, low-level data structures and algorithms.
                                            </li>
                                            <li>
                                                Directed NASA outreach initiatives and hosted broadcast events to generate public interest in the aerospace industry and the decades of research work generated from the Graphics Lab.
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