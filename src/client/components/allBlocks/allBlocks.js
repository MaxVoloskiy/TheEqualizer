import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setVisibility } from '../../store/actions/blocksActions';
import BlockOfSliders from '../blockOfSliders';
import { createEffect } from '../../helpers/constants';
import { checkTickIcon } from '../../assets/icons/icons';
import './alllBlocks.css';

class AllBlocks extends Component {
  toggleSourceFilters = (filterName) => {
    const { setVisibility, blocksData, audioData } = this.props;
    setVisibility(filterName);
    blocksData.forEach(({ isVisible, name }) => {
      if (filterName === name) {
        if (audioData.filtersToggler) {
          isVisible ? audioData.voice.removeEffect(createEffect[name])
            : audioData.voice.addEffect(createEffect[name]);
        } else {
          isVisible ? audioData.sound && audioData.sound.removeEffect(createEffect[name])
            : audioData.sound && audioData.sound.addEffect(createEffect[name]);
        }
      }
    });
  };

  render() {
    const { blocksData } = this.props;
    return (
      <div className="SlidersComponent__main--container">
        <div className="AllSliders">
          <div className="ListOfEffects">
            <h3 className="ListOfEffects--header">Effects: </h3>
            {
              blocksData.map(({ name, isVisible }) => (
                <button
                  className="Effect"
                  key={name}
                  type="button"
                  id={name}
                  name={name}
                  onClick={() => this.toggleSourceFilters(name)}
                >
                  {name}
                  {' '}
                  {isVisible ? checkTickIcon : ''}
                </button>
              ))
            }
          </div>
          <div className="Sliders">
            {blocksData.map(({
              name, effects, isVisible,
            }) => (isVisible
              ? (
                <BlockOfSliders
                  name={name}
                  effects={effects}
                  key={name}
                />
              )
              : null))}
          </div>
        </div>
      </div>
    );
  }
}

AllBlocks.propTypes = {
  audioData: PropTypes.instanceOf(Object),
  blocksData: PropTypes.instanceOf(Array),
  setVisibility: PropTypes.func,
};

const mapStateToProps = state => ({
  blocksData: state.blocksData,
  audioData: state.audioData,
  sound: state.audioData.sound,
  voice: state.audioData.voice,
});

export default connect(mapStateToProps, { setVisibility })(AllBlocks);
