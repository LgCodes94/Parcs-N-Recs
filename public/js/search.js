const searchFormHandler = async (event) => {
    event.preventDefault();
    const searchState = document.querySelector('#search-state').value.trim();

    try {
        const response = await fetch(`/search/${searchState}`);
        if (response.ok) {
            // If successful, redirect the browser to the search page
            document.location.replace(`/search/${searchState}`);
        } else {
            alert(response.statusText);
        }
    } catch (error) {
        console.log(error);
    }
}
let searchBtnEl = document.querySelector('.search-form');
searchBtnEl.addEventListener('click', searchFormHandler);
