
import React from 'react'
import Navbar from './components/navbar'
import Link from 'next/link'
import Footer from './components/footer'


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-800">
        <h1 className="text-5xl font-bold mb-4">Welcome to SYHZ Developers</h1>
        <p className="text-xl mb-6">
          We specialize in innovative solutions that leverage cutting-edge technology to solve real-world challenges.
        </p>
        <Link href="/Contact" className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg transition hover:bg-purple-700">
          Get in Touch
        </Link>
      </section>

      {/* Features/Services Section */}
      <section className="py-20 bg-gray-700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p>
                We build dynamic, responsive websites and web applications that meet your business needs.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">AI Solutions</h3>
              <p>
                Leveraging the power of AI to create smart systems and applications that make a difference.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Cloud Computing</h3>
              <p>
                Scalable cloud solutions that help businesses grow and innovate efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-xl mb-6">
            We are SYHZ Developers, a team of passionate developers, committed to creating solutions that shape the future of technology.
          </p>
          <Link href="/About" className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg transition hover:bg-purple-700">
            Learn More
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-6">
          Whether you're looking for a website, an AI solution, or cloud services, we're here to help you innovate.
        </p>
        <Link href="/Contact" className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg transition hover:bg-purple-700">
          Contact Us
        </Link>
      </section>

      {/* Footer */}
      <Footer/>

    </div>

  )
}

export default Home
