// src/components/Home.js
import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
             <header
        className="text-center py-12 text-white rounded-lg shadow-xl transition-transform transform hover:scale-105"
        style={{
          background: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(0,0,0,1) 100%)"
        }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide font-sans">
          Gastroesophageal Reflux Disease (GERD)
        </h1>
        <p className="mt-6 text-xl sm:text-2xl font-medium font-serif">
          Comprehensive Information and Resources
        </p>
        <br />
        <p>- By Shivani Talekar.</p>
        <p>4th year (33)</p>
      </header>

      <main className="mt-6 space-y-8">
        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform  overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b-2 border-blue-300 pb-2">
              Overview
            </h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
              <li>
                Reflux occurs when stomach contents back up into the esophagus
                and/or mouth.
              </li>
              <li>
                It is a normal process in healthy individuals, often occurring
                after meals.
              </li>
              <li>GERD involves symptoms or complications due to reflux.</li>
            </ul>
            <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b-2 border-blue-300 pb-2">
              How GERD Happens
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The esophagus carries food from the mouth to the stomach. The
              lower esophageal sphincter (LES) relaxes to allow food into the
              stomach and closes to prevent backflow. Reflux occurs if the LES
              is weak or remains relaxed too long.
            </p>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform  overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Symptoms of GERD
            </h2>
            <h3 className="text-lg font-medium text-gray-800">
              Typical Symptoms:
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Pain in the upper abdomen</li>
              <li>Burning chest pain</li>
              <li>Food getting stuck (dysphagia)</li>
              <li>Pain upon swallowing (odynophagia)</li>
              <li>Acid or food regurgitation</li>
            </ul>
            <h3 className="text-lg font-medium text-gray-800">
              Atypical Symptoms:
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Persistent sore throat</li>
              <li>Sense of a lump in the throat</li>
              <li>Waking up with a choking sensation</li>
              <li>Chronic cough or new-onset asthma</li>
            </ul>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform  overflow-hidden mt-4">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Image Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="img1.jpg"
                  alt="1"
                  className="w-full h-full object-cover transition-transform transform hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="img2.jpg"
                  alt="2"
                  className="w-full h-full object-cover transition-transform transform hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="img3.jpg"
                  alt="3"
                  className="w-full h-full object-cover transition-transform transform hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform  overflow-hidden mt-4">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Natural History of GERD
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Majority of patients require only symptom control.</li>
              <li>A minority develop serious complications.</li>
            </ul>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform overflow-hidden mt-4">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Potential Complications of GERD
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Severe esophageal inflammation or ulcers</li>
              <li>Esophageal strictures (narrowing)</li>
              <li>Barrett's esophagus</li>
              <li>Esophageal cancer</li>
              <li>Hoarseness</li>
              <li>Pneumonia, leading to potential lung damage</li>
            </ul>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform overflow-hidden mt-4">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Barrett's Esophagus
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                Lining of the esophagus changes to resemble intestinal lining.
              </li>
              <li>Prevalence: 1.6% overall, 2.3% with GERD symptoms.</li>
              <li>
                Risk factors: Male, Caucasian, smoking, hiatal hernia, increased
                visceral fat.
              </li>
            </ul>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform  overflow-hidden mt-4">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Barrett's Esophagus and Esophageal Cancer
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Risk of esophageal cancer increases by 30–125 times.</li>
              <li>Lifetime risk of esophageal cancer: 0.4–0.5% per year.</li>
              <li>Progression rates:</li>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>LGD (Low-Grade Dysplasia): ~1% per year.</li>
                <li>HGD (High-Grade Dysplasia): ~10% per year.</li>
              </ul>
            </ul>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform  overflow-hidden mt-4">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Surveillance for Barrett's Esophagus
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Extensive biopsy during the first endoscopy.</li>
              <li>
                No dysplasia: EGD (Esophagogastroduodenoscopy) every 3–5 years.
              </li>
              <li>LGD: EGD annually or treatment.</li>
              <li>
                HGD: Treatment for individuals with reasonable life expectancy.
              </li>
            </ul>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform  overflow-hidden mt-4">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Treatment of Barrett's Esophagus
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Control acid and inflammation with medication.</li>
              <li>Eradicate Barrett’s tissue using heat or cold methods.</li>
              <li>Remove early cancer endoscopically.</li>
              <li>Advanced cancer: Surgery or chemotherapy/radiation.</li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="trt1.jpg"
                  alt="treat 1"
                  className="w-full h-full object-cover transition-transform transform hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="trt2.jpg"
                  alt="treat 2"
                  className="w-full h-full object-cover transition-transform transform hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="trt3.jpg"
                  alt="treat 3"
                  className="w-full h-full object-cover transition-transform transform hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="trt4.jpg"
                  alt="treat 4"
                  className="w-full h-full object-cover transition-transform transform hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform  overflow-hidden mt-4">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              HALO (Barrx) Device
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Delivers heat to remove Barrett’s tissue.</li>
              <li>
                Recommended for patients with dysplasia or select patients
                without dysplasia.
              </li>
              <li>
                ~90% success rate in eliminating dysplasia and Barrett’s
                esophagus.
              </li>
            </ul>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform  overflow-hidden mt-4">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              When to Seek Medical Care
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Symptoms worsen or are uncontrollable.</li>
              <li>Immediate care for:</li>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Trouble swallowing, choking, or food sticking.</li>
                <li>Unintentional weight loss.</li>
                <li>Chest pain.</li>
                <li>Vomiting blood or black, tarry stools.</li>
              </ul>
            </ul>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform  overflow-hidden mt-4">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Diagnosing GERD
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Clinical history and therapeutic trials.</li>
              <li>Endoscopy.</li>
              <li>PH testing.</li>
              <li>Esophageal manometry.</li>
              <li>Radiology.</li>
            </ul>
          </div>
        </section>

        <section className="relative bg-white p-8 shadow-lg rounded-lg transition-transform transform  overflow-hidden mt-4">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 rounded-lg"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Treatment of GERD
            </h2>
            <h3 className="text-lg font-medium text-gray-800">
              Lifestyle Modifications:
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Lose weight if overweight.</li>
              <li>Raise the head of your bed.</li>
              <li>
                Avoid foods that worsen symptoms (e.g., coffee, chocolate,
                alcohol).
              </li>
              <li>
                Eat small, frequent meals and avoid lying down for 3 hours after
                meals.
              </li>
            </ul>
            <h3 className="text-lg font-medium text-gray-800">Medications:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Antacids for mild, infrequent episodes.</li>
              <li>Antihistamines for mild GERD.</li>
              <li>
                Proton Pump Inhibitors (PPI) as the most effective treatment.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="text-center mt-8 py-4 bg-gray-800 text-white rounded-md">
        <p>© 2024 GERD Information Portal</p>
      </footer>
    </div>
  );
};

export default Home;
