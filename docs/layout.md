### Layout 

#### SwContainer

Define a container, using flexbox. It is centered by default, and use the container-width defined in Sweet UI. 
If you want a full width container, add the `full` attribute.

```HTML
<SwContainer full large>
<!-- Content -->
</SwContainer>
```
| Props  | Type    | Required |
|--------|---------|----------|
| large   | Boolean | no       |
| full   | Boolean | no       |

#### SwRow

Define a row, using flexbox. You can center the column using the `center` prop. 

Note: If the children columns are using mobile or tablet breakpoints, add the `mobile` or `tablet` attribute(s).

```HTML
<SwRow mobile tablet desktop center>
<!-- Content -->
</SwRow>
```
| Props  | Type    | Required |
|--------|---------|----------|
| mobile | Boolean | no       |
| tablet | Boolean | no       |
| desktop | Boolean | no       |
| center | Boolean | no       | 

#### SwCol

Define a column, using flexbox. You can specify a col size globally with `:col` or more specifically using `:col, :col-tablet and / or :col-mobile`. 

Note: if you use `:col-tablet` or `:col-mobile`, you have to add `mobile` or `tablet` to the parent row.
```HTML
<SwCol
  :col="4"
  :col-desktop="6"
  :col-tablet="8"
  :col-mobile="12">
<!-- Content -->
</SwCol>
```
| Props      | Type   | Required |
|------------|--------|----------|
| col        | Number | no       |
| col-desktop | Number | no       |
| col-tablet | Number | no       |
| col-mobile | Number | no       |

### SwTabs

A custom component allowing you to define tabs. Expect multiple `<SwTab />` components like below.

```HTML
<SwTabs>
  <!-- <SwTab /> -->
</SwTabs>
```

### SwTab

A custom component allowing you to define a tab.

```HTML
<SwTabs
  name="My Tab"
  active>
  <!-- Content -->
</SwTabs>
```

| Props      | Type    | Required |
|------------|---------|--------|
| name       | String  | yes       |
| active     | Boolean | no       |


### SwModal

A custom component allowing you to define a Modal.

```HTML
 <SwModal
  v-if="activeModal"
  title="Your Title"
  :active="activeModal"
  @close="closeModal">
  <!-- Content -->
</SwModal>
```

| Props      | Type    | Required |
|------------|---------|--------|
| title       | String  | no       |
| active     | Boolean | no       |