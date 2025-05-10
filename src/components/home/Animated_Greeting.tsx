import '../../css/components/animated_greeting.css';

export default function AnimatedGreeting() {
    return (
        <>
            <h1 className="animated-greeting">
                Hello, I'm<br />
                <span className="moving k animate__animated animate__bounce">K</span>
                <span className="moving e animate__animated animate__bounce">e</span>
                <span className="moving l animate__animated animate__bounce">l</span>
                <span className="moving c animate__animated animate__bounce">c</span>
                <span className="moving i animate__animated animate__bounce">i</span>
                <span> </span>
                <span className="moving m animate__animated animate__bounce">M</span>
                <span className="moving ee animate__animated animate__bounce">e</span>
                <span className="moving n animate__animated animate__bounce">n</span>
                <span className="moving s animate__animated animate__bounce">s</span>
                <span className="moving a animate__animated animate__bounce">a</span>
                <span className="moving h animate__animated animate__bounce">h</span>
                <span className="moving period animate__animated animate__bounce">.</span>
            </h1>
        </>
    );
}