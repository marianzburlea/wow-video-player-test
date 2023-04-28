import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PlayBar } from '../play-bar'

describe('PlayBar component', () => {
  const mockProps = {
    duration: 100,
    handleProgress: jest.fn(),
    handleVolume: jest.fn(),
    isPlaying: false,
    muteVideo: jest.fn(),
    pauseVideo: jest.fn(),
    playVideo: jest.fn(),
    progress: 0,
    soundOff: false,
    unMuteVideo: jest.fn(),
    volume: 50,
  }

  test('renders the play button with correct label and icon', () => {
    const { getByLabelText, getByRole } = render(<PlayBar {...mockProps} />)
    const playButton = getByRole('button', { name: /click to play video/i })
    expect(playButton).toBeInTheDocument()
    expect(playButton).toHaveAttribute('aria-label', 'click to play video')
    expect(getByLabelText(/play/i)).toBeInTheDocument()
  })

  test('clicking the play button calls the playVideo function', () => {
    const { getByRole } = render(<PlayBar {...mockProps} isPlaying={false} />)
    const playButton = getByRole('button', { name: /click to play video/i })
    fireEvent.click(playButton)
    expect(mockProps.playVideo).toHaveBeenCalled()
  })

  test('renders the pause button when the video is playing', () => {
    const { getByLabelText } = render(
      <PlayBar {...mockProps} isPlaying={true} />
    )
    expect(getByLabelText(/pause/i)).toBeInTheDocument()
  })

  test('clicking the pause button calls the pauseVideo function', () => {
    const { getByRole } = render(<PlayBar {...mockProps} isPlaying={true} />)
    const pauseButton = getByRole('button', { name: /click to pause video/i })
    fireEvent.click(pauseButton)
    expect(mockProps.pauseVideo).toHaveBeenCalled()
  })

  test('renders the volume button with correct label and icon', () => {
    const { getByTestId, getByRole } = render(<PlayBar {...mockProps} />)
    const volumeButton = getByRole('button', { name: /click to mute video/i })
    expect(volumeButton).toBeInTheDocument()
    expect(volumeButton).toHaveAttribute('aria-label', 'click to mute video')
    expect(getByTestId('volume')).toBeInTheDocument()
  })

  test('clicking the volume button calls the muteVideo function', () => {
    const { getByRole } = render(<PlayBar {...mockProps} soundOff={false} />)
    const volumeButton = getByRole('button', { name: /click to mute video/i })
    fireEvent.click(volumeButton)
    expect(mockProps.muteVideo).toHaveBeenCalled()
  })

  test('renders the mute button when the video is sound off', () => {
    const { getByTestId } = render(<PlayBar {...mockProps} soundOff={true} />)
    expect(getByTestId('mute')).toBeInTheDocument()
  })

  test('clicking the mute button calls the unMuteVideo function', () => {
    const { getByRole } = render(<PlayBar {...mockProps} soundOff={true} />)
    const muteButton = getByRole('button', { name: /click to unmute video/i })
    fireEvent.click(muteButton)
    expect(mockProps.unMuteVideo).toHaveBeenCalled()
  })

  test('renders the progress bar with correct duration and value', () => {
    const { getByRole } = render(<PlayBar {...mockProps} progress={50} />)
    const progressBar = getByRole('slider')
    expect(progressBar).toBeInTheDocument()
    expect(progressBar).toHaveAttribute('type', 'range')
    expect(progressBar).toHaveAttribute('min', '0')
    expect(progressBar).toHaveAttribute('max', '100')
    expect(progressBar).toHaveAttribute('aria-label', 'use')
    expect(progressBar).toHaveAttribute('value', '50')
  })
})
