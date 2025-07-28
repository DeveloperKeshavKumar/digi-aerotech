import Link from 'next/link';
import React from 'react';
import { ArrowRight, Video } from 'lucide-react';
import { motion } from 'motion/react';
import { BorderBeam } from '../ui/border-beam';

type VideoType = {
  title: string;
  youtubeId: string;
};

interface OurWorkProps {
  title: string | { text: string; gradient?: boolean; gradientClass?: string }[];
  videos: VideoType[];
  cta?: {
    text: string;
    link: string;
  };
}

export const OurWork: React.FC<OurWorkProps> = ({ title, videos, cta }) => {
  // Helper to render title with gradient
  const renderTitle = () => {
    if (typeof title === 'string') {
      return title;
    }
    return title.map((part, idx) =>
      part.gradient ? (
        <span
          key={idx}
          className={`bg-clip-text text-transparent bg-gradient-to-r ${part.gradientClass || "from-orange-400 via-pink-500 to-red-500"}`}
        >
          {part.text}
        </span>
      ) : (
        <span key={idx}>{part.text}</span>
      )
    );
  };

  // Only show first 3 videos
  const shorts = videos.slice(0, 4);

  return (
    <section className="py-16 px-4 border-b border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-black dark:text-white tracking-tight">
          {renderTitle()}
        </h2>

        {/* Shorts Grid */}
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center mb-16">
            {shorts.map((video: VideoType, idx: number) => (
            <div key={video.youtubeId} className="relative w-full md:w-[22rem] h-[40rem] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col">
              <div className="relative w-full h-full flex-1 flex items-center justify-center shadow-lg">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0&loop=1&playlist=${video.youtubeId}&controls=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=1&playsinline=1&iv_load_policy=3&fs=0&disablekb=1`}
                title={video.title}
                className="w-full h-full rounded-2xl"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{ aspectRatio: '9/16', minHeight: '100%' }}
              />
              <BorderBeam
                duration={6}
                delay={idx * 1.5}
                size={150}
                borderWidth={2}
              />
              <BorderBeam
                duration={6}
                delay={idx * 1.5 + 3}
                size={150}
                borderWidth={2}
              />
              </div>
              <div className="p-4 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0">
              <h3 className="text-white font-semibold text-lg text-center">
                {video.title}
              </h3>
              </div>
            </div>
            ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          {
            cta && cta.link &&
            <Link href={cta.link} passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-5 py-3 text-lg font-medium text-center rounded-lg hover:dark:bg-gray-200 dark:bg-white hover:scale-105  transition-all duration-300 text-white bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 hover:from-orange-500 hover:via-pink-500 hover:to-red-400"
              >
                <Video className="w-5 h-5 mr-2" />
                {cta.text}
                <motion.span
                  animate={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                  className="ml-2"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.div>
            </Link>
          }
        </div>
      </div>
    </section>
  );
};