import { useState, useEffect } from 'react';
import PageLoader from "../components/Page_Loader";
import { Block, ActionBlock } from "../components/home/Grid_Blocks";
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
                <div className="route-container home">
                    <div className="grid-layout">

                        <div id="block-kelcimensah" className="centered-v-h">
                            <AnimatedGreeting />
                        </div>

                        <ActionBlock
                            href_link='/#/projects'
                            plain_text='Projects.'
                            block_id='block-projects'
                            css_class='block-padding orange tilt-content-container'
                        />

                        <Block css_class="flicker blue" />

                        <Block css_class='green centered-v-h' block_id='block-date'>
                            <div className='date'>
                                <p className="current-date">{time.toLocaleString('default', { month: 'short' })} {time.getDate()}</p>
                                <p className="current-time">{hours}:{minutes} {ampm.toUpperCase()} <br /> {time.toString().match(/\(([A-Za-z\s].*)\)/)![1]}</p>
                            </div>
                        </Block>

                        <Block css_class="red" />

                        <ActionBlock
                            href_link='/#/resume'
                            plain_text='Take a look at my resume &nbsp;'
                            block_id='block-resume'
                            css_class='centered-v-h tilt-content-container'
                            icons='fa-solid fa-arrow-right'
                        />

                        <Block css_class="orange" />

                        <ActionBlock
                            href_link='/#/contact'
                            plain_text='Contact Me.'
                            block_id='block-contact-me'
                            css_class='block-padding blue tilt-content-container'
                        />

                        <Block css_class="flicker green" delay="7s" />
                        <Block css_class="blue" />
                        <Block css_class="yellow" />
                        <Block css_class="flicker red" delay="4s" />
                    </div>
                </div>
            )}
        </>
    )
};