import type { RefObject } from 'react';

type DecorationsProps = {
  cursorRef: RefObject<HTMLDivElement | null>;
  cursorRingRef: RefObject<HTMLDivElement | null>;
};

export default function Decorations({ cursorRef, cursorRingRef }: DecorationsProps) {
  return (
    <>
      <div id="cur" ref={cursorRef} aria-hidden="true"></div>
      <div id="cur-ring" ref={cursorRingRef} aria-hidden="true"></div>

      <div className="blob blob-1" aria-hidden="true"></div>
      <div className="blob blob-2" aria-hidden="true"></div>
      <div className="blob blob-3" aria-hidden="true"></div>
    </>
  );
}
