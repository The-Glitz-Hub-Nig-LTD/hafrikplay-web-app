import React, { useRef, useState, useEffect } from "react";

import Icon from "../../../components/Icon";

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false),
    [duration, setDuration] = useState(0),
    [currentTime, setCurrentTime] = useState(0);

  // References
  const audioPlayer = useRef(),
    progressBar = useRef(),
    animationRef = useRef();

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  useEffect(() => {
    if (audioPlayer.current?.duration) {
      const seconds = Math.floor(audioPlayer.current.duration);
      console.log(seconds);
      setDuration(seconds);
      progressBar.current.max = seconds;
    }
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  return (
    <div className="audioplayer">
      <div className="control__group">
        <Icon className={`icon control__icon`} name="stuffle" size={20} />
        <Icon className={`icon control__icon`} name="previous" size={20} />

        <div
          className="control__btn control__play-pause"
          onClick={togglePlayPause}
        >
          <audio
            ref={audioPlayer}
            src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
            preload="metadata"
          ></audio>
          <Icon
            className={`control__icon`}
            name={isPlaying ? "pause" : "play"}
            size={20}
          />
        </div>

        <Icon className={`icon control__icon`} name="next" size={20} />
        <Icon className={`icon control__icon`} name="repeate" size={20} />

        <div className="audioplayer__progress-indictator">
          <span className="audioplayer__currenttime">
            {calculateTime(currentTime)}
          </span>
          <input
            className="audioplayer__range"
            type="range"
            defaultValue={0}
            ref={progressBar}
            onChange={changeRange}
          />
          <span className="audioplayer__duration">
            {duration && !isNaN(duration) && calculateTime(duration)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
