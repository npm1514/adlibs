Entry1 = React.createClass({
  name1Changer: function(e){
    values.name1 = e.target.value;
  },
  name2Changer: function(e){
    values.name2 = e.target.value;
  },
  render: function(){
    return (
      <div className="page">
        <h1>Entry1 - Names</h1>
        <input onChange={this.name1Changer} placeholder="famous superhero name"/><br/>
        <input onChange={this.name2Changer} placeholder="high school janitor's name"/>
        <Link to="entry2">
          <i className="fa fa-arrow-circle-o-right fa-3x"></i>
        </Link>
        <Link to="/">
          <i className="fa fa-arrow-circle-o-left fa-3x"></i>
        </Link>
      </div>
    );
  }
});
