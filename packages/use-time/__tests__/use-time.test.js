// import React from 'react';
import {
  renderHook,
  // act,
} from '@testing-library/react-hooks';
// import { render } from '@testing-library/react';

import useTime from '../lib/use-time';

describe('useTime:', () => {
  it('类型与默认值检查', () => {
    const { result } = renderHook(() => useTime('', () => {}));

    expect(result.current.duration).toBe(0);
    expect(result.current.currentTime).toBe(0);
    expect(result.current.buffered).toBe(null);

    expect(typeof result.current.changeCurrentTime).toBe('function');
  });

  // it('时间：回放', () => {
  //   let videoEl = null;
  //   const { result } = renderHook(() =>
  //     useTime(
  //       {
  //         src: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8',
  //         live: false,
  //         onDurationChange: () => {},
  //         onTimeUpdate: () => {},
  //         onProgress: () => {},
  //       },
  //       () => videoEl,
  //     ),
  //   );

  //   // eslint-disable-next-line jsx-a11y/media-has-caption
  //   render(<video />);
  //   videoEl = document.querySelector('video');

  //   // TypeError: Cannot set property duration of [object HTMLMediaElement] which has only a getter
  //   const duration = 10 * 60 * 1000;
  //   act(() => {
  //     videoEl.duration = duration;
  //     const e = new Event('durationchange', { target: videoEl });
  //     videoEl.dispatchEvent(e);
  //   });
  //   expect(result.current.duration).toBe(duration);
  //   // expect(result.current.duration).toBe(0);

  //   const buffered = { length: 1, start: () => 0, end: () => 10 * 1000 };
  //   act(() => {
  //     videoEl.buffered = buffered;
  //     const e = new Event('progress', { target: videoEl });
  //     videoEl.dispatchEvent(e);
  //   });
  //   expect(result.current.buffered.length).toBe(0);
  //   expect(typeof result.current.buffered.start).toBe('function');
  //   expect(typeof result.current.buffered.end).toBe('function');

  //   let currentTime = 5 * 1000;
  //   act(() => {
  //     videoEl.currentTime = currentTime;
  //     const e = new Event('timeupdate', { target: videoEl });
  //     videoEl.dispatchEvent(e);
  //   });
  //   expect(result.current.currentTime).toBe(currentTime);

  //   currentTime = 10 * 1000;
  //   act(() => {
  //     result.current.changeCurrentTime(currentTime);
  //   });
  //   expect(videoEl.currentTime).toBe(currentTime);
  //   expect(result.current.currentTime).toBe(currentTime);
  // });
});
