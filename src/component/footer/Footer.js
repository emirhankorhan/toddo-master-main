import React from 'react'
import "./footer.css"

function Footer() {
    return (
        // <footer>
            
        //     <div className='conttt'>
        //         <div className='cont1'></div>
        //         <div className='cont2'>
        //             <div className='cont2-2'>
        //                 <h1>SİTE</h1>
        //                 <p>Keşfet</p>
        //                 <p>Öğreticiler</p>
        //                 <p>Arşiv</p>
        //             </div>

        //         </div>
        //         <div className='cont3'>
        //             <div className='cont3-3'>
        //                 <h1>TOPLULUK</h1>
        //                 <p>Müşteriler</p>
        //                 <p>İş Verenler</p>
        //                 <p>Forum</p></div>
        //         </div>
        //         <div className='cont4'>
        //             <div className='cont4-4'>
        //                 <h1>KAYNAK</h1>
        //                 <p>Kaynakları Gör</p>
        //                 <p>Yeni Varlıklar</p>
        //                 <p>Çerez Kullanımı</p>
        //                 </div>
        //         </div>
        //         <div className='cont5'>
        //             <div className='cont5-5'>
        //                 <h1>ŞİRKET</h1>
        //                 <p>Hakkımızda</p>
        //                 <p>Şartlar ve Koşullar</p>
        //                 <p>Lisans Sözleşmesi</p>
        //                 <p>Gizlilik Politikası</p></div>
        //         </div>
        //         <div className='cont6'>
        //             <div className='cont6-6'>
        //                 <div className='cont6yazi'>ABONE OL</div>
        //                 <input name='isim' type='text' placeholder='İsim'></input>
        //                 <input name='email' type='email' placeholder='E-Mail'></input>
        //                 <button>Gönder</button>
        //             </div>

        //         </div>
        //     </div>

        //     <div className='altkisim'>
        //         <div className='altyazi'>Copyright © 2023, All Rights Reserved</div>
        //         <div className='altsimge'>
        //             <div className='simg'><i class="fa-brands fa-instagram"></i></div>
        //             <div className='simg'><i class="fa-brands fa-github"></i></div>
        //             <div className='simg'><i class="fa-brands fa-linkedin"></i></div>
        //             <div className='simg'><i class="fa-brands fa-x-twitter"></i></div>
        //             <div className='simg'><i class="fa-brands fa-discord"></i></div>
        //         </div>
        //     </div>
        // </footer>
        <footer>
            <div class="footer-line"></div>
            <div class="footer-wrapper">
                <section class="footer-top">
                    <div class="footer-headline">
                        <h2>Sign up to our newsletter</h2>
                        <p>
                            Stay up to date with our news and articles
                        </p>
                    </div>
                    <div class="footer-subscribe">
                        <input type="email" spellcheck="false" placeholder="Your Email"/>
                        <button>
                            Sign Up
                        </button>
                    </div>
                </section>
                <div class="footer-columns">
                    <section class="footer-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" class="logo"
                             fill="none" viewBox="30 30 126 126"
                        >
                            <path d="M82.646 37.0917C85.7401 35.3054 89.552 35.3054 92.646 37.0917L133.614 60.7445L105.286 77.3318C100.901 72.9296 94.8325 70.2051 88.128 70.2051C81.1554 70.2051 74.871 73.1519 70.4523 77.8681L41.4416 60.8811L82.646 37.0917Z" fill="white"></path>
                            <path d="M64.9303 87.4484L35.9141 70.4582V117.952L64.8222 101.025C64.2287 98.9258 63.9111 96.7109 63.9111 94.4219C63.9111 91.9977 64.2673 89.6567 64.9303 87.4484Z" fill="white"></path>
                            <path d="M70.1924 110.694L41.8975 127.262L82.646 150.788C85.74 152.574 89.552 152.574 92.646 150.788L133.158 127.398L105.556 111.236C101.152 115.8 94.9714 118.639 88.128 118.639C81.0175 118.639 74.6227 115.574 70.1924 110.694Z" fill="white"></path>
                            <path d="M111.22 101.739L139.376 118.226C139.377 118.162 139.378 118.098 139.378 118.034V70.1831L111.101 86.7403C111.908 89.154 112.345 91.7369 112.345 94.4219C112.345 96.9723 111.951 99.4305 111.22 101.739Z" fill="white"></path>
                        </svg>
                        <h2 class="hide">Astra</h2>
                    </section>
                    <section>
                        <h3>Product</h3>
                        <ul>
                            <li>
                                <a href="#" title="API">API</a>
                            </li>
                            <li>
                                <a href="#" title="Pricing">Pricing</a>
                            </li>
                            <li>
                                <a href="#" title="Documentation">Documentation</a>
                            </li>
                            <li>
                                <a href="#" title="Release Notes">Release Notes</a>
                            </li>
                            <li>
                                <a href="#" title="Status">Status</a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Resources</h3>
                        <ul>
                            <li>
                                <a href="#" title="Support">Support</a>
                            </li>
                            <li>
                                <a href="#" title="Sitemap">Sitemap</a>
                            </li>
                            <li>
                                <a href="#" title="Newsletter">Newsletter</a>
                            </li>
                            <li>
                                <a href="#" title="Help Centre">Help Centre</a>
                            </li>
                            <li>
                                <a href="#" title="Investor">Investor</a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Company</h3>
                        <ul>
                            <li>
                                <a href="#" title="About Us">About Us</a>
                            </li>
                            <li>
                                <a href="#" title="Blog">Blog</a>
                            </li>
                            <li>
                                <a href="#" title="Careers">Careers</a>
                            </li>
                            <li>
                                <a href="#" title="Press">Press</a>
                            </li>
                            <li>
                                <a href="#" title="Contact">Contact</a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Legal</h3>
                        <ul>
                            <li>
                                <a href="#" title="Terms and services">
                                    Terms
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Privacy Policy">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Cookies">
                                    Cookies
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Licenses">
                                    Licenses
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Cookies">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
                <div class="footer-bottom">
                    <small>© My Company Ltd. <span id="year"></span>, All rights reserved</small>
                    <span class='social-links'>
                        <a href="#" title="Instagram">
                            <img src="assets/instagram.svg" alt='Instagram'/>                       
                        </a>
                        <a href="#" title="Linkedin">
                            <img src="assets/linkedin.svg" alt='Linkedin'/>
                        </a>
                        <a href="#" title="Twitter">
                            <img src="assets/twitter.svg" alt='Twitter'/>
                        </a>
                        <a href="#" title="Youtube">
                            <img src="assets/youtube.svg" alt='YouTube'/>
                        </a>
                        <a href="#" title="GitHub">
                            <img src="assets/github.svg" alt='GitHub'/>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer