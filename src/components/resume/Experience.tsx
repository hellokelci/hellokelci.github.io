interface ExperienceArgs {
    children: React.ReactNode;
    experience: string;
}

export function ExperienceItem({ experience, children }: ExperienceArgs) {
    return (
        <div className="experience-item">
            <p className="resume-item-header">{experience}</p>
            {children}
        </div>
    )
}

export function Google() {
    return (
        <>
            <p className="company-logos google"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></p>
        </>
    );
}

export function NASA() {
    return (
        <>
            <p className="company-logos nasa">NASA</p>
        </>
    );
}

export function USArmy() {
    return (
        <>
            <p className="company-logos army">U.S. ARMY</p>
        </>
    );
}