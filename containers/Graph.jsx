import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label, Tooltip, Legend } from 'recharts';

function Graph(props) {
  return (
    <div id="graph">
      <LineChart width={1000} height={400} data={props.graphData}>
        <Line name={props.primaryMovie.title || ' '} type="monotone" dataKey="primaryTrendVolume" stroke="#8884d8" />
        <Line name={props.secondaryMovie.title || ' '} type="monotone" dataKey="secondaryTrendVolume" stroke="#FF0000" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date">
          <Label value="Date" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis label={{ value: 'Relative Search Volume', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend verticalAlign="top" />
      </LineChart>
    </div>
  );
}

Graph.propTypes = {
  graphData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  primaryMovie: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  secondaryMovie: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

function mapStateToProps({ graphData }) {
  return { graphData };
}

export default connect(mapStateToProps)(Graph);
