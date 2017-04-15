Story = React.createClass({
  render: function(){
    return (
      <div className="page">
        <h1>Story</h1>
        <p className="story"> ne time, I was in a bind and needed a {values.noun2}. I found one. What I didn't know, was that I had a {values.adj1} neighbor, named {values.name2}. He was a {values.adj3} {values.noun1}. I was in my apartment, for literally 2 days, when {values.name2} requested I be evicted, because of my {values.noun3}s. My {values.noun3}s were, aparently barking all the time. When I chatted with my other neighbor, they were like "No, those are our {values.adj2} {values.noun3}s." They called {values.name1}, and I was saved.</p>
        <Link to="entry3">
          <i className="fa fa-arrow-circle-o-left fa-3x"></i>
        </Link>
      </div>
    );
  }
});
