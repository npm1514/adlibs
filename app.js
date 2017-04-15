ReactDOM.render(
  <Router>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="entry1" component={Entry1}/>
      <Route path="entry2" component={Entry2}/>
      <Route path="entry3" component={Entry3}/>
      <Route path="story" component={Story}/>
    </Route>
  </Router>,
  document.getElementById('container')
);
