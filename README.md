# Week 1 Summary

### Day 1: Introduction to Version Control and GitHub
- Learned what version control is and why it is essential for managing and tracking changes in code. Explored how it facilitates collaboration and prevents errors by keeping a history of modifications.
- Created repositories on GitHub, understanding the importance of repository structure for organizing projects.
- Practiced creating and editing files directly on GitHub, learning how to work efficiently in a version-controlled environment.
- Created commits to document changes, ensuring each step in development is tracked and reversible.
- Learned what Markdown is and how it can be used to write formatted documents in a lightweight and easy-to-read syntax.
- Practiced writing Markdown for documentation, including headings, lists, links, and code snippets.

---

### Day 2: Working with the Terminal, Shell, and HTML
- Learned what the terminal and shell are, gaining a better understanding of how they provide a powerful interface for interacting with the operating system.
- Practiced navigating the file system using the shell and terminal, becoming comfortable with commands like `cd`, `ls`, `mkdir`, `rm`, and `mv` to manage directories and files efficiently.
- Explored how to create, rename, remove, and move files and folders, which is essential for organizing development projects.
- Understood the basics of client/server communication, grasping how the web operates through HTTP requests and responses between browsers and servers.
- Began writing HTML code, focusing on building the structure of web pages using appropriate tags and elements.
- Learned about the importance of **semantic HTML** for improving accessibility and search engine optimization (SEO) by using meaningful tags like `<header>`, `<footer>`, and `<section>`.

**Files for Day 2:**
- `html-and-the-web/div-salad`
- `html-and-the-web/personal-website`

---

### Day 3: CSS Fundamentals and Flexbox
- Gained a general understanding of the purpose of CSS, which is used to control the presentation of web pages by applying styles to HTML elements.
- Learned that CSS stands for **Cascading Style Sheets** and explored how the "cascading" aspect allows for flexibility in style inheritance and specificity.
- Studied the fundamentals of CSS, including syntax, selectors, and the box model, which defines the space around elements through margins, padding, borders, and content areas.
- Explored the differences between inline and block elements and learned how to use them effectively for layout purposes.
- Practiced linking external stylesheets to HTML documents, understanding the importance of keeping styles separate from structure.
- Deepened knowledge of **Flexbox**, a powerful layout module that allows for flexible and responsive design by distributing elements within a container.
- Learned how Flexbox can adapt items to fill available space in their container, making the layout more responsive across different screen sizes.
- Explored the most important Flexbox properties, such as `justify-content`, `align-items`, and `flex-direction`, to control alignment and distribution.
- Understood the distinction between the **main axis** and **cross axis** in Flexbox, and how these axes can change depending on layout direction.

**Files for Day 3:**
- `css-basics/pink-box`
- `css-basics/pseudo-park`
- `css-basics/combined-users`
- `css-basics/button-styles`
- `css-flexbox/navigation`
- `css-flexbox/profile`

---

### Day 4: CSS Positioning and z-index
- Explored different types of positioning in CSS: **static**, **relative**, **absolute**, and **fixed**. Learned how each type affects the placement of elements within a web page.
- Understood how to define element positions using properties like `top`, `right`, `bottom`, and `left`, and how these properties work differently depending on the positioning type.
- Learned the concept of **z-index**, which controls the stacking order of elements, making it possible to create layered layouts where elements overlap.
- Practiced using positioning for complex layouts, ensuring a solid grasp of how to control the placement of content within a webpage.
- Self-directed learning included here.

**Files for Day 4:**
- `css-positioning/absolute-position`
- `css-positioning/layout-with-position`

---

### Day 5: Advanced Git and Collaboration
- Learned how to use version control locally, creating repositories and managing commits on the local machine. This step is crucial for offline development and local testing before sharing changes with others.
- Understood the different file states in Git: **untracked**, **modified**, **staged**, and **committed**, and how to manage these states using Git commands like `git status`, `git add`, and `git commit`.
- Practiced synchronizing local repositories with remote repositories (on GitHub), using `git push` to upload local changes and `git pull` to retrieve the latest updates from the remote repository.
- Explored Git branches, understanding how they allow for parallel development and feature isolation. Learned how to create and switch between branches using `git checkout` and `git branch`.
- Learned how to create **pull requests** on GitHub to propose changes, review code, and collaborate with team members.
- Understood how branches and pull requests facilitate collaboration, allowing multiple contributors to work on different features or fixes simultaneously, while maintaining a clean main branch.

**Files for Day 5:**
- `session-notebook`

---
# Week 2 Summary

### Day 1: Recap Project and Web Accessibility
- Uploaded a recap project, including a quiz app, on Vercel.
- Learned what **accessibility** is and why it is crucial for web developers. Accessibility ensures that websites and applications are usable by people with diverse abilities.
- Understood the benefits of **semantic HTML**, which improves accessibility, search engine optimization, and code clarity.
- Explored how to make code more accessible by using semantic tags and appropriate ARIA attributes, providing alternative text for images, and ensuring keyboard navigation works smoothly.

**Files for Day 1:**
- `recap project`

---

### Day 2: JavaScript Basics and CSS Organization
- Learned how to connect a JavaScript file to an HTML document using the `<script>` tag.
- Logged output to the console using `console.log()` for debugging and testing purposes.
- Selected HTML elements using `querySelector`, allowing dynamic interactions with the DOM.
- Added, removed, and toggled CSS classes on user interaction using `addEventListener` to respond to events like clicks.
- Understood how the browser resolves conflicting CSS rules, focusing on **CSS cascade** and **specificity**.
- Structured CSS to improve maintainability and readability by using proper organization.
- Organized and named CSS classes following the **BEM method** (Block, Element, Modifier) for a scalable and reusable CSS codebase.
- Created and reused **Custom CSS properties** (also known as CSS variables) to simplify the management of style values.

**Files for Day 2:**
- `js-basics/console-methods`
- `js-basics/survey-error-fixing`
- `js-basics/dark-mode`
- `css-structure/taco-truck`

---

### Day 3: JavaScript Variables, Conditions, and Operators
- Learned the difference between `var`, `let`, and `const`, and when to use each one for managing variables in JavaScript.
- Understood JavaScript’s different **data types**, including numbers, strings, and booleans.
- Practiced basic math operations to manipulate numeric data.
- Controlled the program flow using **conditions** (if/else statements) to execute different code paths based on certain criteria.
- Explored **booleans** and the concept of **truthy** and **falsy** values, which determine logical flow in JavaScript.
- Worked with **comparison** and **logical operators** to evaluate conditions and combine logical expressions.
- Wrote **ternary expressions** for concise conditional statements.

**Files for Day 3:**
- `js-variables-and-numbers/social-media-post`
- `js-variables-and-numbers/simple-calculator`
- `js-conditions-and-booleans/statements`
- `js-conditions-and-booleans/truthy-and-falsy`
- `js-conditions-and-booleans/teenager-check`

---

### Day 4: Responsive Design and Mobile First
- Gained a solid understanding of the concept of **responsive design**, ensuring that websites look and function well on various devices and screen sizes.
- Understood why developers follow a **mobile-first** approach, starting design and CSS from the smallest screens and progressively enhancing for larger screens.
- Learned about responsive units such as percentages, `em`, `rem`, and `vw/vh` to build flexible layouts.
- Explored **media queries** to apply styles conditionally based on the screen size, enabling responsive designs that adapt to different devices.
- Engaged in **self-directed learning**, further researching responsive design techniques.

**Files for Day 4:**
- `css-responsive/playground`
- `css-responsive/responsive-website`

---

### Day 5: JavaScript Functions and Forms
- Understood the purpose of functions: reusable blocks of code that can be called to perform specific tasks.
- Practiced writing custom functions using **function declarations**, naming them appropriately for clarity and purpose.
- Worked with function **parameters** and **arguments**, passing data into functions to make them dynamic.
- Used **default values** for function parameters to handle cases when no argument is passed.
- Called functions and understood how to work with **variable scope** (local vs global).
- Returned values from functions and used the return keyword effectively.
- Gained a solid understanding of the purpose and structure of **HTML forms**, focusing on creating user-friendly and accessible forms.
- Learned about the most common types of form fields (text, password, email, etc.).
- Built **usable and accessible forms**, ensuring form elements have appropriate labels and error messages.
- Understood the different types of form buttons (`submit`, `reset`, `button`) and their respective roles.
- Explored **client-side form validation**, using both HTML attributes and JavaScript to ensure correct data entry before submission.

**Files for Day 5:**
- `js-functions/basic-functions`
- `js-functions/functions-with-parameters`
- `js-functions/functions-with-parameters-extra`
- `js-functions/dom-manipulation`
- `js-functions/basic-calculations`
- `html-forms/personal-profile-form`
- `html-forms/finding-a11y-errors`
- `html-forms/form-validation`
