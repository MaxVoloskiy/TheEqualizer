import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './filterToggler.css';
import { filterHandler } from '../../store/actions/audioActions';
import { attachFiltersToSource, removeSourceFilters } from '../../helpers/equalizerAuxMethods';

export const FilterToggler = (props) => {
  const {
    audioData: {
      voice,
      sound,
      filtersToggler,
    },
    blocksData,
    filterHandlerAsProp,
  } = props;
  const onToggler = () => {
    filterHandlerAsProp();
    if (filtersToggler) {
      removeSourceFilters(voice, blocksData);
      attachFiltersToSource(sound, blocksData);
    } else {
      removeSourceFilters(sound, blocksData);
      attachFiltersToSource(voice, blocksData);
    }
  };

  return (
    <div className="modesElement">
      <span className="labels">Sound</span>
      <label htmlFor="toggler" className="switch">
        <input id="toggler" type="checkbox" onClick={onToggler} />
        <span className="slider" />
      </label>
      <span className="labels">Voice</span>
    </div>
  );
};

FilterToggler.propTypes = {
  audioData: PropTypes.instanceOf(Object).isRequired,
  blocksData: PropTypes.instanceOf(Array).isRequired,
  voice: PropTypes.instanceOf(Object),
  sound: PropTypes.instanceOf(Object),
  filterHandlerAsProp: PropTypes.func,
};

const mapStateToProps = state => ({
  audioData: state.audioData,
  blocksData: state.blocksData,
});

export default connect(mapStateToProps, { filterHandlerAsProp: filterHandler })(FilterToggler);
