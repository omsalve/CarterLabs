'use client';

import React, { useEffect, useState } from 'react';
import { Upload, Wand2, MessageSquare, Rocket, Zap } from 'lucide-react';

export default function HowItWorks() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const steps: Array<{
    number: string;
    title: string;
    description: string;
    icons?: string[];
    badge?: string;
    files?: string[];
    publishButton?: boolean;
  }> = [
    {
      number: '01',
      title: 'Drop Your Footage',
      description: 'Upload your raw clips — WeTransfer, Google Drive, Dropbox — whatever works for you.',
      icons: ['facebook', 'dropbox', 'drive', 'rocket']
    },
    {
      number: '02',
      title: 'We Do Our Magic',
      description: 'We cut, trim, color-grade, and add engaging transitions.',
      icons: ['buffer', 'davinci', 'fcp', 'premiere']
    },
    {
      number: '03',
      title: 'Feedback? Easy',
      description: 'Want something changed? We offer smooth revision rounds to make sure everything.',
      badge: 'Revision is in progress!'
    },
    {
      number: '04',
      title: 'Upload & Grow',
      description: 'We deliver your final video in ready-to-upload YouTube format.',
      files: ['Final_Cut_v2.mp4', 'Thumbnail.png'],
      publishButton: true
    }
  ];

  return (
    <div className="w-full bg-brand-cream py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Process Badge */}
        <div 
          className={`flex items-center justify-center gap-2 mb-8 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="w-2 h-2 bg-brand-red rounded-full"></div>
          <span className="text-gray-700 font-medium">Process</span>
        </div>

        {/* Main Heading */}
        <h2 
          className={`text-5xl md:text-6xl font-bold text-center text-gray-900 mb-4 transition-all duration-700 delay-100 font-[family-name:var(--font-onyx)] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          How It Works?
        </h2>

        {/* Subheading */}
        <p 
          className={`text-center text-gray-600 text-lg max-w-2xl mx-auto mb-20 transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          A quick overview of how we work together to make your edit best in class!
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Step Number */}
              <div className="text-gray-400 font-semibold text-lg mb-6">{step.number}</div>

              {/* Icons Section */}
              <div className="mb-8 min-h-[120px] flex items-center justify-center">
                {step.icons && (
                  <div className="relative w-full max-w-xs">
                    {/* Step 1 Icons - Cloud services */}
                    {step.number === '01' && (
                      <div className="relative h-32">
                        {/* Center Dropbox */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-500 rounded-2xl shadow-lg flex items-center justify-center animate-pulse">
                          <Upload className="w-10 h-10 text-white" />
                        </div>
                        {/* Top Facebook */}
                        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full shadow-lg flex items-center justify-center">
                          <span className="text-white font-bold text-lg">f</span>
                        </div>
                        {/* Right Side */}
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg flex items-center justify-center">
                          <Rocket className="w-7 h-7 text-white" />
                        </div>
                        {/* Bottom Drive */}
                        <div className="absolute left-1/4 bottom-0 w-10 h-10 bg-gradient-to-br from-yellow-400 via-green-400 to-blue-500 rounded-lg shadow-lg"></div>
                      </div>
                    )}

                    {/* Step 2 Icons - Editing software */}
                    {step.number === '02' && (
                      <div className="flex items-center justify-center gap-4 flex-wrap">
                        <div className="w-16 h-16 bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
                          <div className="text-white font-bold text-2xl">≈</div>
                        </div>
                        <div className="w-16 h-16 bg-gray-700 rounded-full shadow-lg flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 via-yellow-500 via-green-500 to-blue-500"></div>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-black/20"></div>
                          <Wand2 className="w-8 h-8 text-white relative z-10" />
                        </div>
                        <div className="w-16 h-16 bg-brand-navy rounded-xl shadow-lg flex items-center justify-center">
                          <span className="text-blue-400 font-bold text-xl">Pr</span>
                        </div>
                      </div>
                    )}

                    {/* Step 3 - Revision badge */}
                    {step.badge && (
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full shadow-lg flex items-center justify-center">
                          <MessageSquare className="w-6 h-6 text-gray-600" />
                        </div>
                        <div className="bg-white border-2 border-gray-200 rounded-2xl px-6 py-3 shadow-lg">
                          <div className="text-sm text-gray-600 mb-1">Requested a Revision</div>
                        </div>
                        <div className="relative">
                          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl shadow-xl font-semibold transform rotate-3">
                            {step.badge}
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-lg opacity-50"></div>
                        </div>
                      </div>
                    )}

                    {/* Step 4 - Files and publish */}
                    {step.files && (
                      <div className="flex items-center justify-center gap-4 flex-wrap">
                        <div className="bg-brand-navy text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          <span className="text-sm font-medium">{step.files[0]}</span>
                        </div>
                        <div className="bg-white border-2 border-gray-200 text-gray-600 px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2">
                          <Upload className="w-4 h-4" />
                          <span className="text-sm font-medium">{step.files[1]}</span>
                        </div>
                        {step.publishButton && (
                          <div className="relative">
                            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-2xl shadow-xl font-semibold transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                              Publish
                            </button>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-lg opacity-50"></div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}