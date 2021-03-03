import fetch from node-fetch

fetch('//api.github.com/users/kanin-k')
  .then(res => {
    return res.json();
  })
  .then(user => {
    console.log(user);
  })
  .catch(err => {
    console.error(err);
  });