import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { render } from '@testing-library/react';

import usePiP from '../lib/use-pip';

describe('usePiP:', () => {
  it('类型与默认值检查(pictureInPictureEnabled)', () => {
    document.pictureInPictureEnabled = true;
    const { result } = renderHook(() => usePiP({ src: '' }, () => {}));

    expect(result.current.pictureInPictureEnabled).toBe(true);
    expect(result.current.pip).toBe(false);

    expect(typeof result.current.requestPictureInPicture).toBe('function');
    expect(typeof result.current.exitPictureInPicture).toBe('function');
  });

  it('类型与默认值检查(pictureInPictureDisabled)', () => {
    document.pictureInPictureEnabled = false;
    const { result } = renderHook(() => usePiP({ src: '' }, () => {}));

    expect(result.current.pictureInPictureEnabled).toBe(false);
  });

  it('requestPictureInPicture/exitPictureInPicture', () => {
    document.pictureInPictureEnabled = true;
    // eslint-disable-next-line jsx-a11y/media-has-caption
    render(<video />);
    const videoEl = document.querySelector('video');
    const { result } = renderHook(() => usePiP({ src: '' }, () => videoEl));
    videoEl.requestPictureInPicture = () => {
      videoEl.dispatchEvent(new Event('enterpictureinpicture'));
    };
    document.exitPictureInPicture = () => {
      videoEl.dispatchEvent(new Event('leavepictureinpicture'));
    };

    expect(result.current.pip).toBe(false);

    act(() => {
      result.current.requestPictureInPicture();
    });
    expect(result.current.pip).toBe(true);

    act(() => {
      result.current.exitPictureInPicture();
    });
    expect(result.current.pip).toBe(false);
  });

  // it('props change', () => {
  //   document.pictureInPictureEnabled = true;
  //   render(<video />);
  //   const videoEl = document.querySelector('video');
  //   const props = { src: '' };
  //   const { result } = renderHook(() => usePiP(props, () => videoEl));
  //   videoEl.requestPictureInPicture = () => {
  //     console.log('enterpictureinpicture');
  //     videoEl.dispatchEvent(new Event('enterpictureinpicture'));
  //   };
  //   document.exitPictureInPicture = () => {
  //     videoEl.dispatchEvent(new Event('leavepictureinpicture'));
  //   };

  //   expect(result.current.pip).toBe(false);

  //   act(() => {
  //     result.current.requestPictureInPicture();
  //   });
  //   expect(result.current.pip).toBe(true);

  //   act(() => {
  //     props.src = 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8';
  //   });
  //   expect(result.current.pip).toBe(false);
  // });
});
