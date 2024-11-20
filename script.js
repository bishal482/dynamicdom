// Button 1: Change Background Color
document.getElementById('change-bg-color').addEventListener('click', () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});

// Button 2: Add New Item to List
document.getElementById('add-item').addEventListener('click', () => {
    const list = document.getElementById('dynamic-list');
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
});

// Button 3: Toggle Visibility of Paragraph
document.getElementById('toggle-paragraph').addEventListener('click', () => {
    const paragraph = document.getElementById('main-text');
    paragraph.classList.toggle('hidden');
});

// Button 4: Animate Box
document.getElementById('animate-box').addEventListener('click', () => {
    const box = document.getElementById('box');
    box.classList.toggle('animated');
});

// Button 5: Update Text Content
document.getElementById('update-text').addEventListener('click', () => {
    const paragraph = document.getElementById('main-text');
    paragraph.textContent = 'The paragraph content has been updated dynamically!';
});
