const navLinks = [
  {
    name: "homepage",
    href: "#"
  },
  {
    name: "generic",
    href: "#"
  },
  {
    name: "elements",
    href: "#"
  },
  {
    name: "submenu",
    submenu: [
      {
        subname: "lorem dolor",
        href: "#"
      },
      {
        subname: "ipsum adipiscing",
        href: "#"
      },
      {
        subname: "tempus magna",
        href: "#"
      },
      {
        subname: "feugiat veroeros",
        href: "#"
      },
    ]
  },
  {
    name: "etiam dolore",
    href: "#"
  },
  {
    name: "adipiscing",
    href: "#"
  },
  {
    name: "another submenu",
    submenu: [
      {
        subname: "lorem dolor",
        href: "#"
      },
      {
        subname: "ipsum adipiscing",
        href: "#"
      },
      {
        subname: "tempus magna",
        href: "#"
      },
      {
        subname: "feugiat veroeros",
        href: "#"
      },
    ]
  },
  {
    name: "maximus erat",
    href: "#"
  },
  {
    name: "sapien mauris",
    href: "#"
  },
  {
    name: "amet lacinia",
    href: "#"
  }
]

const menuListElement = document.querySelector(".sidebar-nav-links");

function createAndAppendListItemInMenu() {
  navLinks.forEach(navLink => {
    const listItem = document.createElement("li")
    listItem.innerText = navLink.name

    menuListElement.appendChild(listItem)

    if (navLink.submenu) {
      const subUnorderedList = document.createElement("ul")
      subUnorderedList.classList.add("subunordered-list")
      navLink.submenu.forEach(navLinkSub => {
        const subListItem = document.createElement("li")
        subListItem.innerText = navLinkSub.subname
        subUnorderedList.appendChild(subListItem)
      })
      listItem.appendChild(subUnorderedList)
    }


  })
}
createAndAppendListItemInMenu()