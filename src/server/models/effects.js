import mongoose from 'mongoose';

const { Schema } = mongoose;

const effectsSchema = new Schema({
  title: {
    type: String,
    validate: {
      validator: title => /^[a-zA-Z0-9_.-]{1,}$/.test(title),
      message: 'Please, name your title with one word.',
      required: [true, 'Title is required'],
    },
  },
  presets: [{
    name: String,
    isVisible: Boolean,
    effects: {
      attack: Number,
      cutoff: Number,
      decay: Number,
      depth: Number,
      distortion: Number,
      feedback: Number,
      frequency: Number,
      gain: Number,
      highGain: Number,
      knee: Number,
      lowGain: Number,
      midHighGain: Number,
      midLowGain: Number,
      mix: Number,
      pan: Number,
      peak: Number,
      ratio: Number,
      release: Number,
      speed: Number,
      threshold: Number,
      time: Number,
    },
  }],
});

export default effectsSchema;
