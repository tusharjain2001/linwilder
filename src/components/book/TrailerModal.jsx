import { useEffect, useRef } from 'react';

// Nothing here is mounted until the reader opens the modal, so neither YouTube
// nor Cloudinary is contacted while the page is merely being browsed.
export default function TrailerModal({ trailer, title, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Browsers block autoplay with sound in some settings; fall back to muted
    // so the trailer still starts and the reader can unmute from the controls.
    const started = video.play();

    if (started?.catch) {
      started.catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
    }
  }, [trailer]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} book trailer`}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-10 backdrop-blur-sm"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-[960px]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close trailer"
          className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="aspect-video w-full overflow-hidden rounded-[10px] bg-black shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          {trailer.type === 'youtube' ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${trailer.id}?autoplay=1&rel=0&modestbranding=1`}
              title={`${title} book trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0"
            />
          ) : (
            <video
              ref={videoRef}
              src={trailer.src}
              title={`${title} book trailer`}
              preload="none"
              autoPlay
              controls
              playsInline
              className="h-full w-full"
            />
          )}
        </div>
      </div>
    </div>
  );
}
