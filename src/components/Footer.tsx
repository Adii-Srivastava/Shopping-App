import React from 'react'
import {Mail, Linkedin, Instagram, Github } from 'lucide-react';

function Footer() {

    const socialLinks = [
        {
          icon: Linkedin,
          url: "https://www.linkedin.com/in/adisrivastavaa/",
          label: "LinkedIn"
        },
        {
          icon: Mail,
          url: "srivastavaaditya945028@gmail.com",
          label: "mail"
        },
        {
          icon: Instagram,
          url: "https://www.instagram.com/__srivastava_aditya__/",
          label: "Instagram"
        },
        {
          icon: Github,
          url: "https://github.com/Adii-Srivastava",
          label: "GitHub"
        }
      ];

    


  return (
    <footer className={`py-12  border-t-1 border-white mt-5 bg-black`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex space-x-6">

              {socialLinks.map((social, index)=>(
                <a key={index}
                 href={social.url}
                 target='_blank'
                 aria-label={social.label}
                 className={` transition-colors duration-300 bg-white`}
                 >
                    <social.icon size={24}/>
                 </a>
              ))}



            </div>
          </div>
          <div className={`mt-8 text-center text-white`}>
            Made with ❤️ by Aditya Srivastava. All rights reserved.
          </div>
        </div>
    </footer>
  )
}

export default Footer