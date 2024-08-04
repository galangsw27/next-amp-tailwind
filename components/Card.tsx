import React from 'react';

type CardProps = {
  title: string;
  subTitle: string;
  url: string;
  icon: React.ReactNode; // Use React.ReactNode for better type safety with icons
  className?: string;
};

export default function Card({
  title,
  subTitle,
  url,
  icon,
  className,
}: CardProps) {
  return (
    <>
    <div className='w-full rounded-lg shadow-lg flex items-center justify-between border border-orange-500'>
      
      <a
        href={url}
        target="_blank"
        className={`group transition-colors duration-300 w-full rounded-lg shadow-lg flex items-center justify-between border border-orange-500 ${className}`}
        style={{backgroundColor: "transparent", border: '1px solid', borderColor: "orange"}}
        rel="noreferrer"
      >
        <div className="px-5 md:px-10 transition-transform duration-300 md:group-hover:scale-110">
          <div className="text-l" style={{fontSize: "18px", fontWeight: 600 , color: "White" }}>
            {title}
          </div>
          <div className="text-xs text-yellow-400">
            {subTitle}
          </div>
        </div>
        <div className="flex items-center group-hover:shadow-lg transition-all duration-200 md:group-hover:bg-zinc-700/50 justify-center h-16 w-20 m-2 rounded-lg mask mask-squircle px-5 md:px-10">
          <div className="text-4xl md:group-hover:scale-[120%] transition-transform duration-500">
            {icon}
          </div>
        </div>
      </a>
      </div>
      <style jsx global>{`
        a {
          text-decoration: none;
        }
           @keyframes colorChange {
              0% { opacity: 0; }
              50% { opacity: 1; }
            }
            .animatedText {
                color: orange;
              animation: colorChange 2s infinite;
            }

            @keyframes wobble {
              0% { transform: rotate(0deg); }
              15% { transform: rotate(2deg); }
              30% { transform: rotate(-2deg); }
              45% { transform: rotate(1deg); }
              60% { transform: rotate(0deg); }
            }
            .wobble {
              animation: wobble 1s ease-in-out 70s infinite;
            }
              .icon-white {
              color: #ffffff; /* Set icon color to white */
            }
      `}</style>
    </>
  );
}
