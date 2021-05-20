//import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import Navigation from "./app/navigations/Navigation";
import { firebaseApp } from "./app/utils/firebase"

export default function App() {
  return <Navigation />;
}