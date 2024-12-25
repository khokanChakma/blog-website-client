import React from 'react';
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-6 bg-base-200 text-base-content p-10 mx-auto">
                <aside className='flex flex-col justify-center items-center'>
                    <img className='w-16 h-16' src={logo} alt="" />
                    <p className='text-xl font-bold'>The Blog Haven</p>
                </aside>
                <nav className='flex flex-col justify-center items-center'>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='flex flex-col justify-center items-center'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='flex flex-col justify-center items-center'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;