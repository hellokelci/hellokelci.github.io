import Tilt from 'react-parallax-tilt';

interface BlockArgs {
    css_class?: string;
    href_link?: string;
    plain_text?: string;
    block_id?: string;
    icons?: string;
    children?: React.ReactNode;
    delay?: string
}

export function Block({ block_id, css_class, children, delay}: BlockArgs) {
    return (
        <div id={block_id} className={css_class} style={{ animationDelay: `${delay}` }}>
            {children}
        </div>
    );
};

export function ActionBlock({ css_class, href_link, block_id, plain_text, icons }: BlockArgs) {
    return (
        <Tilt tiltReverse={true}>
            <a className="block-tilt" href={href_link}>
                <div id={block_id} className={css_class}>
                    <p>{plain_text}<i className={icons} /></p>
                </div>
            </a>
        </Tilt>
    );
};