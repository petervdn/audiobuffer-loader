import { loadAudioBuffer } from '../../src/lib/webaudio-buffer-loader';

const context = new AudioContext();
loadAudioBuffer(context, 'samples/orbit.mp3', progress => {
  console.log(progress);
}).then(result => {
  console.log(result);
});
