"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// ─── Data ─────────────────────────────────────────────────────────────────────

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryEvent {
  name: string;
  date: string;
  location?: string;
  photos: GalleryPhoto[];
}

// Replace these with your actual images under /public/gallery/
export const GALLERY_EVENTS: GalleryEvent[] = [
  {
    name: "Build with AI Manila 2026",
    date: "April 2026",
    location: "Manila",
    photos: [
      {
        src: "https://placehold.co/600x400/1a1a1a/555555?text=Keynote+Session",
        alt: "Build with AI Manila session",
        caption: "Keynote session",
      },
      {
        src: "https://placehold.co/600x700/1a1a1a/555555?text=With+the+Team",
        alt: "Group photo",
        caption: "With the team",
      },
      {
        src: "https://placehold.co/600x450/1a1a1a/555555?text=Workshop+Activity",
        alt: "Workshop activity",
        caption: "Workshop activity",
      },
      {
        src: "https://placehold.co/600x500/1a1a1a/555555?text=Networking",
        alt: "Networking",
        caption: "Networking",
      },
    ],
  },
  {
    name: "BITCON 2025",
    date: "April 2025",
    location: "Batangas",
    photos: [
      {
        src: "https://placehold.co/600x500/1a1a1a/555555?text=Opening+Ceremony",
        alt: "BITCON opening",
        caption: "Opening ceremony",
      },
      {
        src: "https://placehold.co/600x400/1a1a1a/555555?text=IoT+Exhibit",
        alt: "IoT exhibit",
        caption: "IoT exhibit floor",
      },
      {
        src: "https://placehold.co/600x650/1a1a1a/555555?text=With+Friends",
        alt: "With friends at BITCON",
        caption: "With friends",
      },
    ],
  },
  {
    name: "CAIST Internship",
    date: "February – May 2026",
    location: "Batangas State University",
    photos: [
      {
        src: "https://placehold.co/600x400/1a1a1a/555555?text=Morning+Standup",
        alt: "Team standup",
        caption: "Morning standup",
      },
      {
        src: "https://placehold.co/600x600/1a1a1a/555555?text=Final+Presentation",
        alt: "Presentation day",
        caption: "Final presentation",
      },
      {
        src: "https://placehold.co/600x450/1a1a1a/555555?text=Intern+Batch",
        alt: "Intern group photo",
        caption: "Intern batch",
      },
      {
        src: "https://placehold.co/600x500/1a1a1a/555555?text=Code+Review",
        alt: "Code review session",
        caption: "Code review",
      },
      {
        src: "https://placehold.co/600x700/1a1a1a/555555?text=Demo+Day",
        alt: "Demo day",
        caption: "Demo day",
      },
    ],
  },
];

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({
  photo,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  photo: GalleryPhoto;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full mx-4 flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          ✕ Close
        </button>

        {/* Image */}
        <div className="relative w-full rounded-xl overflow-hidden border border-border/60 bg-card/40">
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-auto max-h-[75vh] object-contain"
          />
        </div>

        {/* Caption + nav */}
        <div className="flex items-center justify-between w-full px-1">
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className="text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 rounded-md bg-foreground/10 border border-foreground/20 text-foreground/70 hover:bg-foreground/20 hover:text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Prev
          </button>
          {photo.caption && (
            <p className="text-xs text-muted-foreground text-center">
              {photo.caption}
            </p>
          )}
          <button
            onClick={onNext}
            disabled={!hasNext}
            className="text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 rounded-md bg-foreground/10 border border-foreground/20 text-foreground/70 hover:bg-foreground/20 hover:text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Masonry column splitter ──────────────────────────────────────────────────

function MasonryGallery({
  photos,
  onPhotoClick,
}: {
  photos: GalleryPhoto[];
  onPhotoClick: (index: number) => void;
}) {
  const col2 = [
    photos.filter((_, i) => i % 2 === 0),
    photos.filter((_, i) => i % 2 === 1),
  ];
  const col3 = [
    photos.filter((_, i) => i % 3 === 0),
    photos.filter((_, i) => i % 3 === 1),
    photos.filter((_, i) => i % 3 === 2),
  ];

  const PhotoCard = ({
    photo,
    globalIndex,
  }: {
    photo: GalleryPhoto;
    globalIndex: number;
  }) => (
    <button
      onClick={() => onPhotoClick(globalIndex)}
      className="group relative w-full rounded-xl overflow-hidden border border-border/60 bg-card/40 hover:border-border transition-all duration-200 mb-3 block text-left"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={600}
        height={400}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      {/* Caption overlay */}
      {photo.caption && (
        <div className="absolute inset-x-0 bottom-0 px-3 py-2 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <p className="text-[10px] font-mono tracking-wide text-foreground/80 truncate">
            {photo.caption}
          </p>
        </div>
      )}
    </button>
  );

  return (
    <>
      {/* 3-col desktop */}
      <div className="hidden lg:flex gap-3">
        {col3.map((col, ci) => (
          <div key={ci} className="flex-1">
            {col.map((photo) => {
              const globalIndex = photos.indexOf(photo);
              return (
                <PhotoCard
                  key={globalIndex}
                  photo={photo}
                  globalIndex={globalIndex}
                />
              );
            })}
          </div>
        ))}
      </div>
      {/* 2-col tablet */}
      <div className="hidden sm:flex lg:hidden gap-3">
        {col2.map((col, ci) => (
          <div key={ci} className="flex-1">
            {col.map((photo) => {
              const globalIndex = photos.indexOf(photo);
              return (
                <PhotoCard
                  key={globalIndex}
                  photo={photo}
                  globalIndex={globalIndex}
                />
              );
            })}
          </div>
        ))}
      </div>
      {/* 1-col mobile */}
      <div className="flex sm:hidden flex-col gap-3">
        {photos.map((photo, i) => (
          <PhotoCard key={i} photo={photo} globalIndex={i} />
        ))}
      </div>
    </>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

const SECTION_CLASS =
  "mb-24 lg:mb-32 scroll-mt-24 pb-24 lg:pb-32 border-b border-border/50";

export function GallerySection() {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<{
    eventIndex: number;
    photoIndex: number;
  } | null>(null);

  const visibleEvents =
    activeEvent === null
      ? GALLERY_EVENTS
      : GALLERY_EVENTS.filter((e) => e.name === activeEvent);

  const lightboxEvent =
    lightbox !== null ? GALLERY_EVENTS[lightbox.eventIndex] : null;
  const lightboxPhoto = lightboxEvent
    ? lightboxEvent.photos[lightbox!.photoIndex]
    : null;

  const handlePrev = () => {
    if (!lightbox) return;
    if (lightbox.photoIndex > 0) {
      setLightbox({ ...lightbox, photoIndex: lightbox.photoIndex - 1 });
    }
  };
  const handleNext = () => {
    if (!lightbox || !lightboxEvent) return;
    if (lightbox.photoIndex < lightboxEvent.photos.length - 1) {
      setLightbox({ ...lightbox, photoIndex: lightbox.photoIndex + 1 });
    }
  };

  return (
    <section id="gallery" className={SECTION_CLASS}>
      {/* Heading */}
      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-[10px] font-mono tracking-[0.25em] text-muted-foreground uppercase select-none">
          07
        </span>
        <h2 className="text-2xl font-bold tracking-tight">Gallery</h2>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-foreground/20 via-foreground/5 to-transparent mb-8" />

      {/* Event filter chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveEvent(null)}
          className={cn(
            "px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200",
            activeEvent === null
              ? "bg-foreground text-background border-foreground"
              : "bg-transparent text-muted-foreground border-border hover:border-foreground/50 hover:text-foreground",
          )}
        >
          All
        </button>
        {GALLERY_EVENTS.map((event) => (
          <button
            key={event.name}
            onClick={() =>
              setActiveEvent(activeEvent === event.name ? null : event.name)
            }
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200",
              activeEvent === event.name
                ? "bg-foreground text-background border-foreground"
                : "bg-transparent text-muted-foreground border-border hover:border-foreground/50 hover:text-foreground",
            )}
          >
            {event.name}
          </button>
        ))}
      </div>

      {/* Events */}
      <div className="space-y-12">
        {visibleEvents.map((event, eventIndex) => {
          const realEventIndex = GALLERY_EVENTS.indexOf(event);
          return (
            <div key={event.name}>
              {/* Event header */}
              <div className="flex items-baseline gap-4 mb-5">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {event.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-mono tracking-wide text-muted-foreground/70">
                      {event.date}
                    </span>
                    {event.location && (
                      <>
                        <span className="w-px h-3 bg-border/50" />
                        <span className="text-[10px] font-mono tracking-wide text-muted-foreground/70">
                          {event.location}
                        </span>
                      </>
                    )}
                    <span className="w-px h-3 bg-border/50" />
                    <span className="text-[10px] font-mono text-muted-foreground/50">
                      {event.photos.length} photo
                      {event.photos.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>

              {/* Masonry grid */}
              <MasonryGallery
                photos={event.photos}
                onPhotoClick={(photoIndex) =>
                  setLightbox({ eventIndex: realEventIndex, photoIndex })
                }
              />
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightbox !== null && lightboxPhoto && lightboxEvent && (
        <Lightbox
          photo={lightboxPhoto}
          onClose={() => setLightbox(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={lightbox.photoIndex > 0}
          hasNext={lightbox.photoIndex < lightboxEvent.photos.length - 1}
        />
      )}
    </section>
  );
}
