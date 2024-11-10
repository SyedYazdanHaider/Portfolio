import React from 'react'
import Navbar from '../components/navbar'
import Image from 'next/image'
import Footer from '../components/footer'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-center p-10 space-y-6 md:space-y-0 md:space-x-6">
        
        {/* Centered Text Section */}
        <div className="max-w-lg text-center md:text-center flex-1">
          <h2 className="text-3xl font-semibold mt-14 text-left pb-8"><u>About Me</u></h2>
          <p className="leading-relaxed text-2xl">
            I&apos;m Syed Yazdan Haider, the founder of  
            <br/><i><u>SYHZ Developers</u></i> and an enthusiastic learner of Artificial Intelligence. I&apos;m currently expanding my expertise in AI through the Governor Sindh Initiative on AI and Cloud Computing, gaining hands-on knowledge of the latest technologies and their real-world applications.
          </p>
          <p className="leading-relaxed mt-4 text-2xl">
            In parallel with my AI journey, I&apos;m pursuing an A2-level in pre-engineering, 
            which is enhancing my analytical and problem-solving <br/>skills-qualities that are essential in my development work. At SYHZ Developers, my focus is on creating innovative solutions that leverage technology to address real-world challenges. I’m inspired by the future possibilities and committed to shaping that future through innovation, determination, and continuous learning.
          </p>
        </div>
        
        {/* Right-Aligned Image */}
        <div className="flex-shrink-0 pb-80 pl-10">
          <Image
            src="/Yazdan.jpg"
            width={300}  // Adjust width as needed
            height={200} // Adjust height to maintain aspect ratio
            className="rounded-lg object-cover"
            alt="CEO"
          />
        </div>
      </div>
      
    </div>
  )
}

export default About
