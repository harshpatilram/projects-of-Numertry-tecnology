// navbar.js
document.getElementById("navbar").innerHTML = `
  <nav class="navbar">
    <div class="logo">
      <a href="home.html">Logo</a>
    </div>
    <div class="menu-toggle" id="menu-toggle">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="menu" id="menu">
      <a href="home.html">Home</a>
      <a href="about.html">About</a>
      <a href="services.html">Services</a>
      <a href="contact.html">Contact</a>
    </div>
  </nav>
  <style>
    body { margin: 0; font-family: Arial, sans-serif; }
    .navbar { display: flex; justify-content: space-between; align-items: center; background-color: #333; padding: 10px 20px; }
    .navbar a { color: white; text-decoration: none; padding: 10px 15px; }
    .navbar a:hover { background-color: #575757; border-radius: 5px; }
    .menu { display: flex; gap: 10px; }
    .menu-toggle { display: none; flex-direction: column; cursor: pointer; }
    .menu-toggle div { width: 25px; height: 3px; background-color: white; margin: 3px 0; }
    @media screen and (max-width: 768px) {
      .menu { display: none; flex-direction: column; background-color: #333; position: absolute; top: 50px; right: 20px; width: 150px; }
      .menu.active { display: flex; }
      .menu-toggle { display: flex; }
    }
  </style>
  <script>
    const toggleButton = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    toggleButton.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  </script>
`;
