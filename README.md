# Find Acronyms Quickly (FAQ)
 <p align="center">
  <img width="128" height="128" alt="NoDistractions logo" src="https://github.com/AsciiJakob/FindAcronymsQuickly/blob/master/src/static/assets/icon-128.png?raw=true">
</p>
Find Acronyms Quickly (FAQ) is a simple firefox extension that lets you look up acronyms or abbreviations by selecting them with your cursor and right clicking. A "Search acronym" button will appear in a context menu, once clicked it opens the acronym on <a href="https://www.allacronyms.com/">allacronyms.com</a>


(<a href="https://www.flaticon.com/free-icons/search" title="search icon">Magnifying glass used in logo is made by Maxim Basinski Premium on Flaticon</a>)
## Screenshots
<p align="center">
  <img width=500 alt="Screenshot showing context menu option" src="https://i.imgur.com/vySRYy3.png">
</p>
<p align="center">
  <img alt="Screenshot showing allacronyms.com page" src="https://i.imgur.com/kFcTX2h.png">
</p>

# Installation
[Download from the Mozilla Firefox add-on store](https://addons.mozilla.org/en-US/firefox/addon/find-acronyms-quickly-faq/)
# Running and building
Install the dependencies with `npm install`
## For debugging
`npm run debug` will open a firefox instantance with the extension loaded and the `about:debugging` page open (for viewing the background page).
## For building
`npm run build:firefox` will build a zip file in a folder called `web-ext-artifacts`, which you can temporary load the addon with from `about:debugging`.
