# Elbonyan


* [What's Elbonyan](#Elbonyan)

* [My Tune in style the html](#Tune)

    * [:root](#root)

    *  [Named the classes](#Named)

    *    [Repeat the classes and style](#Repeat)


* [Determined of the structure project](#Determined)

* [Overview for the project](#over)

<hr>
<h2 id="Elbonyan">What's Elbonyan</h2>
<p>
<a href="https://www.albonyanalmarsos.org/">The Al-Bunyan Al-Marsous initiative</a> is a non-profit initiative under the supervision of Eng. Ahmed Fathy
It aims to motivate young people to learn programming without a financial prize for the first,<br>
and by choosing a strong and arbitrary curriculum and effective follow-up from the Telegram group
</p>

<br><hr>

<h2 id="Tune">My Tune in style the html</h2>
<br>


<h3 id="root">:root</h3>
<p>
I use ":root" to control the padding to some sections without change them one by one 

```css
:root {
    --main-padding: 6rem;
    --main-font-size: 1.2rem;
}
```

of-course I change the --main-padding in queries file to make the sections responsive

</p>

<hr>
<h3 id="Named">Named the classes</h3>
<p>
I admit that I am the worst person in choosing classes names,
but this does not allow you to leave all the work and focus on two or three names that
I could not name in a correct descriptive way, and one of the most famous things that I described as an incorrect
description is the tufrag class. I gave him tufrag, which is a Latin form of the Arabic word for "تُفرج"



```html
<section class="tufrag"> 
</section>

```

```css

.tufrag {
    margin: 0 auto;
}


.tufrag .features-heading-box {


    padding: 6rem;
}

```

</p>

<hr>
<h3 id="Repeat">Repeat the classes and style</h3>

<p>
When I was reviewing the code 
I noticed that there are frequently used and generic class stuff that I added to general.css

```css
a {
    text-decoration: none;
}

ul {
    list-style: none;
}
```


I also noticed a common description for some elements,
so I created a custom class with that description and added it for each element that needed it


```css
.flex-row,
.flex-row-static {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}
```


```html
        <div class="box-icon-container flex-row">
            <div class="box-icon flex-culomn-static">
                <img src="images/Project%20Images/icons/counter-icon-1.svg" alt="counter-icon-1">
                <span class="strong-span">45K+</span>
                <p>Active installation</p>
            </div>
```

This made it easier to control the arrangement of
these elements and their flex-box in the <a href="css/queries.css" responsive design</a>
You can see this when looking at the site from <a href="#>different display screens </a>


```css
/* Note the difference between the class description in the queries file and the general file */
    .flex-row {
        flex-direction: column;
        align-items: center;
    }

```




</p>

<hr>

<h2 id="Determined">
 Determined of the structure project
</h2>


- [**css**](css)
- [**images**](images)
    - [**Project Images**](<images/Project Images>)
        - [**icons**](<images/Project Images/icons>)
        - [**people**](<images/Project Images/people>)
        - [**sponsers**](<images/Project Images/sponsers>)
- [**js**](js)
- [**index**](index.html)




<hr>
<h2 id="over">Overview for the project</h2>
<br>
<p>Desktop Design</p>
<img height="3500" src="./images/project (large).png" alt="Desktop Design">
<hr>
<p>Desktop Design</p>
<img height="3500" src="./images/project (small).png" alt="Desktop Design">


