interface AboutMeLinkArgs {
    icon?: string;
    plain_text: string;
    href_link?: string;
    date?: string;
    title?: string;
}

export function AboutMeLink({ icon, plain_text, href_link }: AboutMeLinkArgs) {
    return (
        <>
            {href_link ? (<p className="widget"><i className={"w3-margin-right " + icon}></i>{plain_text}</p>)
                : (<a className="widget" href={href_link} target="_blank">
                    <p className="widget"><i className={"w3-margin-right " + icon}></i>{plain_text}</p>
                </a>)}

        </>
    );
}