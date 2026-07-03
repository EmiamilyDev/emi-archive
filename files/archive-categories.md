# EMI Archive - Category Structure

## Overview
The EMI Archive is organized into three main categories with multiple subcategories, allowing for comprehensive organization and filtering of records.

## Categories

### 1. ON SCREEN
Career achievements in film and television.

**Subcategories:**
- Early Career
- Supporting Roles
- Lead Roles
- Television
- Film
- Awards

### 2. IN STYLE
Fashion and editorial appearances and collaborations.

**Subcategories:**
- Fashion Week
- Brand Campaigns
- Editorial
- Covers
- Front Row
- Style Notes

### 3. ON STAGE
Musical and performance achievements.

**Subcategories:**
- OST (Original Soundtrack)
- Singles
- Live Performance
- Concert
- Music Videos

## Implementation

### Data Structure
Each archive record now includes:
```javascript
{
  title: "String",
  year: "YYYY",
  date: "DD Mon YYYY",
  brand: "String",
  eventType: "String",
  location: "String",
  category: "ON SCREEN | IN STYLE | ON STAGE",
  subcategory: "String (from category's subcategories)"
}
```

### Filter UI
The archive page includes dropdown filters for:
- Category
- Subcategory
- Year
- Brand
- Event Type
- Location

### Filtering Logic
- Filters work in combination (AND logic)
- All filters are optional (empty value means no filter)
- Search box searches across title, brand, location, and event type
- Category and subcategory filters work independently

## Future Enhancements
- Add more archive records with complete category assignments
- Implement category-based navigation/sidebar
- Add category pages/landing pages
- Create category statistics displays
- Add category-specific styling/icons
