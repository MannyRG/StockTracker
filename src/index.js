import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { QueryClient, QueryClientProvider} from "react-query";
import {BrowserRouter as Router} from "react-router-dom";



const queryClient = new QueryClient()
ReactDOM.render(
  <Router >
    <QueryClientProvider client={queryClient }>
        <App />
    </QueryClientProvider>
  </Router>
  ,
  document.getElementById('root')
);

