const addFavoritesHandler = async (event) => {
    event.preventDefault();

    try {
        const card = event.target;
        const park_code = card.getAttribute('data-parkCode');
        const name = card.getAttribute('data-name');
        const states = card.getAttribute('data-states');
        const response = await fetch(`/api/parks`, {
            method: 'POST',
            body: JSON.stringify({ park_code, name, states }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.ok) {
            console.log('added parks');
        } else {
            alert(response.statusText);
        }

        const addUserPark = await fetch(`/api/userpark/`, {
            method: 'POST',
            body: JSON.stringify({park_code}),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (addUserPark.ok) {
            console.log('add User-Park Relationship');
        } else {
            alert(addUserPark.statusText);
        }

    } catch (error) {
        console.log(error);
    }
}
let addFavoritesBtnEl = document.querySelectorAll('.add-favorites');
addFavoritesBtnEl.forEach((btn) => btn.addEventListener('click', addFavoritesHandler));