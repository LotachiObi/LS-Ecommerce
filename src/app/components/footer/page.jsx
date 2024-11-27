import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-black text-white p-[10px]">
            <div className="flex justify-around tracking-wider p-8 mx-auto">
                <div>
                    <h3>Contact Us</h3>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>Address: 123 Main St, Lagos, Nigeria</p>
                </div>

                <div className="footer-section">
                    <h3>Information</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/terms">Terms & Conditions</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <p>Stay connected on social media:</p><br />
                    <div className="social-icons flex gap-[12px]">
                        <a href="#" className="icon-facebook"><FaFacebook /> </a>
                        <a href="www.x.com" className="icon-twitter"><FaSquareXTwitter /> </a>
                        <a href="www.instagram.com" className="icon-instagram"> <FaInstagramSquare /> </a>
                        <a href="www.linkedin.com" className="icon-linkedin"> <FaLinkedin /> </a>
                    </div>
                </div>
            </div>

            <div className="copyright text-center">
                <p>&copy; {new Date().getFullYear()} Your E-commerce Store</p>

            </div>
        </footer>   
    
    
  )
}

export default Footer;