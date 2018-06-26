fetch("https://api.github.com/users/mattroyer/gists")
.then(response => response.json())
.then(data => {
  var gists = document.querySelector("#gists")
  template = `<h2>Gists</h2> ${data.map(item => `<p><a href="${item.html_url}">${item.description}</a></p>` ).join("")}`
  gists.innerHTML = template
})
