# **Mighty Bear Games Web Developer Technical Test**

This test is meant for web developer applications to Mighty Bear Games.

## **Task**

You will work on a **Video Games Release Tracker**. The project is a **NextJS** project with **Tailwind CSS** installed. The project is bare and only has minimal layout. Your task is to implement as much as the requirements below within the time given to you.

[Please make your own repository and use this one as the template](https://github.com/CharlesABear/web-dev-exam-senior). You can easily do this with the *Use this template* button.

You will be given **5** **hours** to complete as much of the requirements as you can.

## **Evaluation**

Your work will be evaluated according to these factors:

- Code structure
- Understanding the requirements
- Communication of design choices
- Aesthetic sense
- Error handling and monitoring

## **Requirements**

The project is mobile-first and only. We suggest you keep the viewport in mobile dimensions while developing.

### **Components Tree**

Refactor the elements into reusable components.

- [ ]  Implement a realtime countdown display for release dates in game cards
- [ ]  Replace the rating text display with a star rating display in game cards
- [ ]  Display the game tags using visual elements like pills or badges in game cards

### **State Management**

The current implementation passes games data directly as props. This approach needs to be improved for better scalability.

- [ ]  Implement a global state management solution for games data
- [ ]  Ensure proper data flow throughout the component tree

### **Search Functionality**

Implement search functionality.

- [ ]  If the search bar is empty, display all games
- [ ]  If the search bar has value, display only the games whose titles OR description contain the search value
- [ ]  Filter games based on matching titles OR descriptions

### **Tag Filtering**

Implement tag filtering.

- [ ]  Should display all tags of all games as selectable pills
- [ ]  If no tag is selected, display all games
- [ ]  If at least one tag is selected, display only the games that have any of the selected tags
- [ ]  Filter games to show only those matching selected tags

### Server-side search and pagination

You can use either API routes or Server Actions for the backend.

- [ ]  Move over the search logic to the server. The client then needs to call the server with the search parameters to get the matching games.
- [ ]  Add support for pagination and implement pagination in the client. You decide how to implement pagination whether it be infinite scrolling or page number selection.

### **Bonus**

In case you finish all the requirements above with time to spare, please feel free to add your own flare to the project. You can decide which features you think would improve the project and at the same time best showcase your talents.

## **Guidelines**

Please feel free to use AI tools or utility packages off NPM where it makes sense. Although, using packages that come with built-in search, countdown, or star rating components are not advised. Take those requirements as opportunities to showcase how you would implement the components in your on way to help us better assess how you work.

You can message your test examiner any time during the duration of this exam. In fact, communication and asking of questions is encouraged.
