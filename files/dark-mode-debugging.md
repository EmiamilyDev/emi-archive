# Dark Mode Debugging Guide

## If Dark Mode is Not Working

### Step 1: Check Browser Console
1. Press `F12` to open Developer Tools
2. Go to the **Console** tab
3. Look for messages starting with "🌙 Theme System:"
   - `Loaded saved theme: light` or `Loaded saved theme: dark`
   - `Applied dark theme class` (should appear if dark theme was saved)
   - `Toggle button not found!` (error if button doesn't exist)

### Step 2: Verify Theme Toggle Button
In the Developer Tools **Elements** tab:
1. Find `<button class="theme-toggle">`
2. Check if it displays the 🌙 emoji
3. Click it in the DOM inspector
4. Check if `<body class="dark-theme">` appears

### Step 3: Hard Refresh Browser
1. Press `Ctrl + Shift + R` (Windows)
2. Or go to Developer Tools → Application → Clear Site Data
3. Refresh the page
4. Click the theme toggle button

### Step 4: Check CSS Variables
In Developer Tools Console, run:
```javascript
const styles = getComputedStyle(document.documentElement);
console.log('Light mode --bg:', styles.getPropertyValue('--bg'));
console.log('Light mode --ink:', styles.getPropertyValue('--ink'));

document.body.classList.add('dark-theme');
const darkStyles = getComputedStyle(document.documentElement);
console.log('Dark mode --bg:', darkStyles.getPropertyValue('--bg'));
console.log('Dark mode --ink:', darkStyles.getPropertyValue('--ink'));
```

### Step 5: Check Dark Mode Class
In Developer Tools Console:
```javascript
// Check if dark-theme class is applied
console.log('Has dark-theme:', document.body.classList.contains('dark-theme'));

// Toggle it manually
document.body.classList.toggle('dark-theme');
console.log('After toggle:', document.body.classList.contains('dark-theme'));
```

### Step 6: Check localStorage
In Developer Tools Console:
```javascript
// Check saved theme
console.log('Saved theme:', localStorage.getItem('theme'));

// Set dark theme
localStorage.setItem('theme', 'dark');
// Refresh the page - it should load in dark mode
```

## Expected Behavior

### When Light Mode (Default):
- Background: Warm ivory (#f7f4ef)
- Text: Dark charcoal (#1c1c1c)
- Button: 🌙 (moon emoji)
- Gold accents: #c9b08a

### When Dark Mode:
- Background: Near black (#0f0d0a)
- Text: Light cream (#f5f1eb)
- Button: ☀️ (sun emoji)
- Gold accents: #d4a574 (lighter gold)

## Common Issues & Fixes

### Issue: Button doesn't appear
- **Check:** Is the header loading?
- **Fix:** Hard refresh (Ctrl+Shift+R), check console for JavaScript errors

### Issue: Button appears but doesn't toggle
- **Check:** Open console, click button, look for "Toggled to" message
- **Fix:** Check browser JavaScript is enabled, no console errors

### Issue: Colors don't change
- **Check:** Is dark-theme class being added to body?
- **Fix:** See Step 5 above, manually toggle class in console

### Issue: Theme doesn't save after refresh
- **Check:** Is localStorage available?
- **Fix:** Try in private/incognito mode, check browser storage permissions

### Issue: Only some elements change color
- **Check:** Do those elements have `body.dark-theme` overrides?
- **Fix:** If new elements don't have dark mode styles, they need to be added to CSS

## CSS Structure for Dark Mode

All elements should follow this pattern:

```css
/* Light mode (default) */
.element {
  color: var(--ink);
  background: var(--bg);
  border-color: var(--line);
}

/* Dark mode override */
body.dark-theme .element {
  color: var(--ink-dark);
  background: var(--bg-dark);
  border-color: var(--line-dark);
}
```

**Never use hardcoded colors** - always use CSS variables so dark mode works automatically.

## CSS Variables Reference

**Light Mode (root defaults):**
- --bg: #f7f4ef (background)
- --surface: #e8e1d7 (cards, surfaces)
- --ink: #1c1c1c (text)
- --muted: #585550 (secondary text)
- --gold: #c9b08a (accent)
- --line: #d6cebf (borders)

**Dark Mode (body.dark-theme overrides):**
- --bg: #0f0d0a (background)
- --surface: #1a1815 (cards, surfaces)
- --ink: #f5f1eb (text)
- --muted: #a39b91 (secondary text)
- --gold: #d4a574 (accent)
- --line: #2a261f (borders)

## Performance Notes

- CSS variables are changed instantly (no repaints)
- DOM class toggle is performant
- localStorage access is minimal (only on page load and toggle)
- All transitions are GPU-accelerated

