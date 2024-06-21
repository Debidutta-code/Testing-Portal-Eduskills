import React, { useState, useEffect } from 'react';
import './AllCategoryComp.css';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { PuffLoader } from 'react-spinners';

const AllCategoryComp = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Initially true to show loading spinner

    // Demo data for categories
    const categories = [
        {
            id: 1,
            section: "C++ Programming",
            code: "EDUS0001",
            image: "https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg",
            num_questions: 200
        },
        {
            id: 2,
            section: "Probability and Statistics",
            code: "EDUS0002",
            image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            num_questions: 150
        },
        {
            id: 3,
            section: "Data Visualization using Python and machine learning using python",
            code: "EDUS0003",
            image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            num_questions: 100
        },
        {
            id: 4,
            section: "Reasoning",
            code: "EDUS0004",
            image: "https://images.pexels.com/photos/19825313/pexels-photo-19825313/free-photo-of-scrabble-letters-spelling-the-word-mind-on-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            num_questions: 120
        },
        {
            id: 5,
            section: "Coding",
            code: "EDUS0005",
            image: "https://images.pexels.com/photos/1543899/pexels-photo-1543899.jpeg",
            num_questions: 300
        },
        {
            id: 6,
            section: "Math",
            code: "EDUS0006",
            image: "https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg",
            num_questions: 300
        },
        {
            id: 7,
            section: "Verbal",
            code: "EDUS0007",
            image: "https://images.pexels.com/photos/1543899/pexels-photo-1543899.jpeg",
            num_questions: 120
        },
        {
            id: 8,
            section: "Coding",
            code: "EDUS0008",
            image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            num_questions: 250
        },
        {
            id: 9,
            section: "Reasoning",
            code: "EDUS0009",
            image: "https://images.pexels.com/photos/6148109/pexels-photo-6148109.jpeg",
            num_questions: 180
        },
        {
            id: 10,
            section: "Math",
            code: "EDUS0010",
            image: "https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg",
            num_questions: 200
        },
        {
            id: 11,
            section: "Chemistry",
            code: "EDUS0011",
            image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            num_questions: 200
        },
    ];

    // useEffect to set filteredCategories initially and show loading spinner
    useEffect(() => {
        const timer = setTimeout(() => {
            setFilteredCategories(categories);
            setIsLoading(false); // Hide the loading spinner after 3 seconds
        }, 3000);

        // Cleanup the timer if the component is unmounted
        return () => clearTimeout(timer);
    }, []);

    const handleSearchButtonClick = () => {
        if (isSearchVisible) {
            handleClearSearch();
        }
        setIsSearchVisible(!isSearchVisible);
        if (!isSearchVisible) {
            setFilteredCategories(categories); // Reset filtered categories to show all
        }
    };

    const handleSearchChange = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        filterCategories(searchTerm);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        setFilteredCategories(categories); // Reset to show all categories
    };

    const filterCategories = (searchTerm) => {
        const filtered = categories.filter(
            (category) =>
                category.section.toLowerCase().includes(searchTerm.toLowerCase()) ||
                category.code.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCategories(filtered);
    };

    return (
        <div className="all-category-component-main-container">
            <div className='all-category-component-main-search-input-container'>
                <button className={`search-button ${isSearchVisible ? 'rotated' : ''}`} onClick={handleSearchButtonClick}>
                    {isSearchVisible ? <FaTimes /> : <FaSearch />}
                </button>
                <input
                    type='text'
                    placeholder='Search category'
                    className={`search-input ${isSearchVisible ? 'visible' : ''}`}
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div className='all-category-all-sections-list-main-container'>
                {
                    isLoading ? (
                        <PuffLoader
                            color="#00000099"
                            size={70}
                        />
                    ) : (
                        <div className='all-category-all-section-list'>
                            {filteredCategories.map(category => (
                                <div key={category.id} className='category-card'>
                                    <div className='category-card-image-container'>
                                        <img src={category.image} alt={`Category ${category.id}`} />
                                    </div>
                                    <div className='category-card-content'>
                                        <h3>{category.section}</h3>
                                        <p><b>Section Code: {category.code}</b></p>
                                        <p>Total Questions: {category.num_questions}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default AllCategoryComp;
