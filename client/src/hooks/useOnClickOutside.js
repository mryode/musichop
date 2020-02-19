import { useEffect } from 'react';

export default function useOnClickOutside(refs, handler) {
  useEffect(() => {
    const listener = event => {
      const isInside = refs.some(ref => ref && ref.contains(event.target));

      if (isInside) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler, refs]);
}
