import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider';
import { connect } from 'react-redux';
import { createEffect } from '../../helpers/constants';
import 'react-rangeslider/lib/index.css';

import './slider.css';

class OneSlider extends Component {
  constructor(props, context) {
    super(props, context);
    const {
      value, maxValue, minValue, step,
    } = props.effectValues;

    this.state = {
      sliderValue: value,
      maxValue,
      minValue,
      step,
    };
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props.effectValues;
    if (value !== prevProps.effectValues.value) {
      this.setState({ sliderValue: parseFloat(value.toFixed(2)) });
    }
  }

  setEffectsValue = (sliderValue) => {
    const { blocksData, blockName, effectName } = this.props;
    blocksData.forEach(({ name, effects }) => {
      if (name === blockName) {
        effects[effectName] = parseFloat(sliderValue.toFixed(2));
        createEffect[name][effectName] = effects[effectName];
      }
    });
    this.setState({ sliderValue: parseFloat(sliderValue.toFixed(2)) });
  };

  render() {
    const {
      sliderValue, maxValue, minValue, step,
    } = this.state;

    const { effectName } = this.props;
    return (
      <div>
        <p className="Slider--label">{effectName}</p>
        <Slider
          className="Sliders--slider"
          min={minValue}
          max={maxValue}
          value={sliderValue}
          step={step}
          orientation="horizontal"
          onChange={this.setEffectsValue}
        />
        <span className="Slider--value">{sliderValue}</span>
      </div>
    );
  }
}

OneSlider.propTypes = {
  value: PropTypes.number,
  blocksData: PropTypes.instanceOf(Array),
  blockName: PropTypes.string,
  effectName: PropTypes.string,
  effectValues: PropTypes.instanceOf(Object),
};

const mapStateToProps = state => ({
  blocksData: state.blocksData,
});


export default connect(mapStateToProps)(OneSlider);
