## Interface

### SwTopBar

A custom component allowing you to define the main top bar.

```HTML
<SwTopBar
  placeholder="Search something"
  :user="user"
  :notification="4"
  :btn-values="['New Project', 'New Client', 'New Invoice']"
  @search-input="processSearch"
  @btn-click="processAction"
  :logo="require('@/assets/img/logo.png')"
  no-search
  has-vertical-nav>
  <template slot="nav">
    <router-link
      :to="{ name: 'link' }"
      class="nav-item">
      Link
    </router-link>
  </template>
  <template v-slot:user="slotProps">
    <SwDropdown :active="slotProps.active">
      <!-- <SwDropdownItem /> -->
    </SwDropdown>
  </template>
</SwTopBar>
```

`user` expects an object with the following structure:
``` Javascript
user: {
  name: '',
  avatar: '' // local or external link
},
```
If you need to pass a dropdown to the user profile, use `<template v-slot>` as shown above. `slotProps.active` is a `boolean` used when the user is clicked or not, to toggle back the dropdown.

`debounce` limits the rate at which `search-input` related function is fired. It basically delays the emitted value. It could be useful if you need to hit the database on user input.

`has-vertical-nav` is meant to add extra padding to let the vertical nav hamburger menu has enough space when the vertical nav is collapsed.

`no-search` remove the search bar.

`logo` expects an image and if used, adds a logo on the left side of the topbar.

Adding a `<template slot="nav" />` triggers a navigation bar that collapses automatically in mobile mode. Expects a `nav-item` class as direct child.


| Props      | Type    | Accept | Required|
|------------|---------|--------|---------|
| placeholder | String  | - | no |
| user | Object  | - | no |
| notification | Number  | - | no |
| debounce | Number | Milliseconds | no |
| btn-values | Array / String  | - | no |
| has-vertical-nav | Boolean | - | no |
| no-search | Boolean | - | no |
| logo | String | - | no |


| Emitted      | Type    | Definition|
|------------|---------|--------|
| search-input | String  | emit the user search |
| btn-click | String  | emit the clicked btn value |


### SwHorizontalPrimaryNav

A custom component allowing you to define a top navigation.

Expect a `<SwNavItem />` element as direct child, like below.

```HTML
<SwHorizontalPrimaryNav>
  <!-- <SwNavItem /> --->
</SwHorizontalPrimaryNav>
```

### SwHorizontalSubNav

A custom component allowing you to define an horizontal sub navigation section. 

Expect a `<SwNavItem />` element as direct child, like below.

```HTML
<SwHorizontalSubNav>
  <!-- <SwNavItem /> --->
</SwHorizontalSubNav>
```

### SwVerticalPrimaryNav

A custom component allowing you to define a top navigation.

Expect a `<SwNavItem />` or `<SwNavGroup />` element as direct child, like below.

```HTML
<SwVerticalPrimaryNav
  :logo="require('@/assets/logo.svg')"
  fixed>
  <!-- <SwNavItem /> --->
</SwVerticalPrimaryNav>
```

| Props      | Type    | Required|
|------------|---------|--------|
| logo       | String  | no |
| fixed       | Boolean  | no |

### SwVerticalSubNav

A custom component allowing you to define a vertical sub-navigation section.

Expect a `<SwNavItem />` element as direct child, like below.

```HTML
<SwVerticalSubNav>
  <!-- <SwNavItem /> --->
</SwVerticalSubNav>
```

### SwNavGroup

A custom component allowing you to group links into a collapsible nav item. For vertical navigation only.

Expect a `<SwNavItem />` element as direct child, like below.

If you add a `collapse` attribute, the group items will be collapsed in an accordion style menu. 

```HTML
<SwNavGroup 
  name="My Group"
  collapse>
  <!-- <SwNavItem /> --->
</SwNavGroup>
```

| Props      | Type    | Required|
|------------|---------|--------|
| name       | String  | yes |
| collapse   | Boolean  | no |

### SwNavItem

A custom component allowing you to define a link for vertical navigations.

```HTML
<SwNavItem to="/my-url">
  My Url
</SwNavItem>
```

| Props      | Type    | Required|
|------------|---------|--------|
| to       | String  | yes |
