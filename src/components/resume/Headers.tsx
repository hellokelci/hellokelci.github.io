interface ResumeSubheaderArgs {
    hex_color?: string;
    plain_text: string
}

export function ResumeSubheader({hex_color, plain_text} : (ResumeSubheaderArgs)) {
    return (
        <h3 className="resume-subheader" style={{ color: `#${hex_color}`}}>{plain_text}.</h3>
    )
}

export function ResumeHeader({hex_color, plain_text} : (ResumeSubheaderArgs)) {
    return (
        <h2 className="resume-header" style={{ color: `#${hex_color}`, margin: "2.5rem 0rem 0rem" }}>{plain_text}.</h2>
    )
}
