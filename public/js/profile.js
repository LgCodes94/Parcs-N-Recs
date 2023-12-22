const delFavoritesHandler = async (event) => {
  event.preventDefault();

  try {
    const card = event.target;
    const park_code = card.getAttribute('data-parkCode');
    console.log(park_code);
    const response = await fetch(`/api/users/parks/${park_code}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      console.log('deleted park');
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }

  } catch (error) {
    console.log(error);
  }
}
let delFavoritesBtnEl = document.querySelectorAll('.delete-favorites');
delFavoritesBtnEl.forEach((btn) => btn.addEventListener('click', delFavoritesHandler));
