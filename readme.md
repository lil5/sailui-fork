# Sail Fork UI

[![GitHub license](https://img.shields.io/github/license/sailui/ui)](https://github.com/lil5/sailui-fork/blob/fork/LICENSE.md)

A collection of basic UI classes built on Tailwind CSS.

[Demo](https://lil5.github.io/sailui-fork/).

## Who's this for?

### Serial Users

If you're already using Tailwind and you find yourself repeatedly creating
a few common component classes for every project, **Sail Fork UI** is for you.

This package helps you with a few basic components, so that you can start
building your prototype / draft / MVP before you get down to polishing your
fully custom design.

Use `.btn`, `.card` and other classes you're familiar with to get you started and customize them later when you need to.

### Newcomers

If you're moving away from another framework to Tailwind
and you're afraid of taking the leap because you don't want to
build all of those lovely components from scratch yourself,
**Sail Fork UI** will help you with the transition.

## Installation

Copy the config file and tailwind post css file for this project.

```bash
wget https://github.com/lil5/sailui-fork/raw/fork/src/tailwind.config.js

wget https://github.com/lil5/sailui-fork/raw/fork/src/tailwind.pcss
```

Install dependencies

```bash
npm install @tailwindcss/forms
```

Run Tailwind CLI

```bash
npx tailwindcss -i tailwind.pcss -o build/output.css -c tailwind.config.js
```

### Compatibility

- Tailwind CSS `v2.*.*`
- Tailwind Forms Plugin: `v0.3.4`

## Usage

Start using Sail Fork UI component classes just like how you're used to.

```html
<a href="/" class="btn"></a>
```

### Customizing the primary color

Simply edit a `theme.colors.primary` key to your `tailwind.config.js` and Sail UI will use it as the primary color:

```js
module.exports = {
  // ...
  theme: {
    colors: {
      primary: {
        light: colors.purple[300],
        DEFAULT: "#ff6394",
        dark: colors.purple[800],
      },
    },
  },
};
```

## What's Included

### Basic Components

These components are included:

- [.btn](#buttons)
- [.card](#cards)
- [.alert](#alerts)
- [.badge](#badges)
- [.link](#links)

#### Buttons

```html
<button class="btn">Sign Up</button>

<button class="btn btn-outline">Find Out More</button>
```

#### Cards

```html
<div class="card">Lorem ipsum dolor sit amet...</div>
```

#### Alerts

```html
<div class="alert"><strong>Normal stuff!</strong> zero concerns.</div>

<div class="alert alert-blue">
  <strong>All is clear!</strong> So far so good.
</div>

<div class="alert alert-green"><strong>Fantastic!</strong> You did it.</div>

<div class="alert alert-yellow">
  <strong>Watch out!</strong> Things are going down south.
</div>

<div class="alert alert-red"><strong>Too late!</strong> It's hit the fan.</div>
```

#### Badges

```html
<span class="badge">Default</span>

<span class="badge badge-light">Light</span>

<span class="badge badge-blue">Blue</span>

<span class="badge badge-green">Green</span>

<span class="badge badge-yellow">Yellow</span>

<span class="badge badge-red">Red</span>
```

#### Links

```html
<span>This is a <a href="#" class="link">link</a></span
>.
```

### Forms

Sail UI uses the [`forms` plugin from Tailwind Labs](https://github.com/tailwindlabs/tailwindcss-forms)
to reset form styles.

On top of the provided reset, these classes add an additional layer of styling to form elements:

- [.form-input](#form-input)
- [.form-select](#form-select)
- [.form-radio](#form-radio)
- [.form-checkbox](#form-checkbox)
- [.form-textarea](#form-textarea)

#### Form Input

```html
<label class="block">
  <span class="text-gray-700">Name</span>
  <input type="text" class="form-input mt-1 block w-full" />
</label>
```

#### Form Select

```html
<label class="block">
  <span class="text-gray-700">Pet of Choice</span>
  <select class="form-select mt-1 block w-full">
    <option>Cat</option>
    <option>Catty</option>
    <option>Kitty</option>
    <option>Kat</option>
  </select>
</label>
```

#### Form Radio

```html
<div class="mt-4">
  <span class="text-gray-700">Age Group</span>
  <div class="mt-2">
    <label class="inline-flex items-center">
      <input type="radio" class="form-radio" name="age-group" value="cat" />
      <span class="ml-2">Cat</span>
    </label>
    <label class="inline-flex items-center ml-6">
      <input type="radio" class="form-radio" name="age-group" value="kitty" />
      <span class="ml-2">Kitty</span>
    </label>
  </div>
</div>
```

#### Form Checkbox

```html
<div class="flex mt-6">
  <label class="flex items-center">
    <input type="checkbox" class="form-checkbox" />
    <span class="ml-2"
      >I agree to your <span class="underline">terms</span></span
    >.
  </label>
</div>
```

#### Form Textarea

```html
<label class="block mt-6">
  <span class="text-gray-700">Notes</span>
  <textarea
    class="form-textarea mt-1 block w-full"
    rows="3"
    placeholder="Write something..."
  ></textarea>
</label>
```

### Container

The `mx-auto` style is automatically applied to center the default `.container` that comes out of the box with Tailwind.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
