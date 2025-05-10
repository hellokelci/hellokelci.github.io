import { useState, useEffect } from 'react';
import PageLoader from "../components/Page_Loader";
import { Block, ActionBlock } from "../components/Grid_Blocks";
import AnimatedGreeting from "../components/home/Animated_Greeting";
import 'animate.css';
import '../css/home.css';

export default function Home() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    let ampm = time.getHours() >= 12 ? 'pm' : 'am';
    let hours = (time.getHours() % 12) || 12;
    let minutes = (time.getMinutes() <= 9 ? '0' : '') + time.getMinutes();

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
                <div className="route-container route-container-home">
                    <div className="grid-layout">

                        <div id="block-animated-greeting" className="centered-v-h">
                            <AnimatedGreeting />
                        </div>

                        <ActionBlock
                            href_link='/#/projects'
                            plain_text='Projects.'
                            block_id='block-projects'
                            css_class='block-padding centered-v-h block-orange tilt-content-container'
                        />

                        <Block css_class="block-flicker block-blue" />

                        <Block css_class='block-green centered-v-h' block_id='block-date'>
                            <div className='date-container'>
                                <p className="current-date">{time.toLocaleString('default', { month: 'short' })} {time.getDate()}</p>
                                <p className="current-time">{hours}:{minutes} {ampm.toUpperCase()} <br /> {time.toString().match(/\(([A-Za-z\s].*)\)/)![1]}</p>
                            </div>
                        </Block>

                        <Block css_class="block-red" />

                        <ActionBlock
                            href_link='/#/resume'
                            plain_text='Take a look at my resume &nbsp;'
                            block_id='block-resume'
                            css_class='centered-v-h block-black tilt-content-container'
                            icons='fa-solid fa-arrow-right'
                        />

                        <Block css_class="block-orange" />

                        <ActionBlock
                            href_link='/#/contact'
                            plain_text='Contact Me.'
                            block_id='block-contact-me'
                            css_class='block-padding centered-v-h block-blue tilt-content-container'
                        />

                        <Block css_class="block-flicker block-green" delay="7s" />
                        <Block css_class="block-blue" />
                        <Block css_class="block-yellow" />
                        <Block css_class="block-flicker block-red" delay="4s" />
                    </div>
                </div>
            )}
        </>
    )
};