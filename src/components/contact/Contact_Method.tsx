interface ContactArgs {
    method: string;
    plain_text: string;
    href_link?: string;
}

export default function Method({method, plain_text, href_link}: ContactArgs) {
    return (
        <>
            <div className="method-of-contact">
                <h3>{method}</h3>
                {href_link ? (
                    <a href={href_link} target="_blank"><p>{plain_text}</p></a>
                ): (<p>{plain_text}</p>)}
            </div>
        </>
    );
};