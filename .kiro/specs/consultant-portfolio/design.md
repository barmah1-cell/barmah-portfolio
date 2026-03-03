# Design Document: Consultant Portfolio Website

## Overview

The consultant portfolio website is a single-page React application built with Tailwind CSS. The architecture follows a component-based approach with a clear separation between presentational components, data models, and styling. The application uses a mobile-first responsive design strategy to ensure optimal viewing across all devices.

The website consists of five main sections (Hero, Services, Research, Testimonials, Contact) rendered in a single-page layout. Each section is implemented as a self-contained React component with its own styling and logic.

## Architecture

### High-Level Structure

```
App (Root Component)
├── Header/Navigation (optional sticky nav)
├── HeroSection
├── ServicesSection
├── ResearchSection
├── TestimonialsSection
├── ContactSection
└── Footer
```

### Technology Stack

- **React 18+**: Component-based UI framework
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Hooks**: For state management (useState, useEffect)
- **Responsive Design**: Mobile-first approach using Tailwind breakpoints (sm, md, lg, xl)

### Design Patterns

1. **Component Composition**: Each section is a reusable component
2. **Props-based Configuration**: Components receive data via props
3. **Separation of Concerns**: Presentational components separate from data
4. **Mobile-First Responsive**: Base styles for mobile, enhanced for larger screens

## Components and Interfaces

### App Component

The root component that orchestrates all sections.

```typescript
interface AppProps {}

function App(): JSX.Element
```

**Responsibilities:**
- Render all section components in order
- Manage global state if needed
- Provide data to child components

### HeroSection Component

```typescript
interface HeroSectionProps {
  headline: string;
  ctaText: string;
  onCtaClick: () => void;
}

function HeroSection(props: HeroSectionProps): JSX.Element
```

**Responsibilities:**
- Display headline prominently
- Render CTA button
- Handle CTA click to scroll to contact section
- Apply navy blue background with gold/teal accents

**Layout:**
- Full viewport height on desktop
- Centered content with flexbox
- Large typography for headline
- Prominent CTA button with hover effects

### ServicesSection Component

```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Icon identifier or SVG path
}

interface ServicesSectionProps {
  services: Service[];
}

function ServicesSection(props: ServicesSectionProps): JSX.Element
```

**Responsibilities:**
- Display service cards in a responsive grid
- Render icons/illustrations for each service
- Maintain consistent card styling

**Layout:**
- Mobile: Single column (1 card per row)
- Tablet: Two columns
- Desktop: Three columns (one per service)
- Cards with padding, shadow, and hover effects

### ServiceCard Component

```typescript
interface ServiceCardProps {
  service: Service;
}

function ServiceCard(props: ServiceCardProps): JSX.Element
```

**Responsibilities:**
- Display individual service information
- Render icon and text content
- Apply consistent styling

### ResearchSection Component

```typescript
interface ResearchItem {
  id: string;
  title: string;
  summary: string;
  pdfUrl?: string; // Optional PDF link
  imageUrl?: string; // Optional thumbnail
}

interface ResearchSectionProps {
  researchItems: ResearchItem[];
}

function ResearchSection(props: ResearchSectionProps): JSX.Element
```

**Responsibilities:**
- Display research items in a responsive grid
- Handle placeholder content
- Provide visual hierarchy

**Layout:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- Cards with consistent spacing and styling

### ResearchCard Component

```typescript
interface ResearchCardProps {
  item: ResearchItem;
}

function ResearchCard(props: ResearchCardProps): JSX.Element
```

**Responsibilities:**
- Display research item title and summary
- Show thumbnail or placeholder image
- Provide link to PDF if available

### TestimonialsSection Component

```typescript
interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientTitle: string;
  companyName: string;
  companyLogo?: string; // Optional logo URL
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

function TestimonialsSection(props: TestimonialsSectionProps): JSX.Element
```

**Responsibilities:**
- Display testimonials in a visually appealing layout
- Rotate or display multiple testimonials
- Maintain readability and credibility

**Layout:**
- Mobile: Single testimonial per view or stacked
- Desktop: Multiple testimonials in a row or carousel
- Quote styling with proper attribution

### TestimonialCard Component

```typescript
interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard(props: TestimonialCardProps): JSX.Element
```

**Responsibilities:**
- Display quote with quotation marks styling
- Show client name, title, and company
- Display company logo if available

### ContactSection Component

```typescript
interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface ContactSectionProps {
  onSubmit?: (data: ContactFormData) => void;
}

function ContactSection(props: ContactSectionProps): JSX.Element
```

**Responsibilities:**
- Render contact form with all required fields
- Manage form state
- Validate input (basic client-side validation)
- Handle form submission (UI only for now)

**Layout:**
- Centered form with max-width
- Vertical field layout
- Clear labels and input styling
- Submit button with consistent styling

### ContactForm Component

```typescript
interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
}

function ContactForm(props: ContactFormProps): JSX.Element
```

**Responsibilities:**
- Manage form state with useState
- Handle input changes
- Validate fields before submission
- Display validation errors if needed

## Data Models

### Service Model

```typescript
interface Service {
  id: string;          // Unique identifier
  title: string;       // Service name (e.g., "Strategic Advisory")
  description: string; // Brief description of the service
  icon: string;        // Icon identifier or SVG path
}
```

**Example Data:**
```typescript
const services: Service[] = [
  {
    id: "strategic-advisory",
    title: "Strategic Advisory",
    description: "Comprehensive strategic planning and execution support for sustainable growth",
    icon: "chart-line"
  },
  {
    id: "executive-training",
    title: "Executive Training & Workshops",
    description: "Customized leadership development programs and interactive workshops",
    icon: "users"
  },
  {
    id: "research-analysis",
    title: "In-Depth Research & Analysis",
    description: "Data-driven insights and market research to inform strategic decisions",
    icon: "search"
  }
];
```

### ResearchItem Model

```typescript
interface ResearchItem {
  id: string;          // Unique identifier
  title: string;       // Research title
  summary: string;     // Brief summary or abstract
  pdfUrl?: string;     // Optional PDF download link
  imageUrl?: string;   // Optional thumbnail image
}
```

**Example Data:**
```typescript
const researchItems: ResearchItem[] = [
  {
    id: "supply-chain-resilience",
    title: "The Future of Supply Chain Resilience",
    summary: "An analysis of emerging trends and strategies for building robust supply chains",
    imageUrl: "/images/research-placeholder-1.jpg"
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation in Traditional Industries",
    summary: "Case studies on successful digital adoption in manufacturing and logistics",
    imageUrl: "/images/research-placeholder-2.jpg"
  },
  {
    id: "leadership-excellence",
    title: "Leadership Excellence in Times of Change",
    summary: "Research on adaptive leadership strategies for organizational transformation",
    imageUrl: "/images/research-placeholder-3.jpg"
  }
];
```

### Testimonial Model

```typescript
interface Testimonial {
  id: string;          // Unique identifier
  quote: string;       // Testimonial text
  clientName: string;  // Client's full name
  clientTitle: string; // Client's job title
  companyName: string; // Company name
  companyLogo?: string; // Optional company logo URL
}
```

**Example Data:**
```typescript
const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "Dr. Armah's strategic insights transformed our operational efficiency and positioned us for sustainable growth.",
    clientName: "Jane Smith",
    clientTitle: "CEO",
    companyName: "Global Logistics Inc.",
    companyLogo: "/images/logo-placeholder-1.png"
  },
  {
    id: "testimonial-2",
    quote: "The executive training program delivered measurable improvements in our leadership team's performance.",
    clientName: "John Doe",
    clientTitle: "VP of Operations",
    companyName: "Manufacturing Solutions Ltd.",
    companyLogo: "/images/logo-placeholder-2.png"
  }
];
```

### ContactFormData Model

```typescript
interface ContactFormData {
  name: string;     // Contact's full name
  email: string;    // Contact's email address
  company: string;  // Contact's company name
  message: string;  // Inquiry message
}
```

## Styling and Design System

### Color Palette

```css
/* Tailwind CSS Custom Colors */
colors: {
  primary: {
    navy: '#1e3a8a',      // Navy blue (primary)
    navyDark: '#1e293b',  // Darker navy for contrast
  },
  accent: {
    gold: '#f59e0b',      // Gold accent
    teal: '#14b8a6',      // Teal accent (alternative)
  },
  neutral: {
    white: '#ffffff',
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      600: '#4b5563',
      800: '#1f2937',
    }
  }
}
```

### Typography

- **Headings**: Font family: Inter or similar sans-serif
  - H1: 3xl-4xl (mobile), 5xl-6xl (desktop)
  - H2: 2xl-3xl (mobile), 4xl (desktop)
  - H3: xl-2xl
- **Body**: Font size: base (16px), line-height: relaxed
- **Font Weights**: 
  - Regular: 400
  - Medium: 500
  - Semibold: 600
  - Bold: 700

### Spacing System

Using Tailwind's spacing scale:
- Section padding: py-16 (mobile), py-24 (desktop)
- Container max-width: max-w-7xl
- Grid gaps: gap-6 (mobile), gap-8 (desktop)
- Card padding: p-6 (mobile), p-8 (desktop)

### Responsive Breakpoints

```
sm: 640px   // Small devices
md: 768px   // Tablets
lg: 1024px  // Desktops
xl: 1280px  // Large desktops
```

### Component Styling Patterns

**Cards:**
- Background: white
- Border: subtle gray or none
- Shadow: shadow-md on hover, shadow-sm default
- Border radius: rounded-lg
- Transition: smooth hover effects

**Buttons:**
- Primary CTA: Navy background, white text, gold/teal hover
- Padding: px-8 py-3
- Border radius: rounded-md
- Font weight: semibold
- Hover: scale slightly, change background

**Forms:**
- Input fields: border-gray-300, focus:border-primary
- Labels: text-sm, font-medium, text-gray-700
- Spacing: space-y-4 between fields
- Error states: border-red-500, text-red-600



## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Research items display all required fields

*For any* research item provided to the ResearchSection component, the rendered output should contain the item's title.

**Validates: Requirements 3.2**

### Property 2: Testimonials display all required fields

*For any* testimonial provided to the TestimonialsSection component, the rendered output should contain the quote text, client name, and client title.

**Validates: Requirements 4.1, 4.2, 4.3**

### Property 3: Form fields have associated labels

*For any* form field in the ContactSection, there should be an associated label element that clearly identifies the field's purpose.

**Validates: Requirements 5.2**

### Property 4: Responsive layouts adapt to viewport width

*For any* viewport width, the Portfolio_Website should apply the appropriate layout: mobile styles for widths < 768px, tablet styles for widths 768-1024px, and desktop styles for widths > 1024px.

**Validates: Requirements 6.1, 6.2, 6.3**

## Error Handling

### Component Error Boundaries

Each major section component should be wrapped in an error boundary to prevent a single component failure from crashing the entire application.

**Error Boundary Strategy:**
- Wrap each section (Hero, Services, Research, Testimonials, Contact) in an error boundary
- Display a fallback UI when a component fails
- Log errors to console for debugging

### Form Validation

The ContactForm component should implement client-side validation:

**Validation Rules:**
- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format (regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
- **Company**: Required, minimum 2 characters
- **Message**: Required, minimum 10 characters

**Validation Behavior:**
- Validate on blur (when user leaves a field)
- Display error messages below invalid fields
- Disable submit button until all fields are valid
- Show success message after submission (UI only)

### Missing Data Handling

Components should gracefully handle missing or incomplete data:

**Services Section:**
- If no services provided, display a message: "Services information coming soon"
- If a service is missing an icon, use a default placeholder icon

**Research Section:**
- If no research items provided, display a message: "Research publications coming soon"
- If an item is missing an image, use a placeholder image

**Testimonials Section:**
- If no testimonials provided, hide the section or display a message
- If a testimonial is missing a logo, display company name only

### Responsive Design Fallbacks

If viewport detection fails or JavaScript is disabled:

- Apply mobile-first base styles
- Ensure content is still readable and accessible
- Use semantic HTML for proper fallback rendering

## Testing Strategy

### Dual Testing Approach

The testing strategy combines unit tests for specific examples and edge cases with property-based tests for universal properties across all inputs.

**Unit Tests:**
- Verify specific component rendering with known data
- Test user interactions (button clicks, form submissions)
- Test responsive layout at specific breakpoints
- Test error states and validation messages
- Test edge cases (empty data, missing fields)

**Property-Based Tests:**
- Verify that all data fields are rendered for any valid input
- Verify responsive behavior across a range of viewport widths
- Verify form validation for various input combinations

### Testing Tools

**Unit Testing:**
- **Framework**: Jest or Vitest
- **React Testing**: React Testing Library
- **Assertions**: expect() from testing framework

**Property-Based Testing:**
- **Library**: fast-check (JavaScript/TypeScript property-based testing library)
- **Configuration**: Minimum 100 iterations per property test
- **Tagging**: Each property test must reference its design document property

### Test Organization

```
src/
├── components/
│   ├── HeroSection/
│   │   ├── HeroSection.tsx
│   │   ├── HeroSection.test.tsx
│   │   └── HeroSection.properties.test.tsx
│   ├── ServicesSection/
│   │   ├── ServicesSection.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ServicesSection.test.tsx
│   │   └── ServicesSection.properties.test.tsx
│   ├── ResearchSection/
│   │   ├── ResearchSection.tsx
│   │   ├── ResearchCard.tsx
│   │   ├── ResearchSection.test.tsx
│   │   └── ResearchSection.properties.test.tsx
│   ├── TestimonialsSection/
│   │   ├── TestimonialsSection.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── TestimonialsSection.test.tsx
│   │   └── TestimonialsSection.properties.test.tsx
│   └── ContactSection/
│       ├── ContactSection.tsx
│       ├── ContactForm.tsx
│       ├── ContactSection.test.tsx
│       └── ContactSection.properties.test.tsx
```

### Unit Test Examples

**HeroSection Tests:**
- Renders headline text correctly
- Renders CTA button with correct text
- Calls onCtaClick when button is clicked
- Applies correct styling classes

**ServicesSection Tests:**
- Renders all three service cards
- Displays correct service titles and descriptions
- Applies mobile layout at 640px viewport
- Applies desktop layout at 1024px viewport

**ContactForm Tests:**
- Renders all four form fields
- Displays validation errors for invalid inputs
- Prevents submission with empty fields
- Calls onSubmit with correct data

### Property-Based Test Configuration

Each property test should:
1. Run minimum 100 iterations
2. Use fast-check generators for input data
3. Include a comment tag: `// Feature: consultant-portfolio, Property N: [property text]`
4. Reference the specific design document property

**Example Property Test Structure:**

```typescript
import fc from 'fast-check';

// Feature: consultant-portfolio, Property 2: Testimonials display all required fields
test('testimonials display all required fields', () => {
  fc.assert(
    fc.property(
      fc.record({
        id: fc.string(),
        quote: fc.string({ minLength: 1 }),
        clientName: fc.string({ minLength: 1 }),
        clientTitle: fc.string({ minLength: 1 }),
        companyName: fc.string({ minLength: 1 }),
      }),
      (testimonial) => {
        const { container } = render(
          <TestimonialsSection testimonials={[testimonial]} />
        );
        
        expect(container.textContent).toContain(testimonial.quote);
        expect(container.textContent).toContain(testimonial.clientName);
        expect(container.textContent).toContain(testimonial.clientTitle);
      }
    ),
    { numRuns: 100 }
  );
});
```

### Integration Testing

While not part of the initial implementation, integration tests should verify:
- All sections render together without conflicts
- Smooth scrolling between sections works
- CTA button correctly scrolls to contact section
- Overall page layout and flow

### Accessibility Testing

Manual accessibility checks should include:
- Keyboard navigation works for all interactive elements
- Screen reader compatibility (semantic HTML)
- Color contrast meets WCAG AA standards
- Focus indicators are visible
- Form labels are properly associated with inputs

### Visual Regression Testing (Optional)

For maintaining design consistency:
- Use tools like Percy or Chromatic
- Capture screenshots at different breakpoints
- Compare against baseline images
- Flag visual changes for review
