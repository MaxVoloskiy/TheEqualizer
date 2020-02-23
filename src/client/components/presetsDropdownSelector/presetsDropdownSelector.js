import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchRequest from '../../helpers/fetchRequest';
import { HOST, createEffect } from '../../helpers/constants';
import { setPresetValue } from '../../store/actions/blocksActions';
import { addNewPresetsFromDB } from '../../store/actions/presetsAction';
import { removeSourceFilters } from '../../helpers/equalizerAuxMethods';

import './presetsDropdownSelector.css';

class PresetsDropdownSelector extends Component {
  componentDidMount() {
    const { addNewPresetsFromDB } = this.props;
    fetchRequest.get(`${HOST}/titles`)
      .then(response => addNewPresetsFromDB(response.data.userPresets));
  }

  applyFilters = (source) => {
    const { blocksData } = this.props;
    blocksData.forEach(({ name, isVisible, effects }) => {
      const newPreset = createEffect[name];
      Object.keys(effects).forEach((effectName) => {
        newPreset[effectName] = effects[effectName];
      });
      source && isVisible && source.addEffect(newPreset);
    });
  }

  handleSelectorChange = async (event) => {
    const { setPresetValue, blocksData, audioData: { voice, sound, filterToggler } } = this.props;
    if (filterToggler) {
      removeSourceFilters(voice, blocksData);
      await setPresetValue(event.target.value, blocksData);
      this.applyFilters(voice);
    } else {
      removeSourceFilters(sound, blocksData);
      await setPresetValue(event.target.value, blocksData);
      this.applyFilters(sound);
    }
  };

  render() {
    const { presetsData } = this.props;
    const listOfPresets = (
      presetsData.map((value, i) => <option className="option" key={i} value={value}>{value}</option>)
    );

    return (
      <select
        className="SlidersComponent__header--selector"
        onChange={this.handleSelectorChange}
      >
        {listOfPresets}
      </select>
    );
  }
}

const mapStateToProps = state => ({
  blocksData: state.blocksData,
  presetsData: state.presetsData,
  audioData: state.audioData,
});

PresetsDropdownSelector.propTypes = {
  blocksData: PropTypes.instanceOf(Array),
  audioData: PropTypes.instanceOf(Object),
  presetsData: PropTypes.instanceOf(Array),
  setPresetValue: PropTypes.func,
  addNewPresetsFromDB: PropTypes.func,
};

export default connect(mapStateToProps, {
  setPresetValue,
  addNewPresetsFromDB,
})(PresetsDropdownSelector);
