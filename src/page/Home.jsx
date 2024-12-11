// src/components/Home.js
import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="text-center py-6 bg-blue-600 text-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold">Gastroesophageal Reflux Disease (GERD)</h1>
        <p className="text-sm mt-2">By Hazar Michael, M.D. | June 14, 2012</p>
      </header>

      <main className="mt-6 space-y-8">
        <section className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Overview</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Reflux occurs when stomach contents back up into the esophagus and/or mouth.</li>
            <li>It is a normal process in healthy individuals, often occurring after meals.</li>
            <li>GERD involves symptoms or complications due to reflux.</li>
          </ul>
        </section>

        <section className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">How GERD Happens</h2>
          <p className="text-gray-700">
            The esophagus carries food from the mouth to the stomach. The lower esophageal
            sphincter (LES) relaxes to allow food into the stomach and closes to prevent
            backflow. Reflux occurs if the LES is weak or remains relaxed too long.
          </p>
        </section>

        <section className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Symptoms of GERD</h2>
          <h3 className="text-lg font-medium text-gray-800">Typical Symptoms:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Pain in the upper abdomen</li>
            <li>Burning chest pain</li>
            <li>Food getting stuck (dysphagia)</li>
            <li>Pain upon swallowing (odynophagia)</li>
            <li>Acid or food regurgitation</li>
          </ul>
          <h3 className="text-lg font-medium text-gray-800">Atypical Symptoms:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Persistent sore throat</li>
            <li>Sense of a lump in the throat</li>
            <li>Waking up with a choking sensation</li>
            <li>Chronic cough or new-onset asthma</li>
          </ul>
        </section>

        <section className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Treatment of GERD</h2>
          <h3 className="text-lg font-medium text-gray-800">Lifestyle Modifications:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Lose weight if overweight.</li>
            <li>Raise the head of your bed.</li>
            <li>Avoid foods that worsen symptoms (e.g., coffee, chocolate, alcohol).</li>
            <li>Eat small, frequent meals and avoid lying down for 3 hours after meals.</li>
          </ul>
          <h3 className="text-lg font-medium text-gray-800">Medications:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Antacids for mild, infrequent episodes.</li>
            <li>Antihistamines for mild GERD.</li>
            <li>Proton Pump Inhibitors (PPI) as the most effective treatment.</li>
          </ul>
        </section>
      </main>

      <footer className="text-center mt-8 py-4 bg-gray-800 text-white rounded-md">
        <p>© 2024 GERD Information Portal</p>
      </footer>
    </div>
  );
};

export default Home;
