import { FC } from 'react'

interface IProps {
  kernel: 'hlsjs' | 'flvjs' | 'native'
  live: boolean,
  config: object,
  onKernelError: (ev) => void,

  src: string,
  type: string,
  controls: boolean | 'controls',
  muted?: boolean,

  className?: string,
  skinClassName?: string,
  videoProps?: object,
  playerProps?: object,

  children: any,
}

type ReactPlayer = FC<IProps>

export default ReactPlayer
