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
            {href_link ? (
                <a className="aboutme-link" href={href_link} target="_blank">
                    <p className="aboutme-link"><i className={"w3-margin-right " + icon}></i>{plain_text}</p>
                </a>)
            : (<p className="aboutme-link"><i className={"w3-margin-right " + icon}></i>{plain_text}</p>)}

        </>
    );
}