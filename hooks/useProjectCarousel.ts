"use client";

import { useState, useCallback } from "react";

/**
 * Manages carousel slide state for a list of projects.
 */
export function useProjectCarousel(total: number) {
  const [slide, setSlide] = useState(0);

  const goToPrevious = useCallback(() => {
    setSlide((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const goToNext = useCallback(() => {
    setSlide((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  const goToSlide = useCallback((index: number) => {
    setSlide(index);
  }, []);

  // Reset to 0 whenever the tab (and therefore `total`) changes
  const reset = useCallback(() => setSlide(0), []);

  return { slide, goToPrevious, goToNext, goToSlide, reset };
}
