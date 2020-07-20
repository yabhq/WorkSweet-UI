## Elements

### SwButton

A custom component allowing you to define a button.

```HTML
<SwButton
  type="small"
  active
  full-width
  loading>
  My Button
</SwButton>
```

| Props      | Type    | Accept | Required |
|------------|---------|--------|----------|
| type       | String  | small, tiny, circle     | no       |
| active     | Boolean | -      | no       |
| full-width | Boolean | -      | no       |
| loading | Boolean | -      | no       |

### SwTag

A custom component allowing you to define a tag element.

```HTML
<SwTag
  type="warning"
  filled>
  My Tag
</SwTag>
```

| Props  | Type    | Accept         | Required |
|--------|---------|----------------|----------|
| type   | String  | success, warning, error | no       |
| filled | Boolean | -              | no       |

### SwAlert

A custom component allowing you to define an alert message.

```HTML
<SwAlert
  type="warning"
  icon="checkmark">
  My Alert
</SwAlert>
```

| Props  | Type    | Accept         | Required |
|--------|---------|----------------|----------|
| type   | String  | success, warning, error | no       |
| icon | String | add, arrow, chevron, bell, calendar, checkmark, cog, menu, more, search, close, edit              | no       |

### SwPaginate

A powerful component allowing you to create a complete pagination system.

```HTML
<SwPaginate
  url="/my-url"
  :pages="16"
  :current="1" />
```

| Props   | Type   | Required |
|---------|--------|----------|
| url     | String | yes      |
| pages   | Number | yes      |
| current | Number | yes      |

### SwDropdown

A component allowing you to create a custom dropdown.

Accept a `<SwDropdownItem />` as direct child.

```HTML
<SwDropdown>
  <!-- <SwDropdownItem /> -->
</SwDropdown>
```

| Props   | Type   | Required |
|---------|--------|----------|
| active     | Boolean | no      |
| is-right   | Boolean | no      |

### SwDropdownItem  

A component allowing you to create a dropdown link item.

```HTML
<SwDropdownItem to="/my/url">
  My dropdown link
</SwDropdownItem>
```

| Props   | Type   | Required |
|---------|--------|----------|
| to     | String | yes      |

### SwIcons  

A component allowing you to add SVG icons on the fly.

Note: You can pass any svg attribute to the component.

```HTML
<SwIcons
  icon="/my/url"
  fill="blue"
  width="24"
  height="24"
  :rotate="48/>
```

| Props   | Type   | Accept | Required |
|---------|--------|----------|----------|
| icon     | String | add, arrow, bell, calendar, checkmark, chevron, close, cog, edit, menu, more, search | yes |
| rotate     | Number | - | no |
