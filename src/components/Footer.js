const CopyRight  = () => {
    return ( <div className='copyright'>@copyRight 2023</div>);
};
const FooterLinks = () => {

    return (
        <div className='footerlinks'>
        <ul>
            <li>aboutus</li>
            <li>contactus</li>
        </ul>
        </div>
    );
}
const Footer = () => {
    return (
        <div className='footer'>
            <CopyRight/>
            <FooterLinks/>
        </div>
    );
};

export default Footer;