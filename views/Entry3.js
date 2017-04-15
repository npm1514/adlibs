Entry3 = React.createClass({
  adj1Changer: function(e){
    values.adj1 = e.target.value;
  },
  adj2Changer: function(e){
    values.adj2 = e.target.value;
  },
  adj3Changer: function(e){
    values.adj3 = e.target.value;
  },
  render: function(){
    return (
      <div className="page">
        <h1>Entry3 - Adjectives</h1>
        <input onChange={this.adj1Changer} placeholder="Favorite Color"/>
        <input onChange={this.adj2Changer} placeholder="In one word, the surface of a grape jellybean"/>
        <input onChange={this.adj3Changer} placeholder="Describe in two words our president"/>
        <Link to="story">
          <i className="fa fa-arrow-circle-o-right fa-3x"></i>
        </Link>
        <Link to="entry2">
          <i className="fa fa-arrow-circle-o-left fa-3x"></i>
        </Link>
      </div>
    );
  }
});
