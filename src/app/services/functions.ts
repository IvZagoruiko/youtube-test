export function win() {
  return window;
}

export function youtubeRef() {
  return win()['YT'];
}

export function youtubePlayerRef() {
  return youtubeRef().Player;
}
