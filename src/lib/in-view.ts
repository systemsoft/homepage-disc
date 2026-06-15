
/*** IMPORT ------------------------------------------- ***/

import type { Attachment } from "svelte/attachments";

/*** EXPORT ------------------------------------------- ***/

export function inView(callback: (isVisible: boolean) => void, options?: IntersectionObserverInit): Attachment {
  return (element) => {
    const observer = new IntersectionObserver(([entry]) => {
      callback(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => observer.disconnect();
  };
}

export function inViewOnce(callback: (isVisible: boolean) => void, options?: IntersectionObserverInit): Attachment {
  return (element) => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(element);

    return () => observer.disconnect();
  };
}

/***
  <section class:visible {@attach inView((isVisible) => visible = isVisible)}></section>

  A few knobs worth knowing on the options object:
  - threshold: 0.5 — fires when 50% of the element is visible (default is 0, meaning a single pixel counts)
  - rootMargin: "-100px" — shrinks the viewport bounds, so the element must be 100px past the edge before it counts
  - root — observe relative to a scrollable container instead of the viewport

  If you only care about the first time it enters view (e.g. fade-in-once animations), disconnect inside the callback:

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      callback(true);
      observer.disconnect();
    }
  }, options);

***/
