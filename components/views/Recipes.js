/* eslint-disable prettier/prettier */

import html from "html-literal";
import fritata from "/assets/img/fritata.jpg";
import omelette from "/assets/img/omelette.jpg";
import sangria from "/assets/img/sangria.jpg";
import frenchtoast from "/assets/img/frenchtoast.jpg";
import banana from "/assets/img/banana.jpg";
import mimosa from "/assets/img/mimosa.jpg";





export default () => html`

<section id="events">
    <h2>Recipes</h2>
   </section>
<section>
<div class="pancake">
  <h3><p>Easy Breakfast Recipes To Try</p></h3>
  </div>
</section>
<style>
      html {
        font-family: sans-serif;
      }

      body {
        margin: 0;
      }



      h1 {
        text-align: center;
        color: #b0afc2;
        line-height: 100px;
        margin: 0;
      }

      article {
        padding: 10px;
        margin: 10px;
        background: lightgray;
      }





    </style>
<section>

      <article>
        <h2>Classic Mimosa</h2>
        <img src="${mimosa}" />
        <ul>3/4 cup of chilled champagne</ul>
        <ul>1/4 cup of orange juice</ul>
        <p>Mix three parts of your favorite sparkling white to one part of your favorite orange juice. Enjoy!</p>
      </article>

      <article>
        <h2>Sangria</h2>
        <img src="${sangria}" />
        <ul>1 bottle of red wine</ul>
        <ul>1 cup orange juice</ul>
        <ul>1/2 cup brandy</ul>
        <ul>1/4 cup granulated sugar</ul>
        <ul>1 sliced orange</ul>
        <ul>1 cup blueberries</ul>
        <ul>1 cup sliced strawberries</ul>
        <ul>1 sliced apple</ul>
        <ul>1 cup diced pineapple</ul>
        <ul>1 12oz. can of seltzer</ul>

        <p>In a large pitcher, mix together wine, orange juice, brandy, and sugar. Stir in fruit.
            Refrigerate until ready to serve,at least 2 hours. Top with seltzer before serving. </p>
      </article>
      <article>
        <h2>French Toast</h2>
        <img src="${frenchtoast}" />
        <p> <h2></h2>
          <ul>1 egg</ul>
          <ul>1 teaspoon vanilla extract</ul>
          <ul>1/2 teaspoon ground cinnamon</ul>
          <ul>1/4 cup milk</ul>
          <ul>4 slices bread</ul>
        </p>
        <p>Beat egg, vanilla and cinnamon in shallow dish with wire whisk. Stir in milk.
            Dip bread in egg mixture, turning to coat both sides evenly.
            Cook bread slices on lightly greased nonstick griddle or skillet on medium heat until browned on both sides.  </p>
      </article>

      <article>

        <h2>Easy Frittata</h2>
        <img src="${fritata}" />
        <ul>8 large eggs</ul>
        <ul>1/2 cup of diced onions</ul>
        <ul>3 tbsp olive oil</ul>
        <ul>1/2 cup of milk</ul>
        <ul>3/4 tsp salt</ul>
        <ul>3/4 tsp pepper</ul>
        <p>Preheat oven to 350°F. Heat 3 tablespoons of olive oil in an oven-safe skillet over medium-high heat. Add ½ cup diced onions. Cook, stirring occasionally, until softened, about 5 minutes. Meanwhile, whisk 8 large eggs in a medium bowl with ½ cup of milk, ¾ teaspoon salt, and ¼ teaspoon pepper. To customize, add in any variety of cheeses,meats or veggies that you'd like.</p>
      </article>

      <article>
        <h2>Banana Nut Muffins</h2>
        <img src="${banana}" />
        <ul>2 cups all purpose flour</ul>
        <ul>1 1/2 teaspoons baking soda</ul>
        <ul>1/2 teaspoon salt</ul>
        <ul>4 overripe bananas</ul>
        <ul>1 cup brown sugar</ul>
        <ul>3/4 cup unsalted butter (melt and cool)</ul>
        <ul>2 eggs</ul>
        <ul>1 tsp vanilla extract</ul>
        <ul>1/2 cup chopped pecans</ul>

        <p>Preheat oven to 375 degrees F and lightly butter 2 muffin tins.
In a large bowl, combine the flour, baking soda, and salt; set aside. Mash 2 of the bananas with a fork in a small bowl so they still have a bit of texture. With an electric mixer fitted with a wire whisk, whip the remaining bananas and sugar together for 3 minutes. Add the melted butter, eggs, and vanilla and beat well, scraping down the sides of the bowl. Mix in the dry ingredients just until incorporated. Fold in the nuts and the mashed bananas. Spoon the batter into the muffin tins to fill them about halfway.
Bake until a toothpick stuck in the muffins comes out clean, 18 to 20 minutes. Let cool for a few minutes before turning the muffins out. Serve warm or at room temperature.</p>
      </article>

      <article>
        <h2>Western Omelette</h2>
        <img src="${omelette}" />
        <ul>2 tbsp unsalted butter</ul>
        <ul>1/4 cup diced meat of choice</ul>
        <ul>1/4 cup diced red bell pepper</ul>
        <ul>1/4 cup chopped onion</ul>
        <ul>3 eggs</ul>
        <ul>1/2 cup shredded cheddar cheese</ul>

        <p>Heat 10-inch skillet over medium heat for 5 minutes. Melt 1 tablespoon butter in skillet. Add ham and cook until lightly browned, about 3 minutes. Stir in bell pepper and onion and cook until softened and lightly browned, about 5 minutes.Transfer to bowl.
Whisk eggs, pinch of salt, and pepper together in a bowl until thoroughly combined. Melt remaining 1 tablespoon butter in the empty skillet over medium-low heat and swirl butter to coat bottom of pan.Add beaten egg mixture. Pull the sides in with a fork to form
large curds until top of omelet appears slightly wet.
Remove from heat and sprinkle ham mixture and cheese evenly over omelet. Cover with a lid and let sit until for 3 minutes. Run spatula around edge of skillet to loosen the sides of the omelet. Fold omelet in half and slide on to a plate.</p>
      </article>
</section>
`;





