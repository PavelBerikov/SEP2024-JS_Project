# Key-Value List App

This is a simple web application that allows you to add, sort, and delete key-value pairs in a list. The application uses HTML, CSS, and JavaScript to provide interactive functionality.

## Features

- **Add key-value pairs**: The user can input key-value pairs in the format `Key=Value`.
- **Sort by key**: Allows sorting the key-value pairs alphabetically by key.
- **Sort by value**: Allows sorting the key-value pairs numerically by value.
- **Delete selected items**: Allows selecting and removing specific key-value pairs.
- **Input validation**: Ensures the key-value pairs are in the correct format (`Key=Value` with alphanumeric characters, spaces, and equal sign `=`).

## Project Structure
```
├── index.html               # Main HTML file
├── main.js                 # JavaScript file with all functionality
├── /style                   # Directory for CSS files
│   ├── index.css            # Base styles
│   ├── index_min_width-1024px.css # Styles for screen widths >= 1024px
│   ├── index_769px-1023px.css   # Styles for screen widths 769px-1023px
│   ├── index_max_width-768px.css  # Styles for screen widths <= 768px
└── README.md                # This file
```
## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:
2. Open the `index.html` file in your browser to view the app.

## How to Use

1. **Add a key-value pair**:
- Enter a key-value pair in the `Name : Value` format (e.g., `key=value`).
- Click "Add" to add the pair to the list. If the input is invalid, an error message will appear.

2. **Sort the list**:
- Click "Sort by Name" to sort the pairs alphabetically by key.
- Click "Sort by Value" to sort the pairs numerically by value.

3. **Delete items**:
- Click on a key-value pair to mark it for deletion (it will be highlighted).
- Click "Delete" to remove the selected items from the list.

## Validation Rules

- Only alphanumeric characters, spaces, and the `=` symbol are allowed in the key-value input field.
- The format must be: `Key=Value`. Both key and value should be non-empty.

## Future Improvements

- Add the ability to store the list in local storage so that it persists after page refresh.
- Provide better error handling for invalid inputs.
- Support more advanced sorting options (e.g., descending order).
