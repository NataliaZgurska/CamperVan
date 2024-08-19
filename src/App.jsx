import { Route, Routes } from 'react-router-dom';
import Modal from 'react-modal';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllAdverts, getCamperById } from './redux/campers/campersOperation';
import { addFavorite } from './redux/favorites';
import FiltersPage from './pages/FiltersPage';

Modal.setAppElement('#root');

function App() {
  //*********  Favorites from LS **********
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(getAllAdverts());

    const storedItems = JSON.parse(localStorage.getItem('favorites')) || [];

    if (storedItems.length > 0) {
      const fetchCampers = async () => {
        try {
          const campersData = await Promise.all(
            storedItems.map(id => getCamperById(id))
          );
          campersData.forEach(item => {
            dispatch(addFavorite(item));
          });
        } catch (err) {
          setError(err.message);
        }
      };
      fetchCampers();
    }
  }, []);
  console.log('error: ', error);
  // *******************

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          {/* <Route path="/filters" element={<FiltersPage />} /> */}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
