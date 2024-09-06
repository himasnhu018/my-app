import React, { useState } from 'react';
import { AiOutlineQuestionCircle, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import UploadedImage1 from './images/Screenshot 2023-09-22 221052.png';
import UploadedImage2 from './images/Screenshot 2023-09-22 221119.png';
import UploadedImage3 from './images/Screenshot 2023-09-22 221153.png';

const App = () => {
  const [activeTab, setActiveTab] = useState('About Me');
  const [galleryImages, setGalleryImages] = useState([
    UploadedImage1, 
    UploadedImage2,
    UploadedImage3,
  ]);

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImage = URL.createObjectURL(file);
      setGalleryImages((prevImages) => [...prevImages, newImage]);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="hidden lg:block lg:w-1/2 bg-opacity-50 bg-gray-900"></div>

      <div className="w-full lg:w-1/2 p-8 space-y-8">
        
        {/* Tabs section */}
        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
          <AiOutlineQuestionCircle className="text-gray-400" style={{ margin: '0 10px' }} />
          {['About Me', 'Experiences', 'Recommended'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-center rounded-lg transition ${
                activeTab === tab ? 'bg-gray-700 shadow-md' : 'bg-transparent hover:bg-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="bg-gray-900 p-6 rounded-lg h-48 overflow-y-auto shadow-xl transition-all hover:shadow-2xl">
          <AiOutlineQuestionCircle className="absolute left-0 ml-2 mt-2 text-gray-400" />
          {activeTab === 'About Me' && (
            <p>
              Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years.
              I was born and raised in Albany, NY, and have been living in Santa Carla for the past 10 years with my wife
              Tiffany and our 4-year-old twin daughters.
            </p>
          )}
          {activeTab === 'Experiences' && (
            <p>
              I have a wide range of experiences in sales, focusing on customer relationship management and tech solutions.
              My goal is to help clients navigate their challenges with Salesforce tools.
            </p>
          )}
          {activeTab === 'Recommended' && (
            <p>
              Based on your interest in sales optimization, I recommend exploring our newest toolset for managing leads 
              and customer feedback in real-time.
            </p>
          )}
        </div>

        {/* Gallery Section */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-xl transition-all hover:shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg">Gallery</h3>
            <label className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 cursor-pointer transition-transform duration-300 transform hover:scale-110">
              + Add Image
              <input type="file" onChange={handleAddImage} className="hidden" />
            </label>
          </div>

          <div className="relative grid grid-cols-3 gap-4">
            {/* Left arrow for gallery */}
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-transform duration-300 hover:scale-110">
              <AiOutlineArrowLeft />
            </button>

            {/* Display uploaded images */}
            {galleryImages.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt="Gallery" 
                className="w-full h-24 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            ))}

            {/* Right arrow for gallery */}
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-transform duration-300 hover:scale-110">
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
