import { Button, Label, Select, Textarea, TextInput } from 'flowbite-react';
import React from 'react';

export default function AlertForm() {
  // Define inline styles for the animations
  const slideInAnimation = {
    animation: 'slideIn 1s ease-out',
  };

  const glowAnimation = {
    animation: 'glow 1.5s ease-in-out infinite',
    textShadow: '0 0 10px rgba(255, 105, 180, 0.8), 0 0 20px rgba(255, 105, 180, 0.6), 0 0 30px rgba(255, 105, 180, 0.4)',
  };

  // Add CSS keyframes in a style tag
  return (
    <div className="min-h-screen flex flex-col items-center p-6 mt-10">
      {/* Inline CSS Keyframes */}
      <style>
        {`
          @keyframes slideIn {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0); }
          }
          @keyframes glow {
            0% { text-shadow: 0 0 10px rgba(255, 105, 180, 0.8), 0 0 20px rgba(255, 105, 180, 0.6), 0 0 30px rgba(255, 105, 180, 0.4); }
            50% { text-shadow: 0 0 15px rgba(255, 20, 147, 1), 0 0 25px rgba(255, 20, 147, 0.8), 0 0 35px rgba(255, 20, 147, 0.6); }
            100% { text-shadow: 0 0 10px rgba(255, 105, 180, 0.8), 0 0 20px rgba(255, 105, 180, 0.6), 0 0 30px rgba(255, 105, 180, 0.4); }
          }
        `}
      </style>

      {/* Heading */}
      <h1
        className="text-3xl font-semibold mb-2 text-center"
        style={{ ...slideInAnimation, ...glowAnimation }}
      >
        Alert the Community : Report a Disaster
      </h1>

      {/* Flex Container for Form and Image */}
      <div className="flex flex-wrap justify-center items-center w-full max-w-6xl">

        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-4">

          <form className="space-y-4">

            <div>
                <Label value='Your name*' />
                <TextInput type='text' placeholder='Name...' required />
            </div>

            <div>
                <Label value='State*' />
                <TextInput type='text' placeholder='State...' required />
            </div>

            <div>
                <Label value='City*' />
                <TextInput type='text' placeholder='City...' required />
            </div>

            <div>
                <Label value='Date*' />
                <TextInput type='date' required />
            </div>

            
            <div>
                <Label value='Magnitude*' />
                <Select required>
                    <option>High</option>
                    <option>Moderate</option>
                    <option>Low</option>
                </Select>
            </div>

            <div>
                <Label value='Description(optional)'/>
                <Textarea rows={3} required />
            </div>

            {/* Submit Button */}
            <Button gradientDuoTone='purpleToPink'
              type="submit"
              className='w-full h-12'
            >
              <span className='text-center py-1 text-md'>Send Alert</span>
            </Button>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <img
            src="/map2.png"
            alt="Disaster"
            className='h-auto max-w-full md:max-w-2xl'
          />
        </div>
      </div>
    </div>
  );
}
