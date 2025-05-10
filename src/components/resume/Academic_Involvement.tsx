interface AcademicInvolvementArgs {
    description: string;
    active_dates?: string;
    involvement?: string;
}

export function AcademicInvolvement({ involvement, description, active_dates }: AcademicInvolvementArgs) {
    return (
        <>
            <div className="involvement-item">
                <h4 className="title">{involvement}</h4>
                <p className="date"><i className="fa-regular fa-calendar"></i> {active_dates}</p>
                <p className="description">{description}</p>
            </div>
        </>
    );
}