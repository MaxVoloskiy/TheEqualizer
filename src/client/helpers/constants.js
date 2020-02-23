import Pizzicato from 'pizzicato';

export const HOST = '';

export const fieldsInfo = [
  {
    type: 'text',
    name: 'username',
    label: 'Username',
    isMember: false,
  },
  {
    type: 'text',
    name: 'email',
    label: 'Email',
    isMember: true,
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    isMember: true,
  },
  {
    type: 'password',
    name: 'passwordConfirmation',
    label: 'Pasword confirmation',
    isMember: false,
  },
];

export const createEffect = {
  Delay: new Pizzicato.Effects.Delay({
    feedback: 0,
    time: 0,
    mix: 0,
  }),
  'Ping-Pong Delay': new Pizzicato.Effects.PingPongDelay({
    feedback: 0,
    time: 0,
    mix: 0,
  }),
  'Dub Delay': new Pizzicato.Effects.DubDelay({
    feedback: 0,
    time: 0,
    cutoff: 0,
    mix: 0,
  }),
  Distortion: new Pizzicato.Effects.Distortion({
    gain: 0,
  }),
  Quadrafuzz: new Pizzicato.Effects.Quadrafuzz({
    lowGain: 0,
    midLowGain: 0,
    midHighGain: 0,
    highGain: 0,
    mix: 0,
  }),
  Flanger: new Pizzicato.Effects.Flanger({
    time: 0,
    speed: 0,
    depth: 0,
    feedback: 0,
    mix: 0,
  }),
  Reverb: new Pizzicato.Effects.Reverb({
    time: 0,
    decay: 0,
    mix: 0,
  }),
  Tremolo: new Pizzicato.Effects.Tremolo({
    speed: 0,
    depth: 0,
    mix: 0,
  }),
  'Stereo panner': new Pizzicato.Effects.StereoPanner({
    pan: 0,
  }),
  Compressor: new Pizzicato.Effects.Compressor({
    threshold: 0,
    knee: 0,
    attack: 0,
    release: 0,
    ratio: 1,
  }),
  'Low-Pass Filter': new Pizzicato.Effects.LowPassFilter({
    frequency: 22050,
    peak: 0.0001,
  }),
  'High-Pass Filter': new Pizzicato.Effects.HighPassFilter({
    frequency: 10,
    peak: 0.0001,
  }),
  'Ring Modulator': new Pizzicato.Effects.RingModulator({
    speed: 0,
    distortion: 0.2,
    mix: 0,
  }),
};

export const efValues = {
  Delay: {
    feedback: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.01,
    },
    time: {
      value: 0,
      minValue: 0,
      maxValue: 5,
      step: 0.001,
    },
    mix: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.001,
    },
  },
  'Ping-Pong Delay': {
    feedback: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.01,
    },
    time: {
      value: 0,
      minValue: 0,
      maxValue: 5,
      step: 0.001,
    },
    mix: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.001,
    },
  },
  'Dub Delay': {
    feedback: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.01,
    },
    time: {
      value: 0,
      minValue: 0,
      maxValue: 5,
      step: 0.001,
    },
    cutoff: {
      value: 0,
      minValue: 0,
      maxValue: 4000,
      step: 100,
    },
    mix: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.001,
    },
  },
  Distortion: {
    gain: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.01,
    },
  },
  Quadrafuzz: {
    lowGain: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.01,
    },
    midLowGain: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.01,
    },
    midHighGain: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.01,
    },
    highGain: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.01,
    },
    mix: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.01,
    },
  },
  Flanger: {
    time: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.01,
    },
    speed: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.01,
    },
    depth: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.01,
    },
    feedback: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.01,
    },
    mix: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.01,
    },
  },
  Reverb: {
    time: {
      value: 0,
      minValue: 0,
      maxValue: 3,
      step: 0.01,
    },
    decay: {
      value: 0,
      minValue: 0,
      maxValue: 3,
      step: 0.01,
    },
    mix: {
      value: 0,
      minValue: 0,
      maxValue: 3,
      step: 0.01,
    },
  },
  Tremolo: {
    speed: {
      value: 0,
      minValue: 0,
      maxValue: 20,
      step: 0.01,
    },
    depth: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.01,
    },
    mix: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.01,
    },
  },
  'Stereo panner': {
    pan: {
      value: 0,
      minValue: -1,
      maxValue: 1,
      step: 0.01,
    },
  },
  Compressor: {
    threshold: {
      value: 0,
      minValue: -100,
      maxValue: 0,
      step: 1,
    },
    knee: {
      value: 0,
      minValue: 0,
      maxValue: 40,
      step: 1,
    },
    attack: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.001,
    },
    release: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.001,
    },
    ratio: {
      value: 1,
      minValue: 1,
      maxValue: 20,
      step: 1,
    },
  },
  'Low-Pass Filter': {
    frequency: {
      value: 22050,
      minValue: 10,
      maxValue: 22050,
      step: 1,
    },
    peak: {
      value: 0.0001,
      minValue: 0.0001,
      maxValue: 20,
      step: 0.0001,
    },
  },
  'High-Pass Filter': {
    frequency: {
      value: 10,
      minValue: 10,
      maxValue: 22050,
      step: 1,
    },
    peak: {
      value: 0.0001,
      minValue: 0.0001,
      maxValue: 20,
      step: 0.0001,
    },
  },
  'Ring Modulator': {
    speed: {
      value: 0,
      minValue: 0,
      maxValue: 2000,
      step: 1,
    },
    distortion: {
      value: 0.2,
      minValue: 0.2,
      maxValue: 50,
      step: 0.0001,
    },
    mix: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.01,
    },
  },
};

export const DEFAULT_PRESET_ARRAY = [
  {
    name: 'Delay',
    effects: {
      feedback: 0,
      time: 0,
      mix: 0,
    },
    isVisible: true,
  },
  {
    name: 'Ping-Pong Delay',
    effects: {
      feedback: 0,
      time: 0,
      mix: 0,
    },
    isVisible: false,
  },
  {
    name: 'Dub Delay',
    effects: {
      feedback: 0,
      time: 0,
      cutoff: 0,
      mix: 0,
    },
    isVisible: false,
  },
  {
    name: 'Distortion',
    effects: {
      gain: 0,
    },
    isVisible: false,
  },
  {
    name: 'Quadrafuzz',
    effects: {
      lowGain: 0,
      midLowGain: 0,
      midHighGain: 0,
      highGain: 0,
      mix: 0,
    },
    isVisible: true,
  },
  {
    name: 'Flanger',
    effects: {
      time: 0,
      speed: 0,
      depth: 0,
      feedback: 0,
      mix: 0,
    },
    isVisible: true,
  },
  {
    name: 'Reverb',
    effects: {
      time: 0,
      decay: 0,
      mix: 0,
    },
    isVisible: true,
  },
  {
    name: 'Tremolo',
    effects: {
      speed: 0,
      depth: 0,
      mix: 0,
    },
    isVisible: false,
  },
  {
    name: 'Stereo panner',
    effects: {
      pan: 0,
    },
    isVisible: true,
  },
  {
    name: 'Compressor',
    effects: {
      threshold: 0,
      knee: 0,
      attack: 0,
      release: 0,
      ratio: 1,
    },
    isVisible: false,
  },
  {
    name: 'Low-Pass Filter',
    effects: {
      frequency: 22050,
      peak: 0.0001,
    },
    isVisible: false,
  },
  {
    name: 'High-Pass Filter',
    effects: {
      frequency: 10,
      peak: 0.0001,
    },
    isVisible: false,
  },
  {
    name: 'Ring Modulator',
    effects: {
      speed: 0,
      distortion: 0.2,
      mix: 0,
    },
    isVisible: false,
  },
];

export const JAZZ_PRESET_ARRAY = [
  {
    name: 'Delay',
    effects: {
      feedback: 0,
      time: 0,
      mix: 0,
    },
    isVisible: false,
  },
  {
    name: 'Ping-Pong Delay',
    effects: {
      feedback: 0,
      time: 0,
      mix: 0,
    },
    isVisible: false,
  },
  {
    name: 'Dub Delay',
    effects: {
      feedback: 0,
      time: 0,
      cutoff: 0,
      mix: 0,
    },
    isVisible: false,
  },
  {
    name: 'Distortion',
    effects: {
      gain: 0,
    },
    isVisible: false,
  },
  {
    name: 'Quadrafuzz',
    effects: {
      lowGain: 0.18,
      midLowGain: 0.06,
      midHighGain: 0.2,
      highGain: 0.57,
      mix: 0,
    },
    isVisible: true,
  },
  {
    name: 'Flanger',
    effects: {
      time: 0.32,
      speed: 0.77,
      depth: 0.79,
      feedback: 0,
      mix: 0.17,
    },
    isVisible: true,
  },
  {
    name: 'Reverb',
    effects: {
      time: 0,
      decay: 0,
      mix: 0,
    },
    isVisible: false,
  },
  {
    name: 'Tremolo',
    effects: {
      speed: 5.86,
      depth: 0.4,
      mix: 0.61,
    },
    isVisible: true,
  },
  {
    name: 'Stereo panner',
    effects: {
      pan: 0,
    },
    isVisible: false,
  },
  {
    name: 'Compressor',
    effects: {
      threshold: -21,
      knee: 8,
      attack: 0.73,
      release: 0.73,
      ratio: 18,
    },
    isVisible: true,
  },
  {
    name: 'Low-Pass Filter',
    effects: {
      frequency: 12308,
      peak: 17.18,
    },
    isVisible: true,
  },
  {
    name: 'High-Pass Filter',
    effects: {
      frequency: 10,
      peak: 0.0001,
    },
    isVisible: false,
  },
  {
    name: 'Ring Modulator',
    effects: {
      speed: 0,
      distortion: 0.2,
      mix: 0,
    },
    isVisible: false,
  },
];

export const ROCK_PRESET_ARRAY = [
  {
    name: 'Delay',
    effects: {
      feedback: 0,
      time: 0,
      mix: 0,
    },
    isVisible: false,
  },
  {
    name: 'Ping-Pong Delay',
    effects: {
      feedback: 0,
      time: 0,
      mix: 0,
    },
    isVisible: false,
  },
  {
    name: 'Dub Delay',
    effects: {
      feedback: 0,
      time: 0,
      cutoff: 0,
      mix: 0,
    },
    isVisible: false,
  },
  {
    name: 'Distortion',
    effects: {
      gain: 0,
    },
    isVisible: true,
  },
  {
    name: 'Quadrafuzz',
    effects: {
      lowGain: 1,
      midLowGain: 1,
      midHighGain: 1,
      highGain: 0,
      mix: 1,
    },
    isVisible: true,
  },
  {
    name: 'Flanger',
    effects: {
      time: 0.3,
      speed: 0.3,
      depth: 0.2,
      feedback: 0.15,
      mix: 0.09,
    },
    isVisible: true,
  },
  {
    name: 'Reverb',
    effects: {
      time: 1.39,
      decay: 2.66,
      mix: 0.53,
    },
    isVisible: true,
  },
  {
    name: 'Tremolo',
    effects: {
      speed: 17,
      depth: 0.25,
      mix: 1,
    },
    isVisible: true,
  },
  {
    name: 'Stereo panner',
    effects: {
      pan: 0,
    },
    isVisible: false,
  },
  {
    name: 'Compressor',
    effects: {
      threshold: -20,
      knee: 10,
      attack: 0.85,
      release: 0.3,
      ratio: 14,
    },
    isVisible: true,
  },
  {
    name: 'Low-Pass Filter',
    effects: {
      frequency: 22050,
      peak: 0.0001,
    },
    isVisible: false,
  },
  {
    name: 'High-Pass Filter',
    effects: {
      frequency: 10,
      peak: 0.0001,
    },
    isVisible: true,
  },
  {
    name: 'Ring Modulator',
    effects: {
      speed: 0,
      distortion: 0.2,
      mix: 0,
    },
    isVisible: false,
  },
];

export const POP_PRESET_ARRAY = [
  {
    name: 'Delay',
    effects: {
      feedback: 0,
      time: 0,
      mix: 0,
    },
    isVisible: false,
  },
  {
    name: 'Ping-Pong Delay',
    effects: {
      feedback: 0,
      time: 0,
      mix: 0,
    },
    isVisible: false,
  },
  {
    name: 'Dub Delay',
    effects: {
      feedback: 0,
      time: 0,
      cutoff: 0,
      mix: 0,
    },
    isVisible: false,
  },
  {
    name: 'Distortion',
    effects: {
      gain: 0,
    },
    isVisible: false,
  },
  {
    name: 'Quadrafuzz',
    effects: {
      lowGain: 0,
      midLowGain: 0.04,
      midHighGain: 0.13,
      highGain: 0.46,
      mix: 0.09,
    },
    isVisible: true,
  },
  {
    name: 'Flanger',
    effects: {
      time: 0,
      speed: 0,
      depth: 0,
      feedback: 0,
      mix: 0,
    },
    isVisible: false,
  },
  {
    name: 'Reverb',
    effects: {
      time: 2.55,
      decay: 2.55,
      mix: 2.55,
    },
    isVisible: true,
  },
  {
    name: 'Tremolo',
    effects: {
      speed: 13.58,
      depth: 0.05,
      mix: 0.79,
    },
    isVisible: true,
  },
  {
    name: 'Stereo panner',
    effects: {
      pan: 0,
    },
    isVisible: false,
  },
  {
    name: 'Compressor',
    effects: {
      threshold: -47,
      knee: 32,
      attack: 0.82,
      release: 0.94,
      ratio: 18,
    },
    isVisible: true,
  },
  {
    name: 'Low-Pass Filter',
    effects: {
      frequency: 6217,
      peak: 9.97,
    },
    isVisible: true,
  },
  {
    name: 'High-Pass Filter',
    effects: {
      frequency: 10,
      peak: 0.0001,
    },
    isVisible: false,
  },
  {
    name: 'Ring Modulator',
    effects: {
      speed: 0,
      distortion: 0.2,
      mix: 0,
    },
    isVisible: false,
  },
];
