Home = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Home</h1>
        <p className="story">
          Have you ever heard of an Adlib? If you don't know how it works, I will tell you now.
          <br/>
          1. Fill in the word in the entries with awesomeness
          <br/>
          2. Do that 2 more times
          <br/>
          3. Read the story aloud to all of your friends and family, and be sure to LAUGH!!
        </p>
        <Link to="entry1">
          <button>Begin</button>
        </Link>
      </div>
    );
  }
});
