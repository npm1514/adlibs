Entry2 = React.createClass({
  noun1Changer: function(e){
    values.noun1 = e.target.value;
  },
  noun2Changer: function(e){
    values.noun2 = e.target.value;
  },
  noun3Changer: function(e){
    values.noun3 = e.target.value;
  },
  render: function(){
    return (
      <div className="page">
        <h1>Entry2 - Nouns</h1>
        <input onChange={this.noun1Changer} placeholder="Child's toy"/>
        <input onChange={this.noun2Changer} placeholder="Outrageous made up animal"/>
        <input onChange={this.noun3Changer} placeholder="Man with Beard's Accessory"/>
        <Link to="entry3">
          <i className="fa fa-arrow-circle-o-right fa-3x"></i>
        </Link>
        <Link to="entry1">
          <i className="fa fa-arrow-circle-o-left fa-3x"></i>
        </Link>
      </div>
    );
  }
});
