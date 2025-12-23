# Tailwind Date Range

A modern, feature-rich date range picker component for React built with Tailwind CSS 4 and dayjs.

> 💙 **Special Thanks**: This project is inspired by and based on the excellent work of [onesine/react-tailwindcss-datepicker](https://github.com/onesine/react-tailwindcss-datepicker). Huge shoutout to the original author for creating such a fantastic foundation!

## ✨ Features

- ✅ **Theming options** - Customizable color schemes
- ✅ **Dark mode** - Built-in dark mode support
- ✅ **Single Date** - Pick a single date
- ✅ **Single date use Range** - Use range picker for single date selection
- ✅ **Shortcuts** - Quick date selection with predefined shortcuts
- ✅ **TypeScript support** - Full TypeScript definitions included
- ✅ **Localization (i18n)** - Multi-language support
- ✅ **Date formatting** - Flexible date format options
- ✅ **Disable specific dates** - Disable date ranges or specific dates
- ✅ **Minimum Date and Maximum Date** - Set date boundaries
- ✅ **Custom shortcuts** - Create your own shortcut presets

## 📦 Installation

```bash
npm install tailwind-daterange
# or
yarn add tailwind-daterange
# or
pnpm add tailwind-daterange
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react dayjs
```

### Tailwind CSS 4 Setup (Next.js)

If you're using **Next.js** with Tailwind CSS 4, add the following to your `globals.css`:

```css
@import "tailwindcss";
@source "../../node_modules/tailwind-daterange";
```

This tells Tailwind CSS 4 to scan the `tailwind-daterange` package for class usage.

## 🚀 Quick Start

```tsx
import { useState } from 'react';
import Datepicker from 'tailwind-daterange';

function App() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Datepicker
      value={value}
      onChange={handleValueChange}
    />
  );
}
```

## 📖 Usage Examples

### Single Date Picker

```tsx
<Datepicker
  asSingle={true}
  useRange={false}
  value={value}
  onChange={handleValueChange}
/>
```

### Date Range with Custom Color

```tsx
<Datepicker
  primaryColor="blue"
  value={value}
  onChange={handleValueChange}
  showShortcuts={true}
  showFooter={true}
/>
```

### With Min/Max Dates

```tsx
<Datepicker
  value={value}
  onChange={handleValueChange}
  minDate={new Date(2020, 0, 1)}
  maxDate={new Date(2025, 11, 31)}
/>
```

### Disable Specific Dates

```tsx
<Datepicker
  value={value}
  onChange={handleValueChange}
  disabledDates={[
    {
      startDate: new Date(2024, 11, 25),
      endDate: new Date(2024, 11, 25)
    },
    {
      startDate: new Date(2025, 0, 1),
      endDate: new Date(2025, 0, 1)
    }
  ]}
/>
```

### Custom Shortcuts

```tsx
<Datepicker
  value={value}
  onChange={handleValueChange}
  configs={{
    shortcuts: {
      today: 'Today',
      yesterday: 'Yesterday',
      past: (period) => `Last ${period} days`,
      currentMonth: 'This month',
      pastMonth: 'Last month',
      customRange: {
        text: 'Last 90 days',
        period: {
          start: new Date(new Date().setDate(new Date().getDate() - 90)),
          end: new Date()
        }
      }
    }
  }}
/>
```

### Localization

```tsx
<Datepicker
  value={value}
  onChange={handleValueChange}
  i18n="fr"
  displayFormat="DD/MM/YYYY"
/>
```

### Custom Styling

```tsx
<Datepicker
  value={value}
  onChange={handleValueChange}
  containerClassName="custom-container"
  inputClassName="custom-input"
  toggleClassName="custom-toggle"
  popupClassName="custom-popup"
/>
```

## 🎨 Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `DateValueType` | **Required** | Current date range value |
| `onChange` | `(value: DateValueType) => void` | **Required** | Callback when date changes |
| `asSingle` | `boolean` | `false` | Enable single date mode |
| `useRange` | `boolean` | `true` | Use range selection |
| `primaryColor` | `ColorKeys` | `"blue"` | Primary theme color |
| `showFooter` | `boolean` | `true` | Show footer with Cancel/Apply buttons |
| `showShortcuts` | `boolean` | `true` | Show shortcuts sidebar |
| `placeholder` | `string` | `undefined` | Input placeholder text |
| `separator` | `string` | `"~"` | Date range separator |
| `displayFormat` | `string` | `"YYYY-MM-DD"` | Date display format |
| `i18n` | `string` | `"en"` | Language code for localization |
| `disabled` | `boolean` | `false` | Disable the datepicker |
| `readOnly` | `boolean` | `false` | Make input read-only |
| `minDate` | `Date \| null` | `null` | Minimum selectable date |
| `maxDate` | `Date \| null` | `null` | Maximum selectable date |
| `disabledDates` | `DateRangeType[]` | `null` | Array of disabled date ranges |
| `startFrom` | `Date \| null` | `null` | Initial calendar month |
| `startWeekOn` | `WeekStringType` | `"sun"` | First day of week |
| `popoverDirection` | `"up" \| "down"` | `"down"` | Popover direction |
| `inputId` | `string` | `undefined` | Input element ID |
| `inputName` | `string` | `undefined` | Input element name |
| `required` | `boolean` | `false` | Mark input as required |
| `configs` | `Configs` | `undefined` | Custom configurations |
| `classNames` | `ClassNamesTypeProp` | `undefined` | Custom class names |
| `containerClassName` | `ClassNameType` | `null` | Container class name |
| `inputClassName` | `ClassNameType` | `null` | Input class name |
| `toggleClassName` | `ClassNameType` | `null` | Toggle button class name |
| `popupClassName` | `ClassNameType` | `null` | Popup class name |
| `toggleIcon` | `(open: boolean) => ReactNode` | `undefined` | Custom toggle icon |

## 🛠️ Development

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build the library
yarn build

# Run linting
yarn lint

# Format code
yarn format
```

## 📄 License

[MIT](LICENSE) Licensed. Feel free to modify and redistribute.

## 🙏 Credits

- Original project: [react-tailwindcss-datepicker](https://github.com/onesine/react-tailwindcss-datepicker) by [onesine](https://github.com/onesine)
- Built with [Tailwind CSS](https://tailwindcss.com/)
- Date handling by [Day.js](https://day.js.org/)

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.