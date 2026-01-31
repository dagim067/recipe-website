// ===== RECIPES.JS - Recipes page functionality =====

document.addEventListener('DOMContentLoaded', function() {
    console.log('Recipes page loaded');
    
    // ===== SAMPLE RECIPES DATA =====
    let recipes = [
        {
            id: 1,
            title: "Creamy Garlic Pasta",
            category: "dinner",
            time: 20,
            ingredients: [
                "200g pasta",
                "3 cloves garlic, minced",
                "1 cup heavy cream",
                "1/2 cup grated Parmesan",
                "2 tbsp butter",
                "Salt and pepper to taste",
                "Fresh parsley for garnish"
            ],
            instructions: [
                "Cook pasta according to package directions.",
                "In a large pan, melt butter over medium heat.",
                "Add minced garlic and sauté until fragrant (1-2 minutes).",
                "Pour in heavy cream and bring to a simmer.",
                "Stir in Parmesan cheese until melted and creamy.",
                "Drain pasta and add to the sauce, tossing to coat.",
                "Season with salt and pepper.",
                "Garnish with fresh parsley and serve immediately."
            ],
            image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            saved: false
        },
        {
            id: 2,
            title: "Avocado Salad",
            category: "lunch",
            time: 15,
            ingredients: [
                "2 ripe avocados",
                "1 cup cherry tomatoes, halved",
                "1/2 red onion, thinly sliced",
                "1 cucumber, diced",
                "Juice of 1 lime",
                "2 tbsp olive oil",
                "Fresh cilantro",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Cut avocados in half, remove pit, and dice.",
                "In a large bowl, combine avocado, tomatoes, red onion, and cucumber.",
                "In a small bowl, whisk together lime juice, olive oil, salt, and pepper.",
                "Pour dressing over salad and toss gently.",
                "Garnish with fresh cilantro.",
                "Serve immediately or chill for 30 minutes."
            ],
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            saved: true
        },
        {
            id: 3,
            title: "Blueberry Pancakes",
            category: "breakfast",
            time: 25,
            ingredients: [
                "1 cup all-purpose flour",
                "2 tbsp sugar",
                "2 tsp baking powder",
                "1/2 tsp salt",
                "1 cup milk",
                "1 large egg",
                "2 tbsp melted butter",
                "1 cup fresh blueberries",
                "Maple syrup for serving"
            ],
            instructions: [
                "In a bowl, mix flour, sugar, baking powder, and salt.",
                "In another bowl, whisk milk, egg, and melted butter.",
                "Combine wet and dry ingredients, mixing until just combined.",
                "Gently fold in blueberries.",
                "Heat a non-stick pan over medium heat.",
                "Pour 1/4 cup batter for each pancake.",
                "Cook until bubbles form, then flip and cook until golden.",
                "Serve warm with maple syrup."
            ],
            image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            saved: false
        },
        {
            id: 4,
            title: "Chocolate Chip Cookies",
            category: "dessert",
            time: 30,
            ingredients: [
                "2 1/4 cups all-purpose flour",
                "1 tsp baking soda",
                "1 tsp salt",
                "1 cup butter, softened",
                "3/4 cup granulated sugar",
                "3/4 cup brown sugar",
                "2 large eggs",
                "2 tsp vanilla extract",
                "2 cups chocolate chips"
            ],
            instructions: [
                "Preheat oven to 375°F (190°C).",
                "In a bowl, whisk flour, baking soda, and salt.",
                "In another bowl, cream butter and both sugars until fluffy.",
                "Beat in eggs one at a time, then add vanilla.",
                "Gradually mix in dry ingredients.",
                "Stir in chocolate chips.",
                "Drop rounded tablespoons onto baking sheets.",
                "Bake for 9-11 minutes until golden.",
                "Cool on wire racks."
            ],
            image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            saved: false
        },
        {
            id: 5,
            title: "Vegetable Stir Fry",
            category: ["dinner", "vegetarian"],
            time: 25,
            ingredients: [
                "2 tbsp vegetable oil",
                "1 onion, sliced",
                "2 bell peppers, sliced",
                "2 carrots, julienned",
                "1 cup broccoli florets",
                "1 cup snap peas",
                "3 cloves garlic, minced",
                "1 tbsp ginger, grated",
                "1/4 cup soy sauce",
                "2 tbsp honey",
                "1 tbsp sesame oil",
                "Cooked rice for serving"
            ],
            instructions: [
                "Heat oil in a wok or large pan over high heat.",
                "Add onion and cook for 2 minutes.",
                "Add carrots and broccoli, cook for 3 minutes.",
                "Add bell peppers, snap peas, garlic, and ginger.",
                "Cook for another 3-4 minutes until crisp-tender.",
                "In a small bowl, mix soy sauce, honey, and sesame oil.",
                "Pour sauce over vegetables and toss to coat.",
                "Serve immediately over cooked rice."
            ],
            image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            saved: true
        },
        {
            id: 6,
            title: "Fruit Smoothie Bowl",
            category: "breakfast",
            time: 10,
            ingredients: [
                "2 frozen bananas",
                "1 cup frozen mixed berries",
                "1/2 cup Greek yogurt",
                "1/4 cup milk or almond milk",
                "Toppings: sliced banana, berries, granola, chia seeds, coconut flakes"
            ],
            instructions: [
                "In a blender, combine frozen bananas, berries, yogurt, and milk.",
                "Blend until smooth and creamy.",
                "Pour into a bowl.",
                "Arrange toppings on top.",
                "Enjoy immediately with a spoon."
            ],
            image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            saved: false
        }
    ];
    
    // ===== DOM ELEMENTS =====
    const recipesGrid = document.getElementById('recipes-grid');
    const searchInput = document.getElementById('search-input');
    const clearSearch = document.getElementById('clear-search');
    const recipeModal = document.getElementById('recipe-modal');
    const detailsModal = document.getElementById('details-modal');
    const addRecipeBtn = document.getElementById('add-recipe-btn');
    const recipeForm = document.getElementById('recipe-form');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const recipeCount = document.getElementById('recipe-count');
    const noResults = document.getElementById('no-results');
    const viewSavedBtn = document.getElementById('view-saved');
    
    // ===== DEBUG: Check if elements exist =====
    console.log('recipesGrid:', recipesGrid);
    console.log('searchInput:', searchInput);
    console.log('recipeCount:', recipeCount);
    console.log('Initial recipes:', recipes.length);
    
    // ===== LOAD RECIPES FROM LOCALSTORAGE =====
    function loadRecipesFromStorage() {
        try {
            const savedRecipes = localStorage.getItem('recipebook_recipes');
            if (savedRecipes) {
                const parsed = JSON.parse(savedRecipes);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    recipes = parsed;
                    console.log('Loaded', recipes.length, 'recipes from localStorage');
                }
            }
        } catch (error) {
            console.error('Error loading recipes from localStorage:', error);
        }
    }
    
    // ===== SAVE RECIPES TO LOCALSTORAGE =====
       // ===== SAVE RECIPES TO LOCALSTORAGE =====
    function saveRecipesToStorage() {
        try {
            localStorage.setItem('recipebook_recipes', JSON.stringify(recipes));
            console.log('Saved', recipes.length, 'recipes to localStorage');
            return true;
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            alert('Error saving recipe. Please try again.');
            return false;
        }
    }
    
    // ===== UPDATE RECIPE COUNT =====
    function updateRecipeCount() {
        console.log('updateRecipeCount called, recipeCount:', recipeCount);
        if (recipeCount) {
            recipeCount.textContent = recipes.length;
            console.log('Updated count to:', recipes.length);
        }
    }
    
    // ===== RENDER RECIPES =====
    function renderRecipes(recipesToRender) {
        console.log('renderRecipes called with', recipesToRender ? recipesToRender.length : 0, 'recipes');
        
        if (!recipesGrid) {
            console.error('recipesGrid element not found!');
            return;
        }
        
        recipesGrid.innerHTML = '';
        
        if (!recipesToRender || recipesToRender.length === 0) {
            console.log('No recipes to render');
            if (noResults) {
                noResults.style.display = 'block';
                noResults.innerHTML = `
                    <i class="fas fa-search fa-3x"></i>
                    <h3>No recipes found</h3>
                    <p>Try a different search or add a new recipe!</p>
                `;
            }
            recipesGrid.style.display = 'none';
            return;
        }
        
        if (noResults) noResults.style.display = 'none';
        recipesGrid.style.display = 'grid';
        
        recipesToRender.forEach(function(recipe) {
            const recipeCard = createRecipeCard(recipe);
            recipesGrid.appendChild(recipeCard);
        });
        
        console.log('Rendered', recipesToRender.length, 'recipe cards');
    }
    
    // ===== CREATE RECIPE CARD =====
    function createRecipeCard(recipe) {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.dataset.id = recipe.id;
        
        // Get category display text
        let categoryText = Array.isArray(recipe.category) ? recipe.category[0] : recipe.category;
        categoryText = categoryText ? categoryText.charAt(0).toUpperCase() + categoryText.slice(1) : 'Uncategorized';
        
        // Get first 3 ingredients for preview
        const ingredientsPreview = recipe.ingredients.slice(0, 3).map(function(ing) {
            return ing.length > 30 ? ing.substring(0, 30) + '...' : ing;
        }).join(', ');
        
        card.innerHTML = `
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" style="width:100%; height:200px; object-fit:cover;">
                <span class="recipe-time"><i class="far fa-clock"></i> ${recipe.time} min</span>
                <button class="quick-save-btn ${recipe.saved ? 'saved' : ''}" data-id="${recipe.id}" style="
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    background: rgba(255,255,255,0.9);
                    border: none;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    color: ${recipe.saved ? '#e74c3c' : '#666'};
                ">
                    <i class="${recipe.saved ? 'fas' : 'far'} fa-bookmark"></i>
                </button>
            </div>
            <div class="recipe-content" style="padding: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                    <h3 style="margin: 0; flex: 1;">${recipe.title}</h3>
                    <span style="background: #e8f6f3; color: #1abc9c; padding: 3px 10px; border-radius: 15px; font-size: 0.8rem; font-weight: 600;">
                        ${categoryText}
                    </span>
                </div>
                <p style="color: #666; margin-bottom: 15px; font-size: 0.95rem;">${ingredientsPreview}${recipe.ingredients.length > 3 ? '...' : ''}</p>
                <div style="display: flex; gap: 10px;">
                    <button class="view-details-btn" data-id="${recipe.id}" style="
                        flex: 1;
                        background: #3498db;
                        color: white;
                        border: none;
                        padding: 8px 12px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-weight: 500;
                    ">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                    <button class="quick-save-action" data-id="${recipe.id}" style="
                        background: #ecf0f1;
                        color: #2c3e50;
                        border: 2px solid #bdc3c7;
                        padding: 8px 12px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-weight: 500;
                    ">
                        <i class="${recipe.saved ? 'fas' : 'far'} fa-bookmark"></i> ${recipe.saved ? 'Saved' : 'Save'}
                    </button>
                </div>
            </div>
        `;
        
        // Add event listeners
        card.querySelector('.view-details-btn').addEventListener('click', function(e) {
            e.stopPropagation();
            showRecipeDetails(recipe.id);
        });
        
        card.querySelector('.quick-save-btn').addEventListener('click', function(e) {
            e.stopPropagation();
            toggleSaveRecipe(recipe.id);
            // Update button in card
            const saveAction = card.querySelector('.quick-save-action');
            if (saveAction) {
                const isNowSaved = !recipe.saved;
                saveAction.innerHTML = `<i class="${isNowSaved ? 'fas' : 'far'} fa-bookmark"></i> ${isNowSaved ? 'Saved' : 'Save'}`;
            }
        });
        
        card.querySelector('.quick-save-action').addEventListener('click', function(e) {
            e.stopPropagation();
            toggleSaveRecipe(recipe.id);
            // Update both buttons
            const quickSaveBtn = card.querySelector('.quick-save-btn');
            const saveAction = card.querySelector('.quick-save-action');
            const isNowSaved = !recipe.saved;
            
            if (quickSaveBtn) {
                quickSaveBtn.innerHTML = `<i class="${isNowSaved ? 'fas' : 'far'} fa-bookmark"></i>`;
                quickSaveBtn.style.color = isNowSaved ? '#e74c3c' : '#666';
                quickSaveBtn.classList.toggle('saved', isNowSaved);
            }
            
            if (saveAction) {
                saveAction.innerHTML = `<i class="${isNowSaved ? 'fas' : 'far'} fa-bookmark"></i> ${isNowSaved ? 'Saved' : 'Save'}`;
            }
        });
        
        return card;
    }
    
    // ===== SHOW RECIPE DETAILS =====
    function showRecipeDetails(recipeId) {
        const recipe = recipes.find(function(r) { return r.id === recipeId; });
        if (!recipe) return;
        
        // Create modal
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            padding: 20px;
        `;
        
        modal.innerHTML = `
            <div style="
                background: white;
                border-radius: 15px;
                max-width: 800px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
            ">
                <div style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px;
                    border-bottom: 1px solid #eee;
                ">
                    <h2 style="margin: 0;">${recipe.title}</h2>
                    <button class="close-details-modal" style="
                        background: none;
                        border: none;
                        font-size: 1.5rem;
                        cursor: pointer;
                        color: #666;
                    ">&times;</button>
                </div>
                
                <div style="padding: 20px;">
                    <div style="display: flex; gap: 15px; margin-bottom: 20px; flex-wrap: wrap;">
                        <span style="background: #e8f6f3; color: #1abc9c; padding: 5px 15px; border-radius: 20px; font-weight: 500;">
                            ${Array.isArray(recipe.category) ? recipe.category.join(', ') : recipe.category}
                        </span>
                        <span style="background: #fef9e7; color: #f39c12; padding: 5px 15px; border-radius: 20px; font-weight: 500;">
                            <i class="far fa-clock"></i> ${recipe.time} minutes
                        </span>
                        <button id="modal-save-btn" style="
                            background: ${recipe.saved ? '#2ecc71' : '#3498db'};
                            color: white;
                            border: none;
                            padding: 5px 15px;
                            border-radius: 20px;
                            cursor: pointer;
                            font-weight: 500;
                            margin-left: auto;
                        ">
                            <i class="${recipe.saved ? 'fas' : 'far'} fa-bookmark"></i> 
                            ${recipe.saved ? 'Saved' : 'Save Recipe'}
                        </button>
                    </div>
                    
                    <img src="${recipe.image}" alt="${recipe.title}" style="
                        width: 100%;
                        height: 300px;
                        object-fit: cover;
                        border-radius: 10px;
                        margin-bottom: 20px;
                    ">
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                        <div>
                            <h3 style="color: #2c3e50; margin-bottom: 15px;">
                                <i class="fas fa-list"></i> Ingredients
                            </h3>
                            <ul style="margin: 0; padding-left: 20px;">
                                ${recipe.ingredients.map(function(ing) { return `<li style="margin-bottom: 8px;">${ing}</li>`; }).join('')}
                            </ul>
                        </div>
                        
                        <div>
                            <h3 style="color: #2c3e50; margin-bottom: 15px;">
                                <i class="fas fa-list-ol"></i> Instructions
                            </h3>
                            <ol style="margin: 0; padding-left: 20px;">
                                ${recipe.instructions.map(function(step, i) { return `<li style="margin-bottom: 10px;">${step}</li>`; }).join('')}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Event listeners for modal
        modal.querySelector('.close-details-modal').addEventListener('click', function() {
            document.body.removeChild(modal);
        });
        
        modal.querySelector('#modal-save-btn').addEventListener('click', function() {
            toggleSaveRecipe(recipeId);
            const btn = modal.querySelector('#modal-save-btn');
            const isNowSaved = !recipe.saved;
            btn.innerHTML = `<i class="${isNowSaved ? 'fas' : 'far'} fa-bookmark"></i> ${isNowSaved ? 'Saved' : 'Save Recipe'}`;
            btn.style.background = isNowSaved ? '#2ecc71' : '#3498db';
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
    
    // ===== TOGGLE SAVE RECIPE =====
    function toggleSaveRecipe(recipeId) {
        const recipeIndex = recipes.findIndex(function(r) { return r.id === recipeId; });
        if (recipeIndex === -1) return;
        
        recipes[recipeIndex].saved = !recipes[recipeIndex].saved;
        saveRecipesToStorage();
        
        // Show notification
        alert(recipes[recipeIndex].saved ? 'Recipe saved!' : 'Recipe removed from saved');
    }
    
    // ===== SEARCH FUNCTIONALITY =====
    function searchRecipes(query) {
        console.log('Searching for:', query);
        
        if (!query || !query.trim()) {
            renderRecipes(recipes);
            return;
        }
        
        const searchTerm = query.toLowerCase().trim();
        const filtered = recipes.filter(function(recipe) {
            return recipe.title.toLowerCase().includes(searchTerm) ||
                   recipe.ingredients.some(function(ing) { return ing.toLowerCase().includes(searchTerm); });
        });
        
        renderRecipes(filtered);
    }
    
    // ===== FILTER RECIPES =====
    function filterRecipes(category) {
        console.log('Filtering by:', category);
        
        // Update active filter button
        filterButtons.forEach(function(btn) {
            btn.classList.toggle('active', btn.dataset.filter === category);
        });
        
        if (category === 'all') {
            renderRecipes(recipes);
            return;
        }
        
        const filtered = recipes.filter(function(recipe) {
            if (Array.isArray(recipe.category)) {
                return recipe.category.includes(category);
            }
            return recipe.category === category;
        });
        
        renderRecipes(filtered);
    }
    
    // ===== VIEW SAVED RECIPES =====
    function viewSavedRecipes() {
        const saved = recipes.filter(function(recipe) { return recipe.saved; });
        renderRecipes(saved);
        alert(`Showing ${saved.length} saved recipes`);
    }
    
    // ===== ADD NEW RECIPE =====
        // ===== ADD NEW RECIPE =====
    function addNewRecipe(formData) {
        console.log('Adding new recipe...');
        
        const newRecipe = {
            id: Date.now(), // Unique ID
            title: formData.get('recipe-title') || 'New Recipe',
            category: formData.get('recipe-category') || 'dinner',
            time: parseInt(formData.get('recipe-time')) || 30,
            ingredients: (formData.get('recipe-ingredients') || '')
                .split('\n')
                .filter(line => line.trim())
                .map(line => line.trim()),
            instructions: (formData.get('recipe-instructions') || '')
                .split('\n')
                .filter(line => line.trim())
                .map(line => line.trim()),
            image: formData.get('recipe-image') || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            saved: false
        };
        
        console.log('New recipe created:', newRecipe);
        
        // Add to beginning of array
        recipes.unshift(newRecipe);
        console.log('Recipes array now has:', recipes.length, 'recipes');
        
        // Save to localStorage
        saveRecipesToStorage();
        
        // Force immediate render
        renderRecipes(recipes);
        
        // Update recipe count
        updateRecipeCount();
        
        // Reset filter to show all recipes
        if (filterButtons.length > 0) {
            filterButtons.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.filter === 'all');
            });
        }
        
        // Show success message
        alert('Recipe added successfully! You should see it at the top of the list.');
        
        return newRecipe;
    }
    
    // ===== EVENT LISTENERS =====
    
    // Search
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            searchRecipes(e.target.value);
        });
    }
    
    if (clearSearch) {
        clearSearch.addEventListener('click', function() {
            if (searchInput) searchInput.value = '';
            searchRecipes('');
        });
    }
    
    // Filters
    if (filterButtons.length > 0) {
        filterButtons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                filterRecipes(btn.dataset.filter);
            });
        });
    }
    
    // View saved recipes
    if (viewSavedBtn) {
        viewSavedBtn.addEventListener('click', viewSavedRecipes);
    }
    
    // Add recipe modal
    if (addRecipeBtn && recipeModal) {
        addRecipeBtn.addEventListener('click', function() {
            recipeModal.style.display = 'flex';
        });
    }
    
    // Close modals
    document.querySelectorAll('.close-modal, .close-details').forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (recipeModal) recipeModal.style.display = 'none';
            if (detailsModal) detailsModal.style.display = 'none';
        });
    });
    
    // Close modals when clicking outside
    [recipeModal, detailsModal].forEach(function(modal) {
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
    });
    
    // Add recipe form
    if (recipeForm) {
        recipeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(recipeForm);
            addNewRecipe(formData);
            recipeForm.reset();
            if (recipeModal) recipeModal.style.display = 'none';
        });
    }
    
    // ===== INITIALIZATION =====
    loadRecipesFromStorage();
    updateRecipeCount();
    renderRecipes(recipes);
    
    console.log('Recipes page fully initialized with', recipes.length, 'recipes');
});