/* Challenge 2: Complete the init() function so that you build HTML output as per the wireframe diagram image.
Notes:
1) Images
   a. Titles and Pizza are both images stored in the images folder.
   b. When creating the images give each a class of either "title" or "pizza" respectively
   c. Each image has been conveniently labeled with a number at the end in order to use a 
      loop to retrieve the images.
2) Create an appropriate random price to display for each pizza
3) Enter quantity is a text input
4) Buy is a button input

Now that you have the template, use a for loop to produce all five pizza cards.
*/ 

// Go to style.css for Challenge 3

//init() function is called when the page loads in index.html
// init() function is called when the page loads in index.html
function init() {
  let output = document.getElementById("output");
  let html = "";
  // Loop to generate 5 pizza cards
  for (let i = 1; i <= 5; i++) {

    let price = (Math.random() * 10 + 10).toFixed(2);

    html += `
      <div class="card">
        <!-- Title Image -->
        <img src="images/title${i}.png" class="title" alt="Pizza Title ${i}">

        <img src="images/pizza${i}.png" class="pizza" alt="Pizza ${i}">

        <!-- Price -->
        <p>$${price}</p>
        <p>
          Quantity:
          <input type="number" value="1" min="1">
        </p>
        <input type="button" value="Buy">
      </div>
    `;
  }

  output.innerHTML = html;
}
