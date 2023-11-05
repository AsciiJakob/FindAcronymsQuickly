browser.runtime.onInstalled.addListener(() => {
  browser.menus.create({
    id: "search-acronym",
    // eslint-disable-next-line quotes
    title: 'Search acronym "%s"',
    contexts: ["selection"]
  }, onCreated);
});

browser.menus.onClicked.addListener((info, tab) => {
  console.log(info);
  browser.tabs.create({url:"https://www.allacronyms.com/"+info.selectionText});
});

function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Created 'search acronym' context menu item.");
  }
}