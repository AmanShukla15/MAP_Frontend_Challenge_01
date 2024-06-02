## SampleCard1 Component

The `SampleCard1` component displays a set of cards with information. It includes features like loading animation, card content, and navigation buttons for smooth scrolling.

### Code Explanation

1. **Import Statements:**
   - We import necessary dependencies such as `React`, `useState`, `useEffect`, and FontAwesome icons.
   - `cardsData` contains an array of card information (you can replace it with your actual data).
   - `imageData` holds the image source for the cards.

2. **State and Loading Animation:**
   - We use the `useState` hook to manage the loading state (`isLoading`).
   - A timer is set to simulate loading (3 seconds in this case).
   - While loading, an animation placeholder is displayed.

3. **Card Container and Smooth Scrolling:**
   - We create a reference (`cardContainerRef`) to the card container element using the `useRef` hook.
   - The container has a horizontal scroll (`overflow-x-auto`) to display cards side by side.
   - The `scrollToNextCard` and `scrollToPrevCard` functions scroll the container left or right by a fixed amount (300 pixels in this example).
   - Navigation buttons ("<" and ">") trigger the scroll functions.

4. **Card Rendering:**
   - We map through `cardsData` and render individual cards.
   - Each card has a title, description, price, and other relevant information.
   - The image is displayed as the card background.

5. **Styling and Customization:**
   - You can customize the styling (e.g., adjust card dimensions, colors, fonts) according to your design.
   - Modify the scroll distance, animation duration, and other parameters as needed.

### Usage
1. Replace `cardsData` with your actual data.
2. Adjust styling and layout to match your design.
3. Test the component to ensure smooth scrolling and correct rendering.
