# audiobuffer-loader

Simple function to load and decode soundfiles using the Web Audio API. Supported filetypes are determined by the Web Audio API.

## install

```sh
npm install audiobuffer-loader
```

## usage
Loading a file requires an `AudioContext`, and results in an object containing both the decoded `AudioBuffer` and the size of the file that was loaded.
```typescript
import { loadAudioBuffer } from 'audiobuffer-loader';

const context = new AudioContext();

loadAudioBuffer(context, 'samples/orbit.mp3').then(result => {
  // result.audioBuffer
  // result.fileSize
});

```

Optionally, you can add a callback as the 3rd parameter to track the loading progress. 
```typescript
loadAudioBuffer(context, 'samples/orbit.mp3', progress => {
  // use progress
})
```

Note that this callback will not be fired at all during decoding (which happens after a file is loaded). This may not be noticable for smaller files, but when you have files containing many minutes of audio the progress will not change for a while. 

## errors
The returned promise will be rejected when loading or decoding fails.

## load more files
If you need to load multiple files, you might be interested in this [sample manager](https://github.com/petervdn/sample-manager). 
