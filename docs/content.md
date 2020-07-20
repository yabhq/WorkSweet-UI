## Content

### SwCard

A custom component allowing you to define a card container.

```HTML
<SwCard title="My Card Title">
  <!-- My Card Content -->
</SwCard>
```

### SwTable

A custom component allowing you to define a responsive table.

If used, the `head` slot must have a `<SwTableCol />` element as direct child, like below.

The `body` slot must have a `<SwTableRow />` element as direct child, like below.

```HTML
<SwTable title="My Title">
  <template slot="head">
    <!-- <SwTableCol /> --->
  </template>
  <template slot="body">
    <!-- <SwTableRow /> --->
  </template>
</SwTable>
```

| Props      | Type    | Required|
|------------|---------|--------|
| title       | String  | no |

### SwTableRow

A custom component to create a Table row.

If you need to center vertically the content, add a `centered` attribute.

```HTML
<SwTableRow centered>
  <!-- Your content --->
</SwTableRow>
```
| Props      | Type    | Required|
|------------|---------|--------|
| centered  | Boolean  | no |

### SwTableCol

A custom component to create a Table column.

If `type="action"` is added, the col content will be pushed to the right.

```HTML
<SwTableCol type="action">
  <!-- Your content --->
</SwTableCol>
```

| Props      | Type    | Accept | Required|
|------------|---------|--------|--------|
| type       | String  | action | no |

### SwTableCards

A custom component allowing you to define an alternative table, where rows are separated and stylised in cards. 

```HTML
<SwTableCards title="My Title">
    <!-- Your content --->
</SwTableCards>
```

| Props      | Type    | Required|
|------------|---------|--------|
| title       | String  | no |

### SwTableCardRow

A custom component to create a row for the `<SwTableCards />` component. 

To define columns inside, use `<SwTableCol />`.

```HTML
<SwTableCardRow>
    <!-- Your content --->
</SwTableCardRow>
```