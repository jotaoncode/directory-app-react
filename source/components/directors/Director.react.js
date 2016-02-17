var React = require('react');

var Director = React.createClass({

  onRowClick: function () {
    var director = this.props.director;
    var onDirectorClick = this.props.onDirectorClick;

    if (onDirectorClick) {
      onDirectorClick(director.id);
    }
  },

  render: function () {
    return (
      <tr onClick={this.onRowClick}>
        <td className="director-attr">{this.props.director.name}</td>
        <td className="director-attr">{this.props.director.sex}</td>
        <td className="director-attr">{this.props.director.nationality}</td>
        <td className="director-attr">{this.props.director.city}</td>
        <td className="director-attr">{this.props.director.dob}</td>
        <td className="director-attr">{this.props.director.age}</td>
        <td className="director-attr">{this.props.director.blockbuster}</td>
      </tr>
    );
  }
});

module.exports = Director;
