import "./FooterStyles.css";

const Footer = () => {
    return (
        <div className="footer">
        <div className="top">
            <div>
                <h1>Melel Clay Decor</h1>
                <p>Decor your home Lorem ipsum</p>
            </div>
            <div>
            <a href="/">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/">
                <i className="fab fa-facebook-f"></i>
            </a>
            </div>
        </div>
        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/">add</a>
                <a href="/">add</a>
                <a href="/">add</a>
                <a href="/">add</a>
        </div>
        <div>
                <h4>Community</h4>
                <a href="/">add</a>
                <a href="/">add</a>
                <a href="/">add</a>
                <a href="/">add</a>
        </div>
        <div>
                <h4>Help</h4>
                <a href="/">add</a>
                <a href="/">add</a>
                <a href="/">add</a>
                <a href="/">add</a>
        </div>

        </div>
        </div>
    );
}
export default Footer;