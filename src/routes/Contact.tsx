import Method from "../components/contact/Contact_Method";
import PageLoader from "../components/Page_Loader";
import { Block, ActionBlock } from "../components/Grid_Blocks";
import { useState, useEffect } from 'react';
import '../css/contact.css'

export default function Contact() {
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

                <div className="route-container ">
                    <div className="route-container-contact">

                        <ActionBlock
                            href_link='/'
                            plain_text='Go home.'
                            block_id='block-home'
                            css_class='block-padding block-blue tilt-content-container'
                        />

                        <ActionBlock
                            href_link='/#/resume'
                            plain_text='Take a look at my resume &nbsp;'
                            block_id='block-resume'
                            css_class='centered-v-h tilt-content-container'
                            icons='fa-solid block-black fa-arrow-right'
                        />

                        <Block css_class='centered-v-h' block_id='block-stay-connected'>
                            <p>Hey, stay connected! <br /> Send me an email or get in touch via socials :)</p>
                        </Block>

                        <div id="block-email" className="padding centered-v-h">
                            <Method method="e-mail" plain_text="kelcimensah@gmail.com" />
                        </div>

                        <div className="padding" id="block-social">
                            <p>Truthfully, I do check <a href="https://www.linkedin.com/in/kelcimensah/" target="_blank">LinkedIn</a> from time-to-time.</p>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};