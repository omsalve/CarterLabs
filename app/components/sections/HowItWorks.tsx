'use client';

import React, { useEffect, useState } from 'react';
import { Upload, Wand2, MessageSquare, Rocket, Zap } from 'lucide-react';

export default function HowItWorks() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Drop Your Footage',
      description:
        'Upload your raw clips — WeTransfer, Google Drive, Dropbox — whatever works for you.',
      icons: true,
    },
    {
      number: '02',
      title: 'We Do Our Magic',
      description: 'We cut, trim, color-grade, and add engaging transitions.',
      editingIcons: true,
    },
    {
      number: '03',
      title: 'Feedback? Easy',
      description:
        'Want something changed? We offer smooth revision rounds to make sure everything.',
      badge: 'Revision is in progress!',
    },
    {
      number: '04',
      title: 'Upload & Grow',
      description: 'We deliver your final video in ready-to-upload YouTube format.',
      files: ['Final_Cut_v2.mp4', 'Thumbnail.png'],
      publish: true,
    },
  ];

  return (
    <div className="relative w-full bg-brand-cream py-28 px-4 overflow-hidden">

      {/* GRAIN OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'grain\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23grain)\'/%3E%3C/svg%3E")',
          backgroundSize: '150px 150px',
        }}
      />

      {/* STARBURST */}
      <div
        className="absolute -top-10 right-10 w-72 h-72 opacity-[0.06]"
        style={{
          background:
            'repeating-conic-gradient(from 0deg, #FF7A1A 0deg 10deg, transparent 10deg 20deg)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* BADGE — VEGAS STYLE */}
        <div
          className={`flex items-center justify-center mb-12 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="relative inline-block bg-gradient-to-r from-[#E65353] to-[#FF7A1A] border-4 border-[#101828] px-8 py-3 shadow-[4px_4px_0px_0px_rgba(16,24,40,1)] rounded-xl">

            {/* bulbs */}
            <div className="absolute -top-2 -left-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse"></div>
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1.5s' }}></div>

            <span className="text-white text-sm font-black tracking-wider uppercase">
              Process
            </span>
          </div>
        </div>

        {/* TITLE */}
        <h2
          className={`text-center text-5xl md:text-6xl lg:text-7xl font-black mb-6 transition-all duration-700 delay-100 font-[family-name:var(--font-onyx)] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{
            textShadow:
              '3px 3px 0px #FF7A1A, 6px 6px 0px rgba(16,24,40,0.3)',
          }}
        >
          HOW IT WORKS
        </h2>

        {/* SUB */}
        <p
          className={`text-center text-[#101828] text-lg max-w-2xl mx-auto mb-20 transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          A quick breakdown of how we take your footage and turn it into showtime-ready edits.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-[#E65353] to-[#FF7A1A] border-4 border-[#101828] p-10 rounded-3xl shadow-[6px_6px_0px_0px_rgba(16,24,40,1)] transition-all duration-700 ${
                mounted
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* corner bulbs */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse"></div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#F4C43A] rounded-full border-2 border-[#101828] animate-pulse" style={{ animationDelay: '1.5s' }}></div>

              {/* number */}
              <div className="text-white opacity-70 font-black text-lg mb-6 tracking-widest">
                {step.number}
              </div>

              {/* big icon section */}
              <div className="mb-10 flex justify-center min-h-[130px]">

                {step.icons && (
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    {/* center icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-blue-500 w-20 h-20 rounded-2xl shadow-lg flex items-center justify-center border-4 border-[#101828] animate-pulse">
                        <Upload className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* orbiting icons */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full shadow-lg border-2 border-[#101828] flex items-center justify-center">
                      <span className="text-white font-bold text-lg">f</span>
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg border-2 border-[#101828] flex items-center justify-center">
                      <Rocket className="w-7 h-7 text-white" />
                    </div>

                    <div className="absolute bottom-0 left-1/4 w-12 h-12 bg-gradient-to-br from-yellow-400 via-green-400 to-blue-500 rounded-xl shadow-lg border-2 border-[#101828]"></div>
                  </div>
                )}

                {step.editingIcons && (
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    <div className="w-16 h-16 bg-brand-navy border-2 border-[#101828] rounded-xl shadow-lg flex items-center justify-center">
                      <div className="text-white font-bold text-2xl">≈</div>
                    </div>
                    <div className="w-16 h-16 bg-gray-700 border-2 border-[#101828] rounded-full shadow-lg flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 via-yellow-500 via-green-500 to-blue-500"></div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 border-2 border-[#101828] rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden">
                      <Wand2 className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-brand-navy border-2 border-[#101828] rounded-xl shadow-lg flex items-center justify-center">
                      <span className="text-blue-400 font-black text-xl">Pr</span>
                    </div>
                  </div>
                )}

                {step.badge && (
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[#101828]">
                      <MessageSquare className="w-6 h-6 text-[#101828]" />
                    </div>
                    <div className="bg-white border-2 border-[#101828] rounded-2xl px-6 py-3 shadow-lg">
                      <div className="text-sm text-[#101828] font-semibold">Requested a Revision</div>
                    </div>
                    <div className="relative">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl shadow-xl font-semibold transform rotate-3 border-2 border-[#101828]">
                        {step.badge}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-lg opacity-50"></div>
                    </div>
                  </div>
                )}

                {step.files && (
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    <div className="bg-[#101828] text-white px-6 py-3 rounded-2xl shadow-lg border-2 border-[#101828] flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm font-medium">{step.files[0]}</span>
                    </div>
                    <div className="bg-white border-2 border-[#101828] text-[#101828] px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2">
                      <Upload className="w-4 h-4" />
                      <span className="text-sm font-medium">{step.files[1]}</span>
                    </div>
                    {step.publish && (
                      <div className="relative">
                        <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-2xl shadow-xl font-semibold transform -rotate-3 hover:rotate-0 transition-transform duration-300 border-2 border-[#101828]">
                          Publish
                        </button>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-lg opacity-50"></div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Title */}
              <h3
                className="text-3xl font-black text-white mb-4 tracking-wide"
                style={{ textShadow: '2px 2px 0px rgba(16,24,40,0.5)' }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-white text-opacity-90 font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* DECORATIVE STARS */}
        <div className="mt-16 text-center">
          <span className="text-4xl text-[#FF7A1A] animate-pulse inline-block mx-2" style={{ textShadow: '2px 2px 0px #101828' }}>★</span>
          <span className="text-3xl text-[#F4C43A] animate-pulse inline-block mx-2" style={{ animationDelay: '0.3s', textShadow: '2px 2px 0px #101828' }}>★</span>
          <span className="text-4xl text-[#E65353] animate-pulse inline-block mx-2" style={{ animationDelay: '0.6s', textShadow: '2px 2px 0px #101828' }}>★</span>
        </div>
      </div>
    </div>
  );
}
