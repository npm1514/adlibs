Main = React.createClass({
  render: function(){
    return (
      <div>
          <header>
            <h1>This is a website</h1>
            <div id="nav">
              <Link to="/">
                <button>Home</button>
              </Link>
              <Link to="entry1">
                <button>Entry 1</button>
              </Link>
              <Link to="entry2">
                <button>Entry 2</button>
              </Link>
              <Link to="entry3">
                <button>Entry 3</button>
              </Link>
              <Link to="story">
                <button>Story</button>
              </Link>
            </div>
          </header>
          <main>
            {this.props.children}
          </main>
          <footer>
            This is a footer
          </footer>
      </div>
    );
  }
});
