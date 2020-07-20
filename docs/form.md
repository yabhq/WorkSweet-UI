## Form

### SwFormGroup

Group multiple form items using flexbox.

Should be used inside a `SwCol` component.

```HTML
<SwFormGroup>
<!-- Content -->
</SwFormGroup>
```

### SwFormItem

A powerful component allowing you to define an input or a textarea.

Note: You can use this component as a normal input / textarea. 

If you add a `required` attribute, a `required` will be added to the label.

If you add a `maxlength` attribute, a counter will appear inside the form item and the characters will be limited (in browser that supports the `maxlength` attribute).

If you add a `date` or `datetime-local` type, the input will automatically mask the characters entered using the following patterns `YYYY-MM-DD` and `YYYY-MM-DD HH:MM`.

```HTML
<SwFormItem
  type="text"
  label="Name"
  placeholder="John Snow"
  v-model="form.name"
  :maxlength="23"
  error
  required
  ... />
```

| Props     | Type    | Accept                                                                                                                     | Default | Required |
|-----------|---------|----------------------------------------------------------------------------------------------------------------------------|---------|----------|
| label     | String  | -                                                                                                                          | -       | yes      |
| type      | String  | textarea,'color','date', 'datetime-local','email', 'month','number','password', 'search','tel','text', 'time','url','week' | text    | no       |
| maxlength | Number  | -                                                                                                                          | -       | no       |
| error     | Boolean | true|false                                                                                                                 | -       | no       |

### SwSelect

A custom component allowing you to define a select list.


```HTML
<SwSelect
  label="Country"
  :options="options"
  placeholder
  filterable
  error 
  ... />
```

| Props   | Type    | Required |
|---------|---------|----------|
| label   | String  | no       |
| options | Array   | yes      |
| error   | Boolean | no       |
| filterable  | Boolean | no       |

Note: the `:options` attribute needs to receive an object defined as below.

`filterable` adds an input in the dropdown to filter the list by label.

```JS
options: [
  {
    label: 'My Label',
    value: 'My Value'
  }
]
```


### SwCheckboxGroup

Group multiple checkboxes using flexbox.
Should be used inside a `SwFormGroup` component.

```HTML
<SwCheckboxGroup>
<!-- Content -->
</SwCheckboxGroup>
```

### SwCheckbox

A component allowing you to define a custom checkbox.

Note: You can use this component as a normal checkbox.

```HTML
<SwCheckbox
  label="Click me"
  v-model="form.checkbox"
  disabled
  error
  ... />
```

| Props    | Type    | Required |
|----------|---------|----------|
| label    | String  | no       |
| disabled | Boolean | no       |
| error    | Boolean | no       |

### SwRadioGroup

Group multiple radios using flexbox.
Should be used inside a `SwFormGroup` component.


```HTML
<SwRadioGroup>
<!-- Content -->
</SwRadioGroup>
```

### SwRadio

A component allowing you to define a custom radio button.
Define the value using `native-value` instead of `value`.

Note: You can use this component as a normal radio.

```HTML
<SwRadio
  label="Blue"
  native-value="blue"
  name="color"
  v-model="form.color"
  disabled
  error
  ... />
<SwRadio
  label="Red"
  native-value="red"
  name="color"
  v-model="form.color"
  disabled
  error
  ... />
```

| Props        | Type    | Required |
|--------------|---------|----------|
| native-value | String  | yes      |
| label        | String  | no       |
| disabled     | Boolean | no       |
| error        | Boolean | no       |
