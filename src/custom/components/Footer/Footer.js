import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const date = new Date();

const styles = (theme) => ({
  footer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing.unit * 2
  }
});

const Footer = ({ ...props }) => (
<>

<div className="footer">
    <div className="footer-top">
        <h2 className="footer-title">#LookFantastic</h2>
        <a href="#" className="footer-subtitle">Follow us on IG <img src="/static/images/social-icons/instagram.png" alt=""/></a>
    </div>
    <div className="images-container">
        <img src="/static/images/instagram/1.png" alt=""/>
        <img src="/static/images/instagram/2.png" alt=""/>
        <img src="/static/images/instagram/3.png" alt=""/>
        <img src="/static/images/instagram/4.png" alt=""/>
        <img src="/static/images/instagram/5.png" alt=""/>
    </div>
    <div className="socials-container">
        <img src="/static/images/social-icons/instagram.png" alt=""/>
        <img src="/static/images/social-icons/twitter.png" alt=""/>
        <img src="/static/images/social-icons/youtube.png" alt=""/>
        <img src="/static/images/social-icons/facebook.png" alt=""/>
        <img src="/static/images/social-icons/layers.png" alt=""/>
        <img src="/static/images/social-icons/ghost.png" alt=""/>
        <img src="/static/images/social-icons/whatsapp.png" alt=""/>
    </div>
    <div className="menu-container">
        <ul>
            <li>
                <img className="column-icon" src="/static/images/footer/smile.png" alt=""/>
                <span>Help</span>
            </li>
            <li>Dispatch & Delivery</li>
            <li>Refunds & Returns</li>
            <li>Contact Us</li>
            <li>Payments</li>
            <li>Faqs</li>
        </ul>
        <ul>
            <li>
                <img className="column-icon" src="/static/images/footer/eye.png" alt=""/>
                <span>LookFantastic</span>
            </li>
            <li>About</li>
            <li>T&Cs</li>
            <li>Policies</li>
            <li>Careers</li>
            <li>Stores & Salons</li>
        </ul>
        <ul>
            <li>
                <img className="column-icon" src="/static/images/footer/bag.png" alt=""/>
                <span>Shopping</span>
            </li>
            <li>Brands</li>
            <li>Voucher Codes</li>
            <li>Student Discount</li>
            <li>Beauty Box</li>
            <li>Gift Vouchers</li>
        </ul>
        <ul>
            <li>
                <img className="column-icon" src="/static/images/footer/mail.png" alt=""/>
                <span>Newsletter</span>
            </li>
            <div style={{width: "100%"}}>Sign up to receive VIP alerts, updates and special offers.</div>
            <div>
                <input type="email" className="email" placeholder="Enter email address"/>
            </div>
        </ul>
        <ul>
            <li>
                <img className="column-icon" src="/static/images/footer/settings.png" alt=""/>
                <span>Settings</span>
            </li>
            <div className="shipping-settings">
                <div>Shipping to: <b>United Kingdom</b></div>
                <div>Currency: <b>GBP £</b></div>
                <div>Language: <b>English</b></div>
                <a href="">Change</a>
            </div>
        </ul>

    </div>
    <div className="footer-logo-container">
        <div>
            <img className="logo" src="/static/images/thehutgroup.png" alt=""/>
            <p> © 2019 The Hut.com Ltd.</p>
        </div>
        <div className="payment-methods">
            <img src="/static/images/payment/klarna.png" alt=""/>
            <img src="/static/images/payment/apple_pay.png" alt=""/>
            <img src="/static/images/payment/paypal.png" alt=""/>
            <img src="/static/images/payment/amex.png" alt=""/>
            <img src="/static/images/payment/maestro.png" alt=""/>
            <img src="/static/images/payment/mastercard.png" alt=""/>
            <img src="/static/images/payment/visa.png" alt=""/>
            <img src="/static/images/payment/visa_electron.png" alt=""/>
        </div>
    </div>
</div>
</>
);

Footer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles, { name: "SkFooter" })(Footer);
