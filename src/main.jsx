import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/e-plantShopping/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
