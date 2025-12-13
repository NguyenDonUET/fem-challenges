# Frontend Mentor - Flashcard app

![Design preview for the Flashcard app coding challenge](./preview.jpg)

## Welcome! 👋

## The challenge

Your challenge is to build out this flashcard app and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

#### Flashcard Management

- Create new flashcards with a question, answer, and category
- Edit existing flashcards to update their details
- Delete flashcards they no longer need
- See form validation messages when trying to submit a card without all fields completed
- View all their flashcards in a grid layout
- See flashcard details including question, answer, category, and mastery progress

#### Study Mode

- Study flashcards one at a time in Study Mode
- Click on a flashcard to reveal the answer
- Mark a flashcard as known by clicking "I Know This" to track mastery progress
- Navigate between flashcards using Previous and Next buttons
- See which card they're currently viewing (e.g., "Card 1 of 40")
- Track mastery progress for each card on a scale of 0 to 5
- Reset progress on a flashcard to start learning it again

#### Filtering & Organization

- Filter flashcards by selecting one or multiple categories
- See the number of cards in each category within the filter dropdown
- Hide mastered cards to focus on cards that still need practice
- Shuffle flashcards to randomize the study order

#### Statistics & Progress

- View study statistics showing total cards, mastered, in progress, and not started counts

#### UI & Navigation

- Toggle between Study Mode and All Cards views
- Load more flashcards when viewing the full card list with more than 12 cards
- See a toast message when a card is created, updated, or deleted
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Navigate the entire app using only their keyboard

### Data Model

A `data.json` file is provided for the flashcard data. Each flashcard object has the following structure:

```json
{
  "id": "fc001",
  "question": "What does HTML stand for?",
  "answer": "HyperText Markup Language",
  "category": "Web Development",
  "knownCount": 0
}
```

| Property     | Type   | Description                                                                       |
| ------------ | ------ | --------------------------------------------------------------------------------- |
| `id`         | string | Unique identifier for each flashcard                                              |
| `question`   | string | The question displayed on the front of the card                                   |
| `answer`     | string | The answer revealed when the card is flipped                                      |
| `category`   | string | The category used for filtering cards                                             |
| `knownCount` | number | Mastery progress from 0-5. Cards with `knownCount` of 5 are considered "mastered" |

### Mastery Progress System

The mastery system helps users track their learning progress:

- Each card starts at `knownCount: 0`
- Clicking "I Know This" increments the `knownCount` by 1 (maximum of 5)
- Clicking "Reset Progress" sets the `knownCount` back to 0
- Statistics categories:
  - **Not Started**: `knownCount` is 0
  - **In Progress**: `knownCount` is 1-4
  - **Mastered**: `knownCount` is 5

### Data Persistence

Flashcard data should persist across browser sessions. When users create, edit, or delete cards, or update their mastery progress, these changes should be saved and restored when they revisit the app.

For a front-end only solution, you can use `localStorage` to store the data. Alternatively, this project could be built as a full-stack application with a database and API to handle data persistence.

### Expected Behaviors

- **Card flip**: Clicking a flashcard in Study Mode should reveal the answer with an animation
- **Toast notifications**: Display feedback messages when cards are created, updated, or deleted. Toasts should auto-dismiss after a few seconds
- **Category filter**: Multiple categories can be selected simultaneously. Each category option displays the count of cards in that category. Selecting "All Categories" clears any active filters
- **Shuffle**: Randomizes the order of the currently filtered set of cards
- **Load More**: In All Cards view, display 12 cards initially with a "Load More" button to reveal additional cards in batches

### Form Validation

- All fields (question, answer, category) are required
- Display validation errors when attempting to submit an incomplete form

### Modal Behavior

- Close modal when clicking the overlay or pressing Escape
- Show a confirmation dialog before deleting a card

### Accessibility

- Ensure keyboard navigation works for all interactive elements
- Manage focus appropriately when opening and closing modals
- Provide screen reader announcements for dynamic content changes (e.g., card flips, toast notifications)
