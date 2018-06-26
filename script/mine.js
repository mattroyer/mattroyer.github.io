fetch("https://api.github.com/users/mattroyer/gists")
.then(response => response.json())
.then(data => {
  var gists = document.querySelector(".gists")
  template = `${data.map(item => `<p><a href="${item.html_url}">${item.description}</a></p>` ).join("")}`
  gists.innerHTML = template
})
