import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Video, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';
import { BorderBeam } from '../ui/border-beam';

// TypeScript declarations for YouTube API
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

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

interface CustomVideoPlayerProps {
  video: VideoType;
  index: number;
}

let isYTAPILoaded = false;
let ytAPIPromise: Promise<void> | null = null;

const loadYouTubeAPI = (): Promise<void> => {
  if (ytAPIPromise) return ytAPIPromise;

  ytAPIPromise = new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      resolve();
      return;
    }

    window.onYouTubeIframeAPIReady = () => {
      isYTAPILoaded = true;
      resolve();
    };

    if (!isYTAPILoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }
  });

  return ytAPIPromise;
};

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ video, index }) => {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    const initPlayer = async () => {
      try {
        await loadYouTubeAPI();
        
        if (!mounted || !containerRef.current) return;

        // Create a unique div for this player
        const playerDiv = document.createElement('div');
        playerDiv.id = `youtube-player-${video.youtubeId}-${index}`;
        containerRef.current.appendChild(playerDiv);

        playerRef.current = new window.YT.Player(playerDiv, {
          height: '100%',
          width: '100%',
          videoId: video.youtubeId,
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            showinfo: 0,
            start: 0,
            mute: 1,
            loop: 1,
            playlist: video.youtubeId,
            branding: 0,
            cc_load_policy: 0,
            color: 'white',
            hl: 'en',
            widget_referrer: window.location.href
          },
          events: {
            onReady: () => {
              if (mounted) {
                setPlayerReady(true);
                // Additional hiding after player loads
                setTimeout(() => {
                  const iframe = containerRef.current?.querySelector('iframe');
                  if (iframe && iframe.contentWindow) {
                    try {
                      const iframeDoc = iframe.contentWindow.document;
                      const style = iframeDoc.createElement('style');
                      style.textContent = `
                        .ytp-cued-thumbnail-overlay,
                        .ytp-large-play-button,
                        .ytp-chrome-top,
                        .ytp-title,
                        .ytp-watermark,
                        .iv-branding {
                          display: none !important;
                        }
                      `;
                      iframeDoc.head?.appendChild(style);
                    } catch (e) {
                      // Cross-origin restriction, CSS will handle it
                    }
                  }
                }, 1000);
              }
            },
            onStateChange: (event: any) => {
              if (mounted) {
                setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
              }
            }
          }
        });
      } catch (error) {
        console.error('Error initializing YouTube player:', error);
      }
    };

    initPlayer();

    return () => {
      mounted = false;
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [video.youtubeId, index]);

  const togglePlay = () => {
    if (playerRef.current && playerReady) {
      try {
        if (isPlaying) {
          playerRef.current.pauseVideo();
        } else {
          playerRef.current.playVideo();
        }
      } catch (error) {
        console.error('Error controlling video:', error);
      }
    }
  };

  const toggleMute = () => {
    if (playerRef.current && playerReady) {
      try {
        if (isMuted) {
          playerRef.current.unMute();
          setIsMuted(false);
        } else {
          playerRef.current.mute();
          setIsMuted(true);
        }
      } catch (error) {
        console.error('Error controlling audio:', error);
      }
    }
  };

  return (
    <div
      className="relative w-full sm:w-[calc(50%-1rem)] lg:w-[20rem] h-[32rem] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="relative w-full h-full flex-1 flex items-center justify-center shadow-lg">
        {/* YouTube Player Container */}
        <div
          ref={containerRef}
          className="w-full h-full rounded-2xl overflow-hidden youtube-player-container"
          style={{ aspectRatio: '9/16', minHeight: '100%' }}
        />
        
        {/* Hide YouTube elements with CSS */}
        <style jsx>{`
          .youtube-player-container :global(iframe) {
            border-radius: 1rem;
          }
          
          .youtube-player-container :global(.ytp-cued-thumbnail-overlay),
          .youtube-player-container :global(.ytp-large-play-button),
          .youtube-player-container :global(.ytp-chrome-top),
          .youtube-player-container :global(.ytp-show-cards-title),
          .youtube-player-container :global(.ytp-title),
          .youtube-player-container :global(.ytp-title-link),
          .youtube-player-container :global(.ytp-title-channel),
          .youtube-player-container :global(.ytp-watermark),
          .youtube-player-container :global(.ytp-gradient-top),
          .youtube-player-container :global(.ytp-chrome-top-buttons),
          .youtube-player-container :global(.ytp-show-cards-title),
          .youtube-player-container :global(.iv-branding) {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
          }
          
          .youtube-player-container :global(.ytp-cued-thumbnail-overlay-image) {
            filter: blur(0px) !important;
          }
        `}</style>
        
        {/* Custom Controls Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showControls ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="flex items-center space-x-4 pointer-events-auto">
            {/* Play/Pause Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              disabled={!playerReady}
              className="p-4 bg-black/70 hover:bg-black/90 text-white rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20 shadow-lg disabled:opacity-50"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 ml-1" />
              )}
            </motion.button>

            {/* Mute/Unmute Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMute}
              disabled={!playerReady}
              className="p-3 bg-black/70 hover:bg-black/90 text-white rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20 shadow-lg disabled:opacity-50"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </motion.div>

        <BorderBeam
          duration={6}
          delay={index * 1.5}
          size={150}
          borderWidth={2}
        />
        <BorderBeam
          duration={6}
          delay={index * 1.5 + 3}
          size={150}
          borderWidth={2}
        />
      </div>
      
      {/* Video Title */}
      <div className="p-4 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0 pointer-events-none">
        <h3 className="text-white font-semibold text-lg text-center">
          {video.title}
        </h3>
      </div>
    </div>
  );
};

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

  const shorts = videos.slice(0, 4);

  return (
    <section className="py-16 px-4 border-b border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-black dark:text-white tracking-tight">
          {renderTitle()}
        </h2>

        {/* Shorts Grid with Custom Video Players */}
        <div className="grid grid-cols-2 md:flex lg:flex-row gap-6 sm:gap-4 lg:gap-10 justify-center items-center mb-16">
          {shorts.map((video: VideoType, idx: number) => (
            <CustomVideoPlayer
              key={`${video.youtubeId}-${idx}`}
              video={video}
              index={idx}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          {cta && cta.link && (
            <Link href={cta.link} passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-5 py-3 text-lg font-medium text-center rounded-lg hover:dark:bg-gray-200 dark:bg-white hover:scale-105 transition-all duration-300 text-white bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 hover:from-orange-500 hover:via-pink-500 hover:to-red-400"
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
          )}
        </div>
      </div>
    </section>
  );
};  