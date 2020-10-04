# Topic

Ricky Personal Page

# Table of contents

- [General info](#general-info)
- [Screenshots](#screenshots)
- [Features](#features)
- [Code Style](#code-style)
- [Technology](#technology)
- [Code Example](#Code-Example)
- [Test](#Test)
- [Status](#status)
- [Future plan](#future-plan)
- [Create By](#create-by)

# General info

This project is to bulid a personal portfolio where it will change of the page content according to the screen size (or so-called responsive).

This project consists of the following 3 pages:

1. Home - The landing page of the site
2. About Me - a self-introduction inside the content of about me
3. Portfolio - a consolidation list for my project
4. Contact me - include a form for vistors who might want to contact me for more infomation to submit
5. Resume - a resume in PDF format for downloading

Please visit [https://rickyfuk.github.io/uwbootscamphomework2/](https://rickyfuk.github.io/uwbootscamphomework2/) for the site.

For the feature of the site, please visit the [Features](#features) section for more details.

# Screenshots

![screenshot](https://github.com/rickyfuk/uwbootscamphomework2/blob/9e0e8603170b92108b740949b9473dd02093d34f/assets/image/screenshot.PNG?raw=true)

# Features

In this project, the following features have apply to the site:

## <span style="color: rgb(220, 105, 1);">General</span>

1. Favicon has been added for all 3 pages
2. Background-images will change based on the page and the viewpoint (details could refer to the features of each specific page)
3. Most of the Background-images will roll down with the viewpoint (except the home screen with the screensize equal or bigger the large).
4. The footer is fixed at the bottom of the viewpoint.
5. Linkedin and Facebook button have been placed at the footer for social media contact

## <span style="color: rgb(220, 105, 1);">Navgation Bar - Apply to all 3 pages (Home/Portofio/Contact)</span>

1. A navagation bar that allowed the user to navagiate within all 3 pages
2. The style for the page name will change when it is being in the following 4 status:
   -focus (when it is clicked)
   -hover (when the mouse over)
   -active (after the name is clicked)
   -visited (after the page is visited)
3. The page selction on navagation bar will collapse into a toggle button when the screen size is below the medium one. (Please click the button to expand the list)

## <span style="color: rgb(220, 105, 1);">Home Page</span>

1. The paragraph style have been justify to full lenght
2. The main body (About me box) layout will be change according to screen size as the table below:
   | Screen Size | Layout |
   | :----------: | :-----------------------: |
   | Below Med | one box in the middle |
   | Med to Large | one box in the middle |
   | Equal or Above Large | one box and right aligned |
3. The background image will change according to the screen size, details as below:

   |         Screen Size         |                                                                            Background-image                                                                             |
   | :-------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
   |     <b> Below med </b>      |   <img src="https://github.com/rickyfuk/uwbootscamphomework2/blob/master/assets/image/pexels-photo-1738994-2.jpeg?raw=true" alt="Hong Kong night view" width="200px">   |
   | <b> Equal or Above med </b> | <img src="https://github.com/rickyfuk/uwbootscamphomework2/blob/master/assets/image/pexels-photo-1383562.jpeg?raw=true" alt="A black desktop with a tag" width="200px"> |

   \*\* Note: The image will not roll down with the viewpont for the screensize equal or bigger that large.

## <span style="color: rgb(220, 105, 1);">Portfolio Page</span>

1. Every project will consists of an introductory image
2. Every project title showed on top of the introductory image
<div>
<div>
<img src="https://github.com/rickyfuk/uwbootscamphomework2/blob/master/assets/image/Portofoliosample.png?raw=true" alt="Portfolio sample for Horiseon project" width="200px">
</div>
<div> *This is a sample of an introductory image </div>
</div>
3. The main body (Portfolio box) layout will be change according to screen size as the table below:
   | Screen Size | Layout |
   | :----------: | :--------------------------------: |
   | Below Med | one row and the box in the middle |
   | Med to Large | two rows and the box in the middle |
   | Equal or Above Large | two rows and the box right align |
4. The background image will change according to the screen size, details as below:
   | Screen Size | Background-image |
   | :----------: | :-----------------------: |
   | <b> Below Med </b> | <img src="https://github.com/rickyfuk/uwbootscamphomework2/blob/master/assets/image/pexels-photo-768125-portfolio.jpeg?raw=true" alt="A book shelf with a few books" width="200px"> |
   | <b> Equal or Above Med </b> | <img src="https://github.com/rickyfuk/uwbootscamphomework2/blob/master/assets/image/pexels-photo-256453-portfolio.jpeg?raw=true" alt="An old style book shelf with multiple column" width="200px"> |

## <span style="color: rgb(220, 105, 1);">Contact Page</span>

1. The text on the input line will turn to "Orange" while the user is typing their response
2. The text will turn to light grey after the input completed and valid
3. Every input area have added placeholder for the user easier reference
4. If the input is invalid, the following features will apply:
   - The text on the input line will turn to "red"
   - A red border box will show up around the input
   - This feature will not apply before move to another coloum or unclick the box
5. A reminder for the standard style have been placed under the email input line
6. The message box have assiged 7 rows as default
7. The main body (Contact input box) layout will be change according to screen size as the table below:
   | Screen Size | Layout |
   | :----------: | :-----------------------: |
   | Below Med | one box in the middle |
   | Med to Large | one box in the middle |
   | Equal or Above Large | one box and right aligned |
8. The background image will change according to the screen size, details as below:
   | Screen Size | Background-image |
   | :----------: | :-----------------------: |
   | <b> Below Med </b> | <img src="https://github.com/rickyfuk/uwbootscamphomework2/blob/master/assets/image/pexels-photo-1591062-contact-2.jpeg?raw=true" alt="A scrabble with e m a i l letter" width="200px"> |
   | <b> Equal or Above Med </b> | <img src="https://github.com/rickyfuk/uwbootscamphomework2/blob/master/assets/image/pexels-photo-327540-contact.jpeg?raw=true" alt="An business man with a handshake gesture" width="200px"> |

# Code Style

Standard

## <span style="color: rgb(220, 105, 1);"> Description for the code</span>

A general description for the every section on the top of the code to breifly explain the puopose of that section and some note for the section details.

  <div>
  <img src="https://github.com/rickyfuk/uwbootscamphomework2/blob/master/assets/image/Captureofdescription.PNG?raw=true" alt="Description Example">
  *example for the section description*
  </div>

## <span style="color: rgb(220, 105, 1);"> Comment "For Developer" and "Details for Developer"</span>

In every section, "For Developer" or "Details for Developer" might be added on the comment. These coding details designate for developers in order to get a deeper explanation of the code and facilate for further developing.

  <div>
  <img src="https://github.com/rickyfuk/uwbootscamphomework2/blob/master/assets/image/CaptureofForDeveloper.PNG?raw=true" alt="For Developer Example">
  *example for the "For Developer" comment*
  </div>

# Technology

The following technology have been used for this project:

1. [HTML](https://whatwg.org/)
2. [CSS](https://www.w3.org/Style/CSS/)
3. [Bootstrap](https://getbootstrap.com/)
4. [Google font](https://fonts.google.com/)
   - Quicksand
   - Nunito
   - Raleway

# Code Example

Below are some example for the code has been used and the corresponding outsome:

1.  Add the favicon
    Code Example (in html):
    ```html
    <link
    	rel="icon"
    	href="../uwbootscamphomework2/assets/image/RFfavicon.jpg"
    	type="image/x-icon"
    />
    ```
    Outcome:
    <div>
    <img src="https://github.com/rickyfuk/uwbootscamphomework2/blob/master/assets/image/faviconOutcome.PNG?raw=true" alt="A Favicon sample for my website" width="200px">
    </div>
2.  Position the main body in different screen size by Bootstrap Grid (including the padding, margin and the column setting) for all 3 html.
    Code Example (in html):
    ```html
    <div
    	class="border col-12 mx-2 px-3 pt-4 mt-3 col-md-12 px-md-4 col-lg-10 px-lg-5 standardcol"
    ></div>
    ```
    Outcome (use "Home" page as example)
    At Small Size Screen:
    <div>
    <img src="https://github.com/rickyfuk/uwbootscamphomework2/blob/master/assets/image/homeAtSmallScreen.PNG?raw=true" alt="My about me located in the middle of the small size screen" width="200px">
    </div>
    At Medium Size Screen:
    <div>
    <img src="https://github.com/rickyfuk/uwbootscamphomework2/blob/master/assets/image/homeAtMediumScreen.PNG?raw=true" alt="My about me located in the middle of the medium size screen" width="200px">
    </div>
    At Large Size Screen:
    <div>
    <img src="https://github.com/rickyfuk/uwbootscamphomework2/blob/master/assets/image/homeAtLargeScreen.PNG?raw=true" alt="My about me located in the left of the Large size screen" width="200px">
    </div>
3.  Keep the Contact input for the email as "Orange" for the text when the user is typing. Only change it to red if the email format is invalid after they move to another section.
    Code Example (in html):
    ```html
    <input
    	type="email"
    	class="form-control"
    	id="exampleFormControlInput1"
    	placeholder="e.g. name@example.com"
    />
    ```
    ```CSS
     input:not(:placeholder-shown):not(:focus):invalid {
            color: rgb(250,145,145);
            border:rgb(250,145,145) 3px solid;
            border-radius: 5px;
        }
    ```
    Outcome:
    when the user is typing:
    <div>
    <img src="https://github.com/rickyfuk/uwbootscamphomework2/blob/master/assets/image/emailInputResponseTyping.PNG?raw=true" alt="typing words in the email input" width="400px">
    </div>
    When the response is invalid after the user move to another section:
    <div>
    <img src="https://github.com/rickyfuk/uwbootscamphomework2/blob/master/assets/image/emailInputResponseinvalid.PNG?raw=true" alt="a red box and the text turn into red for the email input" width="400px">
    </div>

# Test

1. The site have been tested by open with small/medium/large device respectively.
2. The site have been tested by a HTML validation service - [W3C](https://validator.w3.org/)

# Status

Project status: finished

# Future Plan

## <span style="color: rgb(220, 105, 1);">Short Term</span>

Short term plan for the future development of this site:

1. Add more projects to the Portfolio (if any)
2. Add description for the project on a modal

## <span style="color: rgb(220, 105, 1);">Long Term</span>

Long term plan for the future development of this site:

1. Make the Contact form fully functionable with submitting the information to the database

# Create By

Created by Chung Hei Fuk
